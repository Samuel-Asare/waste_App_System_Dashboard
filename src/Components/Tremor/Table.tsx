// import { StatusOnlineIcon } from "@heroicons/react/solid";
import "../../css/TableDataContent.css";

import {
    Card,
    Table,
    TableHead,
    TableRow,
    TableHeaderCell,
    TableBody,
    TableCell,
    Text,
    Title,
    Badge,
} from "@tremor/react";

import { useContext, useState } from "react";
import { DataContext } from "../../Context/ FirestoreDataContext";
import { deleteDoc, doc } from "@firebase/firestore";
import { db } from "@/Firebase/firebase_firestore";

const RequestTable = () => {
    const { data } = useContext(DataContext);
    const [request, setRequest] = useState(true);

    function handleRequest() {
        setRequest(!request);
        localStorage.setItem("request_Table_Item_One", JSON.stringify(request));
    }

    async function deleteData(idnum: string) {
        await deleteDoc(doc(db, "RequestWasteCollection", idnum));
    }

    return (
        <Card className="card">
            <Title>List Of Customer Waste Collection Request</Title>
            <Table className="mt-5">
                <TableHead>
                    <TableRow>
                        <TableHeaderCell>Status</TableHeaderCell>
                        <TableHeaderCell>Action</TableHeaderCell>
                        <TableHeaderCell>Name</TableHeaderCell>
                        <TableHeaderCell>Email</TableHeaderCell>
                        <TableHeaderCell>Bulky Items</TableHeaderCell>
                        <TableHeaderCell>Pickup date & Time</TableHeaderCell>
                        <TableHeaderCell>Landmark</TableHeaderCell>
                        <TableHeaderCell>Town</TableHeaderCell>
                        <TableHeaderCell>Telephone</TableHeaderCell>
                        <TableHeaderCell>Quantity of Bins</TableHeaderCell>
                        <TableHeaderCell>Waste Type</TableHeaderCell>
                        <TableHeaderCell>Service Option</TableHeaderCell>
                        <TableHeaderCell>Additional Infor</TableHeaderCell>
                        <TableHeaderCell>Request</TableHeaderCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data.map((item) => (
                        <TableRow key={item.id} className="table_body">
                            <TableCell>
                                <Badge
                                    color="emerald"
                                    className={request ? "badge" : ""}
                                    onClick={() =>
                                        item.id.charAt(1) && handleRequest()
                                    }
                                ></Badge>
                            </TableCell>
                            <TableCell>
                                <svg
                                    width={15}
                                    height={15}
                                    fill="none"
                                    stroke="goldenrod"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={1}
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                    onClick={() => deleteData(item.id)}
                                >
                                    <path d="m5.25 5.25.938 15c.044.867.675 1.5 1.5 1.5h8.625c.828 0 1.447-.633 1.5-1.5l.937-15" />
                                    <path d="M3.75 5.25h16.5" />
                                    <path d="M9 5.25V3.375a1.122 1.122 0 0 1 1.125-1.125h3.75A1.121 1.121 0 0 1 15 3.375V5.25" />
                                    <path d="M12 8.25v10.5" />
                                    <path d="M8.625 8.25 9 18.75" />
                                    <path d="M15.375 8.25 15 18.75" />
                                </svg>
                            </TableCell>
                            <TableCell>
                                {item.fname} {item.lname}
                            </TableCell>
                            <TableCell>
                                <Text>{item.user_email}</Text>
                            </TableCell>
                            <TableCell>
                                <Text>{item.bulkyItems}</Text>
                            </TableCell>
                            <TableCell>
                                <Text>{item.dateTime}</Text>
                            </TableCell>
                            <TableCell>
                                <Text>{item.landmark}</Text>
                            </TableCell>
                            <TableCell>
                                <Text>{item.town}</Text>
                            </TableCell>
                            <TableCell>
                                <Text>{item.phone}</Text>
                            </TableCell>
                            <TableCell>
                                <Text>{item.quantityOfBins}</Text>
                            </TableCell>
                            <TableCell>
                                <Text>{item.wasteType}</Text>
                            </TableCell>
                            <TableCell>
                                <Text>{item.serviceOption}</Text>
                            </TableCell>
                            <TableCell>
                                <Text>{item.additional}</Text>
                            </TableCell>
                            <TableCell>
                                <Text>{item.request}</Text>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </Card>
    );
};

export default RequestTable;
