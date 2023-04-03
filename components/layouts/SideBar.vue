<template>
  <a-layout-sider
    class="mobile:hidden pc:block"
    v-model="isOpenSidebar"
    :trigger="null"
    collapsible
  >
    <div class="logo" />
    <Navbar />
  </a-layout-sider>
</template>

<script>
import Navbar from "~/components/layouts/NavBar";
export default {
  name: "SideBar",
  components: {
    Navbar,
  },
  props: {
    isOpenSidebar: {
      type: Boolean,
      default: true,
    },
  },
};
</script>

<style>
.logo {
  /* @apply bg-bgColor; */
  height: 32px;
  margin: 16px;
}
.ant-layout-sider-children {
  @apply bg-bgColor;
}
</style>
