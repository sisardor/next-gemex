import {delay} from 'redux-saga'
import {all, call, put, take, takeLatest} from 'redux-saga/effects'
import es6promise from 'es6-promise'
import 'isomorphic-unfetch'
import { productsLoaded, oneProductLoaded } from 'containers/HomePage/actions';
import request from 'utils/request';
import qs from 'qs'

es6promise.polyfill()



// import { makeSelectUsername } from 'containers/HomePage/selectors';

/**
 * Github repos request/response handler
 */
export function* getRepos() {
  // Select username from store
  const username = 'yield select(makeSelectUsername())';
  const requestURL = `http://localhost:4000/api/Products`;
  try {
    // Call our request helper (see 'utils/request')
    const products = yield call(request, requestURL);
    // console.log(products);
    yield put(productsLoaded(products));
  } catch (err) {
    // yield put(repoLoadingError(err));
  }
}


export function* getById(action) {
  // Select username from store
  const id = action.id
  const username = 'yield select(makeSelectUsername())';
  const filter = {
    include: [ 'category', 'owner', 'tags']
  }
  let queryString = '?' + qs.stringify({ filter })

  const requestURL = `http://localhost:4000/api/Products/${id}${queryString}`;
  // console.log('Bingo !!');
  try {
    // Call our request helper (see 'utils/request')
    const product = yield call(request, requestURL);
    yield put(oneProductLoaded(product));
  } catch (err) {
    // yield put(repoLoadingError(err));
  }
}

function * rootSaga () {
  yield all([
    yield takeLatest('LOAD_DATA', getRepos),
    yield takeLatest('FETCH_BY_ID', getById),
  ])
}

export default rootSaga




// // foo.js
// export const fooSagas = [
//   takeEvery("FOO_A", fooASaga),
//   takeEvery("FOO_B", fooBSaga),
// ]
//
// // bar.js
// export const barSagas = [
//   takeEvery("BAR_A", barASaga),
//   takeEvery("BAR_B", barBSaga),
// ];
//
// // index.js
// import { fooSagas } from './foo';
// import { barSagas } from './bar';
//
// export default function* rootSaga() {
//   yield all([
//     ...fooSagas,
//     ...barSagas
//   ])
// }