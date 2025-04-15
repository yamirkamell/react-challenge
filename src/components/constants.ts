import { Edge, Node } from "@xyflow/react";

export const initialEdges: Edge[] = [];

export const initialNodes: Node[] = [
  {
    id: "1",
    position: { x: 100, y: 100 },
    data: { name: 'Galar' },
    type: "region",
  },
  {
    id: "2",
    data: { type: "Fire", label: "Fuego" },
    position: { x: 300, y: 20 },
    type: "typeElement",
  },
  {
    id: "3",
    data: { type: "Water", label: "Agua" },
    position: { x: 300, y: 200 },
    type: "typeElement",
  },
  {
    id: "4",
    data: { name: "Charmander", type: "Fire" },
    position: { x: 550, y: -50 },
    type: "pokemon",
  },
  {
    id: "5",
    data: { name: "Squirtle", type: "Water" },
    position: { x: 550, y: 125 },
    type: "pokemon",
  },
  {
    id: "6",
    data: { name: "-", type: "-" },
    position: { x: 550, y: 325 },
    type: "pokemon",
  },
];
