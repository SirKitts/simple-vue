<template>
  <div class="omit">
    <md-button class="md-primary" @click="testMe">test me</md-button>
    <p/>
    {{ treeData }}
    <p/>
    {{ newData }}
  </div>
</template>

<script>
var data = {
  id: '0',
  name: 'Test',
  videos: [
    {
      id: '1',
      ordering: 0
    },
    {
      id: '2',
      ordering: 1
    }
  ]
}

export default {
  name: 'omit',
  data () {
    return {
      treeData: data,
      newData: []
    }
  },
  methods: {
    testMe () {
      this.newData = this.omitpush(this.treeData)
    },
    omitpush: function (obj) {
      if (obj.videos) {
        const video = {
          id: 3,
          ordering: 0
        }
        var removeIndex = obj.videos.map(function (item) {
          return item.id
        }).indexOf(3)
        ~removeIndex && obj.videos.splice(removeIndex, 1)

        obj.videos.push(video)
      }
      return obj
    }
  }
}
</script>

