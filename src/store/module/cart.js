const state = {
  cart:[]
};

const mutations = {
  ADD_TO_CART(state, payload) {
    let index = state.cart.findIndex((d) => d.id === payload.id);
    if (index == -1){
      state.cart.push(payload);
    }else{
      state.cart.splice( index , 1)
    }
  },
  INC_COUNT(state,payload){
    let index = state.cart.findIndex((d) => d.id === payload.id);
    state.cart[index].count++
  },
  DEC_COUNT(state,payload){
    let index = state.cart.findIndex((d) => d.id === payload.id);
    if(state.cart[index].count - 1 !== 0)
    state.cart[index].count--
  }
};

const actions = {

};
const getters = {
  cart: (state) => {
    return state.cart;
  },

};

export default {
  namespaced: true,
  getters,
  mutations,
  actions,
  state,
};
