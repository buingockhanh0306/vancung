<template>
  <Fragment>
    <a-menu theme="dark" :default-selected-keys="['1']">
      <a-menu-item
        v-for="item in listVc"
        :key="item.slug"
        @click="clickDetail(item)"
      >
        <a-icon type="user" />
        <span>{{ item.title }}</span>
      </a-menu-item>
    </a-menu>
  </Fragment>
</template>

<script>
import { Fragment } from "vue-frag";
import { mapActions, mapState } from "vuex";

export default {
  name: "NavBar",
  components: {
    Fragment,
  },
  computed: {
    ...mapState(["listVc"]),
  },
  created() {
    this.getListVc();
  },
  methods: {
    ...mapActions(["getListVc"]),
    async clickDetail(item) {
      this.$router.push({
        path: item.slug,
        query: { id: item.id },
      });
    },
  },
};
</script>

<style></style>
