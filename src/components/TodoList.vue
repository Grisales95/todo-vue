<template>
  <div>
    <h2 class="text-center">Todo list</h2>
    <ul>
      <li v-for="todo in todos" :key="todo.id"><todo-item :todo="todo" /></li>
    </ul>
  </div>
</template>

<script>
import { mapState } from "vuex";
import TodoItem from "./TodoItem.vue";
export default {
  components: { TodoItem },
  computed: mapState(["todos"]),
};
</script>

<style scoped>
li {
  list-style: none;
}
</style>
