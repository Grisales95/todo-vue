<template>
  <v-container>
    <h1 class="text-center mt-3">Todo App</h1>
    <hr />
    <v-row class="justify-center">
      <v-col cols="5" class="mt-3">
        <form-todo />
      </v-col>
      <v-col cols="5" class="mt-3">
        <todo-list />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import FormTodo from "@/components/FormTodo.vue";
import TodoList from "@/components/TodoList.vue";
export default {
  components: {
    FormTodo,
    TodoList,
  },
};
</script>

<style></style>
