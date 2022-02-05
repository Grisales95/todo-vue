<template>
  <v-app class="background">
    <todo-view />
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import TodoView from "./views/TodoView.vue";

export default Vue.extend({
  name: "App",

  components: {
    TodoView,
  },
});
</script>

<style scoped>
.background {
  background: #e8f9f8;
}
</style>
