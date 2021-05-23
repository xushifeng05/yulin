import { createStore } from 'vuex'

import createPersistedState from 'vuex-persistedstate'
//Create a new store instance.
const store = createStore({
  state:{

    isShowLoading: false, // 全局 loading
      // 用户信息,用于资料页面与设置页面用户信息的共享
      // user:{
      //   username:"任万万",
      //   userNumber:"231119009",
      //   userImg:require("../assets/img/img.jpg"),
      //   userSex:"女",
      // },
    user:{
      username:"",
      userNumber:"",
      userImg: null,
      userSex: "",
    },
  },
  mutations: {
    setLoading(state, isShowLoading) {
      state.isShowLoading = isShowLoading
    },
    //set模块
    setUser(state,user){
      state.user.username = user.name;
      state.user.userNumber = user.id;
      state.user.userImg = user.img;
      state.user.userSex = user.sex;
    },
    setSex(state,sex){
      state.user.userSex = sex;
    },
    setName(state,name){
      state.user.username = name;
    },
    setImg(state,Img){
      state.user.userImg = Img;
    },
  },
  plugins: [createPersistedState()],
})

//将store暴露出去
export default store
