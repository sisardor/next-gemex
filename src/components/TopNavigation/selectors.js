import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectHome = state => state.get('topNavigation', initialState);


// const makeSelectCurrentUser = () =>
//   createSelector(selectGlobal, globalState => globalState.get('currentUser'));

const makeSelectProducts = () =>
  createSelector(selectHome, homeState => homeState.get('products'));

export { selectHome, makeSelectProducts };
