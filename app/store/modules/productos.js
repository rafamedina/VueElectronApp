import * as types from '../mutation-types'

// initial state
const state = {
  all: []
}

// getters
const getters = {
  allProductos: state => state.all
}

// actions
const actions = {
    
}

// mutations
const mutations = {
    [types.ADD_PRODUCT](state, item) {
        state.all.push(item)
    },
    [types.DELETE_PRODUCT](state, { index }) {
    },
    [types.RECEVED_PRODUCTS](state, productos) {
        state.all = productos
    },
}

export default {
  state,
  getters,
  actions,
  mutations
}
