/* eslint-disable react-refresh/only-export-components */
import React, {
    createContext,
    useContext,
    useReducer,
    useEffect,
    ReactNode,
} from "react";

interface AdminState {
    username: string;
    email: string;
}

type AdminAction =
    | { type: "USERNAME"; payload: string }
    | { type: "EMAIL"; payload: string }
    | { type: "RESET" };

const initialState: AdminState = {
    username: "",
    email: "",
};

const AdminContext = createContext<
    { state: AdminState; dispatch: React.Dispatch<AdminAction> } | undefined
>(undefined);

const adminReducer = (state: AdminState, action: AdminAction): AdminState => {
    switch (action.type) {
        case "USERNAME":
            return { ...state, username: action.payload };
        case "EMAIL":
            return { ...state, email: action.payload };
        case "RESET":
            return { ...initialState };
        default:
            return state;
    }
};

export const useAdmin = () => {
    const context = useContext(AdminContext);
    if (!context) {
        throw new Error("useAdmin must be used within an AdminProvider");
    }
    return context;
};

interface AdminProviderProps {
    children: ReactNode;
}

const AdminProvider: React.FC<AdminProviderProps> = ({ children }) => {
    const [state, dispatch] = useReducer(adminReducer, initialState);

    useEffect(() => {
        // console.log(state);
    }, [state]);

    return (
        <AdminContext.Provider value={{ state, dispatch }}>
            {children}
        </AdminContext.Provider>
    );
};

export default AdminProvider;
