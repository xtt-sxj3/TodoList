<template>
  <TodoHeader @add-todo="handleAddTodo"></TodoHeader>
  <TodoList>
    <TodoItem v-for="todo in todos" :key="todo.id" v-bind="todo" @toggle="handleToggle" @edit="handleEdit"></TodoItem>
  </TodoList>
  <TodoFooter></TodoFooter>
</template>

<script setup>
import { ref } from 'vue';

import TodoHeader from './components/TodoHeader.vue';
import TodoList from './components/TodoList.vue';
import TodoFooter from './components/TodoFooter.vue';
import TodoItem from './components/TodoItem.vue';

const todos = ref([]);

const handleAddTodo = todo => {
  todos.value.push(todo);
  // console.log(todos);
};

const handleToggle = (id, checked) => {
  //根据id找到对应的todo
  const index = todos.value.findIndex(todo => todo.id === id);
  //将对应的todo的done属性改为checked
  todos.value[index].done = checked;
};

const handleEdit = (id, content) => {
  const index = todos.value.findIndex(todo => todo.id === id);
  todos.value[index].content = content;
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>
