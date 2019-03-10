import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectHome = state => state.get('home', initialState);
const auth = state => state.get('auth', initialState);


// const makeSelectCurrentUser = () =>
//   createSelector(selectGlobal, globalState => globalState.get('currentUser'));

const makeSelectProducts = () =>
  createSelector(selectHome, homeState => homeState.get('products'));

const makeSelectProviders = () =>
  createSelector(auth, state => state.get('providers').toJS());

const makeSelectSession = () =>
  createSelector(auth, state => state.get('session').toJS());


export { selectHome, auth, makeSelectProducts,
  makeSelectProviders, makeSelectSession};
