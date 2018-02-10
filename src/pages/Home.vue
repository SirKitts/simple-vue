<template>
  <div class="home">
    {{msg}}
    <Tree @slider-value="changeMe"></Tree>
  </div>
</template>

<script>
import Tree from '@/components/Tree.vue'

export default {
  name: 'home',
  components: {
    Tree
  },
  data () {
    return {
      msg: 'Home',
      id: '12345'
    }
  },
  methods: {
    changeMe (id) {
      console.log('change!', id)
      this.id = id
    }
  }
}
</script>

