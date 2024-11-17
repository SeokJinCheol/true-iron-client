import React, {FC} from 'react';
import './_style.css';

import FlowBoard from 'src/components/molecules/WorkFlow/Flow';
import {Node, Position} from "@xyflow/react";
import FlowCard from "src/components/molecules/WorkFlow/Card";
import CardDetail from "src/components/molecules/WorkFlow/CardDetail";
interface Props {}


// @ts-ignore
const initialNodes: Node[] = [
    {
        id: '1',
        type: 'input',
        sourcePosition: Position.Right,
        targetPosition: Position.Left,
        position: {x: 100, y: 100},
        data: {label: <FlowCard/>}
    },
    {
        id: '2',
        sourcePosition: Position.Right,
        targetPosition: Position.Left,
        position: {x: 400, y: 100},
        data: {label: <FlowCard/>}
    },
    {
        id: '6',
        sourcePosition: Position.Right,
        targetPosition: Position.Left,
        position: {x: 400, y: 300},
        data: {label: <FlowCard/>}
    },
    {
        id: '3',
        type: 'output',
        sourcePosition: Position.Right,
        targetPosition: Position.Left,
        position: {x: 700, y: 100},
        data: {label: <FlowCard/>}
    },
];

const Home: FC<Props> = () => {
    return (
        <div className="home">
            <FlowBoard initialNodes={initialNodes} />
            <CardDetail />
        </div>
    )
}

export default Home;