/* eslint-disable @typescript-eslint/no-explicit-any */
import { createContext, useEffect, useReducer, ReactNode } from "react";

interface AuthState {
    currentUser: any | null;
}

interface AuthAction {
    type: "LOGIN" | "LOGOUT";
    payload?: any; // Replace 'any' with your payload type
}

const storedUser = localStorage.getItem("user");
let INITIAL_STATE: AuthState = {
    currentUser: null,
};

if (storedUser) {
    try {
        INITIAL_STATE = {
            currentUser: JSON.parse(storedUser),
        };
    } catch (error) {
        console.error("Error parsing storedUser:", error);
    }
}

const authReducer = (state: AuthState, action: AuthAction): AuthState => {
    switch (action.type) {
        case "LOGIN": {
            return {
                ...state,
                currentUser: action.payload,
            };
        }
        case "LOGOUT": {
            return {
                ...state,
                currentUser: null,
            };
        }
        default:
            return state;
    }
};

export const AuthContext = createContext<{
    state: AuthState;
    dispatch: React.Dispatch<AuthAction>;
}>({ state: INITIAL_STATE, dispatch: () => null });

interface AuthContextProviderProps {
    children: ReactNode;
}

const AuthContextProvider = ({ children }: AuthContextProviderProps) => {
    const [state, dispatch] = useReducer(authReducer, INITIAL_STATE);

    useEffect(() => {
        localStorage.setItem("user", JSON.stringify(state.currentUser));
    }, [state.currentUser]);

    return (
        <AuthContext.Provider value={{ state, dispatch }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContextProvider;
