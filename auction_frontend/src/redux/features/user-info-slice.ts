import { IProfileInfo } from "@/types";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface IInitialState {
    value: IProfileInfo;
};

const initialState: IInitialState = {
    value: {
        isAuth: false
    }
};

export const userInfo = createSlice({
    name: 'userInfo',
    initialState,
    reducers: {
        authUser: (state, actions: PayloadAction<IProfileInfo>) => ({
            value: {
                isAuth: true,
                data: actions.payload.data
            }
        }),
        logOutUser: () => initialState
    }
})

export const {
    authUser,
    logOutUser
} = userInfo.actions;

export default userInfo.reducer;
