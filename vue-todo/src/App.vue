<template>
  <TodoHeader @add-todo="handleAddTodo"></TodoHeader>
  <TodoList>
    <draggable :list="todos" animation="300" item-key="id">
      <template #item="item">
        <TodoItem v-bind="item.element" @toggle="handleToggle" @edit="handleEdit" @del="handleDeleteTodo"></TodoItem>
      </template>
    </draggable>
  </TodoList>
  <TodoFooter :todos="todos" @toggle-all="handleToggleAll" @clear-done="handleClearDone" @clear-all="handleClearAll"></TodoFooter>
</template>

<script setup>
import draggable from 'vuedraggable';

import useTodos from './hooks/useTodos.js';

import TodoHeader from './components/TodoHeader.vue';
import TodoList from './components/TodoList.vue';
import TodoFooter from './components/TodoFooter.vue';
import TodoItem from './components/TodoItem.vue';

const { todos, getTodos, handleAddTodo, handleToggle, handleEdit, handleToggleAll, handleDeleteTodo, handleClearDone, handleClearAll } =
  useTodos();
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>
