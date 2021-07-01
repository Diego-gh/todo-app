import { todo } from '../types/todo';
import { useDispatch } from 'react-redux';
import { toggleComplete, deleteTodo } from '../redux/todoSlice';
import css from '../styles/components/TodoItem.module.scss';

function TodoItem(props: todo) {
  const dispatch = useDispatch();

  function completeHandler() {
    dispatch(toggleComplete({ id: props.id }));
  }

  function deletehandler() {
    dispatch(deleteTodo({ id: props.id }));
  }

  return (
    <li className={`${css.todoItem} ${props.completed ? css.checked : ''}`}>
      <input
        type="checkbox"
        checked={props.completed}
        onChange={completeHandler}
      />
      <span className={css.title}>{props.title}</span>
      <button className={css.deleteBtn} onClick={deletehandler}>
        Delete
      </button>
    </li>
  );
}

export default TodoItem;
