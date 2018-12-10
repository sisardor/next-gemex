import { take, call, put, select, takeLatest } from 'redux-saga/effects';
import request from 'utils/request';
import * as cons from './constants';
import {loadCategoryProducts, loadBreadcrumbs} from './actions';

export default function* defaultSaga() {}


export function* getProductWithCatPath(action) {
  let path = action.path
  const requestURL = `http://localhost:4000/api/categories/${path}/products`;
  try {
    const products = yield call(request, requestURL);
    yield put(loadCategoryProducts(products));
  } catch (err) {
    // yield put(repoLoadingError(err));
  }
}

export function* getBreadcrumbs(action) {
  let path = action.path
  const requestURL = `http://localhost:4000/api/categories/${path}/breadcrumbs`;
  try {
    const breadcrumbs = yield call(request, requestURL);
    console.log(breadcrumbs);
    yield put(loadBreadcrumbs(breadcrumbs));
  } catch (err) {
    // yield put(repoLoadingError(err));
  }
}

export const marketViewSagas = [
  takeLatest(cons.FETCH_CATEGORY_PRODUCTS, getProductWithCatPath),
  takeLatest(cons.FETCH_CATEGORY_PRODUCTS, getBreadcrumbs)
]
