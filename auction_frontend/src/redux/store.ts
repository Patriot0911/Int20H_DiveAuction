import { configureStore } from "@reduxjs/toolkit";
import UserInfoReducer from '@/redux/features/user-info-slice';
import { TypedUseSelectorHook, useSelector } from "react-redux";

export const store = configureStore({
    reducer: {
        UserInfoReducer
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useReduxSelector: TypedUseSelectorHook<RootState> = useSelector;
