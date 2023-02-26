import { createSlice } from "@reduxjs/toolkit";

export const dishListState = createSlice({
    name: "dishListState",
    initialState: {
        dishList : ["dish1", "dish2", "dish3"]
    },
    reducers: {
      
    }
})

export const {  } = dishListState.actions;
export default dishListState.reducer;