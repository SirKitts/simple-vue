<template>
  <div class="parent">
    {{msg}}
    {{number1}} <Child1 :id="id" @child-id="changeMe1"></Child1>
    {{number2}} <Child2 :id="id" @child-id="changeMe2"></Child2>
    {{number3}} <Child3 :id="id" @child-id="changeMe3"></Child3>
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
      id: '100',
      number1: '',
      number2: '',
      number3: ''
    }
  },
  methods: {
    changeMe1 (id) {
      console.log('change1!', id)
    },
    changeMe2 (id) {
      console.log('change2!', id)
    },
    changeMe3 (id) {
      console.log('change3!', id)
    }
  }
}
</script>
