import languageProviderReducer from '../languageProvider.reducer';
import { CHANGE_LOCALE } from '../languageProvider.constant';

/* eslint-disable default-case, no-param-reassign */
describe('languageProviderReducer', () => {
  it('returns the initial state', () => {
    expect(languageProviderReducer(undefined, {})).toEqual({
      locale: 'en',
    });
  });

  it('changes the locale', () => {
    expect(
      languageProviderReducer(undefined, {
        type: CHANGE_LOCALE,
        locale: 'de',
      }),
    ).toEqual({
      locale: 'de',
    });
  });
});
