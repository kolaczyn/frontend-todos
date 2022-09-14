<script setup lang="ts">
// TODO use children instead and make a prop for e.g. color
defineProps<{ label: string }>();
defineEmits(["click"]);
</script>

<template>
  <button @click="$emit('click')">
    {{ label }}
  </button>
</template>
