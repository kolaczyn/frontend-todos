<script setup lang="ts">
import { ref } from "vue";
import { TodoList } from "../types";
import { generateId } from "../utils";
import AppButton from "./AppButton.vue";

defineProps<{ title: string }>();
const count = ref(0);
const todoList = ref<TodoList>([{ id: "21", label: "First Todo" }]);
const input = ref("hello");

const increment = () => (count.value += 1);

const handleEnter = () => {
  todoList.value.push({ label: input.value, id: generateId() });
  input.value = "";
};

const handleRemove = (id: string) => {
  todoList.value = todoList.value.filter((todo) => todo.id !== id);
};
</script>

<template>
  <h2>{{ title }}</h2>
  <button @click="increment">{{ count }}</button>
  <input v-model="input" @keydown.enter="handleEnter" />
  <ul>
    <li v-for="{ id, label } in todoList" :key="id">
      <span> id:{{ id }}:{{ label }} </span>
      <AppButton @click="handleRemove(id)" label="rm"></AppButton>
    </li>
  </ul>
</template>
