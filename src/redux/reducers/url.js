import { SET_URL } from "../actionTypes";

const initialState = {
    url: '',
  };

  const urlReduser = (state = initialState, action) => {
    switch (action.type) {
      case SET_URL: {
        return {
          ...state,
          url: action.payload,
        };
      }
      default:
        return state;
    }
  }

  export default urlReduser;