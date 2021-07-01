import axios from 'axios';

export function requestGetTodos() {
  return axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10');
}
