import { Html, Image, OrbitControls, Point, PointMaterial, Points, Sphere, Text, Trail, useHelper } from '@react-three/drei'
import { Canvas, useFrame } from '@react-three/fiber'
import React, { Suspense, useEffect, useRef, useState } from 'react'
import { folder, useControls } from 'leva'
import fontUrl from "./../../public/fonts/ElevateSans.otf"
import { useContactFrom } from "../contexts/ContactForm"
import { Text3d, Form, SpotLight, CameraZoom } from "./canvas"
import { BoxGeometry, Mesh, PointLightHelper, SpotLightHelper } from 'three'
import * as random from 'maath/random/dist/maath-random.esm'
import { Moon } from './canvas/Moon'
import { Billboard } from './canvas/Billboard'

import { Bloom, EffectComposer, Noise, Vignette } from '@react-three/postprocessing'
import { SectionWrapper } from '../hoc'
import CanvasLoader from './Loader'

const Contact = () => {

  // const { p_red, p_green, p_blue, r_red, r_green, r_blue, distance, angle } = useControls({
  //   position: folder({
  //     p_red: { value: 0.85, min: -5, max: 5, step: 0.01 },
  //     p_green: { value: -1.4, min: -5, max: 5, step: 0.01 },
  //     p_blue: { value: 0.66, min: -5, max: 5, step: 0.01 },
  //   }),

  //   rotation: folder({
  //     r_red: { value: 0, min: -5, max: 5, step: 0.1 },
  //     r_green: { value: 0, min: -5, max: 5, step: 0.1 },
  //     r_blue: { value: 0, min: -5, max: 5, step: 0.1 },
  //   }),
  //   distance: { value: 10, min: -5, max: 15, step: 0.1 },
  //   angle: { value: 0.4, min: 0, max: 5, step: 0.01 },
  //   // scale: { value: 0.3, min: -5, max: 5, step: 0.1 },
    
  // })

  function Stars(props) {
    const ref = useRef()
    const sphere =  random.inSphere(new Float32Array(5000), { radius: 1 })
    useFrame((state, delta) => {
      ref.current.rotation.z -= delta / 15
    })
    console.log(sphere)
    return (
      <group rotation={[0, 0, 0.3]}>
      
          <Points ref={ref} positions={sphere} stride={3} frustumCulled={false} {...props}>
            <PointMaterial 
              transparent 
              color="#ffa0e0" 
              size={0.005} 
              sizeAttenuation={true} 
              depthWrite={false} 
            />
          </Points>
        
      </group>
    )
  }

  return (
    <section className='relative w-full h-screen lg:mx-auto flex flex-col justify-between lg:justify-between lg:flex-row'>
      {/* {isLoading && <p>Loading services...</p>} */}
      {/* {!fetchError && !isLoading &&  */}
      <>
        <Canvas camera={{ position: [0, 0, -3], fov:20} } shadows gl={{ antialias: false }} dpr={[1, 1.5]}>
          
          <Suspense fallback={<CanvasLoader />}>

            <CameraZoom z500={0.60} z750={0.4} z1000={0.5} z1500={0.7} />
            {/* <OrbitControls /> */}
            <Moon scale={1.2} position={[-1.1, 0.33, 2.35]} rotation={[0.3, 0.4, 0.5]} />
            <SpotLight distance={3.8} intensity={3} angle={0.3} position={[0.97, 0.69, 1.12]} rotation={[-1.6, -0.3, -1]} />
            <Billboard scale={0.1} rotation={[-0.1, -2.7, -0.1]} position={[0.7, -1.4, 0.66]} />
            <color attach="background" args={['#000']} />
            <ambientLight intensity={0.01} />
            <Stars position={[0.18, 0.4, 1.16]} scale={[1.8, 1.8, 0.1]}/>
            {/* <Stars scale={[1.2, 1.2, 0.1]}/> */}
            <EffectComposer>
              <Noise opacity={0.1} />
              <Vignette eskil={false} offset={0.1} darkness={1.1} />
            </EffectComposer>

          </Suspense>
          
        </Canvas>
      </>
      
      {/* } */}
    </section>
  )
}

export default SectionWrapper(Contact, "contact")