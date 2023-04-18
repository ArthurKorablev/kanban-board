import { combineReducers } from "redux";
import repo from "./repo";
import url from "./url";
import urlIsLoaded from "./urlIsLoaded";

export default combineReducers({ url, repo, urlIsLoaded });