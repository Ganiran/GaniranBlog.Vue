import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  //初始化数据
  state: {
    formDatas:null   //定义一个变量  formDatas
  },
  //改变state里面的值得方法
  mutations: {
    getFormData(state,data)
    {
      state.formDatas=data;
    }
  },
  actions: {
  },
  modules: {
  }
})
