<template>
  <div>
    <TodoListItem
    v-for="(item, index) in todos" 
    :key="index"
    v-show="!item.completed"
    :item="item"
    />
  </div>
</template>

<script>
import TodoListItem from './TodoListItem'
export default {
  props: ["todos"],
  components: {TodoListItem}
}
</script>

<style>
.card{
  background: beige;
  margin: 20px 0;
}

.card .todo-controls {
  position: absolute;
  bottom: 0;
  right: 0;
  padding: 5px;
  visibility: hidden;
}
.card:hover .todo-controls {
  visibility: visible;
}
</style>