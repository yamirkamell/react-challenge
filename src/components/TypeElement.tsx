import { Position } from "@xyflow/react";
import CustomHandle from "./CustomHandle";

const backgroundColorElement: { [type: string]: string } = {
  Fire: "#FBAF24",
  Water: "#6390F0",
  Electric: "#F7D02C",
  Normal: "#A8A77A",
  Ghost: "#735797",
};

export default function TypeElement({
  data: { type, label },
}: any) {
 
  return (
    <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: backgroundColorElement[type], border: `2px solid ${backgroundColorElement[type]}`, padding: 2, width: 130, height: 50, borderRadius: 2}}>
      <div>
        <label style={{color: '#FFFFFF', fontSize: 20}}>{label}</label>
      </div>
      <CustomHandle type="source" position={Position.Right} />
      <CustomHandle type="target" position={Position.Left} />
    </div>
  );
}
