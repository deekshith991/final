import { atom } from "jotai";

// Ensure we provide default values to avoid null or undefined errors
const getInitialAuthToken = () => localStorage.getItem("authToken") || null;
const getInitialUserData = () => {
    const storedUserData = localStorage.getItem("userData");
    return storedUserData ? JSON.parse(storedUserData) : null;
};

// Atoms for authentication state
export const isAuthenticatedAtom = atom(!!getInitialAuthToken());
export const userDataAtom = atom(getInitialUserData());

// Login atom with update function
export const loginAtom = atom(
    null,
    (get, set, data) => {
        const { token, userData } = data;
        localStorage.setItem("authToken", token);
        localStorage.setItem("userData", JSON.stringify(userData));
        set(userDataAtom, userData);
        set(isAuthenticatedAtom, true);
    }
);

// Logout atom with clear function
export const logoutAtom = atom(
    null,
    (get, set) => {
        localStorage.removeItem("authToken");
        localStorage.removeItem("userData");
        set(userDataAtom, null);
        set(isAuthenticatedAtom, false);
    }
);

export const useAuth = () => {
    const [isAuthenticated] = atom(isAuthenticatedAtom);
    const [userData] = atom(userDataAtom);
    const [, login] = atom(loginAtom);
    const [, logout] = atom(logoutAtom);

    return { isAuthenticated, userData, login, logout };
};
