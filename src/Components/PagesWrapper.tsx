import "../css/PagesWrapper.css";
import Notification from "./Pages/Notification";
import { Route, Routes, useLocation } from "react-router-dom";
import Profile from "./Pages/Profile";
import LogIn from "./Pages/Auth/LogIn";

import DashboardExample from "./Tremor/DashboardComponent";
import HeaderNav from "./HeaderNav";
import UserContact from "./Pages/UserContactRequests/UserContact";
import { DataContext } from "@/Context/ FirestoreDataContext";
import { useContext, useEffect, useState } from "react";

const PagesWrapper = () => {
    const location = useLocation();
    // Determine whether to show the HeaderNav based on the current route
    const showHeaderNav = location.pathname !== "/login";
    const [isNew, setIsNew] = useState(false);

    const savedRequestLen = localStorage.getItem("checkReqLen");
    const [requestLen, setRequestLen] = useState(
        savedRequestLen ? parseInt(savedRequestLen) : 0
    );

    const { data } = useContext(DataContext);

    useEffect(() => {
        const newDataLength = data.length;

        // Update local storage and state
        localStorage.setItem("checkReqLen", newDataLength.toString());
        setRequestLen(newDataLength);

        if (newDataLength > requestLen) {
            setIsNew(true);
        }
    }, [data, requestLen]);

    // setTimeout(() => {
    //     setIsNew(false);
    // }, 6000);

    function handleAlertClose() {
        setIsNew(false);
    }

    return (
        <>
            {showHeaderNav && <HeaderNav />}

            <div className="pages_wrapper">
                {isNew && (
                    <div className="alert alert-danger" role="alert">
                        <p>A new request has arrived!</p>
                        <div className="cross" onClick={handleAlertClose}>
                            x
                        </div>
                    </div>
                )}

                <Routes>
                    <Route path="/" element={<DashboardExample />} />
                    <Route path="/notification" element={<Notification />} />
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/usercontacts" element={<UserContact />} />
                    <Route path="/login" element={<LogIn />} />
                </Routes>
            </div>
        </>
    );
};

export default PagesWrapper;
