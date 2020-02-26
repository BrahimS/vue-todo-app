<template>
  <div class="add-todo">
    <div class="form-group">
      <label for="todo-title">title</label>
      <input type="text" id="todo-title" class="form-control" v-model="title" />
    </div>
    <div class="form-group">
      <label for="due-date">Due Date</label>
      <input type="date" id="due-date" class="form-control" v-model="dueDate" />
    </div>
    <div class="">
      <button class="btn btn-primary" @click.prevent="addTodoItem">Save</button>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      title: "",
      dueDate: ""
    };
  },
  methods: {
    addTodoItem() {
      this.$todos.addItem(this.title, this.dueDate);
      this.$router.push("/");
    }
  }
};
</script>
