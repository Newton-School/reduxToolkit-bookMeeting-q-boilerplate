import { configureStore } from "@reduxjs/toolkit";
import meetingReducer from "./features/meetingSlice";

const store = configureStore({
  reducer: {},
});

export default store;
