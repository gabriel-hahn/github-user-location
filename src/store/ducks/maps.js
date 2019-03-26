/**
 * Types
 */
export const Types = {
  SET_VIEWPORT: 'maps/SET_VIEWPORT',
  SET_VIEWPORT_SIZE: 'maps/SET_VIEWPORT_SIZE',
};

/**
 * Reducers
 */
const INITIAL_STATE = {
  viewport: {
    width: 400,
    height: 400,
    latitude: 37.7577,
    longitude: -122.4376,
    zoom: 15,
  },
};

export default function maps(state = INITIAL_STATE, action) {
  switch (action.type) {
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
  addSetViewport: viewport => ({
    type: Types.SET_VIEWPORT,
    payload: { viewport },
  }),
  addSetViewportSize: viewport => ({
    type: Types.SET_VIEWPORT_SIZE,
    payload: { viewport },
  }),
};
