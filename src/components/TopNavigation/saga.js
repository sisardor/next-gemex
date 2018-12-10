import { take, call, put, select, takeLatest } from 'redux-saga/effects';
import qs from 'qs';
import request from 'utils/request';
import { categoriesLoaded } from './actions';
import * as cons from './constants';

// Individual exports for testing
export default function* defaultSaga() {}

export function* fetchCategories() {
  const requestURL = `http://atomex.io:4000/api/Categories`;
  try {
    const categories = yield call(request, requestURL);
    yield put(categoriesLoaded(categories));
  } catch (err) {
    // yield put(repoLoadingError(err));
  }
}

export const topNavigationSagas = [
  takeLatest(cons.FETCH_CATEGORIES, fetchCategories)
]
