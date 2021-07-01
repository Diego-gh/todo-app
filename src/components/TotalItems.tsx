import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import css from '../styles/components/TotalItems.module.scss';

function TotalItems() {
  const todos = useSelector((state: RootState) => state.todos.length);

  return (
    <div className={css.counter}>
      <h3>Total Items: {todos}</h3>
    </div>
  );
}

export default TotalItems;
