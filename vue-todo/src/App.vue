<template>
  <header class="todo-header">
    <h1>TodoList</h1>
    <div class="add-todo">
      <input type="text" placeholder="请输入待办事项..." />
      <button>添加</button>
    </div>
  </header>
  <main class="todo-list">
    <ul>
      <li>
        <input type="checkbox" />
        <span>吃饭</span>
        <button>删除</button>
      </li>
    </ul>
  </main>
  <footer class="todo-footer">
    <input type="checkbox" />
    <div>已办事项0/全部事项1</div>
    <button>清除已办</button>
    <button>清除所有</button>
  </footer>
</template>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
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
