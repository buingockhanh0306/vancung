<template>
  <a-layout-header>
    <a-icon
      class="trigger !text-textW"
      :type="isOpenSidebar ? 'menu-unfold' : 'menu-fold'"
      @click="handleOpenSideBar"
    />
  </a-layout-header>
</template>

<script>
export default {
  props: {
    isOpenSidebar: {
      type: Boolean,
      default: true,
    },
  },
  methods: {
    handleOpenSideBar() {
      this.$emit("handleOpenSideBar");
    },
  },
};
</script>

<style>
#components-layout-demo-custom-trigger .trigger:hover {
  color: #1890ff;
}
.ant-layout-header {
  @apply bg-bgColor;
}
</style>
