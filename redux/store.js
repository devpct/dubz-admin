import { createStore } from 'redux';

const initialState = {
  sidebar: false,
  navbar: false
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_SIDEBAR':
      return {
        ...state,
        sidebar: action.payload
      };
    case 'SET_NAVBAR':
      return {
        ...state,
        navbar: action.payload
      };
    default:
      return state;
  }
};

const store = createStore(rootReducer);

export default store;
