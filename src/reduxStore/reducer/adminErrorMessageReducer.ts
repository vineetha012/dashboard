import { createSlice, PayloadAction, createAction } from "@reduxjs/toolkit";
export const Adminreset = createAction("counter/reset");

type InitialState = {
 
};
const initialState: InitialState = {
 
};

const adminErrorSlice = createSlice({
  name: "adminErrorSlice",
  initialState,
  reducers: {
    
  },
  extraReducers: (builder) => {
    builder.addCase(Adminreset, (state) => {
      return initialState;
    });
  },

});
export default adminErrorSlice.reducer;
export const {
 
} = adminErrorSlice.actions;

