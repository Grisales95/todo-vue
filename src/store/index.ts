// import { ITodo } from "@/interfaces/todo";
import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    todos: [
      {
        id: 1,
        title: "Bañar el perro",
        description: "bañarlo por que esta muy sucio",
        done: false,
      },
      {
        id: 2,
        title: "Estudiar vuex",
        description: "Estudiar vuex para integrarlo al proyecto",
        done: false,
      },
    ],
  },

  mutations: {
    addTodo(state, todo): void {
      state.todos.push(todo);
    },
  },
  actions: {},
  modules: {},
});
