import { useState } from "react";
import "../../src/css/SideBar.css";

import menu from "../assets/menu.png";
import close from "../assets/close.png";
import analytics from "../assets/analytics.png";
import profile from "../assets/person-circle.png";
import { NavLink } from "react-router-dom";

const navItems = ["Home", "Profile", "Other"];

// Define a type or interface for your props
interface IconRenderComponentProps {
    item: string; // You can replace 'string' with the specific type of 'item'
}

const IconRenderComponent: React.FC<IconRenderComponentProps> = ({ item }) => {
    switch (item) {
        case "Home":
            return <img src={analytics} alt="home icon" />;
        case "Profile":
            return <img src={profile} alt="profile icon" />;
        default:
            return null;
    }
};

const SideNavBar = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <aside
            className={`sidebar ${isOpen ? "open" : ""}`}
            // on mouse over......
            onMouseOver={() => setIsOpen(true)}
            // on mouse leave
            onMouseLeave={() => setIsOpen(false)}
        >
            <div className="sidebar-inner">
                <header className="sidebar-header">
                    <button
                        type="button"
                        className="sidebar-burger"
                        // on mouse click.....
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        <span>
                            {isOpen ? (
                                <img src={close} alt="close btn" />
                            ) : (
                                <img src={menu} alt="menu btn" />
                            )}{" "}
                        </span>
                    </button>
                    {/* <img src={logo} className="sidebar- logo" /> */}
                    <h3>Dashboard</h3>
                </header>{" "}
                <nav className="sidebar-menu">
                    {navItems.map((item) => (
                        <div className="menu_div" key={item}>
                            {/* <span>{item}</span> */}
                            <IconRenderComponent item={item} />
                            {item === "Home" ? (
                                <NavLink to="/">
                                    <button className="sidebar-button">
                                        <p>{item}</p>
                                    </button>
                                </NavLink>
                            ) : item === "Profile" ? (
                                <NavLink to="/profile">
                                    <button className="sidebar-button">
                                        <p>{item}</p>
                                    </button>
                                </NavLink>
                            ) : item === "Other" ? (
                                <NavLink to="/settings">
                                    <button className="sidebar-button">
                                        <p>{item}</p>
                                    </button>
                                </NavLink>
                            ) : /* Add more conditions for additional links */
                            null}
                        </div>
                    ))}
                </nav>{" "}
            </div>{" "}
        </aside>
    );
};

export default SideNavBar;
