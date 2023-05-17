<template>
  <ul class="todo-list">
    <TodoItem :todos="todos" :remove="remove" :toggle="toggle" />
  </ul>
</template>

<script>
import TodoItem from "../components/TodoItem.vue";
export default {
  components: {
    TodoItem,
  },
  props: {
    todos: {
      type: [Array],
      required: true,
    },
    remove: {
      type: Function,
    },
    toggle: {
      type: Function,
    },
  },
};
</script>

<style lang="scss" scoped>
.todo-list {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 15px;
}
</style>
