import { call, put } from '@redux-saga/core/effects';
import { AxiosResponse } from 'axios';
import { todo } from '../../../types/todo';
import { setTodos } from '../../todoSlice';
import { requestGetTodos } from '../requests/getTodos';

export function* getTodoHandler() {
  try {
    const { data }: AxiosResponse<todo[]> = yield call(requestGetTodos);
    console.log(data);
    yield put(setTodos(data));
  } catch (error) {
    console.log(error);
  }
}
