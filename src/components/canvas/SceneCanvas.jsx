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
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <ambientLight intensity={1} />
        <group>
          <Robot />
          <Room />
          <Dev />
          <Book />
        </group>
        
      </Suspense>

      <Preload all />
    </Canvas>
  )
}

export default SceneCanvas