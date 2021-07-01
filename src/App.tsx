import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import AddTodoForm from './components/AddTodoForm';
import TodoList from './components/TodoList';
import TotalItems from './components/TotalItems';
import { getTodos } from './redux/todoSlice';
import css from './styles/pages/App.module.scss';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTodos());
    // eslint-disable-next-line
  }, []);

  return (
    <div className={css.container}>
      <h1>My Todo List</h1>
      <AddTodoForm />
      <TodoList />
      <TotalItems />
    </div>
  );
}
export default App;
