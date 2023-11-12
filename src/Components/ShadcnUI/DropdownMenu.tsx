import "../../css/HeaderNav.css";

import { LogOut, User, Blocks, Contact } from "lucide-react";

import { Button } from "@/Components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/Components/ui/dropdown-menu";
import { Link, useNavigate } from "react-router-dom";
import { getAuth, signOut } from "firebase/auth";

export function DropdownMenuComponent() {
    const navigate = useNavigate();

    function handleLogout() {
        const authInstance = getAuth();
        signOut(authInstance)
            .then(() => {
                console.log("User logged out");
                navigate("/login");
                localStorage.setItem("user", JSON.stringify(false));
            })
            .catch((error) => {
                console.error("Error logging out:", error);
            });
    }

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="outline" className="menu_btn">
                    Menu
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                    <DropdownMenuItem>
                        <Blocks className="mr-2 h-4 w-4" />
                        <Link to="/">
                            <span>Dashboard</span>
                        </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                        <Contact className="mr-2 h-4 w-4" />
                        <Link to="/usercontacts">
                            <span>User Contacts</span>
                        </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                        <User className="mr-2 h-4 w-4" />
                        <Link to="/profile">
                            <span>Profile</span>
                        </Link>
                    </DropdownMenuItem>
                </DropdownMenuGroup>

                <DropdownMenuSeparator />

                <DropdownMenuItem>
                    <LogOut className="mr-2 h-4 w-4" />
                    {/* IF LOGGED IN CONDITION............. */}

                    <Link to={""}>
                        <span onClick={handleLogout}>Log Out</span>
                    </Link>
                    {/* END CONDITION... */}
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}
