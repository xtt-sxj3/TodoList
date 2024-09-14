<template>
  <TodoHeader @add-todo="handleAddTodo"></TodoHeader>
  <TodoList :todos="todos"></TodoList>
  <TodoFooter></TodoFooter>
</template>

<script setup>
import { ref } from 'vue';

import TodoHeader from './components/TodoHeader.vue';
import TodoList from './components/TodoList.vue';
import TodoFooter from './components/TodoFooter.vue';

const todos = ref([]);

const handleAddTodo = todo => {
  todos.value.push(todo);
  console.log(todos);
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>
