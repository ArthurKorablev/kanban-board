import { SET_BOARDS } from "../actionTypes";

const initialState = {
  boards: [],
};

const boardsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_BOARDS: {
      const { statuses, issues } = action.payload;
      let boardsWithIssues = [];
      for (let i = 0; i < statuses.length; i++) {
        const filteredIssues = issues.filter(
          (issue) => issue.currentStatus === statuses[i]
        );
        boardsWithIssues.push({
          title: statuses[i],
          issues: filteredIssues,
        });
      }
      return {
        ...state,
        boards: boardsWithIssues,
      };
    }
    default:
      return state;
  }
};

export default boardsReducer;
