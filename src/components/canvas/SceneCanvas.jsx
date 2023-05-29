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
  Text,
  PresentationControls,
} from "@react-three/drei";

import CanvasLoader from '../Loader'

import { Robot } from "./RobotWith3Anim";
import { Gpt } from "./Gpt"

import Room  from "./Room";
import { Room2 }  from "./Room2";
import Book from "./Book";
import { Dev } from "./DevLaying";
import Light from "./Light";
import Text3d from "./Text3d";

import CameraControls from "./CameraControls";

import { folder, useControls } from "leva"

import fontUrl from "./ElevateSans.otf"

import { EffectComposer, Bloom, DepthOfField } from '@react-three/postprocessing'
import BoxCollider from "./BoxCollider";

const SceneCanvas = () => {

  const { p_red, p_green, p_blue, r_red, r_green, r_blue, scale, text, minAzimuthAngle, maxAzimuthAngle, hidden } = useControls({
    position: folder({
      p_red: { value: -2, min: -5, max: 5, step: 0.1 },
      p_green: { value: 1.6, min: -5, max: 5, step: 0.1 },
      p_blue: { value: 1.7, min: -5, max: 5, step: 0.1 },
    }),
    rotation: folder({
      r_red: { value: -0.5, min: -5, max: 5, step: 0.1 },
      r_green: { value: 1.6, min: -5, max: 5, step: 0.1 },
      r_blue: { value: 0.5, min: -5, max: 5, step: 0.1 },
    }),
    scale: { value: 0.3, min: -5, max: 5, step: 0.1 },
    text: "Hi, I'm Gabriel",
    minAzimuthAngle: { value: 6, min: -20, max: 20, step: 0.1 },
    maxAzimuthAngle: { value: 6, min: -10, max: 10, step: 0.1 },
    hidden: true
  })



  return (
    <Canvas
      // frameloop="demand"
      shadows
      camera={ { 
        position: [5, 4, 5], 
        far: 1000,
        fov: 18,
        // fov: 55
        }
        }
      gl={{ preserveDrawingBuffer: true }}
      // dpr={[1, 1]}
      dpr={window.devicePixelRatio}
    >
      <Suspense fallback={<CanvasLoader />}>
        <color attach="background" args={["black"]} />
        <hemisphereLight intensity={0.2} color={'black'}/>
        <Environment preset="night" />
        <CameraControls />
        {/* <OrbitControls 
          target={[-0.6, 1.1, -0.2]}
          enableZoom={false} 
          minAzimuthAngle={-Math.PI / -10}
          maxAzimuthAngle={Math.PI / 3}
          minPolarAngle={Math.PI / 4}
          maxPolarAngle={Math.PI - Math.PI / 2}
      /> */}
        
        {hidden && (
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

          <Text
            color={"#915eff"}
            font={fontUrl}
            // position={[p_red, p_green, p_blue]}
            position={[-2, 1.65, 0.4]}
            // rotation={[r_red, r_green,  r_blue]}
            rotation={[-0.5, 1.6, 0.5]}
            // scale={scale} 
            scale={0.3}
          >
            Hi' I'm Gabriel
          </Text>

          <Text
            color={"white"}
            font={fontUrl}
            // position={[p_red, p_green, p_blue]}
            position={[-2, 1.4, 0.2]}
            // rotation={[r_red, r_green,  r_blue]}
            rotation={[-0.5, 1.6, 0.5]}
            // scale={scale} 
            scale={0.2}
          >
            I develop 3D visuals, user
          </Text>
          <Text
            color={"white"}
            font={fontUrl}
            // position={[p_red, p_green, p_blue]}
            position={[-2, 1.2, -0.1]}
            // rotation={[r_red, r_green,  r_blue]}
            rotation={[-0.5, 1.6, 0.5]}
            // scale={scale}
            scale={0.2} 
          >
            interfaces and web applications.
          </Text>

          <BoxCollider 
            position={[0, 0.9, -0.9]} 
            rotation={[0, 0, 0]}
            scale={[0.8, 1.4, 0.8]}
          />

          <Gpt 
            position={[-0.15, 0.19, -0.7]}
            rotation={[0, 15.1, 0]}
            scale={1.1}
          />
          {/* <Robot
            position={[-0.25, 0.19, -0.7]}
            rotation={[0, 15, 0]}
            scale={1.1}
          /> */}
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
    
          
          {/* <axesHelper args={[2]} position={[0, 0.2, 0]}/> */}
        </group> )}
        
      </Suspense>
      <Preload all />
      <Effects />
      <BakeShadows />

    </Canvas>
  )
}

export default SceneCanvas
