import { ME_FETCH_SUCCESS, ME_FETCH_FAIL } from '../actions/me';
import { AUTH_LOGGED_OUT } from '../actions/auth';
import { Map as ImmutableMap, fromJS } from 'immutable';

const initialState = null;

export default function me(state = initialState, action) {
  switch(action.type) {
  case ME_FETCH_SUCCESS:
    return fromJS(action.me.id);
  case ME_FETCH_FAIL:
    return false;
  case AUTH_LOGGED_OUT:
    return false;
  default:
    return state;
  }
};
