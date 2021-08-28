import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
    list: [
        { title: "clean" },
        { title: "wash" },
        { title: "scrub" }
    ]
};

export const slice = createSlice({
    name: "todox",
    initialState,
    reducers: {
        add: (state, action) => {
            state.list.push(action.payload)
        }

    }
});

export const { add } = slice.actions
export const todoReducer = slice.reducer