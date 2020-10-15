import { CHANGE_USERNAME } from '../home.page.constant';

import { changeUsername } from '../home.page.action';

describe('Home Actions', () => {
  describe('changeUsername', () => {
    it('should return the correct type and the passed name', () => {
      const fixture = 'Max';
      const expectedResult = {
        type: CHANGE_USERNAME,
        username: fixture,
      };

      expect(changeUsername(fixture)).toEqual(expectedResult);
    });
  });
});
