import Spline from "@splinetool/react-spline";

export default function ThreeDMac({ version }) {
  let scene;
  version == 1
    ? (scene = "https://prod.spline.design/Fx3I9v8ighaJhgXe/scene.splinecode")
    : (scene = "https://prod.spline.design/rfn5ar6H1lfig5S5/scene.splinecode");
  return <Spline style={{ width: "700px" }} scene={scene} />;
}
