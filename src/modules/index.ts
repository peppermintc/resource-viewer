import { combineReducers } from "redux";
import resourceReducer, { ResourceState } from "./resource";

export interface RootState {
  resource: ResourceState;
}

const rootReducer = combineReducers({
  resource: resourceReducer,
});

export default rootReducer;
