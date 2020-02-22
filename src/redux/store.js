import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import rootReduser from "./rootReduser";

const middleware = [thunk];

const store = configureStore({
  reducer: rootReduser,
  middleware
});

export default store;
