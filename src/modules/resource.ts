import { Dispatch } from "redux";
import { RootState } from ".";

// Interfaces
interface Action {
  type: string;
  payload: [];
}

export interface ResourceState {
  currentContent: string;
  resourceList: string[];
  showToast: boolean;
}

// Action Types
const SET_RESOURCE_LIST = "SET_RESOURCE_LIST";
const SET_CURRENT_CONTENT = "SET_CURRENT_CONTENT";
const SET_SHOW_TOAST = "SET_SHOW_TOAST";

// Action Creators
export const setCurrentContent =
  (newContent: string) => (dispatch: Dispatch) => {
    dispatch({
      type: SET_CURRENT_CONTENT,
      payload: newContent,
    });
  };

export const setResourceList =
  (newResourceList: string[]) => (dispatch: Dispatch) => {
    dispatch({
      type: SET_RESOURCE_LIST,
      payload: newResourceList,
    });
  };

export const changeResourceListItem =
  (index: number, value: string) =>
  (dispatch: Dispatch, getState: () => RootState) => {
    const newResourceList = getState().resource.resourceList;
    newResourceList[index] = value;
    dispatch({
      type: SET_RESOURCE_LIST,
      payload: newResourceList,
    });
  };

export const addResource =
  (value: string) => (dispatch: Dispatch, getState: () => RootState) => {
    let newResourceList = getState().resource.resourceList;
    newResourceList = [value, ...newResourceList];
    dispatch({
      type: SET_RESOURCE_LIST,
      payload: newResourceList,
    });
  };

export const deleteResource =
  (deleteIndex: number) => (dispatch: Dispatch, getState: () => RootState) => {
    let newResourceList = getState().resource.resourceList;
    newResourceList = newResourceList.filter(
      (item, index) => index !== deleteIndex
    );
    dispatch({
      type: SET_RESOURCE_LIST,
      payload: newResourceList,
    });
  };

export const showToast = () => (dispatch: Dispatch) => {
  dispatch({
    type: SET_SHOW_TOAST,
    payload: true,
  });

  setTimeout(() => {
    dispatch({
      type: SET_SHOW_TOAST,
      payload: false,
    });
  }, 2000);
};

// Initial State
const initialState: ResourceState = {
  currentContent: "",
  resourceList: [
    "https://www.youtube.com/embed/0OSUw7hJfVs",
    "https://www.robinwieruch.de/react-libraries/",
    "https://typed.blog/how-to-write-a-better-research-paper-faster/",
  ],
  showToast: false,
};

// Reducer
const resourceReducer = (
  state: ResourceState = initialState,
  action: Action
) => {
  switch (action.type) {
    case SET_CURRENT_CONTENT:
      return {
        ...state,
        currentContent: action.payload,
      };
    case SET_RESOURCE_LIST:
      return {
        ...state,
        resourceList: action.payload,
      };
    case SET_SHOW_TOAST:
      return {
        ...state,
        showToast: action.payload,
      };
    default:
      return state;
  }
};

export default resourceReducer;
