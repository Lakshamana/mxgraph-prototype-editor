<template>
  <div id="app">
    <div id="mainActions">
      <button
        v-for="action in actions"
        :key="action"
        @click="execute(action)"
      >
        {{ action }}
      </button>
    </div>
    <Editor ref="wrapper" />
  </div>
</template>

<script>
import mxGraphFactory from 'mxgraph'
import Editor from './components/Editor'

const { mxUtils } = mxGraphFactory

export default {
  name: 'App',

  components: {
    Editor
  },

  data () {
    return {
      actions: [
        'group',
        'ungroup',
        'cut',
        'copy',
        'paste',
        'delete',
        'undo',
        'redo',
        'print',
        'show',
        'exportImage'
      ]
    }
  },

  mounted () {
    if (mxUtils) {
      // Create select actions in page
      const selectActionsNode = this.$refs.selectActions
      mxUtils.write(selectActionsNode, 'Select: ')
      mxUtils.linkAction(selectActionsNode, 'All', this.$refs.wrapper.editor, 'selectAll')
      mxUtils.write(selectActionsNode, ', ')
      mxUtils.linkAction(selectActionsNode, 'None', this.$refs.wrapper.editor, 'selectNone')
      mxUtils.write(selectActionsNode, ', ')
      mxUtils.linkAction(selectActionsNode, 'Vertices', this.$refs.wrapper.editor, 'selectVertices')
      mxUtils.write(selectActionsNode, ', ')
      mxUtils.linkAction(selectActionsNode, 'Edges', this.$refs.wrapper.editor, 'selectEdges')

      // Create select actions in page
      const zoomActionsNode = this.$refs.zoomActions
      mxUtils.write(zoomActionsNode, 'Zoom: ')
      mxUtils.linkAction(zoomActionsNode, 'In', this.$refs.wrapper.editor, 'zoomIn')
      mxUtils.write(zoomActionsNode, ', ')
      mxUtils.linkAction(zoomActionsNode, 'Out', this.$refs.wrapper.editor, 'zoomOut')
      mxUtils.write(zoomActionsNode, ', ')
      mxUtils.linkAction(zoomActionsNode, 'Actual', this.$refs.wrapper.editor, 'actualSize')
      mxUtils.write(zoomActionsNode, ', ')
      mxUtils.linkAction(zoomActionsNode, 'Fit', this.$refs.wrapper.editor, 'fit')
    }
  },

  methods: {
    execute (action) {
      this.$refs.wrapper.editor.execute(action)
    }
  }
}
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#mainActions {
  width: 100%;
  padding-top: 8px;
  padding-bottom: 8px;
}

#selectActions {
  width: 100%;
  padding-left: 54px;
  padding-bottom: 4px;
}

#zoomActions {
  width: 100%;
  padding-left: 54px;
  padding-top: 4px;
}

#headerimg {
  overflow: hidden;
}
</style>
