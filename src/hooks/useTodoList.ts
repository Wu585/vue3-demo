import {computed, ref} from 'vue';

const useTodoList = () => {

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
  return {todoMsg, hasDown, add, clearMsg, deleteOne, isAllDone,list};
};
export default useTodoList;
