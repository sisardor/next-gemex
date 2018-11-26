import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the listingView state domain
 */

const selectListingViewDomain = state =>
  state.get('listingView', initialState);

/**
 * Other specific selectors
 */

/**
 * Default selector used by ListingView
 */

const makeSelectListingView = () =>
  createSelector(selectListingViewDomain, substate => substate.toJS());

export default makeSelectListingView;
export { selectListingViewDomain };
