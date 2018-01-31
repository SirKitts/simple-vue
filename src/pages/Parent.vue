<template>
  <div class="parent">
    {{msg}}
    <Child1 :id="id" @child-id1="changeMe1"></Child1>
    {{number1}}
    <Child2 :id="id" v-on:child-id2="changeMe2"></Child2>
    {{number2}}
    <Child3 :id="id" @child-id3="changeMe3"></Child3>
    {{number3}}
  </div>
</template>

<script>
import Child1 from '@/components/Child1.vue'
import Child2 from '@/components/Child2.vue'
import Child3 from '@/components/Child3.vue'

export default {
  name: 'parent',
  components: {
    Child1,
    Child2,
    Child3
  },
  data () {
    return {
      msg: 'Parent-Child emit sample',
      number1: '1',
      number2: '2',
      number3: '3'
    }
  },
  /*
  created () {
    this.$on('child-id1', function (n) {
      this.number1 = n
    }
  },
  */
  methods: {
    changeMe1 (value) {
      this.number = value
      /*
      this.$on('changeMe1', function (n) {
        this.number1 = n
      })
      */
      console.log('change1!', value)
    },
    changeMe2 (value) {
      this.number = value
      console.log('change2!', value)
    },
    changeMe3 (value) {
      this.number = value
      console.log('change3!', value)
    }
  }
}
</script>
