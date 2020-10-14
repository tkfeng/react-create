import produce from 'immer';

import homeReducer from '../homepage.reducer';
import { changeUsername } from '../homepage.action';

/* eslint-disable default-case, no-param-reassign */
describe('homeReducer', () => {
  let state;
  beforeEach(() => {
    state = {
      username: '',
    };
  });

  it('should return the initial state', () => {
    const expectedResult = state;
    expect(homeReducer(undefined, {})).toEqual(expectedResult);
  });

  it('should handle the changeUsername action correctly', () => {
    const fixture = 'mxstbr';
    const expectedResult = produce(state, draft => {
      draft.username = fixture;
    });

    expect(homeReducer(state, changeUsername(fixture))).toEqual(expectedResult);
  });
});
