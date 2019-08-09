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
import Editor from './components/Editor'

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
