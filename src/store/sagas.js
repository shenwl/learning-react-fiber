import { takeEvery, put } from 'redux-saga/effects'
import { GET_INIT_LIST } from './actionTypes'
import { initListAction } from './actionCreators'
import axios from 'axios'

function* getInitList() {
  try {
    const res = yield axios.get('http://0.0.0.0:3001/api/list')
    const action = initListAction(res.data)
    yield put(action)
  } catch(e) {
    console.log('getInitList网络请求失败')
  }
}

// 要用generator
function* todoSaga() {
  yield takeEvery(GET_INIT_LIST, getInitList)
}

export default todoSaga