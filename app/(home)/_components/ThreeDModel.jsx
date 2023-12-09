import React from "react";
import Spline from "@splinetool/react-spline";

const ThreeDModel = () => {
  return (
    <div className="opacity-40 pointer-events-none relative w-full">
      <Spline
        scene="https://prod.spline.design/GdV1yH4064Yrv75h/scene.splinecode"
        style={{ width: "1090px" }}
      />
    </div>
  );
};

export default ThreeDModel;
