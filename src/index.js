const mxgraph = require('mxgraph')({
  mxImageBasePath: 'src/images',
  mxBasePath: 'src'
})
const fs = require('fs')

function main(container) {
  // Checks if the browser is supported
  if (!mxgraph.mxClient.isBrowserSupported()) {
    // Displays an error message if the browser is not supported.
    mxgraph.mxUtils.error('Browser is not supported!', 200, false)
  } else {
    // Disables the built-in context menu
    mxgraph.mxEvent.disableContextMenu(container)

    // Creates the graph inside the given container
    var graph = new mxgraph.mxGraph(container)

    //Adds a new HierarquicalLayout
    var layout = new mxgraph.mxHierarchicalLayout(graph)
    
    // Adds cells to the model in a mxgraph prototype editor single step
    graph.getModel().beginUpdate()
    try {
      //deal with xml
      var xmlstr = fs.readFileSync('src/resources/diag.xml', 'utf-8')
      console.log(`%${xmlstr}%`)
      var doc = mxgraph.mxUtils.parseXml(xmlstr)
      var codec = new mxgraph.mxCodec(doc)
      const x = codec.decode(doc.documentElement, graph.getModel())
      console.log(x)
      
      var parent = graph.getDefaultParent()
      //execute layout
      layout.execute(parent)
    } finally {
      // Updates the display
      graph.getModel().endUpdate()
    }
  }
}

window.onload = function() {
  main(document.getElementById('graphContainer'))
}
