import {delay} from 'redux-saga'
import {all, call, put, take, takeLatest} from 'redux-saga/effects'
import es6promise from 'es6-promise'
import qs from 'qs'
import 'isomorphic-unfetch'
import { productsLoaded, oneProductLoaded } from 'containers/HomePage/actions';
import { categoriesSagas } from 'containers/HomePage/saga';
import { listingViewSagas } from 'containers/ListingView/saga';
import { topNavigationSagas } from 'components/TopNavigation/saga';
import request from 'utils/request';


es6promise.polyfill()


function * rootSaga () {
  yield all([
    ...categoriesSagas,
    ...listingViewSagas,
    ...topNavigationSagas
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
