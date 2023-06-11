import { OrbitControls } from "@react-three/drei"
import { useThree } from "@react-three/fiber";
import { useEffect, useRef, useState } from "react";

const CameraZoomContact = () => {

  const orbitControls = useRef()

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
        camera.zoom = 0.35
      } else if (is750) {
        camera.zoom = 0.4
      } else if (is1000) {
        camera.zoom = 0.5
      } else if (is1500) {
        camera.zoom = 0.7
      } else {
        camera.zoom = 1
      }
    }

    handleZoom()
    camera.updateProjectionMatrix();

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

    mediaQuery500.addEventListener('change', handleMediaQuery500Change);
    mediaQuery750.addEventListener('change', handleMediaQuery750Change);
    mediaQuery1000.addEventListener('change', handleMediaQuery1000Change);
    mediaQuery1500.addEventListener('change', handleMediaQuery1500Change);

    return () => {
      mediaQuery500.removeEventListener('change', handleMediaQuery500Change);
      mediaQuery750.removeEventListener('change', handleMediaQuery750Change);
      mediaQuery1000.removeEventListener('change', handleMediaQuery1000Change);
      mediaQuery1500.removeEventListener('change', handleMediaQuery1500Change);
    }

  },[setIs500, setIs750, setIs1000, setIs1500, is500, is750, is1000, is1500])

  return (
    <OrbitControls
      ref={orbitControls}
      enableZoom={false} 
      enableRotate={false}
    />
  )
}

export default CameraZoomContact;