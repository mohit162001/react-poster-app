import { createSlice } from "@reduxjs/toolkit";

const initalUiState = {
    showModal: false
}

const uiSlice = createSlice({
    name: 'ui',
    initialState: initalUiState,
    reducers:{
        handleShowModal(state){
            state.showModal = !state.showModal
        }
    }
})

export default uiSlice;
export const uiActions = uiSlice.actions;