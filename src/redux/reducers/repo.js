import { SET_REPO } from "../actionTypes";

const initialState = {
    repo: {},
    repoIsLoaded: false
  };

  const repoReduser = (state = initialState, action) => {
    switch (action.type) {
      case SET_REPO: {
        return {
          ...state,
          repo: action.payload,
          repoIsLoaded: true
        };
      }
      default:
        return state;
    }
  }

  export default repoReduser;