const mxgraph = require('mxgraph')({
  mxImageBasePath: './src/images',
  mxBasePath: ''
})

// Program starts here. Creates a sample graph in the
// DOM node with the specified ID. This function is invoked
// from the onLoad event handler of the document (see below).
function main(container) {
  // Checks if the browser is supported
  if (!mxgraph.mxClient.isBrowserSupported()) {
    // Displays an error message if the browser is not supported.
    mxgraph.mxUtils.error('Browser is not supported!', 200, false)
  } else {
    // Disables the built-in context menu
    mxgraph.mxEvent.disableContextMenu(container)

    // Creates the graph inside the given container
    const graph = new mxgraph.mxGraph(container)

    //Adds a new HierarquicalLayout
    const layout = mxgraph.mxHi

    // Adds cells to the model in a single step
    graph.getModel().beginUpdate()
    try {
      // Gets the default parent for inserting new cells. This
      // is normally the first child of the root (ie. layer 0).
      const parent = graph.getDefaultParent()
    } finally {
      // Updates the display
      graph.getModel().endUpdate()
    }
  }
}

window.onload = main(document.getElementById('graphContainer'))
