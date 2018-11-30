/*
 *
 * ListingView reducer
 *
 */

import { fromJS } from 'immutable';
import * as cons from './constants';

export const initialState = fromJS({ isLoading: false });

function listingViewReducer(state = initialState, action) {

  switch (action.type) {
    case cons.DEFAULT_ACTION:
      return state;
    case cons.ONE_LISTING_LOADED:
      return state
        .set(action.product.id, fromJS(action.product))
        .set('isLoading', false)
    case cons.FETCH_LISTING_BY_ID:
      return state.set('isLoading', true)
    default:
      return state;
  }
}

export default listingViewReducer;
