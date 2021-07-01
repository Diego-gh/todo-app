import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import todoReducer from './todoSlice';
import createSagaMiddleware from '@redux-saga/core';
import { watcherSaga } from './sagas/rootSagas';

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    todos: todoReducer,
  },
  middleware: [...getDefaultMiddleware({ thunk: false }), sagaMiddleware],
});

sagaMiddleware.run(watcherSaga);

export type RootState = ReturnType<typeof store.getState>;
export default store;
