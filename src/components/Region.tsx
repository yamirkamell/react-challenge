import { Position } from "@xyflow/react";
import CustomHandle from "./CustomHandle";

export default function Region({
  data: { name },
}: any) {
  return (
    <div style={{backgroundColor: '#ff6969', border: "1px solid #ff6969", width: 130, height: 50, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ backgroundColor: '#ff6969', padding: 2}}>
        <label style={{color: 'white', fontSize: 20}}>
          {`Región ${name}`}
        </label>
      </div>
      <CustomHandle type="source" position={Position.Right} />
    </div>
  );
}
