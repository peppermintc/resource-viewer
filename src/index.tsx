import React from "react";
import App from "./App";
import rootReducer from "./modules";
import ReduxThunk from "redux-thunk";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { applyMiddleware, createStore, Store } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import "./index.css";

const store: Store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(ReduxThunk))
);

const container = document.getElementById("root")!;
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
