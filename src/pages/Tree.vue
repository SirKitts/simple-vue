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
    {{ selected }}<br/>
  </div>
</template>

<script>
import store from '@/js/store'
import Tree from '@/components/Tree.vue'

// demo data
var data = {
  id: '0',
  parentId: -1,
  name: 'Category',
  open: true,
  primeCat: false,
  children: [
    {
      id: '1',
      parentId: 0,
      name: 'AFL',
      open: false,
      primeCat: false,
      children: [
        {
          id: '2',
          parentId: 1,
          name: 'AFL Premiership',
          open: false,
          primeCat: true,
          children: [
            {
              id: '3',
              parentId: 2,
              name: 'Teams',
              open: false,
              primeCat: false
            },
            {
              id: '4',
              parentId: 2,
              name: 'Players',
              open: false,
              primeCat: false
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
      primeCat: false,
      children: [
        {
          id: '6',
          parentId: 5,
          name: 'NRL Premiership',
          open: false,
          primeCat: false,
          children: [
            {
              id: '7',
              parentId: 6,
              name: 'Teams',
              open: false,
              primeCat: false
            },
            {
              id: '8',
              parentId: 6,
              name: 'Players',
              open: false,
              primeCat: false
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
      primeCat: false,
      children: [
        {
          id: '10',
          parentId: 9,
          name: 'Super 12',
          open: false,
          primeCat: false,
          children: [
            {
              id: '11',
              parentId: 10,
              name: 'Teams',
              open: false,
              primeCat: false
            },
            {
              id: '12',
              parentId: 10,
              name: 'Players',
              open: false,
              primeCat: false
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
      selectedCategories: [],
      selected: store
    }
  },
  methods: {
    changeMe (value) {
      console.log('at page:', value)
      this.selectedCategories = value
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
