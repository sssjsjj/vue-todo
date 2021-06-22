<template>
  <div class="container">
    <button class="btn-clear-all" @click="clearTodo">Clear All</button>
  </div>
</template>

<script>
export default {
  methods: {
    clearTodo() {
      this.$emit('clearItems')
    },
  }
}
</script>

<style scoped>
.btn-clear-all {
  width: 8.5rem;
  height: 50px;
  line-height: 50px;
  background-color: #fff;
  border-radius: 5px;
  margin: 0 auto;
  color: #e20303;
}
</style>