import { fromJS } from 'immutable';

export const initialState = fromJS({});

function adminPageReducer(state = initialState, action) {
  switch (action.type) {
    case 'DEFAULT_ACTION':
      return state;
    default:
      return state;
  }
}

export default adminPageReducer;
