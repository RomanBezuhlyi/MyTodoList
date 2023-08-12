<template>
  <li class="todo-item" v-for="todo in todos" :key="todo.id">
    <div @dblclick="startEditing(todo)" class="todo-item-wrap">
      <input
        class="todo-item-check"
        type="checkbox"
        v-model="todo.completed"
        @click="toggle(todo)"
      />
      <input
        v-if="editingTodo === todo.id"
        class="todo-item-input"
        v-model="editedText"
        @blur="saveToLocalStorage(todo)"
        @keydown.enter="saveToLocalStorage(todo)"
        placeholder="Для видалення натисніть на хрестик"
      />
      <label
        v-else
        class="todo-item-text"
        :class="{ 'todo-item-text-completed': todo.completed }"
        >{{ todo.text }}</label
      >
    </div>
    <button class="todo-item-btn" @click="remove(todo)">&#215;</button>
  </li>
</template>

<script>
export default {
  props: {
    todos: {
      type: Array,
      required: true,
    },
    remove: {
      type: Function,
    },
    toggle: {
      type: Function,
    },
  },
  data() {
    return {
      editingTodo: null,
      editedText: "",
    };
  },
  methods: {
    startEditing(todo) {
      if (!todo.completed) {
        this.editingTodo = todo.id;
        this.editedText = todo.text;
      }
    },
    saveEdit(todo) {
      const trimmedText = this.editedText.trim();
      if (trimmedText === "") {
        this.cancelEdit();
        return;
      }
      todo.text = trimmedText;
      this.editingTodo = null;
      this.editedText = "";
    },
    cancelEdit() {
      this.editingTodo = null;
      this.editedText = "";
    },
    saveToLocalStorage(todo) {
      if (this.editedText.trim() !== "") {
        const foundTodo = this.todos.find((t) => t.id === todo.id);
        if (foundTodo) {
          foundTodo.text = this.editedText;
          localStorage.setItem("todos", JSON.stringify(this.todos));
        }
      }
      this.saveEdit(todo);
      this.editingTodo = null;
      this.editedText = "";
    },
  },
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
  padding: 10px 5px;

  &-wrap {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
  }

  &-info {
    display: flex;
    align-items: center;
    width: 100%;
  }
  &-check {
    opacity: 0.5;
  }
  &-input {
    border: none;
    outline: none;
    color: #3e6026;
    padding: 5px;
    margin-left: 5px;
    font-size: 15px;
    background-color: transparent;
    width: 100%;
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
    border: none;
    opacity: 0.7;
    background-color: transparent;
    color: #d45553;
    font-size: 24px;
    cursor: pointer;
  }
}
</style>
