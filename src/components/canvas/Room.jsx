import * as THREE from 'three';
import React, { useRef, useState, useEffect } from 'react';
import { useGLTF, useAnimations } from '@react-three/drei';
// import { FlakesTexture } from 'three-stdlib';

const Room = (props) => {
  const room = useGLTF("./room/scene.gltf");
  // const { nodes } = useGLTF("./room/scene.gltf");

  return (
    <mesh 
      {...props}
      castShadow 
      receiveShadow
      >
      {/* {console.log(nodes)} */}
      <primitive
        object={room.scene}
        // scale={isMobile ? 0.7 : 0.75}
        // position={isMobile ? [0, -3, -2.2] : [0, -3.25, -1.5]}
        // rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  )
}

export default Room;