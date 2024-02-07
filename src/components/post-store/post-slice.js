import { createSlice } from "@reduxjs/toolkit"

const initialPostState = []

const postSlice = createSlice({
    name: 'post-slcie',
    initialState: initialPostState,
    reducers:{
        updatePostData(state,action){
            const  newState =[...state,action.payload];
            return newState;
        },
        addPost(state,action){
            const newPost = action.payload;
            const newState = [...state]
            newState.push(newPost);
            return newState;
        }
    }
})

export const postActions = postSlice.actions;
export default postSlice;