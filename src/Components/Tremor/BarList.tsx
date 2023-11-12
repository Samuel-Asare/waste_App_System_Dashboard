import "../../css/DashboardComponent.css";

import { UserContactContext } from "@/Context/UserContact/UserContactContext";
import { BarList, Card, Title, Bold, Flex, Text } from "@tremor/react";
import { useContext } from "react";

const BarListFunc = () => {
    const { userContact } = useContext(UserContactContext);

    console.log(userContact);

    const data = [
        {
            name: "Contacts",
            value: (userContact.length / 100) * 100,
            // href: "",
            icon: function TwitterIcon() {
                return (
                    <svg
                        width="23"
                        height="23"
                        fill="none"
                        stroke="#f6b604"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="1.5"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                        className="mr-2.5 "
                    >
                        <path d="M16.125 13.125 20.25 9"></path>
                        <path d="m10.875 10.125 3 3"></path>
                        <path d="m3.75 15 4.875-4.875"></path>
                        <path d="M21.375 9a1.125 1.125 0 1 0 0-2.25 1.125 1.125 0 0 0 0 2.25Z"></path>
                        <path d="M15 15.375a1.125 1.125 0 1 0 0-2.25 1.125 1.125 0 0 0 0 2.25Z"></path>
                        <path d="M9.75 10.125a1.125 1.125 0 1 0 0-2.25 1.125 1.125 0 0 0 0 2.25Z"></path>
                        <path d="M2.625 17.25a1.125 1.125 0 1 0 0-2.25 1.125 1.125 0 0 0 0 2.25Z"></path>
                    </svg>
                );
            },
        },
        {
            name: "Base Target",
            value: (100 / 100) * 100,
            // href: "#",
            icon: function TwitterIcon() {
                return (
                    <svg
                        width="23"
                        height="23"
                        fill="none"
                        stroke="#f6b604"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="1.5"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                        className="mr-2.5 "
                    >
                        <path d="M21 12c0-4.969-4.031-9-9-9s-9 4.031-9 9 4.031 9 9 9 9-4.031 9-9Z"></path>
                        <path d="m17.25 9-5.245 6-2.247-2.25"></path>
                        <path d="M8.998 15 6.75 12.75"></path>
                        <path d="m14.33 9-2.416 2.766"></path>
                    </svg>
                );
            },
        },
    ];

    return (
        <Card className="max-w-lg w-full-sm w-1/2 barlist_card">
            <Title className="barlist_card_header_text">
                User Contact Requests
            </Title>
            <Flex className="mt-4">
                <Text>
                    <Bold>Concerns</Bold>
                </Text>
                <Text>
                    <Bold>Number</Bold>
                </Text>
            </Flex>
            <BarList data={data} className="mt-2" />
        </Card>
    );
};

export default BarListFunc;
