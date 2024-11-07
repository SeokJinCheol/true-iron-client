import React, {FC, useCallback, useState} from 'react';
import {
    addEdge, applyEdgeChanges, applyNodeChanges,
    Controls,
    MarkerType,
    MiniMap,
    Node,
    Edge,
    OnConnect,
    ReactFlowInstance,
    OnEdgesChange,
    OnNodesChange,
    Position,
    ReactFlow, Panel,
} from '@xyflow/react';

import '@xyflow/react/dist/style.css';
import './style.css';

interface Props {}

// @ts-ignore
const initialNodes: Node[] = [
    {
        id: '1',
        type: 'input',
        sourcePosition: Position.Right,
        targetPosition: Position.Left,
        position: {x: 100, y: 100},
        data: {label: "test"}
    },
    {
        id: '2',
        sourcePosition: Position.Right,
        targetPosition: Position.Left,
        position: {x: 400, y: 100},
        data: {label: '2'}
    },
    {
        id: '3',
        type: 'output',
        sourcePosition: Position.Right,
        targetPosition: Position.Left,
        position: {x: 400, y: 100},
        data: {label: '2'}
    },
];

const initialEdges:Edge[] = [{
    id: 'e1-2', source: '1', target: '2', animated: true, markerEnd: {
        type: MarkerType.ArrowClosed,
        width: 25,
        height: 25,
        color: 'black',
    }
}];

const FlowBoard:FC<Props> = () => {
    const [nodes, setNodes] = useState<Node[]>(initialNodes);
    const [edges, setEdges] = useState<Edge[]>(initialEdges);
    const [rfInstance, setRfInstance] = useState<ReactFlowInstance>();

    const onConnect: OnConnect = useCallback(
        (connection) => setEdges((eds) => addEdge(connection, eds)),
        [setEdges],
    );

    const onNodesChange: OnNodesChange = useCallback(
        (changes) => setNodes((nds) => applyNodeChanges(changes, nds)),
        [setNodes],
    );
    const onEdgesChange: OnEdgesChange = useCallback(
        (changes) => setEdges((eds) => applyEdgeChanges(changes, eds)),
        [setEdges],
    );

    const onSave = useCallback(() => {
        if (rfInstance) {
            const flow = rfInstance.toObject();
            console.log(JSON.stringify(flow))
        }
    }, [rfInstance]);

    return (
        <div style={{width: '100vw', height: '100vh'}}>
            <ReactFlow
                nodes={nodes}
                edges={edges}
                onNodesChange={onNodesChange}
                onEdgesChange={onEdgesChange}
                onConnect={onConnect}
                onInit={setRfInstance}
                attributionPosition="bottom-left"
            >
                <Panel position="top-right">
                    <button onClick={onSave}>save</button>
                </Panel>
                <Controls/>
                <MiniMap/>
            </ReactFlow>
        </div>
    );
}

export default FlowBoard;