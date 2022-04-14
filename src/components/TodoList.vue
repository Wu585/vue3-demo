<script setup lang="ts">
import {computed, ref} from 'vue';

interface TodoItem {
  msg: string,
  done: boolean
}

const todoMsg = ref('');
const list = ref<TodoItem[]>([
  {msg: '吃饭', done: false},
  {msg: '喝水', done: true},
  {msg: '打游戏', done: false},
]);
const hasDown = computed(() => list.value.filter(item => item.done).length);
const add = () => {
  if (todoMsg.value) {
    list.value.push({
      msg: todoMsg.value,
      done: false
    });
  }
};
const clearMsg = () => {
  todoMsg.value = '';
};
const deleteOne = (index: number) => {
  list.value.splice(index, 1);
};
const isAllDone = computed<boolean>({     // 所有的事项是否完成，双向绑定到全选按钮
  get() {  // isAllDone 的获取方法，用于双向绑定数据
    return hasDown.value === list.value.length;
  },
  set(value: boolean) {   // isAllDone 的更改方法，用于实现全选 和 取消全选功能
    list.value.forEach(item => {
      item.done = value;
    });
  }
});
</script>

<template>
  <input type="text" v-model="todoMsg">
  <button @click="add">添加</button>
  <button @click="clearMsg">清理</button>
  <div>
    <div v-for="(item,index) in list" :key="item.msg">
      <span :class="{done:item.done}">{{ item.msg }}</span>
      <input type="checkbox" v-model="item.done">
      <span @click="deleteOne(index)">X</span>
    </div>
    <div>
      <span>全选</span>
      <input type="checkbox" v-model="isAllDone">
      <span>{{ hasDown }}/{{ list.length }}</span>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.done {
  text-decoration: line-through;
  color: gray;
}
</style>
