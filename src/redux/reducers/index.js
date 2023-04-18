import { combineReducers } from "redux";
import repo from "./repo";
import url from "./url";
import urlIsLoaded from "./urlIsLoaded";
import issues from "./issues"

export default combineReducers({ url, repo, urlIsLoaded, issues });