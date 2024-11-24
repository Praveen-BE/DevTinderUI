import { createSlice } from "@reduxjs/toolkit";

const requestSlice = createSlice({
  name: "request",
  initialState: null,
  reducers: {
    addRequestReceived: (state, action) => {
      return action.payload;
    },
    removeRequestReceived: (state, action) => {
      const newArray = state.filter((r) => r._id !== action.payload);
      return newArray;
    },
  },
});

export const { addRequestReceived, removeRequestReceived } =
  requestSlice.actions;
export default requestSlice.reducer;
