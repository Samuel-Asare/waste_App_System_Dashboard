import React, { ReactNode, createContext, useEffect, useReducer } from "react";
import { db } from "../../Firebase/firebase_firestore";
import {
    collection,
    onSnapshot,
    QuerySnapshot,
    Unsubscribe,
} from "firebase/firestore";

interface DataContextProps {
    children: React.ReactNode;
}

interface DataItem {
    contact_message: ReactNode;
    contact_Subject: ReactNode;
    contact_Name: ReactNode;
    contact_Email: ReactNode;
    message: ReactNode;
    // timeStamp: string;
    request: ReactNode;
    additional: ReactNode;
    serviceOption: ReactNode;
    wasteType: ReactNode;
    quantityOfBins: ReactNode;
    phone: ReactNode;
    town: ReactNode;
    landmark: ReactNode;
    user_email: ReactNode;
    bulkyItems: ReactNode;
    status: ReactNode;
    dateTime: ReactNode;
    lname: ReactNode;
    fname: ReactNode;
    id: string;
    name: string;
    // Add more properties as needed
}

interface DataContextValue {
    userContact: DataItem[];
}

const initialState: DataContextValue = {
    userContact: [],
};

const UserContactContext = createContext<DataContextValue>(initialState);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const userInputReducer = (
    state: DataContextValue,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    action: { type: string; payload: any }
): DataContextValue => {
    switch (action.type) {
        case "UPDATE_DATA":
            return { ...state, userContact: action.payload };
        default:
            return state;
    }
};

const UserContactProvider: React.FC<DataContextProps> = ({ children }) => {
    const [state, dispatch] = useReducer(userInputReducer, initialState);

    useEffect(() => {
        const unsubscribe: Unsubscribe = onSnapshot(
            collection(db, "ContactUs_Message"),
            (snapshot: QuerySnapshot) => {
                const newData: DataItem[] = [];
                snapshot.forEach((doc) => {
                    newData.push({ id: doc.id, ...doc.data() } as DataItem);
                });

                dispatch({ type: "UPDATE_DATA", payload: newData });
            }
        );

        return () => unsubscribe(); // Cleanup the subscription when the component is unmounted
    }, []);

    return (
        <UserContactContext.Provider value={state}>
            {children}
        </UserContactContext.Provider>
    );
};

export { UserContactContext, UserContactProvider };
