<template>
  <v-card class="pa-4 my-4 cursor-pointer" hover shaped>
    <h3>● {{ todo.title }}</h3>
    <p class="ma-0">{{ todo.description }}</p>
  </v-card>
</template>

<script>
export default {
  props: {
    todo: {
      type: Object,
      required: true,
    },
  },
};
</script>
