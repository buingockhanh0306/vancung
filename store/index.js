export const state = () => ({
  listVc: [],
  detailVc: {},
});
export const actions = {
  async getListVc({ commit }) {
    const docRef = this.$fire.firestore.collection("listVc");
    try {
      const doc = await docRef.get();
      const data = doc.docs.map((item) => ({
        id: item.id,
        ...item.data(),
      }));
      commit("SET_LIST_VC", data);
    } catch (e) {
      console.error(e);
    }
  },
  async getDetailVc({ commit }, id) {
    const docRef = this.$fire.firestore.collection("listVc").doc(id);
    try {
      const doc = await docRef.get();
      commit("SET_DETAIL_VC", doc.data());
      console.log(doc.data());
    } catch (e) {
      console.error(e);
    }
  },
};

export const mutations = {
  SET_LIST_VC(state, payload) {
    state.listVc = payload;
  },
  SET_DETAIL_VC(state, payload) {
    state.detailVc = payload;
  },
};
