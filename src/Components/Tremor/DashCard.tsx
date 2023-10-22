import { GeneralCommentContext } from "@/Context/ReviewComments/GeneralSuggestionContext";
import { RelationCommentContext } from "@/Context/ReviewComments/RelationContext";
import { ResponseCommentContext } from "@/Context/ReviewComments/ResponseContext";
import {
    BadgeDelta,
    Card,
    Grid,
    DeltaType,
    Flex,
    Metric,
    ProgressBar,
    Text,
} from "@tremor/react";
import { useContext, useEffect, useState } from "react";

type Kpi = {
    title: string;
    metric: number;
    progress: number;
    target: string;
    delta: string;
    deltaType: DeltaType;
};

const DashCard = () => {
    const { generalSuggestion } = useContext(GeneralCommentContext);
    const { relationService } = useContext(RelationCommentContext);
    const { response } = useContext(ResponseCommentContext);

    const [generalCount, setGeneralCount] = useState(0);
    const [relationCount, setRelationCount] = useState(0);
    const [responseCount, setResponseCount] = useState(0);

    useEffect(() => {
        setGeneralCount(generalSuggestion.length);
        setRelationCount(relationService.length);
        setResponseCount(response.length);
    }, [generalSuggestion, relationService, response]);

    const kpiData: Kpi[] = [
        {
            title: "General Suggestiion",
            metric: generalCount,
            progress: generalCount / 100,
            target: "$ 80,000",
            delta: "Review",
            deltaType: generalCount < 50 ? "decrease" : "increase",
        },
        {
            title: "Relation / Service",
            metric: relationCount,
            progress: relationCount / 100,
            target: "$ 125,000",
            delta: "Review",
            deltaType: relationCount < 50 ? "decrease" : "increase",
        },
        {
            title: "Response",
            metric: responseCount,
            progress: responseCount / 100,
            target: "2,000",
            delta: "Review",
            deltaType: responseCount < 50 ? "decrease" : "increase",
        },
    ];

    return (
        <div>
            <Grid numItemsLg={3} className="mt-6 gap-6">
                {kpiData.map((item) => (
                    <Card key={item.title}>
                        <Flex alignItems="start">
                            <div className="truncate">
                                <Text>{item.title}</Text>
                                <Metric className="truncate">
                                    {item.metric}
                                </Metric>
                            </div>
                            <BadgeDelta deltaType={item.deltaType}>
                                {item.delta}
                            </BadgeDelta>
                        </Flex>
                        <Flex className="mt-4 space-x-2">
                            <Text className="truncate">{`${item.progress}% (${item.metric})`}</Text>
                            <Text>Comments</Text>
                        </Flex>
                        <ProgressBar value={item.progress} className="mt-2" />
                    </Card>
                ))}
            </Grid>
        </div>
    );
};

export default DashCard;
