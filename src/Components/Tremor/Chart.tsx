import { useState, useEffect, useContext, useCallback } from "react";
import { Card, Title, AreaChart } from "@tremor/react";
import "../../css/AreaChart.css";
import { DataContext } from "../../Context/ FirestoreDataContext";

const dataFormatter = (number: number) => {
    return Intl.NumberFormat("en-US", { style: "percent" }).format(
        number / 100
    );
};

interface MonthCounts {
    [key: string]: number;
}

const AreaChartDemo = () => {
    const [monthCounts, setMonthCounts] = useState<MonthCounts>({
        January: 0,
        February: 0,
        March: 0,
        April: 0,
        May: 0,
        June: 0,
        July: 0,
        August: 0,
        September: 0,
        October: 0,
        November: 0,
        December: 0,
    });

    const { data } = useContext(DataContext);

    const calculateMonthCounts = useCallback(() => {
        const newMonthCounts: MonthCounts = {
            January: 0,
            February: 0,
            March: 0,
            April: 0,
            May: 0,
            June: 0,
            July: 0,
            August: 0,
            September: 0,
            October: 0,
            November: 0,
            December: 0,
        };

        data.forEach((item) => {
            if (`${item.dateTime}`.includes("Jan")) {
                newMonthCounts.January++;
            } else if (`${item.dateTime}`.includes("Feb")) {
                newMonthCounts.February++;
            } else if (`${item.dateTime}`.includes("Mar")) {
                newMonthCounts.March++;
            } else if (`${item.dateTime}`.includes("Apr")) {
                newMonthCounts.April++;
            } else if (`${item.dateTime}`.includes("May")) {
                newMonthCounts.May++;
            } else if (`${item.dateTime}`.includes("Jun")) {
                newMonthCounts.June++;
            } else if (`${item.dateTime}`.includes("Jul")) {
                newMonthCounts.July++;
            } else if (`${item.dateTime}`.includes("Aug")) {
                newMonthCounts.August++;
            } else if (`${item.dateTime}`.includes("Sep")) {
                newMonthCounts.September++;
            } else if (`${item.dateTime}`.includes("Oct")) {
                newMonthCounts.October++;
            } else if (`${item.dateTime}`.includes("Nov")) {
                newMonthCounts.November++;
            } else if (`${item.dateTime}`.includes("Dec")) {
                newMonthCounts.December++;
            }
        });

        setMonthCounts(newMonthCounts);
    }, [data]);

    useEffect(() => {
        calculateMonthCounts();
    }, [data, calculateMonthCounts]);

    const chartdata = Object.keys(monthCounts).map((month) => ({
        date: `${month} 23`,
        Request: monthCounts[month],
    }));

    return (
        <Card>
            <Title>Waste Request over time (%)</Title>
            <AreaChart
                className="h-72 mt-4"
                data={chartdata}
                index="date"
                categories={["Request"]}
                colors={["yellow"]}
                valueFormatter={dataFormatter}
            />
        </Card>
    );
};

export default AreaChartDemo;
