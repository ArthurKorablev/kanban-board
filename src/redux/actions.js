import { SET_ISSUES } from "./actionTypes";
import { SET_REPO } from "./actionTypes";
import { SET_URL } from "./actionTypes";
import { SET_URL_IS_LOADED } from "./actionTypes";

export const setUrl = (url) => ({
  type: SET_URL,
  payload: url,
});

export const setIssues = (issues) => ({
  type: SET_ISSUES,
  payload: issues,
});

export const setRepo = (repo) => ({
  type: SET_REPO,
  payload: repo,
});

export const setUrlIsLoaded = (flag) => ({
  type: SET_URL_IS_LOADED,
  payload: flag,
});
