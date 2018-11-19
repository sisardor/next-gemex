import {delay} from 'redux-saga'
import {all, call, put, take, takeLatest} from 'redux-saga/effects'
import es6promise from 'es6-promise'
import 'isomorphic-unfetch'
import { productsLoaded } from 'containers/HomePage/actions';
import request from 'utils/request';

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


function * rootSaga () {
  yield all([
    yield takeLatest('LOAD_DATA', getRepos),
  ])
}

export default rootSaga
