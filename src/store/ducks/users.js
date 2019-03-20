/**
 * Types
 */
export const Types = {
  ADD_USER: 'users/ADD_USER',
  ADD_USER_SUCCESS: 'users/ADD_USER_SUCCESS',
  ADD_USER_FAILURE: 'users/ADD_USER_FAILURE',
  REMOVE_USER: 'users/REMOVE_USER',
};

/**
 * Reducers
 */
const INITIAL_STATE = {
  users: [
    {
      login: 'gabriel-hahn',
      id: 19672684,
      avatar_url: 'https://avatars2.githubusercontent.com/u/19672684?v=4',
      name: 'Gabriel Hahn Schaeffer',
    },
  ],
};

export default function users(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.ADD_USER:
      return { ...state };
    case Types.ADD_USER_SUCCESS:
      return {
        ...state,
        users: [...state.users, action.payload.user],
      };
    case Types.ADD_USER_FAILURE:
      return { ...state };
    case Types.REMOVE_USER:
      return { ...state };
    default:
      return state;
  }
}

/**
 * Actions
 */
export const Creators = {
  addUser: user => ({
    type: Types.ADD_USER,
    payload: { user },
  }),
  addUserSuccess: user => ({
    type: Types.ADD_USER_SUCCESS,
    payload: { user },
  }),
  addUserFailure: error => ({
    type: Types.ADD_USER_FAILURE,
    payload: { error },
  }),
  addRemoveUser: id => ({
    type: Types.REMOVE_USER,
    payload: { id },
  }),
};
