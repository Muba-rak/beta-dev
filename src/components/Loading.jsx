import React from "react";
import { SyncLoader } from "react-spinners";
const Loading = () => {
  return (
    <div className="flex items-center justify-center h-[500px] p-2.5">
      <SyncLoader color="#3D9970" size={30} />
    </div>
  );
};

export default Loading;
