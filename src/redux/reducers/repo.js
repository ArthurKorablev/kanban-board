import { SET_REPO } from "../actionTypes";

const initialState = {
    repo: {},
    isLoaded: false
  };

  const repoReduser = (state = initialState, action) => {
    switch (action.type) {
      case SET_REPO: {
        return {
          ...state,
          repo: action.payload,
          isLoaded: true
        };
      }
      default:
        return state;
    }
  }

  export default repoReduser;