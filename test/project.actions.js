import { expect } from 'chai';
import { Map } from 'immutable';
import { updateProjectTitle, updateProjectUrl,
 updateProjectRepo, updateProjectUser } from '../src/client/actions/project';
import { UPDATE_PROJECT_TITLE, UPDATE_PROJECT_URL,
 UPDATE_PROJECT_REPO, UPDATE_PROJECT_USER } from '../src/client/constants/project';

const updateTitle = 'updated';
const updateUrl = 'update.example.com';
const updateRepo = 'updated-repo';
const updateUser = 'updated-user';

describe('project - actions', () => {
  it('should update title', () => {
    const updated = updateProjectTitle(updateTitle);
    expect(updated).to.equal(Map({type: UPDATE_PROJECT_TITLE, title: updateTitle}));
  });

  it('should update url', () => {
    const updated = updateProjectUrl(updateUrl);
    expect(updated).to.equal(Map({type: UPDATE_PROJECT_URL, url: updateUrl}));
  });

  it('should update repo', () => {
    const updated = updateProjectRepo(updateRepo);
    expect(updated).to.equal(Map({type: UPDATE_PROJECT_REPO, repo: updateRepo}));
  });

  it('should update user', () => {
    const updated = updateProjectUser(updateUser);
    expect(updated).to.equal(Map({type: UPDATE_PROJECT_USER, user: updateUser}));
  });
});
