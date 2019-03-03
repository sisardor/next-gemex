import { take, call, put, select, takeLatest } from 'redux-saga/effects';
import qs from 'qs';
import request from 'utils/request';
import { oneListingLoaded } from './actions';
import * as cons from './constants';
import { API_URL } from '../../utils/constants';

// Individual exports for testing
export default function* defaultSaga() {}


export function* getById(action) {
  const id = action.id
  const filter = {
    include: [ 'category', 'owner' ]
  }
  let queryString = '?' + qs.stringify({ filter })

  const requestURL = `${API_URL}/api/Products/${id}${queryString}`;
  try {
    const product = yield call(request, requestURL);
    yield put(oneListingLoaded(product));
  } catch (err) {
    // yield put(repoLoadingError(err));
  }
}

export const listingViewSagas = [
  takeLatest(cons.FETCH_LISTING_BY_ID, getById)
]
