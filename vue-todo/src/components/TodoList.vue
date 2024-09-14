<template>
  <main class="todo-list">
    <ul>
      <li v-for="todo in todos" :key="todo.id">
        <input type="checkbox" :checked="todo.done" />
        <span>{{ todo.content }}</span>
        <button>删除</button>
      </li>
    </ul>
  </main>
</template>

<script setup>
const props = defineProps({
  todos: {
    type: Array,
    required: true,
    default: () => [],
  },
});
</script>

<style scoped>
.todo-list li {
  display: flex;
  align-items: center;
  height: 40px;
  padding: 0 40px;
  list-style: none;
  border-bottom: 1px solid #eee;
}
.todo-list li span {
  flex: 1;
  margin-left: 20px;
}
.todo-list li button {
  padding: 0 10px;
}
</style>
