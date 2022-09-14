<script setup lang="ts">
import { ref } from "vue";
import { TodoList } from "../types";
import { generateId } from "../utils";

defineProps<{ title: string }>();
const count = ref(0);
const todoList = ref<TodoList>([{ id: "21", label: "First Todo" }]);
const input = ref("hello");

const increment = () => (count.value += 1);

const handleEnter = () => {
  todoList.value.push({ label: input.value, id: generateId() });
  input.value = "";
};
</script>

<template>
  <h2>{{ title }}</h2>
  <button @click="increment">{{ count }}</button>
  <input v-model="input" @keydown.enter="handleEnter" />
  <ul>
    <li v-for="todo in todoList" :key="todo.id">
      id:{{ todo.id }}:{{ todo.label }}
    </li>
  </ul>
</template>
