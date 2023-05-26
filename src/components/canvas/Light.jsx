import { useRef, useState } from "react";
import { SpotLightHelper, DirectionalLightHelper, PointLightHelper } from "three";
import * as THREE from "three"
import { useHelper, SpotLight } from "@react-three/drei";

const Light = ({position, rotation, color, intensity }) => {

  const lightRef = useRef();
  // useHelper(lightRef, SpotLightHelper, 0.5, 'red')
  // useHelper(lightRef, DirectionalLightHelper, 0.5, 'red')
  // useHelper(lightRef, PointLightHelper, 0.5, 'red')

  return (

    <pointLight intensity={intensity} color={color} ref={lightRef} position={position} rotation={rotation} />
    
  )
}

export default Light