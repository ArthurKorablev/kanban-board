import {
  SET_ISSUES,
  SET_REPO,
  SET_URL,
  SET_URL_IS_LOADED,
  SET_BOARDS,
  SET_BOARDS_IS_LOADED,
} from "./actionTypes";

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

export const setBoards = (statuses, issues) => ({
  type: SET_BOARDS,
  payload: { statuses: statuses, issues: issues },
});

export const setBoardsIsLoaded = (flag) => ({
  type: SET_BOARDS_IS_LOADED,
  payload: flag
});
