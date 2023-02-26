import { configureStore } from "@reduxjs/toolkit";
import dishCartState from "./dishCartState";
import dishListState from "./dishListState";

const logger = (store) => (next) => (action) => {
    console.log("Action Type : ", action.type);
    action.payload = action.payload.toUpperCase();
    next(action);
}

export default configureStore({
    reducer: {
        cart : dishCartState,
        dishes : dishListState,
        
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
})