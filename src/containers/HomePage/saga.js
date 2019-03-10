/**
 * Gets the repositories of the user from Github
 */

import { call, put, select, takeLatest } from 'redux-saga/effects';
import { productsLoaded, authProvidersLoaded, authSessionLoaded } from './actions';
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

export function* getAuthProviders() {
  const requestURL = `${API_URL}/auth/providers`;
  try {
    const providers = yield call(request, requestURL);
    yield put(authProvidersLoaded(providers));
  } catch (err) {
    // yield put(repoLoadingError(err));
  }
}

export function* getAuthSession() {
  const requestURL = `${API_URL}/auth/session`;
  try {
    const session = yield call(request, requestURL);
    yield put(authSessionLoaded(session));
  } catch (err) {
    // yield put(repoLoadingError(err));
  }
}

export const homepageSagas = [
  takeLatest(cons.FETCH_LISTINGS, getRepos),
  takeLatest(cons.FETCH_AUTH_PROVIDERS, getAuthProviders),
  takeLatest(cons.FETCH_AUTH_SESSION, getAuthSession)
]

export default function* githubData() {}
