<template>
  <div class="container is-fullwidth">
    <div class="columns is-centered">
      <div class="column is-12">
        <table class="table">
          <tr>
            <td>
              <div
                id="toolbar"
                ref="toolbar"
              />
            </td>
          </tr>
          <tr>
            <td
              id="graphContainer"
              ref="graphContainer"
              valign="top"
            >
              <div
                id="graph"
                tabindex="-1"
              >
                <center
                  id="splash"
                  ref="splash"
                >
                  <img src="../static/examples/editors/images/loading.gif" />
                </center>
              </div>
              <textarea
                id="xml"
                ref="xml"
              ></textarea>
            </td>
          </tr>
        </table>

        <span class="source-ipt">
          <input
            id="source"
            ref="source"
            type="checkbox"
          />Source
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import { addToWindow } from '../service/window.service'
import { getXml } from '../service/xml.service'

import mxGraphFactory from 'mxgraph-lakshamana'
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
  mxStylesheet,
  mxDefaultToolbar,
  mxToolbar,
  mxMultiplicity
} = new mxGraphFactory()

export default {
  name: 'Editor',
  data () {
    return {
      editor: undefined,
      validatees: {
        normal: {
          targets: ['normal', 'decomposed', 'artifact', 'join', 'branch'],
          constraints: {
            outgoingTo: {
              normal: 1,
              decomposed: 2
            },
            incomingFrom: {
              normal: 1,
              decomposed: 2
            }
          }
        },
        decomposed: {
          targets: ['normal', 'decomposed', 'artifact', 'join', 'branch']
        },
        agent: {
          targets: ['normal', 'decomposed']
        },
        workgroup: {
          targets: ['normal', 'decomposed']
        },
        artifact: {
          targets: ['normal', 'decomposed']
        },
        join: {
          targets: ['normal', 'decomposed', 'join', 'branch']
        },
        branch: {
          targets: ['normal', 'decomposed', 'join', 'branch']
        }
      },
      validators: {
        targets: this.validateTargets,
        constraints: this.validateConstraints
      },
      targetSkip: ['targets'],
      sourceSkip: []
    }
  },

  created () {
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
    addToWindow('mxDefaultToolbar', mxDefaultToolbar)
    addToWindow('mxToolbar', mxToolbar)
    addToWindow('mxMultiplicity', mxMultiplicity)
    addToWindow('onInit', this.onInit)
  },

  mounted () {
    this.editor = this.createEditor(getXml())
  },

  beforeDestroy () {
    window.onbeforeunload = () => mxResources.get('changesLost')
  },

  methods: {
    createEditor (config) {
      let editor = null

      const hideSplash = () => {
        // Fades-out the splash screen
        const splash = this.$refs.splash

        if (splash != null) {
          try {
            mxEvent.release(splash)
            mxEffects.fadeOut(splash, 500, true)
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

          mxEditor.prototype.getToolbar = function () {
            return this.toolbar.toolbar
          }

          const node = mxUtils.parseXml(config).documentElement
          editor = new mxEditor(node)
          mxObjectCodec.allowEval = false

          // Adds active border for panning inside the container
          editor.graph.createPanningManager = function () {
            const pm = new mxPanningManager(this)
            pm.border = 30
            return pm
          }
          editor.graph.allowAutoPanning = false
          editor.graph.timerAutoScroll = true
          editor.validation = true

          editor.graph.multiplicities.push(
            new mxMultiplicity(
              true, 'join', null, null, 0, 1,
              ['normal', 'decomposed', 'join', 'branch'],
              'Join must have at max 1 source node!',
              null
            ),
            new mxMultiplicity(
              false, 'branch', null, null, 0, 1,
              ['normal', 'decomposed', 'join', 'branch'],
              'Branch must have at max 1 target node!',
              null
            )
          )

          // Updates the window title after opening new files
          const title = document.title
          const funct = sender => {
            document.title = title + ' - ' + sender.getTitle()
          }

          editor.addListener(mxEvent.OPEN, funct)

          // Prints the current root in the window title if the
          // current root of the graph changes (drilling).
          // editor.addListener(mxEvent.ROOT, funct)
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

    onInit (editor) {
      // Enables rotation handle
      mxVertexHandler.prototype.rotationEnabled = false

      // Enables guides
      mxGraphHandler.prototype.guidesEnabled = true

      // Alt disables guides
      mxGuide.prototype.isEnabledForEvent = evt => {
        return !mxEvent.isAltDown(evt)
      }

      // Enables snapping waypoints to terminals
      mxEdgeHandler.prototype.snapToTerminals = true

      mxGraph.prototype.setCellsResizable(false)

      // Defines an icon for creating new connections in the connection handler.
      // This will automatically disable the highlighting of the source vertex.
      const HOST = process.env.VUE_APP_HOST
      const IMG_PATH = process.env.VUE_APP_IMG_PATH
      mxConnectionHandler.prototype.connectImage = new mxImage(
        `${HOST}/${IMG_PATH}/connector.gif`,
        16,
        16
      )

      // Enables connections in the graph and disables
      // reset of zoom and translate on root change
      // (ie. switch between XML and graphical mode).
      editor.graph.setConnectable(true)

      // Updates the title if the root changes
      const title = document.getElementById('title')

      if (title != null) {
        const f = sender => {
          title.innerHTML = 'mxDraw - ' + sender.getTitle()
        }
        f(editor)
      }

      // Listens vertexes's connect event
      editor.graph.connectionHandler.addListener(
        mxEvent.CONNECT,
        (sender, evt) => {
          const edge = evt.getProperty('cell')
          try {
            this.validateConnection(edge)
          } catch (e) {
            alert(`Can't create connection: "${e}"`)
            editor.graph.removeCells([edge], true)
          }
          editor.graph.validateGraph()
          mxEvent.consume(evt)
        }
      )

      editor.graph.addListener(mxEvent.MOVE_CELLS, (sender, evt) => {
        const cell = editor.graph.getSelectionCell()
        let { x, y } = editor.graph.view.getState(cell).origin
        const dx = evt.getProperty('dx')
        const dy = evt.getProperty('dy')
        x += dx
        y += dy
        if (x < 0) {
          cell.geometry.x = 0
        }
        if (y < 0) {
          cell.geometry.y = 0
        }
        mxEvent.consume(evt)
      })

      // Defines a new action to switch between
      // XML and graphical display
      const textNode = this.$refs.xml
      const graphNode = editor.graph.container
      const sourceInput = this.$refs.source
      sourceInput.checked = false

      const funct = editor => {
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
      mxEvent.addListener(sourceInput, 'click', () => {
        editor.execute('switchView')
      })

      // Only adds image and SVG export if backend is available
      // NOTE: The old image export in mxEditor is not used,
      // the urlImage is used for the new export.
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

          // Renders graph. Offset will be multiplied with
          // state's scale when painting state.
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
      }
    },

    validateConnection (edge) {
      const roots = ['source', 'target']
      for (const rt of roots) {
        const t = this.getVertexType(edge[rt])
        const rules = this.validatees[t]
        for (const r in rules) {
          if (this[`${rt}Skip`].includes(r)) {
            continue
          }
          const validateFn = this.validators[r]
          try {
            validateFn(edge[rt], edge, rules[r])
          } catch (e) {
            throw e
          }
        }
      }
    },

    getVertexType (vertex) {
      return vertex.value.nodeName.toLowerCase()
    },

    validateTargets (vertex, edge, targets) {
      const isSrc = mxUtils.equalEntries(vertex, edge.source)
      const other = isSrc ? 'target' : 'source'
      const targetType = this.getVertexType(edge[other])
      if (!targets.includes(targetType)) {
        throw new Error(`Invalid type ${targetType}`)
      }
    },

    validateConstraints (vertex, edge, allMult) {
      if (Object.keys(allMult).length) {
        const isSrc = mxUtils.equalEntries(vertex, edge.source)
        const mult = allMult[isSrc ? 'outgoingTo' : 'incomingFrom']
        const other = isSrc ? 'target' : 'source'
        const me = isSrc ? 'source' : 'target'
        const neighborType = this.getVertexType(edge[other])
        const neighbors = vertex.edges.filter(
          e =>
            this.getVertexType(e[other]) === neighborType &&
            e[me].id === vertex.id
        )
        const occurences = neighbors.length
        if (occurences > mult[neighborType]) {
          throw new Error(
            `Failed to validate, max ${mult[neighborType]}, found ${occurences}`
          )
        }
      }
    }
  }
}
</script>

<style scoped>
#graphContainer {
  border: 1px solid black;
  background-color: #ededed;
}

#graph {
  overflow: auto;
  height: 75vh;
  width: 90vw;
  cursor: default;
}

#toolbar {
  height: 50px;
  border-radius: 10px;
  padding: 10px;
  border: 1px solid black;
  vertical-align: middle;
  place-items: initial;
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
  padding-right: 60px;
}

.table {
  margin-left: auto;
  margin-right: auto;
}
</style>
