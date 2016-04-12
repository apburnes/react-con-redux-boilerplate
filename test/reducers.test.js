import expect from 'expect';
import homeReducer from '../src/js/reducers/homeReducer';
import * as constants from '../src/js/constants/AppConstants';

describe('defaultReducer', () => {

  it('should return the initial state', () => {
    expect(homeReducer(undefined, {})).toEqual({
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
    ).toEqual({
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
    ).toEqual({
      projectName: name
    });
  });
});
