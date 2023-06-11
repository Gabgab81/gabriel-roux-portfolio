import { Text3D, useTexture } from "@react-three/drei"
import fontUrlJson from "./../../../public/fonts/Coolvetica.json"
import * as THREE from "three";
import { useControls } from "leva";

const Text3dWood = (props) => {

  // const { color } = useControls({
  //   // text: 'Contact',
  //   color: '#ff2e2e',
    
  // })


  const woodTextureprops = useTexture({
    // map: './textures/woods/Wood_Planks_008_COLOR.jpg',
    // normalMap: './textures/woods/Wood_Planks_008_NORM.jpg',
    // roughnessMap: './textures/woods/Wood_Planks_008_ROUGH.jpg',
    // aoMap: './textures/woods/Wood_Planks_008_OCC.jpg',
    map: './textures/woods/Wood_015_basecolor.jpg',
    normalMap: './textures/woods/Wood_015_normal.jpg',
    roughnessMap: './textures/woods/Wood_015_roughness.jpg',
    aoMap: './textures/woods/Wood_015_ambientOcclusion.jpg',
  })
  
  woodTextureprops.map.repeat.set(1, 1);
  woodTextureprops.normalMap.repeat.set(1, 1);
  woodTextureprops.roughnessMap.repeat.set(1, 1);
  woodTextureprops.aoMap.repeat.set(1, 1);

  woodTextureprops.map.wrapS = woodTextureprops.map.wrapT = THREE.RepeatWrapping;
  woodTextureprops.normalMap.wrapS = woodTextureprops.normalMap.wrapT = THREE.RepeatWrapping;
  woodTextureprops.roughnessMap.wrapS = woodTextureprops.roughnessMap.wrapT = THREE.RepeatWrapping;
  woodTextureprops.aoMap.wrapS = woodTextureprops.aoMap.wrapT = THREE.RepeatWrapping;
  console.log(props.text)
  return (
    <Text3D castShadow receiveShadow
      {...props} 
      font={fontUrlJson}
      bevelEnabled={true}
    >
      {props.text}
      <meshStandardMaterial color={'#ff2e2e'} {...woodTextureprops} />
    </Text3D>
  )
}

export default Text3dWood;