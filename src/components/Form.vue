<template>
  <div>
    <div>
      <select 
        v-model="seriesId" 
        multiple
        @change="onChangeSeries">
        <option 
          v-for="series in seriesIds"
          :key="series.id"
          :value="series">
          {{ series.name }}
        </option>
      </select>
    </div>
    <local-component></local-component>
    <div>
      {{ seriesId }}
    </div>
  </div>
</template>

<script>
var data = [
  {id: '11', name: 'AFL1'},
  {id: '21', name: 'AFL2'},
  {id: '31', name: 'AFL3'},
  {id: '41', name: 'AFL4'},
  {id: '51', name: 'AFL5'},
  {id: '61', name: 'AFL6'},
  {id: '71', name: 'AFL7'}
]

var Child = {
  template: '<div>A custom component!</div>'
}

export default {
  name: 'item',
  template: 'form-template',
  props: {
    model: Object
  },
  components: {
    'local-component': Child
  },
  data () {
    return {
      seriesId: {id: '51', name: 'AFL5'},
      seriesIds: data,
      payload: []
    }
  },
  methods: {
    onChangeSeries: function () {
      this.payload = {
        seriesId: this.seriesId
      }
      this.$emit('change-form', this.payload)
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
  .folder, .add {
    text-align: left;
  }
  ul, li {
    margin:0;
    padding:0;
    padding-left: 1em;
    line-height: 1.5em;
    list-style-type: none;
  }
</style>
