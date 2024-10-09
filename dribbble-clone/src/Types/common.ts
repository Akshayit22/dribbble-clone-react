export interface User {
    id?: number;
    name?: string;
    username?: string,
    email: string,
    password: string,
}

export interface AuthState {
    user: User | null;
    isLoggedIn: boolean;
}