<template>
  <main class="todo-list">
    <ul>
      <li>
        <input type="checkbox" />
        <span>睡大觉</span>
        <button>删除</button>
      </li>
    </ul>
  </main>
</template>
<script setup></script>
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
