import { take, call, put, select, takeLatest } from 'redux-saga/effects';
import request from 'utils/request';
import * as cons from './constants';
import {loadCategoryProducts} from './actions';

// Individual exports for testing
export default function* defaultSaga() {}


export function* getProductWithCatPath(action) {
  // const filter = {
  //   include: [ 'category', 'owner' ]
  // }
  // let queryString = '?' + qs.stringify({ filter })
  let path = action.path
  const requestURL = `http://localhost:4000/api/categories/${path}/products`;
  try {
    const products = yield call(request, requestURL);
    yield put(loadCategoryProducts(products));
  } catch (err) {
    // yield put(repoLoadingError(err));
  }
}

export const marketViewSagas = [
  takeLatest(cons.FETCH_CATEGORY_PRODUCTS, getProductWithCatPath)
]
