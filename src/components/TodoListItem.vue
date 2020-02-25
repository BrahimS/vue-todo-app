<template>
  <div class="card">
  <div class="card-body">
    <h5 class="card-title">
      {{item.title}}
    </h5>
    <h6 class="card-subtitle"
      :class="overdueCss"
      v-if="item.dueDate"
      >
      {{dueDateLabel}} : {{formattedDate}}
    </h6> 
    <div class="todo-controls">
    <button 
    @click.prevent="item.completed = true"
    class="btn btn-sm btn-outline-success"
    > Complete </button>
    </div>
  </div>
  </div>
</template>

<script>
  export default {
    props: ['item'],
    computed: {
      formattedDate() {
        let dt = this.item.dueDate
        return dt.getFullYear() + '/' + (dt.getMonth() + 1) + '/' + dt.getDate();
        
      },
      isOverdue(){
        return this.item.dueDate.getTime() < Date.now();
      },
      dueDateLabel() {
        return this.isOverdue ? 'Overdue' : 'Due';
      },
      overdueCss(){
        return {
          'text-danger': this.isOverdue,
          'text-uppercase': this.isOverdue
                }
      }
    }
  }
</script>

