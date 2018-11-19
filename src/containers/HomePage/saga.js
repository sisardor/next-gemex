/**
 * Gets the repositories of the user from Github
 */

import { call, put, select, takeLatest } from 'redux-saga/effects';
// import { LOAD_REPOS } from 'containers/App/constants';
import { productsLoaded } from './actions';

import request from 'utils/request';
// import { makeSelectUsername } from 'containers/HomePage/selectors';

/**
 * Github repos request/response handler
 */
export function* getRepos() {
  // Select username from store
  const username = 'yield select(makeSelectUsername())';
  const requestURL = `http://localhost:4000/api/Products`;
  // console.log('Bingo !!');
  try {
    // Call our request helper (see 'utils/request')
    const products = yield call(request, requestURL);
    // console.log(products);
    yield put(productsLoaded(products));
  } catch (err) {
    // yield put(repoLoadingError(err));
  }
}

export default function* githubData() {
  // yield call(getRepos);
  yield takeLatest('LOAD_DATA', getRepos);
}
