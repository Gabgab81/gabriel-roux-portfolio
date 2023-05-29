import * as THREE from 'three';
import { OrbitControls } from "@react-three/drei";
import { CameraModes, useFirstScene } from "../../contexts/FirstSceneContext";
import { useFrame } from "@react-three/fiber";
import { useEffect, useRef } from 'react';

const CameraControls = () => {

  const { cameraMode, setCameraMode } = useFirstScene();

  const orbitControls = useRef()

  const cameraPositions = {
    // [CameraModes.DEFAULT]: {
    //   position: new THREE.Vector3(5, 4, 5),
    //   target: new THREE.Vector3(-0.6, 1.1, -0.2),
    // },
    [CameraModes.BOOK]: {
      position: new THREE.Vector3(0, 1.4, 1),
      target: new THREE.Vector3(-1, 0.9, 0.5),
    },
    [CameraModes.BACK]: {
      position: new THREE.Vector3(5, 4, 5),
      target: new THREE.Vector3(-0.6, 1.1, -0.2),
    },
  }

  useEffect(() => {
    if(cameraMode == CameraModes.BOOK){
      orbitControls.current.enableRotate = false
    } else {
      orbitControls.current.enableRotate = true
    }
    console.log(orbitControls.current)
  })
  useFrame((state, delta) => {
    if(cameraMode == CameraModes.FREE){
      return ;
    } 
    state.camera.position.lerp(cameraPositions[cameraMode].position, delta * 3)
   orbitControls.current.target.lerp(cameraPositions[cameraMode].target, delta * 3)
  });

  useEffect(() => {
    console.log(cameraMode)
  })

  return(
    <>
      <OrbitControls 
      // enabled={false}
        ref={orbitControls}
        onStart={() => setCameraMode(CameraModes.FREE)}
      target={[-0.6, 1.1, -0.2]}
      enableZoom={false} 
      minAzimuthAngle={-Math.PI / -10}
      maxAzimuthAngle={Math.PI / 3}
      minPolarAngle={Math.PI / 4}
      maxPolarAngle={Math.PI - Math.PI / 2}
      />
    </>
    
  );
};

export default CameraControls