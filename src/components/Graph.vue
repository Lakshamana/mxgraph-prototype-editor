<template>
  <div class="container">
    <h1>Graph!</h1>
    <div ref="container" id="graphContainer"></div>
  </div>
</template>

<script>
import { addToWindow } from '../service/window.service'
import mxGraphFactory from 'mxgraph'
const {
  mxGeometry,
  mxGraph,
  mxCodec,
  mxGraphModel,
  mxUtils,
  mxClient,
  mxEvent
} = new mxGraphFactory()

export default {
  name: 'Graph',

  created() {
    addToWindow('mxGeometry', mxGeometry)
    addToWindow('mxGraph', mxGraph)
    addToWindow('mxGraphModel', mxGraphModel)
    // addToWindow('mxClient', mxClient)
    // addToWindow('mxEvent', mxEvent)
  },

  mounted() {
    this.renderGraph(this.$refs.container)
  },

  methods: {
    renderGraph(container) {
      if (!mxClient.isBrowserSupported()) {
        mxUtils.error('Browser is not supported!', 200, false)
      } else {
        mxEvent.disableContextMenu(container)
        const xml = `
        <mxGraphModel>
          <root>
            <mxCell id="0" />
            <mxCell id="1" parent="0"/>
            <mxCell id="2" value="Hello," vertex="1" parent="1">
              <mxGeometry x="20" y="20" width="80" height="30" as="geometry" />
            </mxCell>
            <mxCell id="3" value="World!" vertex="1" parent="1">
              <mxGeometry x="200" y="150" width="80" height="30" as="geometry" />
            </mxCell>
            <mxCell id="4" value="" edge="1" source="2" target="3" parent="1">
              <mxGeometry relative="1" as="geometry" />
            </mxCell>
          </root>
        </mxGraphModel>
        `.replace(/\n[ ]*/g, '')
        const graph = new mxGraph(container)
        graph.getModel().beginUpdate()
        try {
          const doc = mxUtils.parseXml(xml)
          const codec = new mxCodec(doc)
          codec.decode(doc.documentElement, graph.getModel())
          console.log(graph.getModel())
        } finally {
          graph.getModel().endUpdate()
        }
      }
    }
  }
}
</script>

<style scoped>
#graphContainer {
  width: 100vh;
  height: 100vh;
  position: relative;
  overflow: hidden;
  border: 1px solid red;
}
</style>
