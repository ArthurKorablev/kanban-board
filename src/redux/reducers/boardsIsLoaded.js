import { SET_BOARDS_IS_LOADED } from "../actionTypes";

const initialState = {
  boardsIsLoaded: false,
};

const boardsIsLoadedReduser = (state = initialState, action) => {
  switch (action.type) {
    case SET_BOARDS_IS_LOADED: {
      return {
        ...state,
        urlIsLoaded: action.payload
      };
    }
    default:
      return state;
  }
};

export default boardsIsLoadedReduser;