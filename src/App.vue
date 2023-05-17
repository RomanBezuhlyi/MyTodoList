<template>
  <div id="app">
    <div class="todo">
      <h1 class="todo-title">{{ title }}</h1>
      <input
        class="todo-record"
        v-model="newTodo"
        type="text"
        placeholder="Додати замітку"
      />
      <button class="todo-button" @click="add">{{ addTodo }}</button>
      <TodoList
        :todos="filteredTodos"
        :remove="removeTodo"
        :toggle="toggleTodo"
      />
      <div class="todo-filter">
        <button
          :class="{ active: $store.state.visibilityFilter === 'all' }"
          class="todo-filter-btn"
          @click="setVisibilityFilter('all')"
        >
          {{ all }}
        </button>
        <button
          :class="{ active: $store.state.visibilityFilter === 'completed' }"
          class="todo-filter-btn"
          @click="setVisibilityFilter('completed')"
        >
          {{ completed }}
        </button>
        <button
          :class="{ active: $store.state.visibilityFilter === 'active' }"
          class="todo-filter-btn"
          @click="setVisibilityFilter('active')"
        >
          {{ active }}
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import TodoList from "./components/TodoList.vue";
import { mapGetters, mapActions } from "vuex";
export default {
  name: "App",
  components: {
    TodoList,
  },

  data() {
    return {
      title: "Замітки",
      addTodo: "Записати",
      all: "Всі",
      completed: "Виконані",
      active: "Активні",
      newTodo: "",
    };
  },
  computed: {
    ...mapGetters(["filteredTodos"]),
  },
  methods: {
    ...mapActions(["removeTodo"]),
    ...mapActions(["toggleTodo"]),
    ...mapActions(["setVisibilityFilter"]),

    add() {
      if (this.newTodo.trim() === "") return;
      this.$store.dispatch("addTodo", {
        id: Date.now(),
        text: this.newTodo,
        completed: false,
      });
      this.newTodo = "";
    },
  },
};
</script>

<style lang="scss" scoped>
#app {
  font-family: Montserrat, Helvetica, Arial, sans-serif;
  height: 100vh;
  background-color: #fcedc2;
  background-image: url(./assets/image/background.jpg);
  background-size: cover;
  background-repeat: no-repeat;
}

.todo {
  position: absolute;
  top: 50%;
  left: 50%;
  text-align: center;
  transform: translate(-50%, -50%);
  width: 400px;
  min-height: 600px;
  margin: 0 auto;
  padding: 30px;
  background-color: #dfe2db;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 2px 10px 0 rgba(0, 0, 0, 0.15);
  @media screen and (max-width: 480px) {
    width: 100%;
    min-height: 100%;
  }
  &-title {
    font-size: 36px;
    margin-bottom: 30px;
    color: #3e6026;
    font-weight: 700;
  }
  &-record {
    display: block;
    margin: 0 auto;
    width: 100%;
    padding: 20px 10px;
    height: 30px;
    color: #3e6026;
    border: none;
    border: 2px solid #3e6026;
    background-color: transparent;
    outline: none;
    font-size: 16px;
    margin-bottom: 15px;
  }
  &-button {
    border: 3px solid #7a9c68;
    background-color: #7a9c68;
    color: #fff;
    text-transform: uppercase;
    width: 100%;
    height: 40px;
    cursor: pointer;
    margin-bottom: 30px;
    transition: background 0.3s;
    &:hover {
      background-color: transparent;
      color: #7a9c68;
    }
  }
  &-filter {
    position: absolute;
    bottom: 30px;
    left: 50%;
    transform: translate(-50%, 0);
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 15px;
    &-btn {
      border: 3px solid #7a9c68;
      background-color: #7a9c68;
      color: #fff;
      text-transform: uppercase;
      font-size: 10px;
      width: 80px;
      height: 30px;
      cursor: pointer;
      transition: background 0.3s;
      letter-spacing: 2px;
      &:hover {
        background-color: transparent;
        color: #7a9c68;
      }
    }
    .active {
      background-color: transparent;
      border-color: #3e6026;
      color: #3e6026;
    }
  }
}
</style>
