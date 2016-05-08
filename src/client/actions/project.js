import { Map } from 'immutable';
import { UPDATE_PROJECT_TITLE, UPDATE_PROJECT_URL,
  UPDATE_PROJECT_REPO, UPDATE_PROJECT_USER } from '../constants/project';

export function updateProjectTitle(text) {
  return Map({
    type: UPDATE_PROJECT_TITLE,
    title: text
  });
}

export function updateProjectUrl(url) {
  return Map({
    type: UPDATE_PROJECT_URL,
    url: url
  });
}

export function updateProjectRepo(repo) {
  return Map({
    type: UPDATE_PROJECT_REPO,
    repo: repo
  });
}

export function updateProjectUser(user) {
  return Map({
    type: UPDATE_PROJECT_USER,
    user: user
  });
}
