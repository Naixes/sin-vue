<template>
  <div class="s-nav-item" :class="{active, vertical}" @click="select">
      <slot></slot>
  </div>
</template>

<script>
export default {
  name: '',
  // nav组件  
  inject: ['root', 'vertical'],
  props: {
      name: {
          type: String
      }
  },
  created() {
      this.root.addItems(this)
  },
  data() { 
    return {
        // 是否选中，父组件更改
        active: false
    }
  },
  methods: {
      select() {
          // 更新选择路径
          this.root.namePath = []
          this.$parent.updateNamePath && this.$parent.updateNamePath()
          // 更新当前选中  
          this.$emit("add:selected", this.name)
      }
  }
 }
</script>

<style lang="scss" scoped>
@import '../var';

.s-nav-item {
    padding: 10px 20px;
    position: relative;
    cursor: pointer;
    &:not(.vertical).active::after {
        content: '';
        width: 100%;
        position: absolute;
        left: 0;
        bottom: -1px;
        border-bottom: 1px solid $blue;
    }
    &.active.vertical {
        background-color: $background-selected-color;
    }
}
</style>