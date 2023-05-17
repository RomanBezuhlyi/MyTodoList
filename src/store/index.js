import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
      todos: [],
      visibilityFilter: "all",
    };
  },
  mutations: {
    ADD_TODO(state, todo) {
      state.todos.push(todo);
      localStorage.setItem("todos", JSON.stringify(state.todos));
    },
    REMOVE_TODO(state, todo) {
      const index = state.todos.indexOf(todo);
      if (index > -1) {
        state.todos.splice(index, 1);
        localStorage.setItem("todos", JSON.stringify(state.todos));
      }
    },
    TOGGLE_TODO(state, todo) {
      todo.completed = !todo.completed;
      localStorage.setItem("todos", JSON.stringify(state.todos));
    },
    SET_VISIBILITY_FILTER(state, filter) {
      state.visibilityFilter = filter;
    },
    RESTORE_STATE(state) {
      const todos = localStorage.getItem("todos");
      if (todos) {
        state.todos = JSON.parse(todos);
      }
    },
  },
  actions: {
    addTodo({ commit }, todo) {
      commit("ADD_TODO", todo);
    },
    removeTodo({ commit }, todo) {
      commit("REMOVE_TODO", todo);
    },
    toggleTodo({ commit }, todo) {
      commit("TOGGLE_TODO", todo);
    },
    setVisibilityFilter({ commit }, filter) {
      commit("SET_VISIBILITY_FILTER", filter);
    },
    restoreState({ commit }) {
      commit("RESTORE_STATE");
    },
  },
  getters: {
    filteredTodos: (state) => {
      if (state.visibilityFilter === "completed") {
        return state.todos.filter((todo) => todo.completed);
      } else if (state.visibilityFilter === "active") {
        return state.todos.filter((todo) => !todo.completed);
      }
      return state.todos;
    },
  },
});

store.dispatch("restoreState");

export default store;
