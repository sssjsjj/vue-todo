<template>
  <div>
      <transition-group name="list" tag="ul">
        <li
          v-for="(item, index) in propsData"
          :key="`${item.item}-${index}`"
          class="shadow"
        >
          <button
            class="btn-check"
              :class="{ 'btn-check-completed': item.completed }"
            @click="toggleComplete(item, index)"
          >
            <i class="fas fa-check"></i>
          </button>
          <span :class="{ 'text-completed': item.completed }">{{ item.item }}</span>
          <button class="btn-remove" @click="removeTodo(item, index)">
            <i class="far fa-minus-square"></i>
          </button>
        </li>
      </transition-group>
  </div>
</template>

<script>
export default {
  props: ['propsData'],
  methods: {
    removeTodo(item, index) {
      this.$emit('removeItem', item, index)
    },
    toggleComplete(item, index) {
      this.$emit('toggleItem', item, index)
    },
  }
}
</script>

<style scroped>
ul {
  list-style-type: none;
  padding-left: 0;
  margin-top: 0;
  text-align: left;
}
li {
  display: flex;
  min-height: 50px;
  height: 50px;
  line-height: 50px;
  margin: 0.5rem 0;
  padding: 0 0.9rem;
  background-color: #fff;
  border-radius: 5px;  
}
.btn-check {
  line-height: 56px;
  color: #62acde;
  margin-right: 5px;
}
.btn-check-completed {
  color: #b3adad;
}
.text-completed {
  text-decoration: line-through;
  color: #b3adad;
}
.btn-remove {
  margin-left: auto;
  color: #de4343;
}

/*  리스트 아이템 트랜지션 효과 */
.list-enter-active, .list-leave-active {
  transition: all 1s;
}
.list-enter, .list-leave-to /* .list-leave-active below version 2.1.8 */ {
  opacity: 0;
  transform: translateY(30px);
}
</style>