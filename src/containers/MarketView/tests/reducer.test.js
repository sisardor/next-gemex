import { fromJS } from 'immutable';
import marketViewReducer from '../reducer';

describe('marketViewReducer', () => {
  it('returns the initial state', () => {
    expect(marketViewReducer(undefined, {})).toEqual(fromJS({}));
  });
});
