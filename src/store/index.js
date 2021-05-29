import { createStore } from 'vuex'
import axios from 'axios'
import qs from 'qs'

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
    //初始化user
    initializationUser(state){
      state.user.username = "";
      state.user.userNumber = "";
      state.user.userSex = "";
      state.user.userImg = null;
    },
    //set模块
    setUser(state,user){
      state.user.username = user.name;
      state.user.userNumber = user.id;
      state.user.userSex = user.sex;
      state.user.userImg = user.img;
    },
    setSex(state,sex){
      state.user.userSex = sex;
      axios.post('http://localhost:8081/updateSex',qs.stringify({
        id: state.user.userNumber,
        sex: state.user.userSex
      })).then(res=>{
        console.log(res)
      })
    },
    setName(state,name){
      state.user.username = name;
      axios.post('http://localhost:8081//updateName',qs.stringify({
        id: state.user.userNumber,
        name: state.user.username
      })).then(res=>{
        console.log(res)
      })
    },
    setImg(state,Img){
      state.user.userImg = Img;
    },
  },
  plugins: [createPersistedState()],
})

//将store暴露出去
export default store
