import {
  ReactFlow,
  addEdge,
  Background,
  Connection,
  Controls,
  useEdgesState,
  useNodesState,
  MiniMap,
} from "@xyflow/react";
import "@xyflow/react/dist/style.css";
import { useCallback, useEffect, useState } from "react";
import { initialEdges, initialNodes } from "./constants";
import TypeElement from "./TypeElement";
import Pokemon from "./Pokemon";
import CustomEdge from "./CustomEdge";
import Region from "./Region";
import './Home.css';

const nodeTypes = {
  region: Region,
  typeElement: TypeElement,
  pokemon: Pokemon,
};

const edgeTypes = {
  customEdge: CustomEdge,
};

export const Home = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const [pokemonName, setPokemonName] = useState('Pikachu');
  const [pokemonType, setPokemonType] = useState('Electric');

  useEffect(() => {
    setNodes((nds) =>
      nds.map((node) => {
        if (node.id === '6') {

          return {
            ...node,
            data: {
              ...node.data,
              name: pokemonName,
            },
          };
        }
 
        return node;
      }),
    );
  }, [pokemonName, setNodes]);
 
  useEffect(() => {
    setNodes((nds) =>
      nds.map((node) => {
        if (node.id === '6') {

          return {
            ...node,
            data: {
              ...node.data,
              type: pokemonType,
            },
          };
        }
 
        return node;
      }),
    );
  }, [pokemonType, setNodes]);

  const onConnect = useCallback(
    (connection: Connection) => {
      const edge = {
        ...connection,
        animated: true,
        id: `${edges.length} + 1`,
        type: "customEdge",
      };
      setEdges((prevEdges: any) => addEdge(edge, prevEdges));
    },
    [edges]
  );

  return (
    <div style={{height: 700, width: 1500, border: '1px solid black'}}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        nodeTypes={nodeTypes}
        edgeTypes={edgeTypes}
        fitView
      >
        <div className="update-node__controls">
          <label>Name:</label>
          <input
            value={pokemonName}
            onChange={(evt) => setPokemonName(evt.target.value)}
          />
  
          <label className="update-node__bg-label">Type:</label>
          <input
            value={pokemonType}
            onChange={(evt) => setPokemonType(evt.target.value)}
          />
        </div>
        <Background />
        <Controls />
        <MiniMap />
      </ReactFlow>
    </div>
  );
};
