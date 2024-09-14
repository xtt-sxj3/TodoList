import { ref, watch, onMounted } from 'vue';

export default function useTodos() {
  const todos = ref([]);

  const getTodos = () => {
    const todoLists = JSON.parse(localStorage.getItem('todoLists')) || [];
    todos.value = todoLists;
  };

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

  const handleToggleAll = checked => {
    todos.value.forEach(todo => (todo.done = checked));
  };

  const handleDeleteTodo = id => {
    const index = todos.value.findIndex(todo => todo.id === id);
    todos.value.splice(index, 1);
  };

  const handleClearDone = () => {
    todos.value = todos.value.filter(todo => !todo.done);
  };

  const handleClearAll = () => {
    todos.value = [];
  };

  watch(
    todos,
    () => {
      localStorage.setItem('todoLists', JSON.stringify(todos.value));
    },
    { deep: true }
  );

  onMounted(() => {
    getTodos();
  });

  return {
    todos,
    getTodos,
    handleAddTodo,
    handleToggle,
    handleEdit,
    handleToggleAll,
    handleDeleteTodo,
    handleClearDone,
    handleClearAll,
  };
}
