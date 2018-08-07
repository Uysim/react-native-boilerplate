import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import reducers from '@src/reducers';
import { rootSaga } from '@src/saga';

const sagaMiddleware = createSagaMiddleware()

const defaultState = {
  count: 0
}

const store = createStore(
  reducers,
  defaultState,
  applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(rootSaga);

export default store;
