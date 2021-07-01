import { takeLatest } from '@redux-saga/core/effects';
import { getTodos } from '../todoSlice';
import { getTodoHandler } from './handlers/getTodos';

export function* watcherSaga() {
  yield takeLatest(getTodos.type, getTodoHandler);
}
