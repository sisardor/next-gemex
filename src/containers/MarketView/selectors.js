import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the marketView state domain
 */

const selectMarketViewDomain = state => state.get('marketView', initialState);

/**
 * Other specific selectors
 */

/**
 * Default selector used by MarketView
 */

const makeSelectMarketView = () =>
  createSelector(selectMarketViewDomain, substate => substate);

  const makeSelectCatProducts = () =>
    createSelector(selectMarketViewDomain, state => state.get('products'));

export default makeSelectMarketView;
export { selectMarketViewDomain, makeSelectCatProducts };
