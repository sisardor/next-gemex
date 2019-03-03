/**
 * Gets the repositories of the user from Github
 */

import { call, put, select, takeLatest } from 'redux-saga/effects';
import { productsLoaded } from './actions';
import * as cons from './constants';
import request from 'utils/request';
import { API_URL } from '../../utils/constants';

export function* getRepos() {
  const requestURL = `${API_URL}/api/Products`;
  try {
    const products = yield call(request, requestURL);
    yield put(productsLoaded(products));
  } catch (err) {
    // yield put(repoLoadingError(err));
  }
}


export const homepageSagas = [
  takeLatest(cons.FETCH_LISTINGS, getRepos)
]

export default function* githubData() {}
