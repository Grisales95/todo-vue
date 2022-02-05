<template>
  <div>
    <h2 class="text-center">Form</h2>
    <v-form>
      <v-card class="pa-5 mt-3">
        <v-text-field label="Todo title" class="mb-4" v-model="todo.title" />
        <v-text-field
          label="Todo Description"
          class="mb-4"
          v-model="todo.description"
        />
        <v-btn block class="primary mt-3">Go</v-btn>
      </v-card>
    </v-form>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { mapMutations } from "vuex";
import { ITodo } from "../interfaces/todo";

export default Vue.extend({
  data() {
    return {
      todo: {
        title: "",
        description: "",
      } as ITodo,
    };
  },

  methods: mapMutations(["addTodo"]),
});
</script>
