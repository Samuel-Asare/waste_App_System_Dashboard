import "../css/HeaderNav.css";

import notification_icon from "../assets/notifications.png";
import { Link } from "react-router-dom";
import { ModeToggle } from "./Toggle/ModeToggleBtn";
import { DropdownMenuComponent } from "./ShadcnUI/DropdownMenu";

// import { DataContext } from "../Context/ FirestoreDataContext";

const HeaderNav = () => {
    return (
        <>
            <div className="header_wrapper">
                <Link to="/">
                    <h3>cleanwaste.</h3>
                </Link>
                <div className="left-side">
                    <DropdownMenuComponent />
                    <span className="notification_span">
                        <Link to="/notification">
                            <img
                                src={notification_icon}
                                alt="notification icon"
                                width="25px"
                            />
                            <div className="notification_counter">
                                {/* {notify} */}
                            </div>
                        </Link>
                    </span>
                    <ModeToggle />
                </div>
            </div>
        </>
    );
};

export default HeaderNav;
