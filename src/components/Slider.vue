<template>
  <div>
    <input v-model="sliderVal" 
      type="range" 
      min="12345" 
      max="98765" 
      step="1" 
      @change="changeMe" />
  </div>
</template>

<script>
export default {
  props: ['id'],
  data () {
    return {
      sliderVal: ''
    }
  },
  methods: {
    changeMe () {
      this.$emit('changeMe', this.sliderVal)
    }
  }
}
</script>
