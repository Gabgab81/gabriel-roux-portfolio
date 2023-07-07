import { Suspense, useEffect, useState, useRef } from "react";
import * as THREE from "three";
import { Canvas } from "@react-three/fiber";
import {  
  Preload, 
  MeshReflectorMaterial,
  BakeShadows,
  Effects,
  Environment,
  Text,
} from "@react-three/drei";

// import { LayerMaterial, Depth, Noise } from 'lamina'

import { Bloom, EffectComposer, Noise, Vignette } from '@react-three/postprocessing'

import CanvasLoader from '../Loader'

import { Gpt } from "./Gpt"

import { Room2 }  from "./Room2";
import Book from "./Book";
import { Dev } from "./DevLaying";
import Light from "./Light";

import CameraControls from "./CameraControls";

import { folder, useControls } from "leva"

import fontUrl from "./ElevateSans.otf"

import BoxCollider from "./BoxCollider";

const SceneCanvas = () => {

  // const [ isMobile, setIsMobile ] = useState(false)

  // useEffect(() => {
  //    const mediaQuery = window.matchMedia('(max-width: 500px)');
  //   //  console.log(window.innerWidth)
  //    setIsMobile(mediaQuery.matches)

     

  //    const handleMediaQueryChange = (event) =>{
  //     setIsMobile(event.matches)
  //     // console.log(mediaQuery)
  //     console.log(window.innerWidth)
  //    }

  //    addEventListener("resize", (event) => {
  //     // console.log(window.innerWidth)
  //     setWidth(window.innerWidth)
  //     // console.log(camera)

  //    })

  //    mediaQuery.addEventListener('change', handleMediaQueryChange);
  // }, [])

  // const { p_red, p_green, p_blue, r_red, r_green, r_blue, scale, text, minAzimuthAngle, maxAzimuthAngle, hidden, fov, zoom } = useControls({
  //   position: folder({
  //     p_red: { value: 0, min: -10, max: 10, step: 0.1 },
  //     p_green: { value: 0, min: -10, max: 10, step: 0.1 },
  //     p_blue: { value: 0, min: -10, max: 10, step: 0.1 },
  //   }),
  //   // rotation: folder({
  //   //   r_red: { value: -0.5, min: -5, max: 5, step: 0.1 },
  //   //   r_green: { value: 1.6, min: -5, max: 5, step: 0.1 },
  //   //   r_blue: { value: 0.5, min: -5, max: 5, step: 0.1 },
  //   // }),
  //   // scale: { value: 0.3, min: -5, max: 5, step: 0.1 },
  //   // text: "Hi, I'm Gabriel",
  //   // minAzimuthAngle: { value: 6, min: -20, max: 20, step: 0.1 },
  //   // maxAzimuthAngle: { value: 6, min: -10, max: 10, step: 0.1 },
  //   // hidden: true
  //   // fov: { value: 18, min: 18, max: 60, step: 0.1 },
  //   // zoom: { value: 1, min: 0.01, max: 1, step: 0.01 },
  // })

  return (
    <Canvas
      // frameloop="demand"
      shadows
      camera={ { 
        position: [5, 4, 5] , 
        // far: 1000,
        // zoom: zoom,
        // fov: fov,
        fov: 18,
        // fov:25
        // fov: 55
        }
        }
      gl={{ preserveDrawingBuffer: true }}
      // dpr={[1, 1]}
      dpr={window.devicePixelRatio}
    >
      <Suspense fallback={<CanvasLoader />}>

        <color attach="background" args={["black"]} />
        <hemisphereLight intensity={0.1} color={'black'}/>
        {/* <Environment preset="night" /> */}
        {/* <CameraControls />: */}
        
        {/* {hidden && ( */}
        <group scale={1}>

          <CameraControls />

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
            // font={fontUrl}
            font="/fonts/BlackChancery.TTF" 
            // position={[p_red, p_green, p_blue]}
            position={[-2, 1.7, 0.4]}
            // rotation={[r_red, r_green,  r_blue]}
            rotation={[-0.5, 1.6, 0.5]}
            // scale={scale} 
            scale={0.3}
          >
            Hi' I'm Gabriel
          </Text>

          <Text
            color={"white"}
            // font={fontUrl}
            font="/fonts/BlackChancery.TTF" 
            // position={[p_red, p_green, p_blue]}
            position={[-2, 1.46, 0.32]}
            // rotation={[r_red, r_green,  r_blue]}
            rotation={[-0.5, 1.6, 0.5]}
            // scale={scale} 
            scale={0.2}
          >
            I'm "hard worker" junior
          </Text>
          <Text
            color={"white"}
            // font={fontUrl}
            font="/fonts/BlackChancery.TTF" 
            // position={[p_red, p_green, p_blue]}
            position={[-2, 1.25, 0.45]}
            // rotation={[r_red, r_green,  r_blue]}
            rotation={[-0.5, 1.6, 0.5]}
            // scale={scale}
            scale={0.2} 
          >
            full stack developper.
          </Text>

          <Text
            color={"white"}
            // font={fontUrl}
            font="/fonts/BlackChancery.TTF" 
            // position={[p_red, p_green, p_blue]}
            position={[-2, 1, 0.45]}
            // rotation={[r_red, r_green,  r_blue]}
            rotation={[-0.5, 1.6, 0.5]}
            // scale={scale}
            scale={0.2} 
          >
            Let's work together!!
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

        </group> 
        {/* )} */}
        
      </Suspense>
      <Preload all />
      <Effects />
      <BakeShadows />

      <EffectComposer>
        <Bloom luminanceThreshold={0} luminanceSmoothing={2} height={300} />
        <Noise opacity={0.1} />
        <Vignette eskil={false} offset={0.1} darkness={1.1} />
      </EffectComposer>
    </Canvas>
  )
}

export default SceneCanvas
