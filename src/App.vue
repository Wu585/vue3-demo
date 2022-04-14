<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import Test from './components/Test.vue';
import MyButton from './components/MyButton.vue';
import TodoList from './components/TodoList.vue';
const x = (content:string)=>{
  console.log(content);
}
</script>

<template>
  <Test/>
  <MyButton @change="x" content="这是一个按钮"/>
  <TodoList/>
  <router-view></router-view>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
