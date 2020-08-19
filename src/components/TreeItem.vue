<template>
   <li>
      <div
        class="item-row"
        :class="{'item-folder': isFolder}"
        @click="toggle">
        <span class="folder-icon" v-if="isFolder">[{{ isOpen ? '-' : '+' }}]</span>
        <span class="item-name">
          {{item.name}}
          <span v-if="!isFolder">:</span>
        </span>
        <span class="item-value" :class="customColor" v-if="!isFolder">{{ item.value }}</span>
      </div>
      <ul v-show="isOpen" v-if="isFolder && isOpen">
        <tree-item
          class="item"
          v-for="(child, index) in children"
          :key="index"
          :item="child"
        ></tree-item>
      </ul>
    </li>
</template>

<script>
export default {
  name: 'TreeItem',
  props: {
    item: Object
  },
  data: function() {
    return {
      isOpen: false
    };
  },
  computed: {
    isFolder() {
      return typeof this.item.value === "object"
    },
    children() {
      if (!this.item.value) return this.item.value

      return this.item.value.map(item => {
        if (!item.value || typeof item.value !== "object") return item

        return {name: item.name.trim(), value: Object.entries(item.value).map(([key, value]) => ({name: key, value}))}
      })
    },
    customColor() {
      if (typeof this.item.value === 'boolean') return 'boolean'
      if (typeof this.item.value === 'number') return 'number'
      if (typeof this.item.value === 'string') return 'string'

      return 'default'
    }
  },
  methods: {
    toggle: function() {
      if (this.isFolder) {
        this.isOpen = !this.isOpen;
      }
    },
  }
}
</script>

<style scoped lang="scss">
.item-folder {
  cursor: pointer;
  margin-bottom: 7px;
  font-weight: 700;

  .item-name {
    color: #70cc91;
    text-decoration: underline;
  }
}

.item-row {
  font-family: 'Asul', sans-serif;
  font-family: 'Baloo Tamma 2', cursive;
}

// .item {
//   margin-bottom: 7px;
// }

.item-name {
  color: #ba79ce;
}

.item-value {
  margin-left: 5px;
}

.folder-icon {
  margin-right: 5px;
}

.boolean {
  color: #6b90fb;
}

.number {
  color: #6b90fb;
}

.string {
  color: #ff5f5f;

  &::before, &::after {
    content: '"';
  }
}

.default {
  color: #adadad;
}
</style>
