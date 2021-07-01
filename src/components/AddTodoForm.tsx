import { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../redux/todoSlice';
import css from '../styles/components/AddTodoForm.module.scss';

function AddTodoForm() {
  const textFieldRef = useRef<HTMLInputElement>(null);
  const dispatch = useDispatch();

  function submitHandler(event: React.FormEvent) {
    event.preventDefault();
    const input = textFieldRef.current;
    if (input && input.value.length > 0) {
      if (input.value.length > 50) {
        alert('Character value exceeds the max of 50 characters');
      } else {
        dispatch(
          addTodo({
            title: input.value,
          })
        );
        input.value = '';
      }
    }
  }

  return (
    <form className={css.todoForm} onSubmit={submitHandler}>
      <input type="text" placeholder="Add todo" ref={textFieldRef} />
      <button className={css.submitBtn}>Submit</button>
    </form>
  );
}

export default AddTodoForm;
