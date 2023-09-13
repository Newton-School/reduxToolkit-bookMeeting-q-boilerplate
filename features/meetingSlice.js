import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  meetings: [],
};

const meetingsSlice = createSlice({
  name: "meetings",
  initialState,
  reducers: {},
});

export const { addMeeting } = meetingsSlice.actions;

export default meetingsSlice.reducer;
