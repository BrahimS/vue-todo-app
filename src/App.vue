<template>
  <div id="app">
    <nav class="navbar navbar-dark bg-dark">
    <div class="container">
    <a href="" class="navbar-brand">TODO</a>
    </div>
    </nav>
    <div class="container">
      <TodoList :todos="todos" />
    </div>
  </div>
</template>

<script>
import TodoList from './components/TodoList'

export default {
  name: "App",
  components: {
    TodoList
  },
  data(){
    return {
      todos: [
        {title: "Setup environement",  dueDate: new Date(2019, 3, 26), completed: false},
        {title: "Create main list component",  dueDate: new Date(2020, 4, 26), completed: false},
        {title: "Display TODO items" },
        {title: "Display Now" , dueDate: new Date(2020, 2, 25), completed: false}
      ]
    }
  }
};
</script>

