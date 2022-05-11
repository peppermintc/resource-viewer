import { Dispatch } from "redux";

// Interfaces
interface Action {
  type: string;
  payload: [];
}

export interface ResourceState {
  resourceList: string[];
}

// Action Types
const SET_RESOURCE_LIST = "SET_RESOURCE_LIST";

// Action Creators
export const setResourceList =
  (newResourceList: string[]) => (dispatch: Dispatch) => {
    dispatch({
      type: SET_RESOURCE_LIST,
      payload: newResourceList,
    });
  };

// Initial State
const initialState: ResourceState = {
  resourceList: [],
};

// Reducer
const resourceReducer = (
  state: ResourceState = initialState,
  action: Action
) => {
  switch (action.type) {
    case SET_RESOURCE_LIST:
      return {
        ...state,
        resourceList: action.payload,
      };
    default:
      return state;
  }
};

export default resourceReducer;
