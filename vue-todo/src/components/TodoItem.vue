<template>
  <li class="todo-item">
    <input type="checkbox" :checked="done" @change="handleChange" />
    <input type="text" v-if="isEditing" :value="content" v-focus @blur="handleEdit" @keyup.enter="handleEdit" />
    <span v-else @click="isEditing = true" :class="{ completed: done }">{{ content }}</span>
    <button @click="handleDelete">删除</button>
  </li>
</template>
<script setup>
import { ref } from 'vue';

const props = defineProps({
  id: {
    type: Number,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  done: {
    type: Boolean,
    required: true,
  },
});

const emit = defineEmits(['toggle', 'edit', 'del']);

//实现一个自定义的指令,约定:在setup中,如果一个变量为vFocus,就表示一个自定义指令
//指令都是应用于dom元素的,可以扩展dom元素的功能
//指令的值是一个对象
const vFocus = {
  //指令的生命周期函数: 当指令绑定的元素在挂载到dom完成时调用
  mounted(el) {
    // el 是当前dom元素 input
    el.focus();
  },
};

const isEditing = ref(false);

const handleChange = event => {
  emit('toggle', props.id, event.target.checked);
};

const handleEdit = event => {
  isEditing.value = false;
  if (event.target.value.trim()) {
    emit('edit', props.id, event.target.value.trim());
  }
};

const handleDelete = () => {
  emit('del', props.id);
};
</script>

<style scoped>
.todo-item {
  display: flex;
  align-items: center;
  height: 40px;
  padding: 0 40px;
  list-style: none;
  border-bottom: 1px solid #eee;
}
.todo-item span,
.todo-item input[type='text'] {
  flex: 1;
  margin-left: 20px;
}
.todo-item button {
  padding: 0 10px;
}

.completed {
  color: red;
  text-decoration: line-through;
}
</style>
