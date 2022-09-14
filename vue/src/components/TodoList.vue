<script setup lang="ts">
import { ref } from "vue";

defineProps<{ title: string }>();
const count = ref(0);

const increment = () => (count.value += 1);
</script>

<template>
  <h2>{{ title }}</h2>
  <button @click="increment">{{ count }}</button>
</template>
