import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectNav = state => state.get('topNavigation', initialState);


// const makeSelectCurrentUser = () =>
//   createSelector(selectGlobal, globalState => globalState.get('currentUser'));

const makeSelectCategories = () =>
  createSelector(selectNav, state => state.get('categories'));

export { selectNav, makeSelectCategories };
