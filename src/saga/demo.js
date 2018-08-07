import { delay } from 'redux-saga'
import { put, takeEvery } from 'redux-saga/effects'
function* demoAsync() {
  yield delay(1000)
  yield put({ type: 'CREATE', state: { key: 'Hello World' } })
}


export function* watchDemoAsync() {
  yield takeEvery('DEMO_ASYNC', demoAsync)
}
