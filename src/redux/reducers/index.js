import { combineReducers } from "redux";
import repo from "./repo";
import url from "./url";

export default combineReducers({ url, repo });