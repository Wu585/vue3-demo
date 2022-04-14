<script setup lang="ts">
import useTodoList from '../hooks/useTodoList';

const {todoMsg, add, clearMsg, list, deleteOne, isAllDone, hasDown} = useTodoList();
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
