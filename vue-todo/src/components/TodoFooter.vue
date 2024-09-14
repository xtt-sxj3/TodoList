<template>
  <footer class="todo-footer">
    <input type="checkbox" />
    <div>已办事项0/全部事项1</div>
    <button>清除已办</button>
    <button>清除所有</button>
  </footer>
</template>
<script setup></script>
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
</style>
