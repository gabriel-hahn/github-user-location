import { call, put, select } from 'redux-saga/effects';
import api from '../../services/api';

import { Creators as UserActions } from '../ducks/users';

export function* addUser(action) {
  try {
    const { data } = yield call(api.get, `/users/${action.payload.user}`);

    // Verify if user already exists
    const isDuplicated = yield select(state => state.users.find(user => user.id === data.id));

    if (isDuplicated) {
      yield put(UserActions.addUserFailure('User already exists in side menu'));
    } else {
      const userData = {
        id: data.id,
        name: data.full_name,
        description: data.description,
        url: data.html_url,
      };

      yield put(UserActions.addUserSuccess(userData));
    }
  } catch (err) {
    yield put(
      UserActions.addUserFailure('Something wrong happened during get information of user'),
    );
  }
}
