/*
 *
 * ListingView reducer
 *
 */

import { fromJS } from 'immutable';
import { DEFAULT_ACTION } from './constants';

export const initialState = fromJS({ isLoading: false });

function listingViewReducer(state = initialState, action) {

  switch (action.type) {
    case DEFAULT_ACTION:
      return state;
    case 'ONE_LOAD_REPO_SUCCESS':

      return state
        .set(action.product.id, fromJS(action.product))
        .set('isLoading', false)
    case 'FETCH_BY_ID':
      return state.set('isLoading', true)
    default:
      return state;
  }
}

export default listingViewReducer;
