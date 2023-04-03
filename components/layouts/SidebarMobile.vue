<template>
  <a-drawer
    class="pc:hidden"
    placement="left"
    :closable="false"
    :visible="isOpenSidebar"
    @close="$emit('handleCloseDrawer')"
  >
    <template v-slot:title>
      <img
        src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png"
      />
    </template>
    <NavBar />
  </a-drawer>
</template>

<script>
import NavBar from "~/components/layouts/NavBar";
export default {
  name: "SideBarMobile",
  components: {
    NavBar,
  },
  props: {
    isOpenSidebar: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style>
.ant-drawer-body {
  @apply p-0 w-full snap-none;
}
.ant-drawer-header {
  @apply bg-bgColor px-24;
}
.ant-menu.ant-menu-vertical {
  height: calc(100vh - 64px) !important;
  @apply bg-bgColor;
}
</style>
