import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User, AuthState } from '../../../Types/common';

const initialState: AuthState = {
    user: JSON.parse(localStorage.getItem('user') ?? "null"),
    isLoggedIn: (() => {
        return localStorage.getItem('user')?true:false
    })(),
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login: (state, action: PayloadAction<User>) => {
            state.user = action.payload;
            state.isLoggedIn = true;
        },
        logout: (state) => {
            state.user = null;
            localStorage.clear();
            state.isLoggedIn = false;
        },
        setUser: (state, action: PayloadAction<User | null>) => {
            state.user = action.payload;
            state.isLoggedIn = action.payload !== null;
        },
    },
});

export const { login, logout, setUser } = authSlice.actions;

export default authSlice.reducer;
