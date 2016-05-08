import { expect } from 'chai';
import { Map } from 'immutable';
import { projectInfo } from '../src/client/reducers/project';
import { UPDATE_PROJECT_TITLE, UPDATE_PROJECT_URL,
  UPDATE_PROJECT_USER, UPDATE_PROJECT_REPO } from '../src/client/constants/project';

const initState = Map({
  title: 'test',
  url: 'example.com',
  user: 'example-user',
  repo: 'example-repo'
});

const noAction = Map();

const updateRepo = initState.merge(Map({repo: 'update-repo'}));
const updateUrl = initState.merge(Map({url: 'other.example.com'}));
const updateUser = initState.merge(Map({user: 'update-user'}));
const updateTitle = initState.merge(Map({title: 'updated'}));

describe('project - reducers', () => {
  it('should return unadulterated initial state', () => {
    const initial = projectInfo(initState, noAction);
    return expect(initial).to.equal(initState);
  });

  it('should return updated title', () => {
    const update = projectInfo(initState, Map({
      type: UPDATE_PROJECT_TITLE,
      title: 'updated'
    }));

    return expect(update).to.equal(updateTitle);
  });

  it('should return updated url', () => {
    const update = projectInfo(initState, Map({
      type: UPDATE_PROJECT_URL,
      url: 'other.example.com'
    }));

    return expect(update).to.equal(updateUrl);
  });

  it('should return updated user', () => {
    const update = projectInfo(initState, Map({
      type: UPDATE_PROJECT_USER,
      user: 'update-user'
    }));

    return expect(update).to.equal(updateUser);
  });

  it('should return updated repo', () => {
    const update = projectInfo(initState, Map({
      type: UPDATE_PROJECT_REPO,
      repo: 'update-repo'
    }));

    return expect(update).to.equal(updateRepo);
  });
});
