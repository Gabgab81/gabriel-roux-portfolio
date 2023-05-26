import { Suspense, useEffect, useState, useRef } from "react";
import * as THREE from "three";
import { Canvas, useThree } from "@react-three/fiber";
import { 
  OrbitControls, 
  Preload, 
  MeshReflectorMaterial,
  BakeShadows,
  Effects,
  Environment,
} from "@react-three/drei";

import CanvasLoader from '../Loader'

import { Robot } from "./RobotWith3Anim";
import Room  from "./Room";
import { Room2 }  from "./Room2";
import Book from "./Book";
import { Dev } from "./DevLaying";
import Light from "./Light";

import { folder, useControls } from "leva"

import { EffectComposer, Bloom, DepthOfField } from '@react-three/postprocessing'

const SceneCanvas = () => {

  const { p_red, p_green, p_blue, r_red, r_green, r_blue, intensity } = useControls({
    position: folder({
      p_red: { value: -0.6, min: -5, max: 5, step: 0.1 },
      p_green: { value: 1.1, min: -5, max: 5, step: 0.1 },
      p_blue: { value: -0.2, min: -5, max: 5, step: 0.1 },
    }),
    // rotation: folder({
    //   r_red: { value: 0, min: -5, max: 5, step: 0.1 },
    //   r_green: { value: 0, min: -5, max: 5, step: 0.1 },
    //   r_blue: { value: 0, min: -5, max: 5, step: 0.1 },
    // }),
    // intensity: { value: 0.6, min: -5, max: 5, step: 0.1 },
  })



  return (
    <Canvas
      // frameloop="demand"
      shadows
      camera={ { 
        position: [5, 4, 5], 
        // far: 0
        fov: 18 
        }
        }
      gl={{ preserveDrawingBuffer: true }}
    >
    
      <Suspense fallback={<CanvasLoader />}>
        <color attach="background" args={["black"]} />
        <hemisphereLight intensity={0.2} color={'black'}/>
        <Environment preset="night" />
        <OrbitControls 
          // target={[.6, 10, 0]}
          target={[p_red, p_green, p_blue]}
          // enableZoom={false} 
          // maxPolarAngle={Math.PI / 2}
          // minPolarAngle={Math.PI / 2}
        />

        <group>
    
          <mesh position={[0, 0.15, 0]} receiveShadow rotation={[-Math.PI / 2, 0, 0]}>
            <planeGeometry args={[50, 50]} />
            <MeshReflectorMaterial
              blur={[300, 30]}
              resolution={2048}
              mixBlur={1}
              mixStrength={80}
              roughness={1}
              depthScale={1.2}
              minDepthThreshold={0.4}
              maxDepthThreshold={1.4}
              color="#202020"
              metalness={0.8}
            />
          </mesh>
          <Light 
            position={[0, 1.6, -1.3]} 
            intensity={0.6}
            // position={[p_red, p_green, p_blue]}
            // rotation={[r_red, r_green,  r_blue]}
            // intensity={intensity}
          />

          <Robot
            position={[-0.25, 0.19, -0.7]}
            rotation={[0, 15, 0]}
            scale={1.1}
          />
          {/* <Room /> */}
          <Room2 />
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
          <axesHelper args={[2]} position={[0, 0.2, 0]}/>
        </group>
        
      </Suspense>

      <Preload all />
      <Effects />
      <BakeShadows />

    </Canvas>
  )
}

export default SceneCanvas
