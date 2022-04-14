import {RouteRecordRaw} from 'vue-router';
import Home from '../components/Home.vue';
import TodoList from '../components/TodoList.vue';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/todo',
    component: TodoList
  }
];
export default routes;
