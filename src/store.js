import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    username:"",
    tasks:[]
  },
  mutations: {
      setUsername(state,username){
          console.log('entro: '+username)
        state.username = username
      },
      setTask(state,task){
        state.tasks.push(task)
      },
      removeTask(state,index){
        state.tasks.splice(index,1)
      }
  }
});
