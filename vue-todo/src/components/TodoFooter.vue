<template>
  <footer class="todo-footer" v-if="todos.length">
    <input type="checkbox" :checked="allDone" @change="toggleAll" />
    <div>已办事项{{ doneCount }}/全部事项{{ allCount }}</div>
    <button @click="clearDone">清除已办</button>
    <button @click="clearAll">清除所有</button>
  </footer>
  <h2 v-else class="todo-empty">暂无待办事项</h2>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  todos: {
    type: Array,
    required: true,
    default: () => [],
  },
});

const emit = defineEmits(['toggle-all', 'clear-done', 'clear-all']);

const allDone = computed(() => props.todos.every(todo => todo.done));
const doneCount = computed(() => props.todos.filter(todo => todo.done).length);
const allCount = computed(() => props.todos.length);

const toggleAll = event => {
  emit('toggle-all', event.target.checked);
};

const clearDone = () => {
  emit('clear-done');
};

const clearAll = () => {
  emit('clear-all');
};
</script>

<style scoped>
.todo-footer {
  display: flex;
  margin-top: 20px;
  padding: 10px 40px;
  background-color: #87ceeb;
}
.todo-footer div {
  flex: 1;
  margin-left: 20px;
}
.todo-footer button {
  margin-left: 10px;
  padding: 0 10px;
}

.todo-empty {
  text-align: center;
  margin-top: 20px;
}
</style>
