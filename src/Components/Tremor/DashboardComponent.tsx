import "../../css/DashboardComponent.css";
import {
    Card,
    Title,
    Text,
    Tab,
    TabList,
    TabGroup,
    TabPanel,
    TabPanels,
} from "@tremor/react";

import DashCard from "./DashCard";
import AreaChartDemo from "./Chart";
import DonutChartFunc from "./DonutChart";
import BarListFunc from "./BarList";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import ResponseReview from "../ReviewsDisplay/ResponseReview";
import RelationReview from "../ReviewsDisplay/RelationReview";
import GeneralSuggestionReview from "../ReviewsDisplay/GeneralSuggestionReview";

export default function DashboardExample() {
    const [loggedIn, setLoggedIn] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const storedUser = localStorage.getItem("user");
        if (storedUser === "false") {
            navigate("/login");
        } else {
            setLoggedIn(true);
        }
    }, [navigate]);

    return (
        <>
            {loggedIn && (
                <main className="p-12">
                    <Title>Dashboard</Title>
                    <Text>
                        cleanwaste. Dashboard, that hightlight all operations on
                        the cleanwaste user interface
                    </Text>

                    <TabGroup className="mt-6">
                        <TabList>
                            <Tab>Overview</Tab>
                            <Tab>Reviews Hub</Tab>
                        </TabList>
                        <TabPanels>
                            <TabPanel>
                                <DashCard />
                                <div className="mt-6">
                                    <AreaChartDemo />
                                </div>
                                <div className="mt-6 donut_barlist">
                                    <DonutChartFunc />
                                    <BarListFunc />
                                </div>
                            </TabPanel>
                            <TabPanel>
                                <div className="mt-6">
                                    <Card>
                                        <ResponseReview />
                                    </Card>
                                </div>
                                <div className="mt-6">
                                    <Card>
                                        <RelationReview />
                                    </Card>
                                </div>
                                <div className="mt-6">
                                    <Card>
                                        <GeneralSuggestionReview />
                                    </Card>
                                </div>
                            </TabPanel>
                        </TabPanels>
                    </TabGroup>
                </main>
            )}
        </>
    );
}
