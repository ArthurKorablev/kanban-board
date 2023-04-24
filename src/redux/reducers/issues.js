import { SET_ISSUES } from "../actionTypes";

const initialState = {
  issues: [],
};

const issuesReduser = (state = initialState, action) => {
  switch (action.type) {
    case SET_ISSUES: {
      return {
        ...state,
        issues: action.payload,
      };
    }
    default:
      return state;
  }
};

export default issuesReduser;
