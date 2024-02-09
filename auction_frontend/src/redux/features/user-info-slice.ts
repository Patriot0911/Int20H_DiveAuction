import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: 0
};

export const userInfo = createSlice({
    name: 'userInfo',
    initialState,
    reducers: {
        addOne: (state) => ({
            value: state.value+1
        })
    }
})

export const {
    addOne
} = userInfo.actions;

export default userInfo.reducer;
