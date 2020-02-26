<template>
  <div class="home">
    <TodoList :todos="todos" />
  </div>
</template>

<script>
// @ is an alias to /src
import TodoList from "../components/TodoList";
export default {
  name: "Home",
  components: {
    TodoList
  },
  created() {
    this.todos = this.$todos.getNewTodos();
  },
  data() {
    return {
      todos: []
      // todos: [
      //   {
      //     title: "Setup environement",
      //     dueDate: new Date(2019, 3, 26),
      //     completed: true
      //   },
      //   {
      //     title: "Create main list component",
      //     dueDate: new Date(2020, 4, 26),
      //     completed: false
      //   },
      //   { title: "Display TODO items" },
      //   {
      //     title: "Display Now",
      //     dueDate: new Date(2020, 2, 25),
      //     completed: false
      //   }
      // ]
    };
  }
};
</script>
