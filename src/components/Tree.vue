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
            <img v-if="model.id === selected.store.category.primary" 
              src="../assets/star.png" width="20" height="10"/>
            <input v-else 
              type="checkbox" 
              v-model="selected.store.category.ids"
              :value="model"
              @change="changeMe"
              :disabled="model.id === selected.store.category.primary"/>
            <!--md-checkbox 
              v-else
              v-model="selected.store.category.ids" 
              value=model
              @change="changeMe"
              :disabled="model.id === selected.store.category.primary">
            </md-checkbox-->
          </span>
          <span @click="changePrimaryCategory">
            {{ model.id }} {{ model.name }}
          </span>
          <!--img v-if="model.id === selected.store.category.primary" 
            src="../assets/star.png" width="20" height="10"/-->
        </div>
        <ul v-show="model.open" v-if="isFolder">
          <item
            class="item"
            v-for="submodel in model.children"
            :key="submodel.id"
            :model="submodel">
          </item>
          <li class="add" @click="addChild">+</li>
        </ul>
      </li>
  </div>
</template>

<script>
import Vue from 'vue'
import store from '@/js/store'

export default {
  name: 'item',
  template: 'tree-template',
  props: {
    model: Object
  },
  data () {
    return {
      // open: true
      selected: store
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
    changePrimaryCategory: function () {
      this.selected.store.category.primary = this.model
      this.selected.store.category.ids[this.model.id] = this.model
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
      console.log('at component:', this.selected.store.category.ids)
      this.$emit('interface', this.selected.store.category.ids)
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
