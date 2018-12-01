/*
 *
 * ListingView reducer
 *
 */

import { fromJS } from 'immutable';
import * as cons from './constants';

export const initialState = fromJS({ });

function listingViewReducer(state = initialState, action) {
  switch (action.type) {
    case cons.DEFAULT_ACTION:
      return state;
    case cons.CATEGORIES_LOADED:
      return state.set('categories', fromJS(action.categories));
    default:
      return state;
  }
}

export default listingViewReducer;
