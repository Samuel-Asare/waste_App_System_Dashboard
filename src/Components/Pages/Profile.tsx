import { DialogDemo } from "../ShadcnUI/Dialog";
import "../../css/Profile.css";

const Profile = () => {
    return (
        <div className="profile_wrapper">
            <div className="profile_Content">
                {/* Content Details */}
                <div className="content">
                    <h2>Profile</h2>
                    <div className="details">
                        <div className="data">
                            <h6>Application :</h6>
                            <p>cleanwaste DashBoard</p>
                        </div>
                        <div className="data">
                            <h6>Agency :</h6>
                            <p>Demo Agency</p>
                        </div>

                        <div className="data">
                            <h6>Agency Email :</h6>
                            <p>demoagency@cleanwaste.org</p>
                        </div>

                        <div className="data">
                            <h6>Location :</h6>
                            <p>Accra Ghana</p>
                        </div>
                    </div>
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
