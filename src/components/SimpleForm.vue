<template>
  <form @submit.prevent="submit" class="form-container">
    <div class="field">
      <label class="label">Enter the iframe id</label>
      <input type="text" class="input" v-model="iframeId" name="iframeId">
    </div>

    <button type="submit">submit</button>
  </form>
</template>

<script>
export default {
  name: 'SimpleForm',
  data: function() {
    return {
      iframeId: 'vue_iframe_pane'
    };
  },
  methods: {
    submit() {
      this.$emit('submit', this.iframeId)
    }
  }
}
</script>

<style scoped lang="scss">
.form-container {
  display: flex;
  
  .field {
    margin-right: 10px;
  }

  .label {
    margin-right: 10px;
  }

  .input {
    width: 200px;
    padding-left: 5px;
  }
}
</style>
