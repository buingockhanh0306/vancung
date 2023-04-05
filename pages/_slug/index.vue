<template>
  <div>
    <h1 class="text-2xl text-center text-bgColor">{{ detailVc.title }}</h1>
    <p>{{ detailVc.content }}</p>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";

export default {
  computed: {
    ...mapState(["detailVc"]),
  },
  methods: {
    ...mapActions(["getDetailVc"]),
  },
  mounted() {
    this.getDetailVc(this.$route.query.id);
  },
};
</script>

<style lang="scss" scoped></style>
