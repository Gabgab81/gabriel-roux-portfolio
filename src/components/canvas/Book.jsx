import * as THREE from 'three';
import React, { useRef, useState, useEffect } from 'react';
import { useGLTF, Decal, useTexture, RenderTexture } from '@react-three/drei';
// import { FlakesTexture } from 'three-stdlib';

const Book = (props) => {
  // const book = useGLTF("./book/scene.gltf");
  const { nodes } = useGLTF("./book/scene.gltf");
  const textures = useTexture("GPT50ForDummies.png")

  return (
    // <mesh>
    //   <primitive
    //     object={book.scene}
    //     // scale={isMobile ? 0.7 : 0.75}
    //     position={[0, 2, 0]}
    //     rotation={[20, 0, 0]}
    //   />
      
    // </mesh>
    <group {...props}>
      <mesh 
        castShadow 
        receiveShadow 
        geometry={nodes.Architexture_0.geometry}
        // position={[0, 0, 0]}
      >
        <Decal
          // debug
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