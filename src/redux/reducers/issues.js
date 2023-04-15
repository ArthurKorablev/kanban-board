import { SET_ISSUES } from "../actionTypes";

const initialState = {
    issues: []
  };

  const issuesReduser = (state = initialState, action) => {
    switch (action.type) {
      case SET_ISSUES: {
        const { issues } = action.payload;
        return {
          ...state,
          issues
        };
      }
      default:
        return state;
    }
  }

  export default issuesReduser;