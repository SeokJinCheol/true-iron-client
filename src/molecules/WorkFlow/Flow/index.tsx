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
    ReactFlow, Panel,
} from '@xyflow/react';

import '@xyflow/react/dist/style.css';
import './_style.css';

interface Props {
    initialNodes: Node[]
}

const initialEdges: Edge[] = [{
    id: 'e1-2', source: '1', target: '2', animated: true, markerEnd: {
        type: MarkerType.ArrowClosed,
        width: 25,
        height: 25,
        color: 'black',
    }
}];

const FlowBoard: FC<Props> = ({initialNodes}) => {
    const [nodes, setNodes] = useState<Node[]>(initialNodes);
    const [edges, setEdges] = useState<Edge[]>(initialEdges);
    const [rfInstance, setRfInstance] = useState<ReactFlowInstance>();

    const onConnect: OnConnect = useCallback(
        (connection) => setEdges((eds) => addEdge({
            ...connection, animated: true, markerEnd: {
                type: MarkerType.ArrowClosed,
                width: 25,
                height: 25,
                color: 'black',
            }
        }, eds)),
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
        }
    }, [rfInstance]);

    return (
        <div className="work__flow">
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