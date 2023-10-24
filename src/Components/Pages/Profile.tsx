import { DialogDemo } from "../ShadcnUI/Dialog";
import "../../css/Profile.css";
import { doc, onSnapshot } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "@/Firebase/firebase_firestore";

interface ProfileData {
    location: string;
    email: string;
    username: string;
}

const Profile = () => {
    const [profileData, setProfileData] = useState<ProfileData | null>(null);

    useEffect(() => {
        const docRef = doc(db, "Admin_Dashboard_Information", "Admin");

        const unsubscribe = onSnapshot(docRef, (doc) => {
            if (doc.exists()) {
                // Convert the Firestore document to a JavaScript object
                const data = doc.data() as ProfileData;
                setProfileData(data);
            } else {
                console.log("Document does not exist.");
            }
        });

        // Clean up the listener when the component unmounts
        return () => {
            unsubscribe();
        };
    }, []);

    return (
        <div className="profile_wrapper">
            <div className="profile_Content">
                {/* Content Details */}
                <div className="content">
                    <h2>Profile</h2>
                    {profileData ? (
                        <div className="details">
                            <div className="data">
                                <h6>Application:</h6>
                                <p>cleanwaste DashBoard</p>
                            </div>
                            <div className="data">
                                <h6>Agency:</h6>
                                <p>{profileData?.username}</p>
                            </div>
                            <div className="data">
                                <h6>Agency Email:</h6>
                                <p>{profileData?.email}</p>
                            </div>
                            <div className="data">
                                <h6>Location:</h6>
                                <p>{profileData?.location}</p>
                            </div>
                        </div>
                    ) : (
                        <p>Loading profile data...</p>
                    )}
                </div>

                {/* Bottom Button */}
                <div className="btnEdit">
                    <DialogDemo />
                </div>
            </div>
        </div>
    );
};

export default Profile;
