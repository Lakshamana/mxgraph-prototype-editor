const fs = require('fs')
const mxgraph = require('mxgraph')({
  mxImageBasePath: "./src/images",
  mxBasePath: "./src"
})

function parseXmlToGraph(xmlDoc, graph) {
  const cells = xmlDoc.documentElement.children[0].children
  const parent = graph.getDefaultParent()
  for (let i = 0; i < cells.length; i++) {
    const cellAttrs = cells[i].attributes
    if(cellAttrs.vertex) {
      const vertexName = cellAttrs.value.value
      const vertexId = Number(cellAttrs.id.value) 
      const geom = cells[i].children[0].attributes
      const xPos = Number(geom.x.value)
      const yPos = Number(geom.y.value)
      const height = Number(geom.height.value)
      const width = Number(geom.width.value)
      graph.insertVertex(parent, vertexId, vertexName, xPos, yPos, width, height)
    } else if(cellAttrs.edge) {
      const edgeName = cellAttrs.value.value
      const edgeId = Number(cellAttrs.id.value)
      const source = Number(cellAttrs.source.value)
      const target = Number(cellAttrs.target.value)
      graph.insertEdge(parent, edgeId, edgeName,
        graph.getModel().getCell(source), 
        graph.getModel().getCell(target)
      )
    }
  }
}

function main(container) {
  if (!mxgraph.mxClient.isBrowserSupported()) { 
    mxgraph.mxUtils.error('Browser is not supported!', 200, false)
  } else {
    mxgraph.mxEvent.disableContextMenu(container)
    const graph = new mxgraph.mxGraph(container)
    const layout = new mxgraph.mxHierarchicalLayout(graph)
    graph.getModel().beginUpdate()
    try {
      //deal with xml
      const xmlstr = fs.readFileSync('src/resources/diag.xml', 'utf-8')
      const doc = mxgraph.mxUtils.parseXml(xmlstr)
      parseXmlToGraph(doc, graph)
      
      const parent = graph.getDefaultParent()
      //execute layout
      layout.execute(parent)
    } finally {
      graph.getModel().endUpdate()
    }
  }
}

window.onload = main(document.getElementById('graphContainer'))