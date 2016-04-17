import { expect } from 'chai';
import { changeOwnerName, changeProjectName } from '../src/client/actions/AppActions';
import { CHANGE_OWNER_NAME, CHANGE_PROJECT_NAME } from '../src/client/constants/AppConstants';

describe('AppActions', () => {
  describe('changeOwnerName', () => {
    it('should change the owner name', () => {
      const name = 'samsmith';
      const expectedResult = {
        type: CHANGE_OWNER_NAME,
        name
      };

      expect(changeOwnerName(name)).to.eql(expectedResult);
    });
  });

  describe('changeProjectName', () => {
    it('should change the project name', () => {
      const name = 'Webapplication Boilerplate';
      const expectedResult = {
        type: CHANGE_PROJECT_NAME,
        name
      };

      expect(changeProjectName(name)).to.eql(expectedResult);
    });
  });
});
