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
            <img v-if="model.id === selections.store.category.primary" 
              src="../assets/star.png" width="20" height="10"/>
            <input v-else 
              type="checkbox" 
              v-model="selections.store.category.ids"
              :value="getCategoryModel(model)"
              :disabled="model.id === selections.store.category.primary"/>
            <!--input v-else 
              type="checkbox" 
              v-model="selections.store.category.ids[model.id]"
              :value="model"
              @change="changeMe"
              :disabled="model.id === selections.store.category.primary"/-->
            <!--md-checkbox 
              v-else
              :v-model="selections.store.category.ids[model.id]" 
              :value="getCategoryModel(model)">
            </md-checkbox-->
            <!--md-checkbox 
              v-else
              v-model="selections.store.category.ids[model.id]" 
              :value="getCategoryModel(model)"
              :disabled="model.id === selections.store.category.primary"
              @change="changeCategory(model)">
            </md-checkbox-->
          </span>
          <span @click="changePrimaryCategory">
            {{ model.id }} {{ model.name }}
          </span>
          <!--img v-if="model.id === selections.store.category.primary" 
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
      selections: store,
      payload: []
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
    getCategoryModel: function (model) {
      return {
        'id': model.id,
        'name': model.name,
        'parentId': model.parentId
      }
    },
    getCategoryModelId: function () {
      return this.model.id
    },
    changePrimaryCategory: function () {
      this.selections.store.category.primary = this.model
      this.selections.store.category.ids[this.model.id] = this.model.id
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
    changeCategory (model) {
      const category = this.selections.store.category
      const element = this.getCategoryModel(model)
      const catId = this.model.id

      category.ids[catId] = !category.ids[catId]

      if (category.ids[catId]) {
        category.selections.push(element)
      } else {
        const removeIndex = category.selections.map(function (item) {
          return item.id
        })
          .indexOf(catId)

        category.selections.splice(removeIndex, 1)
      }
      console.log('at component selections payload:', this.selections.store.category.selections)
      // this.$emit('tree-interface', this.selections.store.category.selections)
    },
    openParentCategories () {
      /*
      const model = {
        id: this.model.id,
        parentId: this.model.parentId,
        name: this.model.name
      }
      if (this.selections.store.category.ids.includes(model)) {
        this.model.open = true
      }
      */
      if (['9', '10', '12'].includes(this.model.id)) {
        this.model.open = true
      }
    }
  },
  created () {
    this.openParentCategories()
    // console.log('primary', this.selections.store.category.primary)
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
