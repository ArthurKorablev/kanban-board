import { SET_URL } from "../actionTypes";

const initialState = {
    url: '',
    urlIsLoaded: false
  };

  const urlReduser = (state = initialState, action) => {
    switch (action.type) {
      case SET_URL: {
        return {
          ...state,
          url: action.payload,
          urlIsLoaded: true
        };
      }
      default:
        return state;
    }
  }

  export default urlReduser;