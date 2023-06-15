import * as THREE from "three";
import { useRef, useState, useMemo, useEffect } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { TrackballControls, Float, Instance, OrbitControls, ContactShadows } from '@react-three/drei'
import { folder, useControls } from "leva";
import Ball from "./Ball";

// const Cloud = ({ count = 10, radius = count / 100 }) => {
const Cloud = ({ tech}) => {
  // console.log(tech[1])
  const count = tech.length;
  // const count = 10;
  const radius = count / 270;
  const balls = useMemo(() => {
    const temp = [];
    const spherical = new THREE.Spherical();
    const phiSpan = Math.PI / ( count/3 );
    const thetaSpan = (Math.PI * 2) / count
    for (let i = 1; i < count/3; i++)
      for (let j = 0; j < count; j++) 
        temp.push([new THREE.Vector3().setFromSpherical(spherical.set(radius, phiSpan * i, thetaSpan * j)), tech[j].name, tech[j].icon])
    return temp
  }, [count, radius])
  // console.log(balls)
  return balls.map(([pos, name, icon], index) => <Ball key={index} position={pos} name={name} icon={icon} />)
}



const SphericalTech = ({tech}) => {

  const ref = useRef();

  // for roation

  // const getMouseDegrees = (x, y, degreeLimit) => {
  //   let dx = 0, dy = 0, xdiff, xPercentage, ydiff, yPercentage;

  //   let w = { x: window.innerWidth, y: window.innerHeight };

  //   // left
  //   if (x <= w.x / 2 ) {
  //     xdiff = w.x / 2 - x;
  //     xPercentage = (xdiff / ( w.x / 2 )) * 100;
  //     dx = (( degreeLimit * xPercentage ) / 100) * -1;
  //   }

  //   // right
  //   if (x >= w.x / 2 ) {
  //     xdiff = x - w.x / 2;
  //     xPercentage = (xdiff / ( w.x / 2 )) * 100;
  //     dx = ( degreeLimit * xPercentage ) / 100;
  //   }

  //   // up
  //   if (y <= w.y / 2 ) {
  //     ydiff = w.y / 2 - y;
  //     yPercentage = (ydiff / ( w.y / 2 )) * 100;
  //     dy = (( degreeLimit * yPercentage ) / 100) * -1;
  //   }

  //   // down
  //   if (y >= w.y / 2 ) {
  //     ydiff = y - w.y / 2;
  //     yPercentage = (ydiff / ( w.y / 2 )) * 100;
  //     dy = ( degreeLimit * yPercentage ) / 100;
  //   }

  //   return { x: dx, y: dy };
  // }

  // const moveCloud = (mouse, cloud, degreeLimit) => {
  //   let degrees = getMouseDegrees(mouse.x, mouse.y, degreeLimit);
  //   // console.log(degrees)
  //   cloud.current.rotation.y = degrees.x / 20;
  //   cloud.current.rotation.x = degrees.y / 20;
  // }

  // useEffect(() => {
  //   const getMousePos = (e) => {
  //     return { x: e.clientX, y: e.clientY };

  //   }

  //   document.addEventListener('mousemove', function(e) {
  //     let mouseCoords = getMousePos(e)
  //     moveCloud(mouseCoords, ref, 50)
  //   })
  // })

  // for rotation

  useFrame(() => {
    ref.current.rotation.x += 0.0022
    ref.current.rotation.y += 0.0022

  })

  // const { p_red, p_green, p_blue, r_red, r_green, r_blue, scale, text, minAzimuthAngle, maxAzimuthAngle, hidden, fov, zoom } = useControls({
  //   position: folder({
  //     p_red: { value: -0.71, min: -2, max: 2, step: 0.01 },
  //     p_green: { value: -0.08, min: -2, max: 2, step: 0.01 },
  //     p_blue: { value: 2.39, min: 0, max: 4, step: 0.01 },
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
    <>
      {/* <Ball /> */}
      <directionalLight position={[-0.71, -0.08, 2.39]} castShadow intensity={0.5} shadow-mapSize={2048} shadow-bias={-0.001} />
      <group position={[0, 0.01, 2]} ref={ref}>
        <Cloud tech={tech}/> 
        {/* <ContactShadows opacity={1} scale={10} blur={1} far={10} resolution={256} color="#000000" /> */}
        {/* <OrbitControls /> */}
      </group>
      {/* <pointLight intensity={0.5} position={[p_red, p_green, p_blue]} />    */}
    </>
  )
}

export default SphericalTech;