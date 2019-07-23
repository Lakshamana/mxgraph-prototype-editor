<template>
  <div class="columns is-centered">
    <div class="column is-10">
      <table border="0" width="730px">
        <tr>
          <td id="toolbar" valign="top">
            <!-- Toolbar Here -->
          </td>
          <td valign="top" ref="graphContainer" id="graphContainer">
            <div id="graph" tabindex="-1">
              <!-- Graph Here -->
              <center ref="splash" id="splash">
                <img src="../assets/loading.gif" />
              </center>
            </div>
            <textarea ref="xml" id="xml"></textarea>
          </td>
        </tr>
      </table>
      <span class="source-ipt">
        <input ref="source" id="source" type="checkbox" />Source
      </span>
    </div>
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
  mxEvent,
  mxEffects,
  mxEditor,
  mxObjectCodec,
  mxPanningManager,
  mxVertexHandler,
  mxGraphHandler,
  mxGuide,
  mxEdgeHandler,
  mxConnectionHandler,
  mxXmlRequest,
  mxImageExport,
  mxSvgCanvas2D,
  mxConstants,
  mxXmlCanvas2D,
  mxImage,
  mxResources,
  mxStylesheet
} = new mxGraphFactory()

export default {
  name: 'Editor',

  data() {
    return {
      editor: undefined
    }
  },

  created() {
    addToWindow('mxGeometry', mxGeometry)
    addToWindow('mxGraph', mxGraph)
    addToWindow('mxCodec', mxCodec)
    addToWindow('mxGraphModel', mxGraphModel)
    addToWindow('mxUtils', mxUtils)
    addToWindow('mxClient', mxClient)
    addToWindow('mxEvent', mxEvent)
    addToWindow('mxEffects', mxEffects)
    addToWindow('mxEditor', mxEditor)
    addToWindow('mxObjectCodec', mxObjectCodec)
    addToWindow('mxPanningManager', mxPanningManager)
    addToWindow('mxVertexHandler', mxVertexHandler)
    addToWindow('mxGraphHandler', mxGraphHandler)
    addToWindow('mxGuide', mxGuide)
    addToWindow('mxEdgeHandler', mxEdgeHandler)
    addToWindow('mxConnectionHandler', mxConnectionHandler)
    addToWindow('mxXmlRequest', mxXmlRequest)
    addToWindow('mxImageExport', mxImageExport)
    addToWindow('mxSvgCanvas2D', mxSvgCanvas2D)
    addToWindow('mxConstants', mxConstants)
    addToWindow('mxXmlCanvas2D', mxXmlCanvas2D)
    addToWindow('mxImage', mxImage)
    addToWindow('mxResources', mxResources)
    addToWindow('mxStylesheet', mxStylesheet)
    addToWindow('onInit', this.onInit)
  },

  mounted() {
    this.editor = this.createEditor('https://raw.githubusercontent.com/Lakshamana/mxgraph-prototype-editor/master/src/components/config/editorconfig.xml')
  },

  beforeDestroy() {
    window.onbeforeunload = () => mxResources.get('changesLost')
  },

  methods: {
    createEditor(config) {
      let editor = null

      const hideSplash = () => {
        // Fades-out the splash screen
        const splash = this.$refs.splash

        if (splash != null) {
          try {
            mxEvent.release(splash)
            mxEffects.fadeOut(splash, 300, true)
          } catch (e) {
            this.loading = false
          }
        }
      }

      try {
        if (!mxClient.isBrowserSupported()) {
          mxUtils.error('Browser is not supported!', 200, false)
        } else {
          mxObjectCodec.allowEval = true
          const node = mxUtils.load(config).getDocumentElement()
          editor = new mxEditor(node)
          console.log(editor)
          mxObjectCodec.allowEval = false

          // Adds active border for panning inside the container
          editor.graph.createPanningManager = function() {
            const pm = new mxPanningManager(this)
            pm.border = 30
            return pm
          }

          editor.graph.allowAutoPanning = true
          editor.graph.timerAutoScroll = true

          // Updates the window title after opening new files
          const title = document.title
          const funct = sender => {
            document.title = title + ' - ' + sender.getTitle()
          }

          editor.addListener(mxEvent.OPEN, funct)

          // Prints the current root in the window title if the
          // current root of the graph changes (drilling).
          editor.addListener(mxEvent.ROOT, funct)
          funct(editor)

          // Displays version in statusbar
          editor.setStatus('mxGraph ' + mxClient.VERSION)

          // Shows the application
          hideSplash()
        }
      } catch (e) {
        hideSplash()
        // Shows an error message if the editor cannot start
        mxUtils.alert('Cannot start application: ' + e.message)
        throw e // for debugging
      }
      return editor
    },

    onInit(editor) {
      // Enables rotation handle
      mxVertexHandler.prototype.rotationEnabled = true

      // Enables guides
      mxGraphHandler.prototype.guidesEnabled = true

      // Alt disables guides
      mxGuide.prototype.isEnabledForEvent = evt => {
        return !mxEvent.isAltDown(evt)
      }

      // Enables snapping waypoints to terminals
      mxEdgeHandler.prototype.snapToTerminals = true

      // Defines an icon for creating new connections in the connection handler.
      // This will automatically disable the highlighting of the source vertex.
      mxConnectionHandler.prototype.connectImage = new mxImage(
        '../assets/connector.gif',
        16,
        16
      )

      // Enables connections in the graph and disables
      // reset of zoom and translate on root change
      // (ie. switch between XML and graphical mode).
      editor.graph.setConnectable(true)

      // Clones the source if new connection has no target
      editor.graph.connectionHandler.setCreateTarget(true)

      // Updates the title if the root changes
      const title = document.getElementById('title')

      if (title != null) {
        const f = sender => {
          title.innerHTML = 'mxDraw - ' + sender.getTitle()
        }

        editor.addListener(mxEvent.ROOT, f)
        f(editor)
      }

      // Changes the zoom on mouseWheel events
      mxEvent.addMouseWheelListener((evt, up) => {
        if (!mxEvent.isConsumed(evt)) {
          if (up) {
            editor.execute('zoomIn')
          } else {
            editor.execute('zoomOut')
          }
          mxEvent.consume(evt)
        }
      })

      // Defines a new action to switch between
      // XML and graphical display
      const textNode = this.$refs.xml
      const graphNode = this.$refs.graphContainer
      const sourceInput = this.$refs.source
      sourceInput.checked = false

      const funct = function(editor) {
        if (sourceInput.checked) {
          graphNode.style.display = 'none'
          textNode.style.display = 'inline'

          const enc = new mxCodec()
          const node = enc.encode(editor.graph.getModel())

          textNode.value = mxUtils.getPrettyXml(node)
          textNode.originalValue = textNode.value
          textNode.focus()
        } else {
          graphNode.style.display = ''

          if (textNode.value !== textNode.originalValue) {
            const doc = mxUtils.parseXml(textNode.value)
            const dec = new mxCodec(doc)
            dec.decode(doc.documentElement, editor.graph.getModel())
          }

          textNode.originalValue = null

          // Makes sure nothing is selected in IE
          if (mxClient.IS_IE) {
            mxUtils.clearSelection()
          }

          textNode.style.display = 'none'

          // Moves the focus back to the graph
          editor.graph.container.focus()
        }
      }

      editor.addAction('switchView', funct)

      // Defines a new action to switch between
      // XML and graphical display
      mxEvent.addListener(sourceInput, 'click', function() {
        editor.execute('switchView')
      })

      // Only adds image and SVG export if backend is available
      // NOTE: The old image export in mxEditor is not used, the urlImage is used for the new export.
      if (editor.urlImage != null) {
        // Client-side code for image export
        const exportImage = editor => {
          const graph = editor.graph
          const scale = graph.view.scale
          const bounds = graph.getGraphBounds()

          // New image export
          const xmlDoc = mxUtils.createXmlDocument()
          const root = xmlDoc.createElement('output')
          xmlDoc.appendChild(root)

          // Renders graph. Offset will be multiplied with state's scale when painting state.
          const xmlCanvas = new mxXmlCanvas2D(root)
          xmlCanvas.translate(
            Math.floor(1 / scale - bounds.x),
            Math.floor(1 / scale - bounds.y)
          )
          xmlCanvas.scale(scale)

          const imgExport = new mxImageExport()
          imgExport.drawState(
            graph.getView().getState(graph.model.root),
            xmlCanvas
          )

          // Puts request data together
          const w = Math.ceil(bounds.width * scale + 2)
          const h = Math.ceil(bounds.height * scale + 2)
          const xml = mxUtils.getXml(root)

          // Requests image if request is valid
          if (w > 0 && h > 0) {
            const name = 'export.png'
            const format = 'png'
            const bg = '&bg=#FFFFFF'

            new mxXmlRequest(
              editor.urlImage,
              'filename=' +
                name +
                '&format=' +
                format +
                bg +
                '&w=' +
                w +
                '&h=' +
                h +
                '&xml=' +
                encodeURIComponent(xml)
            ).simulate(document, '_blank')
          }
        }

        editor.addAction('exportImage', exportImage)

        // Client-side code for SVG export
        const exportSvg = function(editor) {
          const graph = editor.graph
          const scale = graph.view.scale
          const bounds = graph.getGraphBounds()

          // Prepares SVG document that holds the output
          const svgDoc = mxUtils.createXmlDocument()
          const root =
            svgDoc.createElementNS != null
              ? svgDoc.createElementNS(mxConstants.NS_SVG, 'svg')
              : svgDoc.createElement('svg')

          if (root.style != null) {
            root.style.backgroundColor = '#FFFFFF'
          } else {
            root.setAttribute('style', 'background-color:#FFFFFF')
          }

          if (svgDoc.createElementNS == null) {
            root.setAttribute('xmlns', mxConstants.NS_SVG)
          }

          root.setAttribute(
            'width',
            Math.ceil(bounds.width * scale + 2) + 'px'
          )
          root.setAttribute(
            'height',
            Math.ceil(bounds.height * scale + 2) + 'px'
          )
          root.setAttribute('xmlns:xlink', mxConstants.NS_XLINK)
          root.setAttribute('version', '1.1')

          // Adds group for anti-aliasing via transform
          const group =
            svgDoc.createElementNS != null
              ? svgDoc.createElementNS(mxConstants.NS_SVG, 'g')
              : svgDoc.createElement('g')
          group.setAttribute('transform', 'translate(0.5,0.5)')
          root.appendChild(group)
          svgDoc.appendChild(root)

          // Renders graph. Offset will be multiplied with state's scale when painting state.
          const svgCanvas = new mxSvgCanvas2D(group)
          svgCanvas.translate(
            Math.floor(1 / scale - bounds.x),
            Math.floor(1 / scale - bounds.y)
          )
          svgCanvas.scale(scale)

          const imgExport = new mxImageExport()
          imgExport.drawState(
            graph.getView().getState(graph.model.root),
            svgCanvas
          )

          const name = 'export.svg'
          const xml = encodeURIComponent(mxUtils.getXml(root))

          new mxXmlRequest(
            editor.urlEcho,
            'filename=' + name + '&format=svg' + '&xml=' + xml
          ).simulate(document, '_blank')
        }
        editor.addAction('exportSvg', exportSvg)
      }
    }
  }
}
</script>

<style scoped>
#graphContainer {
  border: 1px solid black;
}

#graph {
  position: relative;
  height: 480px;
  width: 684px;
  overflow: hidden;
  cursor: default;
}

#toolbar {
  width: 16px;
  padding-left: 20px;
}

#xml {
  height: 480px;
  width: 684px;
  display: none;
  border-style: none;
}

#splash {
  padding-top: 230px;
}

.source-ipt {
  float: right;
  padding-right: 36px;
}
</style>
