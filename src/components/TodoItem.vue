<template>
  <template v-for="(todo, index) in todos">
    <li class="todo-item" v-if="index < 7" :key="todo.id">
      <div class="todo-item-info">
        <input
          class="todo-item-check"
          type="checkbox"
          v-model="todo.completed"
          @click="toggle(todo)"
        />
        <span
          class="todo-item-text"
          :class="{ 'todo-item-text-completed': todo.completed }"
          >{{ todo.text }}</span
        >
      </div>
      <button class="todo-item-btn" @click="remove(todo)">&#215;</button>
    </li>
  </template>
</template>

<script>
export default {
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
  methods: {},
};
</script>

<style lang="scss" scoped>
.todo-item {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: #b8c4b8;
  width: 100%;
  padding: 10px;

  &-info {
    display: flex;
    align-items: center;
  }
  &-check {
    opacity: 0.5;
  }
  &-text {
    display: inline-block;
    word-break: break-all;
    margin-left: 5px;
    color: #3e6026;
    &-completed {
      text-decoration: line-through;
      color: #a19685;
    }
  }
  &-btn {
    padding: -1px;
    border-radius: 50%;
    border: none;
    background-color: #d45553;
    opacity: 0.7;
    color: #fff;
    font-size: 16px;
    text-transform: uppercase;
    cursor: pointer;
  }
}
</style>
