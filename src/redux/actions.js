import { SET_ISSUES } from "./actionTypes";

export const setIssues = issues => ({
    type: SET_ISSUES,
    payload: issues
  });