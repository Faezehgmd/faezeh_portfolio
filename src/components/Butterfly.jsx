import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Scene from "../models/Scene";

export default function Butterfly() {
  return (
    <Canvas
      camera={{ position: [0, 0, 4], fov: 45 }}
      style={{ width: "100%", height: "100%" }}
    >
      <ambientLight intensity={2} />

      <directionalLight
        position={[2, 2, 2]}
        intensity={3}
        color="#ff8c00"
      />

      <Scene />

      <OrbitControls
        enableZoom={false}
        autoRotate
        autoRotateSpeed={1}
      />
    </Canvas>
  );
}