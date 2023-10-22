import { TabsDemo } from "@/Components/ShadcnUI/AccountTabs";
import "../../../css/Login.css";
import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";

const LogIn = () => {
    const [loggedIn, setLoggedIn] = useState(false);
    const navigate = useNavigate();

    useMemo(() => {
        const storedUser = localStorage.getItem("user");
        if (storedUser === "false") {
            setLoggedIn(false);
        } else {
            setLoggedIn(true);
        }
    }, []);

    return (
        <>
            {loggedIn ? (
                navigate("/")
            ) : (
                <div className="Login_Wrapper">
                    <TabsDemo />
                </div>
            )}
        </>
    );
};

export default LogIn;
