<template>
  <header class="todo-header">
    <h1>TodoList</h1>
    <div class="add-todo">
      <input type="text" placeholder="请输入待办事项..." v-model.trim="content" @keyup.enter="addTodo" />
      <button @click="addTodo">添加</button>
    </div>
  </header>
</template>

<script setup>
import { ref } from 'vue';

// 声明自定义事件
const emit = defineEmits(['add-todo']);

const content = ref('');

const addTodo = () => {
  if (content.value) {
    // 1.构建数据对象
    const todo = {
      id: Date.now(), //时间戳作为唯一标识
      content: content.value, //用户输入的内容
      done: false, //默认是未完成状态
    };
    // 2.发送给App.vue
    emit('add-todo', todo);

    // 3.清空输入框内容
    content.value = '';
  }
};
</script>

<style scoped>
.todo-header {
  padding: 5px 0 10px;
  background-color: #0b87ff;
  color: #f0f8ff;
  text-align: center;
}
.todo-header h1 {
  font-size: 24px;
}
.todo-header .add-todo {
  margin-top: 10px;
  display: flex;
  gap: 5px;
  justify-content: center;
}
.todo-header .add-todo input {
  width: 300px;
  height: 30px;
  padding: 0 10px;
  border-radius: 3px;
  outline: none;
  border: solid 1px white;
}
.todo-header .add-todo button {
  display: inline-block;
  width: 80px;
  background-color: #eee;
  color: #0b87ff;
  line-height: 30px;
  border: none;
  border-radius: 3px;
}
.todo-header .add-todo button:hover {
  cursor: pointer;
  background-color: #fff;
  color: #ff6700;
}
</style>
