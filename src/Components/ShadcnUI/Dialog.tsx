/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button } from "@/Components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/Components/ui/dialog";
import { Input } from "@/Components/ui/input";
import { Label } from "@/Components/ui/label";
import { useAdmin } from "@/Context/AdminFirestore";
import { db } from "@/Firebase/firebase_firestore";
import { doc, setDoc } from "@firebase/firestore";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export function DialogDemo() {
    const navigate = useNavigate();

    const { state, dispatch } = useAdmin();

    const [error_message, setError] = useState("");

    const handleUsername = (e: { target: { value: any } }) => {
        dispatch({ type: "USERNAME", payload: e.target.value });
    };

    const handleLocation = (e: { target: { value: any } }) => {
        dispatch({ type: "LOCATION", payload: e.target.value });
    };

    const handleEmail = (e: { target: { value: any } }) => {
        dispatch({ type: "EMAIL", payload: e.target.value });
    };

    const handleSubmitClick = async () => {
        if (state.username === "") {
            return;
        } else {
            try {
                await setDoc(doc(db, "Admin_Dashboard_Information", "Admin"), {
                    username: state.username,
                    email: state.email,
                    location: state.location,
                });
                setError(" Changes made. Close dialog to comfirm");
            } catch (e) {
                console.error("Error adding document: ", e);
            }
            dispatch({ type: "USERNAME", payload: "" });
            dispatch({ type: "EMAIL", payload: "" });
            dispatch({ type: "LOCATION", payload: "" });

            navigate("/profile");
        }
    };

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant="outline">Edit Profile</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Edit profile</DialogTitle>
                    <DialogDescription>
                        Make changes to your profile here. Click save when
                        you're done.
                    </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="name" className="text-right">
                            Username
                        </Label>
                        <Input
                            id="name"
                            value={state.username}
                            className="col-span-3"
                            onChange={handleUsername}
                        />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="username" className="text-right">
                            Email
                        </Label>
                        <Input
                            id="username"
                            value={state.email}
                            className="col-span-3"
                            type="email"
                            placeholder="example@gmail.com"
                            onChange={handleEmail}
                        />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="username" className="text-right">
                            Location
                        </Label>
                        <Input
                            id="username"
                            value={state.location}
                            className="col-span-3"
                            onChange={handleLocation}
                        />
                    </div>
                    <div className="grid grid-cols items-center gap-4">
                        <p className="error_message" style={{ color: "Green" }}>
                            {error_message}
                        </p>
                    </div>
                </div>
                <DialogFooter>
                    <Button type="submit" onClick={handleSubmitClick}>
                        Save changes
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}
