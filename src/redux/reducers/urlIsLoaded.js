import { SET_URL_IS_LOADED } from "../actionTypes";

const initialState = {
  urlIsLoaded: false,
};

const urlIsLoadedReduser = (state = initialState, action) => {
  switch (action.type) {
    case SET_URL_IS_LOADED: {
      return {
        ...state,
        urlIsLoaded: true,
      };
    }
    default:
      return state;
  }
};

export default urlIsLoadedReduser;
