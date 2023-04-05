<template>
  <a-layout id="components-layout-demo-custom-trigger">
    <SideBar :isOpenSidebar="isOpenSidebar" />

    <SideBarMobile
      :isOpenSidebar="isOpenSidebar"
      @handleCloseDrawer="isOpenSidebar = false"
    />

    <a-layout>
      <Header
        :isOpenSidebar="isOpenSidebar"
        @handleOpenSideBar="isOpenSidebar = !isOpenSidebar"
        @handleClickDownload="handleClickDownload"
      />
      <a-layout-content
        :style="{
          margin: '24px 16px',
          padding: '24px',
          height: '100vh',
          background: '#fff',
          minHeight: '280px',
        }"
      >
        <Nuxt />
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>
<script>
import SideBar from "~/components/layouts/SideBar.vue";
import Header from "~/components/layouts/Header.vue";
import SideBarMobile from "~/components/layouts/SideBarMobile.vue";
export default {
  name: "defaultLayout",
  components: {
    SideBar,
    Header,
    SideBarMobile,
  },
  data() {
    return {
      isOpenSidebar: false,
    };
  },
  methods: {
    handleClickDownload() {},
  },
};
</script>
<style>
#components-layout-demo-custom-trigger {
  @apply fixed top-0 left-0 right-0;
}
</style>
