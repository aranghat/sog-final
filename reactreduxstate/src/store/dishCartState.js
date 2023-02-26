import { createSlice } from "@reduxjs/toolkit";

export const dishCartState = createSlice({
    name: "dishCart",
    initialState: {
        dishes : []
    },
    reducers: {
        addDish: (state, action) => {
            state.dishes.push(action.payload);
        },
        removeDish: (state, action) => {
            state.dishes = state.dishes.filter((item) => item !== action.payload);
        }
    }
})

export const { addDish, removeDish } = dishCartState.actions;
export default dishCartState.reducer;