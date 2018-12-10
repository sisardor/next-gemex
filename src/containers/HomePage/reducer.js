/*
 * HomeReducer
 *
 * The reducer takes care of our data. Using actions, we can change our
 * application state.
 * To add a new action, add it to the switch statement in the reducer function
 *
 * Example:
 * case YOUR_ACTION_CONSTANT:
 *   return state.set('yourStateVariable', true);
 */
import Immutable, { fromJS } from 'immutable';
import * as cons from './constants';

export const initialState = fromJS({isLoading: false});

function homeReducer(state = initialState, action) {
  switch (action.type) {
    case cons.LISTINGS_LOADED:
      return state
        .set('products', fromJS(action.products))
        .set('isLoading', false);
    default:
      return state;
  }
}

export default homeReducer;
