import { combineReducers } from "redux";
import resourceReducer, { ResourceState } from "./resource";

export interface RootState {
  resource: ResourceState;
}

const rootReducer = combineReducers({
  resourceList: resourceReducer,
});

export default rootReducer;
