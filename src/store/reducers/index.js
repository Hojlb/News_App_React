import { combineReducers } from "redux";
import FreshNews from './FreshNews';
import FilterByTitle from "./FilterByTitle";

export default combineReducers({
  FreshNews,
  FilterByTitle,
});