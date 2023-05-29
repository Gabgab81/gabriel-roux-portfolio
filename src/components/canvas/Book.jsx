import * as THREE from 'three';
import React, { useRef, useState, useEffect } from 'react';
import { useGLTF, Decal, useTexture, useCursor} from '@react-three/drei';
// import { FlakesTexture } from 'three-stdlib';

const Book = (props) => {
  // const book = useGLTF("./book/scene.gltf");
  const { nodes } = useGLTF("./book/scene.gltf");
  const textures = useTexture("GPT50ForDummies.png")

  //Cursor
  const [hovered, setHovered] = useState(false)
  useCursor(hovered,/*'pointer', 'auto'*/)
  //Cursor

  return (
    

    <group {...props}>
      <mesh 
        castShadow 
        receiveShadow 
        geometry={nodes.Architexture_0.geometry}
        // position={[0, 0, 0]}
        onClick={() => console.log("book")}
        onPointerOver={() => setHovered(true)} 
        onPointerOut={() => setHovered(false)}
      >
        <Decal
          // debug
          castShadow 
          receiveShadow 
          position={[0.4, 0, 0.1]}
          rotation={[0, 0, 0]}
          scale={[0.75, 1, 1]}
          map={textures}
        />
      </mesh>
      
      <mesh 
        castShadow 
        receiveShadow 
        geometry={nodes.Architexture_1.geometry}
      >
        <meshStandardMaterial 
          metalness={0.2} 
          roughness={0.8}   
          color={"white"} 
        />
      </mesh>
    </group>
    
  )
}

export default Book;