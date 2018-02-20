<template>
  <div class="form">
    <Form @change-form="changeMe"></Form>
    {{ form }}
    <div v-demo="{ color: 'black', text: 'hello!' }"></div>
  </div>
</template>

<script>
import Form from '@/components/Form.vue'

export default {
  name: 'form',
  components: {
    Form
  },
  data () {
    return {
      form: []
    }
  },
  methods: {
    changeMe (value) {
      this.form = value
    }
  }
}
</script>

<style>
  body {
    font-family: Menlo, Consolas, monospace;
    color: #444;
  }
  .item {
    cursor: pointer;
  }
  .bold {
    font-weight: bold;
  }
  ul, li {
    margin:0;
    padding:0;
    padding-left: 1em;
    line-height: 1.5em;
    list-style-type: none;
  }
</style>
