<template>
  <div id="app">
    <TodoHeader />
    <TodoInput @addTodoItem="addOneItem" />
    <TodoList
      :props-data="todoItems"
      @removeItem="removeOneItem"
      @toggleItem="toggleOneItem"
    />
    <TodoFooter @clearItems="clearAllItems"/>
  </div>
</template>

<script>
import TodoHeader from './components/TodoHeader.vue'
import TodoInput from './components/TodoInput.vue'
import TodoList from './components/TodoList.vue'
import TodoFooter from './components/TodoFooter.vue'

export default {
  name: 'App',
  components: {
    TodoHeader,
    TodoInput,
    TodoList,
    TodoFooter
  },
  data() {
    return {
      todoItems: [],
    }
  },
  created() {
    const dataLength = localStorage.length
    if(dataLength > 0) {
      for(let i=0; i < dataLength; i++) {
        const key = localStorage.key(i)
        if(key !== 'loglevel:webpack-dev-server') {
          const item = localStorage.getItem(key)
          this.todoItems.push(JSON.parse(item))
        }
      }
    }
  },
  methods: {
    addOneItem(item) {
      const obj = {completed: false, item: item}
      localStorage.setItem(item, JSON.stringify(obj))
      this.todoItems.push(obj)
    },
    removeOneItem(item, index) {
      this.todoItems.splice(index, 1)
      localStorage.removeItem(item.item)
    },
    toggleOneItem(item, index) {
      this.todoItems[index].completed = !this.todoItems[index].completed
      localStorage.removeItem(item.item)
      localStorage.setItem(item.item, JSON.stringify(item))
    },
    clearAllItems() {
      this.todoItems = []
      localStorage.clear()
    }
  }
}
</script>

<style>
body {
  text-align: center;
  background-color: #f6f6f6;
}
input {
  border-style: groove;
  width: 200px
}
button {
  border-style: groove;
  border: none;
  background-color: transparent;
  cursor: pointer;
}
.shadow {
  box-shadow: 5px 10px 10px rgba(0,0,0,0.03);
}
</style>
