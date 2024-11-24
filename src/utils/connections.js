import { createSlice } from "@reduxjs/toolkit";

const connectionSlice = createSlice({
  name: "connections",
  initialState: null,
  reducers: {
    addConnectionData: (state, action) => {
      return action.payload;
    },
    removeConnectionData: () => {
      return null;
    },
  },
});

export const { addConnectionData, removeConnectionData } =
  connectionSlice.actions;
export default connectionSlice.reducer;
