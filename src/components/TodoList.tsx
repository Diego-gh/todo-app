import TodoItem from './TodoItem';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import css from '../styles/components/TodoList.module.scss';

function TodoList() {
  const todos = useSelector((state: RootState) => state.todos);

  return (
    <ul className={css.listGroup}>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          id={todo.id}
          title={todo.title}
          completed={todo.completed}
        />
      ))}
    </ul>
  );
}

export default TodoList;
