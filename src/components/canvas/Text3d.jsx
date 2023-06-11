import { 
  Text3D,
  MeshTransmissionMaterial,
  Billboard,
  Sparkles,
  Text,
} from "@react-three/drei";
import fontUrl from "../canvas/BlackChancery_Regular.json"
import fontUrlOtf from './../../../public/fonts/BlackChancery.otf'
import fontUrlJson from "./../../../public/fonts/BlackChancery.json"
import { folder, useControls } from "leva";



const Text3d = ({ position, rotation, scale}) => {

  const { p_red, p_green, p_blue, minAzimuthAngle, maxAzimuthAngle, hidden, fov, zoom } = useControls({
    position: folder({
      p_red: { value: 0, min: 0, max: 3, step: 0.01 },
      p_green: { value: 0, min: 0, max: 3, step: 0.01 },
      p_blue: { value: 0, min: -10, max: 10, step: 0.1 },
    }),

    // rotation: folder({
    //   r_red: { value: -0.5, min: -5, max: 5, step: 0.1 },
    //   r_green: { value: 1.6, min: -5, max: 5, step: 0.1 },
    //   r_blue: { value: 0.5, min: -5, max: 5, step: 0.1 },
    // }),
    // scale: { value: 0.3, min: -5, max: 5, step: 0.1 },
    // text: "Hi, I'm Gabriel",
    // minAzimuthAngle: { value: 6, min: -20, max: 20, step: 0.1 },
    // maxAzimuthAngle: { value: 6, min: -10, max: 10, step: 0.1 },
    // hidden: true
    // fov: { value: 18, min: 18, max: 60, step: 0.1 },
    // zoom: { value: 1, min: 0.01, max: 1, step: 0.01 },
  })
  const { autoRotate, text, shadow, ...config } = useControls({
    text: 'Contact',
    backside: true,
    backsideThickness: { value: 0.3, min: 0, max: 2 },
    samples: { value: 16, min: 1, max: 32, step: 1 },
    resolution: { value: 1024, min: 64, max: 2048, step: 64 },
    transmission: { value: 1, min: 0, max: 1 },
    clearcoat: { value: 0, min: 0.1, max: 1 },
    clearcoatRoughness: { value: 0.0, min: 0, max: 1 },
    thickness: { value: 0.3, min: 0, max: 5 },
    chromaticAberration: { value: 5, min: 0, max: 5 },
    anisotropy: { value: 0.3, min: 0, max: 1, step: 0.01 },
    roughness: { value: 0, min: 0, max: 1, step: 0.01 },
    distortion: { value: 0.5, min: 0, max: 4, step: 0.01 },
    distortionScale: { value: 0.1, min: 0.01, max: 1, step: 0.01 },
    temporalDistortion: { value: 0, min: 0, max: 1, step: 0.01 },
    ior: { value: 1.5, min: 0, max: 2, step: 0.01 },
    color: '#ff9cf5',
    gColor: '#ff7eb3',
    shadow: '#750d57',
    autoRotate: false,
  })

  return (
    <group position={position}>
      <Text3D
        castShadow
        bevelEnabled
        font={fontUrlJson}
        scale={scale}
        letterSpacing={-0.03}
        height={0.25}
        bevelSize={0.01}
        bevelSegments={10}
        curveSegments={128}
        bevelThickness={0.01}
        // position={position}
        rotation={rotation}
      >
        {/* <meshNormalMaterial 
          {...config}
        /> */}
        
        <MeshTransmissionMaterial {...config} />
        {/* <hemisphereLight intensity={1} color="white" groundColor="black" /> */}
        {/* <Glow scale={1.2} near={-5} color={"yellow"} /> */}
        {/* <ambientLight intensity={1}/> */}
        {text}
        <Sparkles count={10} scale={2} size={6} speed={0.4} />
      </Text3D>
      <Text font={fontUrlOtf} scale={scale + 0.33} position={[1.42, 0.30, 0]}>
        {text}
      </Text> 
    </group>
    
  )
}

export default Text3d