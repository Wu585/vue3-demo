import {defineStore} from 'pinia';
import {TodoItem} from '../hooks/useTodoList';

export const useStore = defineStore('todo-list', {
  // other options...
  state: () => {
    return {
      list: [
        {
          msg: '吃饭',
          done: false
        },
        {
          msg: '喝水',
          done: false
        },
        {
          msg: '打游戏',
          done: false
        }
      ] as TodoItem[]
    };
  }
});
