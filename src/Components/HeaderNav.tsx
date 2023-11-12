import "../css/HeaderNav.css";

// import notification_icon from "../assets/notifications.png";
import { Link } from "react-router-dom";
import { ModeToggle } from "./Toggle/ModeToggleBtn";
import { DropdownMenuComponent } from "./ShadcnUI/DropdownMenu";

// import { DataContext } from "../Context/ FirestoreDataContext";

import Lottie from "lottie-react";
import notification_bell from "../JSON/nitification_Bell";

const HeaderNav = () => {
    return (
        <>
            <div className="header_wrapper">
                <Link to="/">
                    <h3>cleanwaste.</h3>
                </Link>
                <div className="right-side">
                    <DropdownMenuComponent />
                    <span className="notification_span">
                        <Link to="/notification">
                            <Lottie
                                animationData={notification_bell}
                                className="notification_bell"
                            />
                        </Link>
                    </span>
                    <ModeToggle />
                </div>
            </div>
        </>
    );
};

export default HeaderNav;
