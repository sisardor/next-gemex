/*
 *
 * MarketView reducer
 *
 */

import { fromJS } from 'immutable';
import { DEFAULT_ACTION } from './constants';
import * as cons from './constants';

export const initialState = fromJS({ isLoading: false });

function marketViewReducer(state = initialState, action) {
  switch (action.type) {
    case DEFAULT_ACTION:
      return state;
    case cons.LOADED_CATEGORY_PRODUCTS:
      return state
        .set('products', fromJS(action.products))
        .set('isLoading', false);
    default:
      return state;
  }
}

export default marketViewReducer;
