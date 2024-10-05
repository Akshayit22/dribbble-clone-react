import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface User {
    id?: number;
    name?: string;
    username?:string,
    email:string,
    password:string,
}

interface AuthState {
    user: User | null;
    isLoggedIn: boolean;
}

const initialState: AuthState = {
    user: null,
    isLoggedIn: false,
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
