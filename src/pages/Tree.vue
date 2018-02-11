<template>
  <div class="tree">
    <p>(You can double click on an item to turn it into a folder.)</p>
    <!-- the demo root element -->
    <ul id="tree">
      <Tree
        class="item"
        :model="treeData"
        @interface="changeMe">
      </Tree>
    </ul>
  </div>
</template>

<script>
import Tree from '@/components/Tree.vue'

// demo data
var data = {
  id: '0',
  parentId: -1,
  name: 'Category',
  open: true,
  children: [
    {
      id: '1',
      parentId: 0,
      name: 'AFL',
      open: false,
      children: [
        {
          id: '2',
          parentId: 1,
          name: 'AFL Premiership',
          open: false,
          children: [
            {
              id: '3',
              parentId: 2,
              name: 'Teams'
            },
            {
              id: '4',
              parentId: 2,
              name: 'Players'
            }
          ]
        }
      ]
    },
    {
      id: '5',
      parentId: 0,
      name: 'NRL',
      open: false,
      children: [
        {
          id: '6',
          parentId: 5,
          name: 'NRL Premiership',
          open: false,
          children: [
            {
              id: '7',
              parentId: 6,
              name: 'Teams'
            },
            {
              id: '8',
              parentId: 6,
              name: 'Players'
            }
          ]
        }
      ]
    },
    {
      id: '9',
      parentId: 0,
      name: 'Rugby Union',
      open: false,
      children: [
        {
          id: '10',
          parentId: 9,
          name: 'Super 12',
          open: false,
          children: [
            {
              id: '11',
              parentId: 10,
              name: 'Teams'
            },
            {
              id: '12',
              parentId: 10,
              name: 'Players'
            }
          ]
        }
      ]
    }
  ]
}

export default {
  name: 'tree',
  components: {
    Tree
  },
  data () {
    return {
      treeData: data,
      selectedCategories: []
    }
  },
  methods: {
    changeMe (value) {
      this.selectedCategories = value
      console.log('change!', value)
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
