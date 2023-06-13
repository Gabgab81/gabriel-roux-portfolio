import { Image } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef, useState } from "react";
import { easing } from 'maath'


function Img(props){
  const image = useRef()
  const [hov, setHov] = useState(false);
  const ov = () => setHov(true);
  const ot = () => setHov(false);
  useFrame((state, dt) =>{
    // props.hovered && console.log(image.current.name)
    easing.damp3(image.current.scale, [(hov ? 0.85 : image.current.scale.z), (hov ? 0.905 : image.current.scale.y), image.current.scale.x], 0.1, dt)
  })
  return <Image 
    raycast={() => null} 
    ref={image} 
    {...props}
    onPointerOver={function(){
      ov,
      console.log('hello')
    }}
    onPointerOut={ot}
    
    />
}

export default Img;