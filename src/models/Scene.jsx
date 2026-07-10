import { Canvas, useFrame } from "@react-three/fiber";
import {
  OrbitControls,
  Stars,
  Sparkles,
  useGLTF,
} from "@react-three/drei";
import { Suspense, useRef } from "react";

function Butterfly() {
  const { scene } = useGLTF("/models/butterfly/butterfly.glb");
  const butterflyRef = useRef();

  useFrame(({ clock }) => {
    if (butterflyRef.current) {
      butterflyRef.current.position.y =
        Math.sin(clock.elapsedTime * 1.5) * 0.2;

      butterflyRef.current.rotation.y += 0.003;

      butterflyRef.current.rotation.z =
        Math.sin(clock.elapsedTime) * 0.08;
    }
  });

  return (
    <primitive
      ref={butterflyRef}
      object={scene}
      scale={0.2}
      position={[0, 0, 0]}
    />
  );
}

export default function Scene({ theme }) {
  return (
    <Canvas camera={{ position: [0, 0, 9], fov: 42 }}>

      <ambientLight intensity={1.8} />

      <directionalLight
        position={[5, 5, 5]}
        intensity={3}
        color="#ff8c00"
      />

      <pointLight
        position={[2, 2, 2]}
        color="#ff7a00"
        intensity={8}
      />

      <pointLight
        position={[-3, -2, 2]}
        color="#ffb347"
        intensity={5}
      />

      {theme === "dark" ? (
        <Stars
          radius={80}
          depth={40}
          count={3000}
          factor={3}
          saturation={0}
          fade
        />
      ) : (
        <Sparkles
          count={350}
          scale={12}
          size={4}
          speed={0.4}
          color="#ff7a00"
        />
      )}

      <Suspense fallback={null}>
        <Butterfly />
      </Suspense>

      <OrbitControls
        enableZoom={false}
        enablePan={false}
        autoRotate={false}
      />

    </Canvas>
  );
}

useGLTF.preload("/models/butterfly/butterfly.glb");