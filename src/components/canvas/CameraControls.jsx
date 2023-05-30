import * as THREE from 'three';
import { OrbitControls } from "@react-three/drei";
import { CameraModes, useFirstScene } from "../../contexts/FirstSceneContext";
import { useFrame, useThree } from "@react-three/fiber";
import { useEffect, useRef, useState } from 'react';

import { folder, useControls } from "leva"

const CameraControls = ({isMobile}) => {

  // const [ width, setWidth ] = useState(window.innerWidth)

  const { fov, zoom } = useControls({
   
    fov: { value: 18, min: 18, max: 60, step: 0.1 },
    zoom: { value: 1, min: 0.01, max: 1, step: 0.01 },
  })

  const { cameraMode, setCameraMode } = useFirstScene();

  const orbitControls = useRef()

  

  const cameraPositions = {
   
    [CameraModes.BOOK]: {
      position: new THREE.Vector3(0.2, 1.4, 1.2),
      target: new THREE.Vector3(-1, 0.9, 0.5),
    },
    [CameraModes.BACK]: {
      position: new THREE.Vector3(5, 4, 5),
      target: new THREE.Vector3(-0.6, 1.1, -0.2),
    },
  }

  const camera = useThree((state => state.camera))

  const [ is500, setIs500 ] = useState(false)
  const [ is750, setIs750 ] = useState(false)
  const [ is1000, setIs1000 ] = useState(false)
  const [ is1500, setIs1500 ] = useState(false)

  useEffect(() => {

    const mediaQuery500 = window.matchMedia('(max-width: 500px)');
    setIs500(mediaQuery500.matches);
    const mediaQuery750 = window.matchMedia('(max-width: 750px)');
    setIs750(mediaQuery750.matches);
    const mediaQuery1000 = window.matchMedia('(max-width: 1000px)');
    setIs1000(mediaQuery1000.matches);
    const mediaQuery1500 = window.matchMedia('(max-width: 1500px)');
    setIs1500(mediaQuery1500.matches);

    const handleZoom = () => {
      // console.log(even)
      if (is500) {
        camera.zoom = 0.28
      } else if (is750) {
        camera.zoom = 0.32
      } else if (is1000) {
        camera.zoom = 0.5
      } else if (is1500) {
        camera.zoom = 0.7
      } else {
        camera.zoom = 1
      }
    }

    handleZoom()

    const handleMediaQuery500Change = (event) =>{
      setIs500(event.matches);
      handleZoom()
    }
    const handleMediaQuery750Change = (event) =>{
      setIs750(event.matches);
      handleZoom()
    }
    const handleMediaQuery1000Change = (event) =>{
      setIs1000(event.matches);
      handleZoom()
    }
    const handleMediaQuery1500Change = (event) =>{
      setIs1500(event.matches);
      handleZoom()
    }

    // console.log(camera.zoom)

    // console.log(is500, is1000, is1500)

    // console.log(window.innerWidth)
    mediaQuery500.addEventListener('change', handleMediaQuery500Change);
    mediaQuery750.addEventListener('change', handleMediaQuery750Change);
    mediaQuery1000.addEventListener('change', handleMediaQuery1000Change);
    mediaQuery1500.addEventListener('change', handleMediaQuery1500Change);
    
    // addEventListener("resize", () => {
    //   console.log(window.innerWidth)
    //   console.log(camera.zoom)
    //   handleZoom()
    //  })

     
  }, [camera, is500, is1000, is1500, setIs500, setIs1000, setIs1500])

  useEffect(() => {
    if(cameraMode == CameraModes.BOOK){
      orbitControls.current.enableRotate = false
    } else {
      orbitControls.current.enableRotate = true
    }
  });


  useFrame((state, delta) => {
    if(cameraMode == CameraModes.FREE){
      return ;
    } 
    state.camera.position.lerp(cameraPositions[cameraMode].position, delta * 3)
   orbitControls.current.target.lerp(cameraPositions[cameraMode].target, delta * 3)
   console.log(window.innerWidth)
  });

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