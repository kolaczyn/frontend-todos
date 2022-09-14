<script setup lang="ts">
import { ref } from "vue";
import { TodoList } from "../types";
import { generateId } from "../utils";
import AppButton from "./AppButton.vue";

defineProps<{ title: string }>();
const count = ref(0);
const favTodo = ref<string | null>(null);
const todoList = ref<TodoList>([{ id: "21", label: "First Todo" }]);
const input = ref("hello");

const increment = () => (count.value += 1);

const handleEnter = () => {
  todoList.value.push({ label: input.value, id: generateId() });
  input.value = "";
};

const handleRemove = (id: string) => {
  if (id === favTodo.value) {
    favTodo.value = null;
  }
  todoList.value = todoList.value.filter((todo) => todo.id !== id);
};

const toggleMakeFav = (id: string) => {
  if (favTodo.value === null) {
    return (favTodo.value = id);
  }

  if (favTodo.value === id) {
    return (favTodo.value = null);
  }

  favTodo.value = id;
};

const getFavTodoLabel = () =>
  todoList.value.find((todo) => todo.id === favTodo.value)?.label;
</script>

<template>
  <h2>{{ title }}</h2>
  <button @click="increment">{{ count }}</button>
  <input v-model="input" @keydown.enter="handleEnter" />
  <h3 v-if="favTodo !== null">
    Your favourite todo is {{ getFavTodoLabel() }}
  </h3>
  <ul>
    <li v-for="{ id, label } in todoList" :key="id">
      <span> id:{{ id }}:{{ label }} </span>
      <AppButton @click="handleRemove(id)" label="rm"></AppButton>
      <AppButton
        @click="toggleMakeFav(id)"
        v-if="favTodo === id"
        label="unfav"
      ></AppButton>
      <AppButton v-else @click="toggleMakeFav(id)" label="fav"></AppButton>
    </li>
  </ul>
</template>
