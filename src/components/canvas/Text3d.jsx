import { 
  Text3D,
  MeshTransmissionMaterial,
} from "@react-three/drei";
import fontUrl from "../canvas/BlackChancery_Regular.json"

const Text3d = ({text, position, rotation, color, scale}) => {
  return (
    <Text3D
      castShadow
      bevelEnabled
      font={fontUrl}
      scale={scale}
      letterSpacing={-0.03}
      height={0.25}
      bevelSize={0.01}
      bevelSegments={10}
      curveSegments={128}
      bevelThickness={0.01}
      position={position}
      rotation={rotation}
    >
      <meshNormalMaterial />
      {/* <MeshTransmissionMaterial color={color} resolution={128} thickness={0.5} anisotropy={2} temporalDistortion={0.1} distortion={10} envMapIntensity={10} transmission={0.6} /> */}
      {/* <hemisphereLight intensity={1} color="white" groundColor="black" /> */}
      {/* <Glow scale={1.2} near={-5} color={"yellow"} /> */}
      {/* <ambientLight intensity={1}/> */}
      {text}
      {/* <Sparkles count={10} scale={2} size={6} speed={0.4} /> */}
  </Text3D>
  )
}

export default Text3d