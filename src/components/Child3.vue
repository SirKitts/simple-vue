<template>
  <div>
    <input v-model="sliderVal" 
      type="range" 
      min="12345" 
      max="98765" 
      step="1" 
      @change="changeMe" />
      {{id}}
  </div>
</template>

<script>
export default {
  props: ['id'],
  data () {
    return {
      sliderVal: '12345'
    }
  },
  methods: {
    changeMe () {
      this.$emit('child-id3', this.sliderVal)
    }
  }
}
</script>
