<template>
  <a-layout-header class="flex align-middle items-center justify-between">
    <a-icon
      class="trigger !text-textW"
      :type="isOpenSidebar ? 'menu-unfold' : 'menu-fold'"
      @click="handleOpenSideBar"
    />
    <a-button
      :loading="isLoading"
      class="items-center"
      type="primary"
      icon="download"
      @click="handleClickDownload"
    >
      Tải xuống
    </a-button>
  </a-layout-header>
</template>

<script>
export default {
  props: {
    isOpenSidebar: {
      type: Boolean,
      default: true,
    },
    isLoading: {
      type: Boolean,
      default: true,
    },
  },
  methods: {
    handleOpenSideBar() {
      this.$emit("handleOpenSideBar");
    },
    handleClickDownload(){
      this.$emit('handleClickDownload')
    }
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
