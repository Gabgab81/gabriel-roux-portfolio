import { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload } from "@react-three/drei";

import CanvasLoader from '../Loader'

import { Robot } from "./RobotWith3Anim";
import Room  from "./Room";
import Book from "./Book";
import { Dev } from "./DevLaying";

const SceneCanvas = () => {

  return (
    <Canvas
      // frameloop="demand"
      shadows
      camera={ { position: [10, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls 
          // enableZoom={false} 
          // maxPolarAngle={Math.PI / 2}
          // minPolarAngle={Math.PI / 2}
        />
        <ambientLight intensity={0.6} />
        <group>
          <Robot
            position={[-0.25, 0.17, -0.7]}
            rotation={[0, 15, 0]}
            scale={1.2}
          />
          <Room />
          <Dev
            position={[-1.5, 0.55, 0.5]}
            rotation={[0, 0, 0]}
            scale={1}
          />
          <Book
            position={[-1.32, 0.72, 0.5]}
            rotation={[-0.4, 1.1, 0.3]}
            scale={0.3}
          />
          <axesHelper args={[2]} />
        </group>
        
      </Suspense>

      <Preload all />
    </Canvas>
  )
}

export default SceneCanvas