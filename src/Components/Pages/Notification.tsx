import { DataProvider } from "@/Context/ FirestoreDataContext";
import "../../css/Notification.css";

import RequestTable from "../Tremor/Table";

const Notification = () => {
    return (
        <div className="notification_wrapper">
            <DataProvider>
                <RequestTable />
            </DataProvider>
        </div>
    );
};

export default Notification;
