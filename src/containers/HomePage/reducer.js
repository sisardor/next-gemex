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
// var Immutable = require('immutable');

// import { CHANGE_USERNAME } from './constants';

// The initial state of the App
export const initialState = fromJS({});

function homeReducer(state = initialState, action) {
  // if (state.get('products')) {
  //   var x = fromJS(state.get('products'))
  //   console.log('homeReducer', x.get(0).get('name'));
  // }
  // console.log('homeReducer', action.products);
  // console.log('check',fromJS(state.get('products')) instanceof Immutable.List);
  switch (action.type) {
    // case 'CHANGE_USERNAME':
    //   // Delete prefixed '@' from the github username
    //   return state.set('username', action.name.replace(/@/gi, ''));
    case 'LOAD_REPOS_SUCCESS':
      let _s = state
        .set('products', fromJS(action.products))
        .set('loading', false);
      // console.log('homeReducer', _s);
      return _s
    case 'CATEGORIES_LOADED':
      console.log('categories loaded', action);
      return state
    default:
      return state;
  }
}

export default homeReducer;
