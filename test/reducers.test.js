import { expect } from 'chai';
import homeReducer from '../src/client/reducers/homeReducer';
import * as constants from '../src/client/constants/AppConstants';

describe('defaultReducer', () => {

  it('should return the initial state', () => {
    expect(homeReducer(undefined, {})).to.eql({
      projectName: 'React.js Boilerplate',
      ownerName: 'mxstbr'
    });
  });


  it('should handle the CHANGE_OWNER_NAME action', () => {
    const name = 'samsmith';

    expect(
      homeReducer({}, {
        type: constants.CHANGE_OWNER_NAME,
        name
      })
    ).to.eql({
      ownerName: name
    });
  });


  it('should handle the CHANGE_PROJECT_NAME action', () => {
    const name = 'Webapplication Boilerplate';

    expect(
      homeReducer({}, {
        type: constants.CHANGE_PROJECT_NAME,
        name
      })
    ).to.eql({
      projectName: name
    });
  });
});
