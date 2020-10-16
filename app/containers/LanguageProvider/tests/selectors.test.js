import { selectLanguage } from '../languageProvider.selector';
import { initialState } from '../languageProvider.reducer';

describe('selectLanguage', () => {
  it('should select the global state', () => {
    const globalState = {};
    const mockedState = {
      language: globalState,
    };
    expect(selectLanguage(mockedState)).toEqual(globalState);
  });
  it('should select the initial state', () => {
    const emptyState = {};
    expect(selectLanguage(emptyState)).toEqual(initialState);
  });
});
