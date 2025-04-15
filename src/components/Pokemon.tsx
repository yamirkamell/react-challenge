import { Position, useReactFlow } from "@xyflow/react";
import CustomHandle from "./CustomHandle";

const ELEMENT_IMAGE_MAP: { [type: string]: string } = {
  Fire: "https://pbs.twimg.com/media/Fyb5LpCWwAAcHHX.png",
  Water: "https://i.pinimg.com/564x/c3/61/39/c3613977779d28d1da20e3d814ac1ce0.jpg",
  Electric: "https://i.pinimg.com/736x/4f/e9/0d/4fe90d2ec4bf5618a7584b8f21f65d1c.jpg",
  Normal: "https://pixelmonmod.com/w/images/8/83/NormalType.png",
  Ghost: "https://pbs.twimg.com/media/Fyb4Zo6XsAgPF8S.png",
};

export default function Pokemon({
  data: { name, type },
  id,
}: any) {
  const { setNodes } = useReactFlow();

  return (
    <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', border: `2px solid gray`, padding: 2, width: 170, height: 50, borderRadius: 2, gap: 10}}>
      <div>
        <img
          height="50px"
          width="50px"
          src={ELEMENT_IMAGE_MAP[type]}
          
        />
      </div>
      <div>
        <label>
          {name}
        </label>
      </div>
      <div
        style={{display: 'flex', alignSelf: 'flex-start'}}
        aria-label="Delete Payment Provider"
        onClick={() =>
          setNodes((prevNodes) => prevNodes.filter((node) => node.id !== id))
        }
      >
        X
      </div>
      <CustomHandle type="target" position={Position.Left} />
    </div>
  );
}
