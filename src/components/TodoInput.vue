<template>
  <div class="box-input shadow">
    <input ref="todoInput" type="text" v-model="newTodoItem" @keyup.enter="addTodo">
    <!-- <button ref="buttonAddTodo" @click="addTodo">add</button> -->
    <span class="container-add">
      <i class="far fa-plus-square btn-add" @click="addTodo"></i>
    </span>
  </div>
</template>

<script>
export default {
  props: ['propsData'],
  data() {
    return {
      newTodoItem: ""
    }
  },
  methods: {
    addTodo() {
      if(this.newTodoItem !== '') {
        this.$emit('addTodoItem', this.newTodoItem)
        this.clearInput()
        this.focusInput()
      } else {
        alert('할 일을 입력해 주세요')
      }
    },
    clearInput() {
      this.newTodoItem = '';
    },
    focusInput() {
      this.$refs.todoInput.focus()
    },
  }
}
</script>

<style scoped>
input:focus {
  outline: none;
}
.box-input {
  display: flex;
  height: 50px;
  background-color: #fff;
  line-height: 50px;
  border-radius: 5px;
}
.box-input input {
  flex: 1;
  padding: 0 15px;
  border-style: none;
  font-size: 0.9rem;
}
.container-add {
  display: block;
  width: 3rem;
  background: linear-gradient(to right, #6478f8, #8763f8);
  border-radius: 0 5px 5px 0;
}
.btn-add {
  color: #fff;
  vertical-align: middle;
  cursor: pointer;
}
</style>