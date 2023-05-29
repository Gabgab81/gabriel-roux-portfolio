import { useState } from "react";
// import { BoxGeometry } from "three";
import { useCursor} from '@react-three/drei';
import { useFirstScene } from "../../contexts/FirstSceneContext";

const BoxCollider = (props) => {

  //Cursor
  const [hovered, setHovered] = useState(false)
  useCursor(hovered,/*'pointer', 'auto'*/)
  //Cursor

  const { animations, setAnimationIndex } = useFirstScene(); 

  return(
    <mesh
      {...props}
      onClick={() => {
        console.log(animations)
        setAnimationIndex(1)
        }}
      onPointerOver={() => setHovered(true)} 
      onPointerOut={() => setHovered(false)}
    >
      <boxGeometry />
      <meshStandardMaterial
        transparent
        opacity={0}
      />
    </mesh>
  )
}

export default BoxCollider;