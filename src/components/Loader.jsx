import { Canvas } from "@react-three/fiber";
import {
  OrbitControls,
  useGLTF,
} from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { motion } from "framer-motion";

function Butterfly() {

  const { scene } = useGLTF("/models/butterfly/butterfly.glb");

  const ref = useRef();

  useFrame(({ clock }) => {

    if (ref.current) {

      ref.current.rotation.y += 0.01;

      ref.current.position.y =
        Math.sin(clock.elapsedTime * 2) * 0.15;

      ref.current.rotation.z =
        Math.sin(clock.elapsedTime) * 0.05;

    }

  });

  return (
    <primitive
      ref={ref}
      object={scene}
      scale={0.18}
    />
  );

}

export default function Loader() {

  return (

    <motion.div
      className="loader"

      initial={{ opacity: 1 }}

      exit={{ opacity: 0 }}

    >

      <div className="loader-model">

        <Canvas camera={{ position: [0, 0, 8], fov: 40 }}>

          <ambientLight intensity={2} />

          <directionalLight
            intensity={3}
            color="#ff7a00"
            position={[5,5,5]}
          />

          <pointLight
            intensity={8}
            color="#ff7a00"
            position={[2,2,2]}
          />

          <Butterfly />

          <OrbitControls
            enableZoom={false}
            enablePan={false}
            autoRotate={false}
          />

        </Canvas>

      </div>

      <h1>Faezeh</h1>

      <div className="loader-line"/>

    </motion.div>

  );

}

useGLTF.preload("/models/butterfly/butterfly.glb");