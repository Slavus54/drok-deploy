import {takeEvery, put, call, delay} from 'redux-saga/effects';
import {LOAD} from './actionTypes';
import {putData} from './action';

function fetchData (): object {
    return fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(res => res.json())
}
function* WorkerData () {
    const data = yield call(fetchData);
    yield delay(2000);
    yield put(putData(data))
    console.log('async working')
}

export function* watchLoadData () {
    yield takeEvery(LOAD, WorkerData)
}