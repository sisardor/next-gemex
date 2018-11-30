import { take, call, put, select, takeLatest } from 'redux-saga/effects';
import qs from 'qs';
import request from 'utils/request';
import { one_listing_loaded } from './actions';
import * as cons from './constants';

// Individual exports for testing
export default function* defaultSaga() {}


export function* getById(action) {
  const id = action.id
  const filter = {
    include: [ 'category', 'owner' ]
  }
  let queryString = '?' + qs.stringify({ filter })

  const requestURL = `http://localhost:4000/api/Products/${id}${queryString}`;
  try {
    const product = yield call(request, requestURL);
    yield put(one_listing_loaded(product));
  } catch (err) {
    // yield put(repoLoadingError(err));
  }
}

export const listingViewSagas = [
  takeLatest(cons.FETCH_LISTING_BY_ID, getById)
]
