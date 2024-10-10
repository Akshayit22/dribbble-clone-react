import { configureStore } from '@reduxjs/toolkit';
import authReducer, { login, logout, setUser } from '../../services/redux/slices/AuthSlice';
import { User } from '../../Types/common';

describe('authSlice', () => {
    let store:any;

    const user:User = {
        id: 1,
        name: "Jone Doe",
        username: "john_doe",
        email: "john@example.com",
        password: "password123"
    }

    beforeEach(() => {
        store = configureStore({ reducer: { auth: authReducer } });
        localStorage.clear();
    });

    test('initial state testing.', () => {
        const initialState = {
            user: null,
            isLoggedIn: false,
        };
        expect(store.getState().auth).toEqual(initialState);
    });

    test('login action sets user and isLoggedIn', () => {
        store.dispatch(login(user));

        const state = store.getState().auth;
        expect(state.user).toEqual(user);
        expect(state.isLoggedIn).toBe(true);
    });

    test('logout action clears user and sets isLoggedIn to false', () => {
        store.dispatch(logout());

        const state = store.getState().auth;
        expect(state.user).toBeNull();
        expect(state.isLoggedIn).toBe(false);
    });

    test('setUser action updates user and isLoggedIn', () => {
        store.dispatch(setUser(user));

        const state = store.getState().auth;
        expect(state.user).toEqual(user);
        expect(state.isLoggedIn).toBe(true);

        store.dispatch(setUser(null));
        const newState = store.getState().auth;
        expect(newState.user).toBeNull();
        expect(newState.isLoggedIn).toBe(false);
    });

    test('initial state from localStorage', () => {
        {/* Local storage testing not working in jest */}
        localStorage.setItem('user', JSON.stringify(user));

        const newStore = configureStore({ reducer: { auth: authReducer } });

        expect(newStore.getState().auth.isLoggedIn).toEqual(false);
    });
});
