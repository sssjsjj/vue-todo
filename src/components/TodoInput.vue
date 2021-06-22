<template>
  <div class="box-input shadow">
    <input ref="todoInput" type="text" v-model="newTodoItem" @keyup.enter="addTodo">
    <!-- <button ref="buttonAddTodo" @click="addTodo">add</button> -->
    <button class="btn-add" @click="addTodo">
      <i class="far fa-plus-square"></i>
    </button>

    <Modal v-if="showModal" @close="showModal = false">
      <h3 slot="header">앗 고객님</h3>
      <p slot="body">할 일을 입력해 주세요</p>
    </Modal>
  </div>
</template>

<script>
import Modal from './common/Modal.vue'

export default {
  props: ['propsData'],
  components: {
    Modal
  },
  data() {
    return {
      newTodoItem: "",      
      showModal: false
    }
  },
  methods: {
    addTodo() {
      if(this.newTodoItem !== '') {
        this.$emit('addTodoItem', this.newTodoItem)
        this.clearInput()
        this.focusInput()
      } else {
        this.showModal = true
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
  border-radius: 5px;
}
.box-input input {
  flex: 1;
  padding: 0 15px;
  border-style: none;
  font-size: 0.9rem;
}
.btn-add {
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