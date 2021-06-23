const addOneItem = (state, todoItem) => {
  const obj = {completed: false, item: todoItem}
  localStorage.setItem(todoItem, JSON.stringify(obj))
  state.todoItems.push(obj)
}
const removeOneItem = (state, payload) => {
  const todoItem = payload.item
  const index = payload.index

  state.todoItems.splice(index, 1)
  localStorage.removeItem(todoItem.item)
}
const toggleOneItem = (state, payload) => {
  const todoItem = payload.item
  const index = payload.index
  
  state.todoItems[index].completed = !state.todoItems[index].completed
  localStorage.removeItem(todoItem.item)
  localStorage.setItem(todoItem, JSON.stringify(todoItem))
}
const clearAllItems = (state) => {
  state.todoItems = []
  localStorage.clear()
}

export {
  addOneItem,
  removeOneItem,
  toggleOneItem,
  clearAllItems
}