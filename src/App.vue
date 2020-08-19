<template>
  <div id="app">
    <h1>Vue-Cita</h1>
    <SimpleForm @submit="submit" />
    
    <div class="preview-container">
      <div v-if="loading">loading...</div>
      <ul class="list-view" v-if="!loading && treeData">
        <tree-item
          :item="treeData"
        ></tree-item>
      </ul>
    </div>
  </div>
</template>

<script>
import TreeItem from './components/TreeItem.vue'
import SimpleForm from './components/SimpleForm.vue'

export default {
  name: 'App',
  components: {
    TreeItem,
    SimpleForm,
  },
  data() {
    return {
      loading: false
    }
  },
  computed: {
    treeData() {
      const treeData = this.$store.getters.getState
      if (!treeData) return

      return {
        name: 'State',
        value: Object.entries(treeData).map(([key, value]) => ({name: key, value}))
      }
    }
  },
  methods: {
    async submit(iframeId) {
      this.loading = true
      console.log('iframeId:', iframeId)
      await this.$store.dispatch({type: 'fetchState', payload: iframeId})
      this.loading = false
    }
  }
}
</script>

<style lang="scss">
body {
  background-color: #fff;
}

ul {
  list-style: none;
  padding-left: 20px;
}

.list-view {
  background: #383838;
  color: white;
}
</style>
