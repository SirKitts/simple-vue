<template>
  <div>
      <li>
        <div
          v-if="model.id > 0"
          :class="{bold: isFolder}"
          class="folder"
          @click="toggle"
          @dblclick="changeType">
          <span v-if="isFolder">
            <img v-if="model.open" src="../assets/folder-close.png" width="20" height="10"/>
            <img v-else src="../assets/folder-open.png" width="20" height="10"/>
          </span>
          <span>
            <input type="checkbox" 
              v-model="checkedIds[model.id]"
              @change="changeMe"/>
            </span>
          {{ model.name }}
          <img v-if="model.id == 1" src="../assets/star.png" width="20" height="10"/>
        </div>
        <ul v-show="model.open" v-if="isFolder">
          <item
            class="item"
            v-for="(model, index) in model.children"
            :key="index"
            :model="model">
          </item>
          <!--li class="add" @click="addChild">+</li-->
        </ul>
      </li>
  </div>
</template>

<script>
import Vue from 'vue'

export default {
  name: 'item',
  template: 'tree-template',
  props: {
    model: Object
  },
  data () {
    return {
      // open: true
      checkedIds: []
    }
  },
  computed: {
    isFolder: function () {
      return this.model.children &&
        this.model.children.length
    }
  },
  methods: {
    toggle: function () {
      if (this.isFolder) {
        this.model.open = !this.model.open
      }
    },
    changeType: function () {
      if (!this.isFolder) {
        Vue.set(this.model, 'children', [])
        this.addChild()
        this.model.open = true
      }
    },
    addChild: function () {
      this.model.children.push({
        id: '99',
        name: 'New Category',
        parentId: this.model.id,
        open: false
      })
    },
    changeMe () {
      console.log('change!', this.checkedIds)
      this.$emit('interface', this.checkedIds)
    }
  },
  created: function () {
    // console.log('model', this.model)
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
  .folder {
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
