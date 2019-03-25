/**
 * Types
 */
export const Types = {
  ADD_USER: 'users/ADD_USER',
  ADD_USER_SUCCESS: 'users/ADD_USER_SUCCESS',
  ADD_USER_FAILURE: 'users/ADD_USER_FAILURE',
  REMOVE_USER: 'users/REMOVE_USER',
  SET_VIEWPORT: 'users/SET_VIEWPORT',
  SET_VIEWPORT_SIZE: 'users/SET_VIEWPORT_SIZE',
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
      position: [-49.4060152740815, -28.699290962725723],
    },
  ],
  loading: false,
  viewport: {
    width: 400,
    height: 400,
    latitude: 37.7577,
    longitude: -122.4376,
    zoom: 15,
  },
};

export default function users(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.ADD_USER:
      return { ...state, loading: true };
    case Types.ADD_USER_SUCCESS:
      return {
        ...state,
        users: [...state.users, action.payload.user],
        loading: false,
      };
    case Types.ADD_USER_FAILURE:
      return { ...state, loading: false };
    case Types.REMOVE_USER:
      return {
        ...state,
        loading: false,
        users: state.users.filter(user => user.id !== action.payload.id),
      };
    case Types.SET_VIEWPORT:
      return {
        ...state,
        viewport: {
          ...state.viewport,
          latitude: action.payload.viewport.latitude,
          longitude: action.payload.viewport.longitude,
        },
      };
    case Types.SET_VIEWPORT_SIZE:
      return {
        ...state,
        viewport: {
          ...state.viewport,
          height: action.payload.viewport.height,
          width: action.payload.viewport.width,
        },
      };
    default:
      return state;
  }
}

/**
 * Actions
 */
export const Creators = {
  addUser: (user, position) => ({
    type: Types.ADD_USER,
    payload: { user, position },
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
  addSetViewport: viewport => ({
    type: Types.SET_VIEWPORT,
    payload: { viewport },
  }),
  addSetViewportSize: viewport => ({
    type: Types.SET_VIEWPORT_SIZE,
    payload: { viewport },
  }),
};
