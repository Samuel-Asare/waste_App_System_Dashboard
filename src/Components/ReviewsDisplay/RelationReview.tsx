import { useContext } from "react";

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
} from "@tremor/react";
import { RelationCommentContext } from "@/Context/ReviewComments/RelationContext";
import { deleteDoc, doc } from "@firebase/firestore";
import { db } from "@/Firebase/firebase_firestore";

const RelationReview = () => {
    const { relationService } = useContext(RelationCommentContext);

    async function deleteData(idnum: string) {
        await deleteDoc(doc(db, "RelationAndService_Review", idnum));
    }

    return (
        <Card className="card">
            <Title>Relation and Service Reviews</Title>
            <Table className="mt-5">
                <TableHead>
                    <TableRow>
                        <TableHeaderCell>Action</TableHeaderCell>
                        <TableHeaderCell>Message</TableHeaderCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {relationService.map((item) => (
                        <TableRow key={item.id} className="table_body">
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
                                <Text>{item.message}</Text>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </Card>
    );
};

export default RelationReview;
