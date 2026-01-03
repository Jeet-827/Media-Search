import { configureStore } from "@reduxjs/toolkit";
import DataReducer from "./DataSlice";
const store = configureStore({
  reducer: {
    search: DataReducer,
  },
});

export default store;
