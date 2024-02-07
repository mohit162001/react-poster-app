import { configureStore } from "@reduxjs/toolkit";
import uiSlice from "./ul-slice";
import postSlice from "./post-slice";



const store = configureStore({
    reducer: {
        ui: uiSlice.reducer,
        post: postSlice.reducer
    }
}) 

export default store;