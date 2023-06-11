import * as THREE from "three";
import { useRef, useState } from "react";
import { useHelper } from "@react-three/drei";
import { SpotLightHelper } from "three";

const SpotLight = ({position, rotation, angle, intensity, distance}) => {
  const sLight = useRef();
  const [target] = useState(() => new THREE.Object3D())
  // useHelper(sLight, SpotLightHelper, 'red')
  return (
    <group position={position} rotation={rotation}>
      {/* <pointLight ref={pLight}  intensity={4}/> */}
      <spotLight 
        castShadow
        ref={sLight}  
        target={target}
        penumbra={0.2}
        radiusTop={0.4}
        radiusBottom={40}
        distance={distance}
        angle={angle}
        attenuation={20}
        anglePower={5}
        intensity={intensity}
        opacity={0.2}
      />
      <primitive object={target} position={[0, -1, 0]} />
    </group>
  )
}

export default SpotLight;