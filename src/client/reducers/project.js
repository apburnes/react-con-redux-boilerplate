import { Map } from 'immutable';
import { UPDATE_PROJECT_TITLE, UPDATE_PROJECT_URL,
  UPDATE_PROJECT_USER, UPDATE_PROJECT_REPO, PROJECT_INFO } from '../constants/project';

export function projectInfo(state = PROJECT_INFO, act) {
  const action = Map(act);

  if (action.get('type') === UPDATE_PROJECT_TITLE) {
    return state.merge(action.delete('type'));
  }

  if (action.get('type') === UPDATE_PROJECT_URL) {
    return state.merge(action.delete('type'));
  }

  if (action.get('type') === UPDATE_PROJECT_REPO) {
    return state.merge(action.delete('type'));
  }

  if (action.get('type') === UPDATE_PROJECT_USER) {
    return state.merge(action.delete('type'));
  }

  return state;
}
