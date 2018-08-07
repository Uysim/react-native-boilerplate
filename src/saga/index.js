import { all } from 'redux-saga/effects';
import { watchDemoAsync } from './demo';
export function* rootSaga() {
  yield all([
    watchDemoAsync()
  ])
}
