import {FC} from 'react';

import FlowBoard from '@/components/molecules/WorkFlow/Flow';
import {Node, Position} from "@xyflow/react";
import { FlowCard } from "@/components/molecules/WorkFlow/Card";

interface Props {}

const initialNodes: Node[] = [
    {
        id: '1',
        type: 'input',
        sourcePosition: Position.Right,
        targetPosition: Position.Left,
        position: {x: 100, y: 100},
        data: {label: <FlowCard title={"aa"} id={"1"}/>}
    },
    {
        id: '2',
        sourcePosition: Position.Right,
        targetPosition: Position.Left,
        position: {x: 700, y: 100},
        data: {label: <FlowCard title={"aa"} id={"1"} />}
    },
    {
        id: '6',
        sourcePosition: Position.Right,
        targetPosition: Position.Left,
        position: {x: 400, y: 600},
        data: {label: <FlowCard title={"aa"} id={"1"}/>}
    },
    {
        id: '3',
        type: 'output',
        sourcePosition: Position.Right,
        targetPosition: Position.Left,
        position: {x: 1200, y: 100},
        data: {label: <FlowCard title={"aa"} id={"1"}/>}
    },
];

const Home: FC<Props> = () => {
    return (
        <div className="w-full h-full">
            <FlowBoard initialNodes={initialNodes} />
        </div>
    )
}

export default Home;