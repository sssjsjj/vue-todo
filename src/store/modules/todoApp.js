const storage = {
  fetch() {
    const arr = []
    const dataLength = localStorage.length
    if(dataLength > 0) {
      for(let i=0; i < dataLength; i++) {
        const key = localStorage.key(i)
        if(key !== 'loglevel:webpack-dev-server') {
          const item = localStorage.getItem(key)
          arr.push(JSON.parse(item))
        }
      }
    }
    return arr
  }
}

const state = {
  todoItems: storage.fetch()
}

const getters = {
  getTodoItems(state) {
    return state.todoItems
  }
}

const mutations = {
  addOneItem(state, todoItem) {
    const obj = {completed: false, item: todoItem}
    localStorage.setItem(todoItem, JSON.stringify(obj))
    state.todoItems.push(obj)
  },
  removeOneItem(state, payload) {
    const todoItem = payload.item
    const index = payload.index
  
    state.todoItems.splice(index, 1)
    localStorage.removeItem(todoItem.item)
  },
  toggleOneItem(state, payload) {
    const todoItem = payload.item
    const index = payload.index
    
    state.todoItems[index].completed = !state.todoItems[index].completed
    localStorage.removeItem(todoItem.item)
    localStorage.setItem(todoItem.item, JSON.stringify(state.todoItems[index]))
  },
  clearAllItems(state) {
    state.todoItems = []
    localStorage.clear()
  }
}

export default {
  state,
  getters,
  mutations
}