import { fromJS } from 'immutable';
import listingViewReducer from '../reducer';

describe('listingViewReducer', () => {
  it('returns the initial state', () => {
    expect(listingViewReducer(undefined, {})).toEqual(fromJS({}));
  });
});
