import { createSlice } from "@reduxjs/toolkit";

const feedSlice = createSlice({
  name: "feed",
  initialState: null,
  reducers: {
    addFeed: (state, action) => {
      return action.payload;
    },
    removeTopFeed: (state, action) => {
      const feedArray = state.filter(
        (arr) => arr._id.toString() !== action.payload.toString()
      );
      return feedArray;
    },
  },
});

export const { addFeed, removeTopFeed } = feedSlice.actions;
export default feedSlice.reducer;
