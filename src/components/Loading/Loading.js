import React from "react";
import { Circles } from "react-loader-spinner";

const Loading = () => {
  return (
    <div
      style={{
        width: "98vw",
        height: "98vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        gap: "6px",
      }}
    >
      <Circles
        height="81"
        width="77"
        color="black"
        ariaLabel="circles-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />{" "}
      
    </div>
  );
};

export default Loading;
