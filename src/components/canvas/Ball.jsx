import * as THREE from "three";
import { useRef, useState, useMemo, useEffect } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { TrackballControls, Float, Instance, Text, Decal, useTexture } from '@react-three/drei'
import { folder, useControls } from "leva";
// import { Image } from "cloudinary-react"

const Ball = (props) => {

  const color = new THREE.Color();
  const ref = useRef();

  let keyImg = props.icon
  
  if(keyImg == null) {
    keyImg = 'pvf59cynicfmobpq4xr8dhkxmscn';
  }

  const textures = useTexture(`https://res.cloudinary.com/dgk1xld7w/image/upload/v1683485154/production/${keyImg}.png`)
  
  

  const [ hovered, setHovered ] = useState(false);
  const over = (e) => (e.stopPropagation(), setHovered(true));
  const out = () => setHovered(false);

  useEffect(() => {
    // console.log(ref.current.quaternion)
    if (hovered) document.body.style.cursor = "pointer"
    return () => (document.body.style.cursor = "auto")
  }, [hovered])

  useFrame(({ camera }) => {
    // Make text face the camera
    ref.current.lookAt(camera.position)
    // Animate ball color
    ref.current.material.color.lerp(color.set(hovered ? '#F21B3F' : 'white'), 0.1)
  })

  return (
    <>
      <Float scale={1.6} speed={3} rotationIntensity={1} floatIntensity={0.2} floatingRange={[-0.1, 0.2]} >
      {/* <ambientLight intensity={0.1} /> */}
      {/* <directionalLight intensity={0.002} position={[0, 0, 0.05]} /> */}
      <mesh 
        ref={ref}
        onPointerOver={over}
        onPointerOut={out}
        castShadow 
        receiveShadow 
        scale={0.01} 
        {...props}
      >
        <icosahedronGeometry castShadow ref={ref} args={[1, 1]} />
        {hovered && (
          <Text color={"#F21B3F"} position={[0, 1, 50]}>
            {props.name}
          </Text>
        )}
        
        <meshStandardMaterial 
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
        />
        <Decal
          // debug
          position={[0, 0, 1]}
          rotation={[ 2 * Math.PI, 0, 6.25]}
          flatShading
          map={textures}
          scale={1.2}
        />
      </mesh>
    </Float>
    </>
    
  )
}

export default Ball;