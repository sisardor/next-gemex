import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectHome = state => state.get('home', initialState);
const auth = state => state.get('auth', initialState);


// const makeSelectCurrentUser = () =>
//   createSelector(selectGlobal, globalState => globalState.get('currentUser'));

const makeSelectProducts = () =>
  createSelector(selectHome, homeState => homeState.get('products'));

const makeSelectProviders = () =>
  createSelector(auth, state => {
    if (state.has('providers'))
      return state.get('providers').toJS()
    else
      return {}
  });

const makeSelectSession = () =>
  createSelector(auth, state => {
    // console.log('state',state);
    if (state.has('session'))
      return state.get('session').toJS()
    else
      return {}
  });


export { selectHome, auth, makeSelectProducts,
  makeSelectProviders, makeSelectSession};
