import "../../css/DashboardComponent.css";

/* eslint-disable react-hooks/exhaustive-deps */
import { Card, Title, DonutChart } from "@tremor/react";
import { useContext, useEffect, useState } from "react";
import { DataContext } from "../../Context/ FirestoreDataContext";

const DonutChartFunc = () => {
    const { data } = useContext(DataContext);

    const [genValue, setGenValue] = useState(0);
    const [recValue, setRecValue] = useState(0);
    const [harValue, setHarValue] = useState(0);
    const [orgValue, setOrgValue] = useState(0);

    useEffect(() => {
        // Function to count the waste types
        const countWasteTypes = () => {
            const counts = {
                General_Household_Waste: 0,
                Recyclables: 0,
                Hazardous_Waste: 0,
                Organic_Waste: 0,
            };

            data.forEach((item) => {
                if (item.wasteType === "General_Household_Waste ") {
                    counts.General_Household_Waste++;
                } else if (item.wasteType === "Recyclables ") {
                    counts.Recyclables++;
                } else if (item.wasteType === "Hazardous_Waste ") {
                    counts.Hazardous_Waste++;
                } else if (item.wasteType === "Organic_Waste ") {
                    counts.Organic_Waste++;
                }
            });

            return counts;
        };

        const counts = countWasteTypes();
        setGenValue(counts.General_Household_Waste);
        setRecValue(counts.Recyclables);
        setHarValue(counts.Hazardous_Waste);
        setOrgValue(counts.Organic_Waste);
    }, [data]);

    const cities = [
        {
            name: "General_Household_Waste",
            sales: genValue,
        },
        {
            name: "Recyclables",
            sales: recValue,
        },
        {
            name: "Hazardous_Waste",
            sales: harValue,
        },
        {
            name: "Organic_Waste",
            sales: orgValue,
        },
    ];

    return (
        <>
            <Card className="max-w-lg w-full  donut_card">
                <Title className="donutChart_header_text">
                    Waste Type Collection Request
                </Title>

                <DonutChart
                    className="mt-6"
                    data={cities}
                    category="sales"
                    index="name"
                    colors={[
                        "slate",
                        "violet",
                        "indigo",
                        "rose",
                        "cyan",
                        "amber",
                    ]}
                />
            </Card>
        </>
    );
};

export default DonutChartFunc;
