import { useFrame, useThree } from "@react-three/fiber";
import { useEffect, useRef, useState } from "react";
import { easing } from 'maath'
import { Text } from "@react-three/drei";

const Frame = (props) => {
  const [hov, setHov] = useState(false);
  const frame = useRef()
  const frame2 = useRef()
  const text = useRef()

  const frameScale = useThree((state) => frame.current)
  // console.log(frameScale)

  const frameWidth = props.width * props.w - props.m * 1.3;
  
  useFrame((state, dt) => {
    // console.log(text.current)
    easing.damp3(text.current.scale, [(hov ? 0.28 : 0.25), (hov ? 0.28 : 0.25), 0.1], 0.1, dt)
    easing.dampC(text.current.material.color, hov ? 'orange' : 'white', 0.2, dt)
    easing.damp3(frame.current.scale, [(hov ? frameWidth + 0.2 : frameWidth), 0.05, (hov ? 5.3 : 5.2)], 0.1, dt)
    easing.dampC(frame2.current.material.color, hov ? 'orange' : 'white', 0.2, dt)
  })

  useEffect(() => {
    if (hov) document.body.style.cursor = "pointer"
    return () => (document.body.style.cursor = "auto")
  }, [hov])
  return (
    <group>
      <mesh
        ref={frame}
        {...props}
        onPointerOver={() => setHov(true)}
        onPointerOut={() => setHov(false)}
      >
        <boxGeometry />
        <meshStandardMaterial color="grey" metalness={0.8} roughness={0.5} envMapIntensity={2} />
        <mesh
          ref={frame2} 
          raycast={() => null} 
          scale={[0.96, 0.98, 0.98]} position={[0, 0.1, 0]}
        
          >
          <boxGeometry />
          <meshBasicMaterial toneMapped={false} fog={false} />
        </mesh>
      </mesh>
      <Text font="/fonts/BlackChancery.TTF" ref={text} scale={.25} position={[-props.width * props.w * props.i, -2.85, (props.i / 5) * 5]} >
        {props.projects[props.i + props.index1 < props.projects.length ? props.i + props.index1 : ( props.i + props.index1 ) - props.projects.length].name}
      </Text>
    </group>
    
  )
}

export default Frame;