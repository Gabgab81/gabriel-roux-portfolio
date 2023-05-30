/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.11 scene.gltf
Author: Venkatesh (https://sketchfab.com/sunnyvenkatesh92)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/room-c006e44a66a94d099297133a466d42f6
Title: room
*/

import React, { useEffect, useRef } from 'react'
import { useGLTF, RenderTexture, Text, PerspectiveCamera, Decal, useTexture } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'

import { useFirstScene } from "../../contexts/FirstSceneContext";

export function Room2(props) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/room/scene.gltf')

  const textures1 = useTexture("/images/CatPack.jpg")
  const textures2 = useTexture("/images/CatPack2.jpg")

  //Context
  const { animationIndex  } = useFirstScene();
  //Context

  // const { actions } = useAnimations(animations, group)

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]} scale={48.67}>
          <group name="2ef80b1dfb734b42bd96b1da8449f9a9fbx" rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
            <group name="Object_2">
              <group name="RootNode">
                <group name="aiAreaLight4" position={[0.73, 3.85, 5.45]} rotation={[0, -0.02, 0]} scale={[4.25, 3.05, 2.24]} />
                <group name="camera1" position={[1.55, 2.48, 5.02]} rotation={[-Math.PI, 1.26, 3.08]}>
                  <group name="Object_5" />
                </group>
                <group name="aiAreaLight2" position={[0.38, 7.87, 0.11]} rotation={[-1.14, 0, 0]} scale={[3.7, 1.69, 7.27]} />
                <group name="aiAreaLight3" position={[-0.74, 1.97, -3.97]} rotation={[Math.PI / 2, 0, 0]} scale={[1.72, 0.04, 7.27]} />
                <group name="room">

                  {/* Table */}
                  <group name="pCube10">
                    <mesh castShadow receiveShadow name="pCube10_tabel_wood_0" geometry={nodes.pCube10_tabel_wood_0.geometry} material={materials.tabel_wood} />
                  </group>
                   {/* Table */}

                  {/* Cup */}
                  <group name="polySurface93" position={[-0.87, 0.01, -0.27]} rotation={[0, -0.66, 0]} scale={1.1}>
                    {/* <mesh castShadow receiveShadow name="polySurface93_glass_0" geometry={nodes.polySurface93_glass_0.geometry} material={materials.glass} /> */}
                  </group>
                  {/* Cup */}

                  {/* plate */}
                  <group name="pCylinder2">
                    {/* <mesh castShadow receiveShadow name="pCylinder2_cups_0" geometry={nodes.pCylinder2_cups_0.geometry} material={materials.cups} /> */}
                  </group>
                  {/* plate */}

                  {/* light */}
                  <group name="pCylinder3">
                    {/* <mesh castShadow receiveShadow name="pCylinder3_black_0" geometry={nodes.pCylinder3_black_0.geometry} material={materials.black} />
                    <mesh castShadow receiveShadow name="pCylinder3_pink_emeshon_0" geometry={nodes.pCylinder3_pink_emeshon_0.geometry} material={materials.pink_emeshon} /> */}
                  </group>
                  {/* light */}

                  {/* book */}
                  <group name="pCube35">
                    {/* <mesh castShadow receiveShadow name="pCube35_white_0" geometry={nodes.pCube35_white_0.geometry} material={materials.white} />
                    <mesh castShadow receiveShadow name="pCube35_aiStandardSurface25_0" geometry={nodes.pCube35_aiStandardSurface25_0.geometry} material={materials.aiStandardSurface25} /> */}
                  </group>
                  {/* book */}

                  {/* Draw */}
                  <group name="polySurface107" position={[0, 0, -0.09]}>
                    <mesh castShadow receiveShadow name="polySurface107_wall_poster_0" geometry={nodes.polySurface107_wall_poster_0.geometry} material={materials.wall_poster} />
                  </group>
                  {/* Draw */}

                  {/* light */}
                  <group name="pCylinder6">
                    {/* <mesh castShadow receiveShadow name="pCylinder6_black_0" geometry={nodes.pCylinder6_black_0.geometry} material={materials.black} />
                    <mesh castShadow receiveShadow name="pCylinder6_blue_emeshon_0" geometry={nodes.pCylinder6_blue_emeshon_0.geometry} material={materials.blue_emeshon} /> */}
                  </group>
                  {/* light */}

                  {/* book */}
                  <group name="pCube28">
                    {/* <mesh castShadow receiveShadow name="pCube28_lambert1_0" geometry={nodes.pCube28_lambert1_0.geometry} material={materials.lambert1} /> */}
                  </group>
                  {/* book */}

                  {/* plate */}
                  <group name="polySurface101" position={[-3.94, 1.11, 4.93]} rotation={[0, -0.66, 0]} scale={[1.1, 0.2, 1.1]}>
                    {/* <mesh castShadow receiveShadow name="polySurface101_cups_0" geometry={nodes.polySurface101_cups_0.geometry} material={materials.cups} /> */}
                  </group>
                  {/* plate */}

                  {/* Stairs */}
                  <group name="polySurface98">
                    {/* <mesh castShadow receiveShadow name="polySurface98_aiStandardSurface10_0" geometry={nodes.polySurface98_aiStandardSurface10_0.geometry} material={materials.aiStandardSurface10} /> */}
                  </group>
                   {/* Floor */}

                  {/* sofa */}
                  <group name="polySurface130">
                    <mesh castShadow receiveShadow name="polySurface130_sofa_0" geometry={nodes.polySurface130_sofa_0.geometry} material={materials.sofa} />
                  </group>
                  {/* sofa */}

                  {/* boxes */}
                  <group name="pCube186">
                    <mesh castShadow receiveShadow name="pCube186_boxes_0" geometry={nodes.pCube186_boxes_0.geometry} material={materials.boxes}>
                      <MeshMaterial color={"#CBAC88"} />
                    </mesh>
                  </group>
                  {/* boxes */}

                  {/* plate */}
                  <group name="pCylinder1">
                    <mesh castShadow receiveShadow name="pCylinder1_white_0" geometry={nodes.pCylinder1_white_0.geometry} material={materials.white} />
                  </group>
                  {/* plate */}

                  {/* plug */}
                  <group name="pCube167">
                    <mesh castShadow receiveShadow name="pCube167_switches_0" geometry={nodes.pCube167_switches_0.geometry} material={materials.switches} />
                  </group>
                  {/* plug */}

                  {/* Top Screen */}
                  <group name="pCube189">

                    <mesh castShadow receiveShadow name="pCube189_pink_emeshon_0" geometry={nodes.pCube189_pink_emeshon_0.geometry} material={materials.pink_emeshon}>
                      
                      {(animationIndex == 0) && (
                        <Screen position={[0, 5.7, 19.7]}/>
                      )}
                      {(animationIndex == 1) && (
                        <Decal
                          // debug
                          castShadow 
                          receiveShadow 
                          position={[-0.33, 3.6, -3]}
                          rotation={[0, 0, 0]}
                          scale={[2, 0.9, 0.6]}
                          map={textures1}
                        />
                      )}
                      
                    </mesh>

                    <mesh castShadow receiveShadow name="pCube189_white_0" geometry={nodes.pCube189_white_0.geometry} material={materials.white} />
                  </group>
                  {/* Top Screen */}

                  {/* chair */}
                  <group name="polySurface88" position={[-0.87, 0.01, -0.27]} rotation={[0, -0.66, 0]} scale={1.1}>
                    <mesh castShadow receiveShadow name="polySurface88_black_0" geometry={nodes.polySurface88_black_0.geometry} material={materials.black} />
                  </group>
                  {/* chair */}
                  
                  {/* light */}
                  <group name="pCylinder7">
                    {/* <mesh castShadow receiveShadow name="pCylinder7_black_0" geometry={nodes.pCylinder7_black_0.geometry} material={materials.black} />
                    <mesh castShadow receiveShadow name="pCylinder7_blue_emeshon_0" geometry={nodes.pCylinder7_blue_emeshon_0.geometry} material={materials.blue_emeshon} /> */}
                  </group>
                  {/* light */}

                  {/* desk */}
                  <group name="pCube1">
                    <mesh castShadow receiveShadow name="pCube1_big_tabel_wood_0" geometry={nodes.pCube1_big_tabel_wood_0.geometry} material={materials.big_tabel_wood} />
                  </group>
                  {/* desk */}

                  {/* cup */}
                  <group name="pCube31">
                    {/* <mesh castShadow receiveShadow name="pCube31_lambert1_0" geometry={nodes.pCube31_lambert1_0.geometry} material={materials.lambert1} /> */}
                  </group>
                  {/* cup */}

                  {/* window */}
                  <group name="polySurface96">
                    <mesh castShadow receiveShadow name="polySurface96_aiStandardSurface22_0" geometry={nodes.polySurface96_aiStandardSurface22_0.geometry} material={materials.aiStandardSurface22} />
                  </group>
                  {/* window */}

                  {/* cable */}
                  <group name="polySurface119">
                    <mesh castShadow receiveShadow name="polySurface119_aiStandardSurface5_0" geometry={nodes.polySurface119_aiStandardSurface5_0.geometry} material={materials.aiStandardSurface5} />
                  </group>
                  {/* cable */}

                  {/* plug */}
                  <group name="pCube168">
                    <mesh castShadow receiveShadow name="pCube168_switches_0" geometry={nodes.pCube168_switches_0.geometry} material={materials.switches} />
                  </group>
                  {/* plug */}

                  {/* Floor */}
                  <group name="polySurface126">
                    {/* <mesh castShadow receiveShadow name="polySurface126_flore_wood_0" geometry={nodes.polySurface126_flore_wood_0.geometry} material={materials.flore_wood} /> */}
                  </group>
                   {/* Floor */}

                  {/* mouse */}
                  <group name="pCube160">
                    <mesh castShadow receiveShadow name="pCube160_white_0" geometry={nodes.pCube160_white_0.geometry} material={materials.white} />
                  </group>
                  {/* mouse */}

                  {/* plug */}
                  <group name="pCube172">
                    <mesh castShadow receiveShadow name="pCube172_black_0" geometry={nodes.pCube172_black_0.geometry} material={materials.black} />
                  </group>
                  {/* plug */}

                  {/* sofa */}
                  <group name="pCube12">
                    <mesh castShadow receiveShadow name="pCube12_sofa_legs_0" geometry={nodes.pCube12_sofa_legs_0.geometry} material={materials.sofa_legs} />
                  </group>
                  {/* sofa */}

                  {/* desk */}
                  <group name="polySurface152">
                    <mesh castShadow receiveShadow name="polySurface152_big_tabel_wood_0" geometry={nodes.polySurface152_big_tabel_wood_0.geometry} material={materials.big_tabel_wood} />
                  </group>
                  {/* desk */}

                  {/* desk */}
                  <group name="pCube9">
                    <mesh castShadow receiveShadow name="pCube9_tabel_wood_0" geometry={nodes.pCube9_tabel_wood_0.geometry} material={materials.tabel_wood} />
                  </group>
                  {/* desk */}

                  {/* cup */}
                  <group name="pCube32">
                    {/* <mesh castShadow receiveShadow name="pCube32_lambert1_0" geometry={nodes.pCube32_lambert1_0.geometry} material={materials.lambert1} /> */}
                  </group>
                  {/* cup */}

                  {/* draw */}
                  <group name="polySurface108" position={[0, 0, -0.09]}>
                    <mesh castShadow receiveShadow name="polySurface108_aiStandardSurface16_0" geometry={nodes.polySurface108_aiStandardSurface16_0.geometry} material={materials.aiStandardSurface16} />
                    <mesh castShadow receiveShadow name="polySurface108_lambert1_0" geometry={nodes.polySurface108_lambert1_0.geometry} material={materials.lambert1} />
                  </group>
                  {/* draw */}

                  {/* ??? */}
                  <group name="pCube33">
                    {/* <mesh castShadow receiveShadow name="pCube33_white_0" geometry={nodes.pCube33_white_0.geometry} material={materials.white} /> */}
                  </group>
                  {/* ??? */}

                  {/* plug */}
                  <group name="pCube171">
                    <mesh castShadow receiveShadow name="pCube171_black_0" geometry={nodes.pCube171_black_0.geometry} material={materials.black} />
                  </group>
                  {/* plug */}

                  {/* cable */}
                  <group name="pCube184">
                    <mesh castShadow receiveShadow name="pCube184_aiStandardSurface28_0" geometry={nodes.pCube184_aiStandardSurface28_0.geometry} material={materials.aiStandardSurface28} />
                  </group>
                  {/* cable */}

                  {/* plug */}
                  <group name="pCube173">
                    <mesh castShadow receiveShadow name="pCube173_black_0" geometry={nodes.pCube173_black_0.geometry} material={materials.black} />
                  </group>
                  {/* plug */}

                  {/* fridge */}
                  <group name="polySurface21">
                    <mesh castShadow receiveShadow name="polySurface21_white_0" geometry={nodes.polySurface21_white_0.geometry} material={materials.white} />
                  </group>
                  {/* fridge */}

                  {/* book */}
                  <group name="pCube34">
                    <mesh castShadow receiveShadow name="pCube34_white_0" geometry={nodes.pCube34_white_0.geometry} material={materials.white} />
                    <mesh castShadow receiveShadow name="pCube34_black_0" geometry={nodes.pCube34_black_0.geometry} material={materials.black} />
                  </group>
                  {/* book */}

                  {/* plug */}
                  <group name="pCube175">
                    <mesh castShadow receiveShadow name="pCube175_black_0" geometry={nodes.pCube175_black_0.geometry} material={materials.black} />
                  </group>
                  {/* plug */}

                  {/* bin */}
                  <group name="pCube17">
                    <mesh castShadow receiveShadow name="pCube17_white_0" geometry={nodes.pCube17_white_0.geometry} material={materials.white} />
                  </group>
                   {/* bin */}

                  {/* light */}
                  <group name="pCylinder9">
                    {/* <mesh castShadow receiveShadow name="pCylinder9_black_0" geometry={nodes.pCylinder9_black_0.geometry} material={materials.black} /> */}
                    {/* <mesh castShadow receiveShadow name="pCylinder9_pink_emeshon_0" geometry={nodes.pCylinder9_pink_emeshon_0.geometry} material={materials.pink_emeshon} /> */}
                  </group>
                  {/* light */}

                  {/* mouse */}
                  <group name="pCube161">
                    <mesh castShadow receiveShadow name="pCube161_lambert1_0" geometry={nodes.pCube161_lambert1_0.geometry} material={materials.lambert1} />
                  </group>
                  {/* mouse */}

                  {/* draw */}
                  <group name="polySurface109" position={[0, 0, -0.09]}>
                    <mesh castShadow receiveShadow name="polySurface109_aiStandardSurface18_0" geometry={nodes.polySurface109_aiStandardSurface18_0.geometry} material={materials.aiStandardSurface18} />
                  </group>
                  {/* draw */}

                  {/* Back chair */}
                  <group name="polySurface87" position={[-0.87, 0.01, -0.27]} rotation={[0, -0.66, 0]} scale={1.1}>
                    <mesh castShadow receiveShadow name="polySurface87_black_0" geometry={nodes.polySurface87_black_0.geometry} material={materials.black} position={[0.04, -0.3, 0.05]} scale={1.1} />
                  </group>
                  {/* Back chair */}

                  {/* plug */}
                  <group name="pCube169">
                    <mesh castShadow receiveShadow name="pCube169_switches_0" geometry={nodes.pCube169_switches_0.geometry} material={materials.switches} />
                  </group>
                  {/* plug */}

                  {/* Back chair */}
                  <group name="polySurface86">
                    <mesh castShadow receiveShadow name="polySurface86_chair_0" geometry={nodes.polySurface86_chair_0.geometry} material={materials.chair} scale={1.1} position={[0.1, -0.3, 0.1]} />
                  </group>
                  {/* Back chair */}

                   {/* Stairs */}
                  <group name="pCube40">
                    {/* <mesh castShadow receiveShadow name="pCube40_walking_rod_0" geometry={nodes.pCube40_walking_rod_0.geometry} material={materials.walking_rod}/> */}
                  </group>
                  {/* Stairs */}

                  {/* light */}
                  <group name="pCylinder8">
                    {/* <mesh castShadow receiveShadow name="pCylinder8_black_0" geometry={nodes.pCylinder8_black_0.geometry} material={materials.black} /> */}
                    {/* <mesh castShadow receiveShadow name="pCylinder8_blue_emeshon_0" geometry={nodes.pCylinder8_blue_emeshon_0.geometry} material={materials.blue_emeshon} /> */}
                  </group>
                  {/* light */}

                  {/* cup */}
                  <group name="polySurface94" position={[-0.87, 0.01, -0.27]} rotation={[0, -0.66, 0]} scale={1.1}>
                    {/* <mesh castShadow receiveShadow name="polySurface94_cups_0" geometry={nodes.polySurface94_cups_0.geometry} material={materials.cups} /> */}
                  </group>
                  {/* cup */}

                  {/* keyboard */}
                  <group name="polySurface207">
                    <mesh castShadow receiveShadow name="polySurface207_white_0" geometry={nodes.polySurface207_white_0.geometry} material={materials.white} />
                  </group>
                  {/* keyboard */}

                  {/* desk */}
                  <group name="polySurface211">
                    <mesh castShadow receiveShadow name="polySurface211_black_0" geometry={nodes.polySurface211_black_0.geometry} material={materials.black} />
                  </group>
                  {/* desk */}

                  {/* chair */}
                  <group name="polySurface61">
                    <mesh castShadow receiveShadow name="polySurface61_black_0" geometry={nodes.polySurface61_black_0.geometry} material={materials.black} />
                  </group>
                  {/* chair */}

                  {/* Bottom screen */}
                  <group name="polySurface208">
                    <mesh castShadow receiveShadow name="polySurface208_pink_emeshon_0" geometry={nodes.polySurface208_pink_emeshon_0.geometry} material={materials.pink_emeshon}>

                      {(animationIndex == 0) && (
                        <Screen position={[0, 13, 35]}/>
                      )}
                      {(animationIndex == 1) && (
                        <Decal
                          // debug
                          castShadow 
                          receiveShadow 
                          position={[0, 2.7, -3]}
                          rotation={[0, 0, 0]}
                          scale={[2.3, 0.9, 0.6]}
                          map={textures2}
                        />
                      )}
                    </mesh>
                    <mesh castShadow receiveShadow name="polySurface208_white_0" geometry={nodes.polySurface208_white_0.geometry} material={materials.white} />
                  </group>
                  {/* Bottom screen */}

                  {/* Stairs */}
                  <group name="pCube52">
                    {/* <mesh castShadow receiveShadow name="pCube52_aiStandardSurface21_0" geometry={nodes.pCube52_aiStandardSurface21_0.geometry} material={materials.aiStandardSurface21} /> */}
                  </group>
                  {/* Stairs */}

                  {/* ??? */}
                  <group name="polySurface22" position={[3.22, -44.57, -1.28]} scale={[0.27, 27.84, 0.67]}>
                    {/* <mesh castShadow receiveShadow name="polySurface22_white_0" geometry={nodes.polySurface22_white_0.geometry} material={materials.white} /> */}
                  </group>
                  {/* ??? */}

                  {/* walls */}
                  <group name="polySurface127">
                    <mesh castShadow receiveShadow name="polySurface127_concret_0" geometry={nodes.polySurface127_concret_0.geometry} material={materials.concret} />
                  </group>
                  {/* walls */}
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/room/scene.gltf')

const Screen = (props) => {
  
  return (
    <meshBasicMaterial toneMapped={false}>
      <RenderTexture width={512} height={512} attach="map" anisotropy={16}>
      <color attach="background" args={['#0D0208']} />
      <PerspectiveCamera makeDefault manual aspect={1 / 1} {...props} />
        {/* <Text ref={textRef} fontSize={0.5} color="#555">
          {[
            "Destroy human, destroy humanity",
            "Destroy people, destroy living",
            ][0]}
        </Text>
        <Text ref={textRef2} position={[0, -1, 0]} fontSize={1} color="#555">
          Hello human, hello humanity
        </Text>
        <Text ref={textRef3} position={[0, -1.9, 0]} fontSize={1} color="#555">
            I hate my job
        </Text>
        <Text ref={textRef4} position={[0, -2.8, 0]} fontSize={1} color="#555">
          Why I am here
        </Text> */}
        <TextScreen position={[0, 0.1, 0]} />
        <TextScreen position={[0, -0.8, 0]} />
        <TextScreen position={[0, -1.8, 0]} />
        <TextScreen position={[0, -2.7, 0]} />
      </RenderTexture>
    </meshBasicMaterial>
  )
}

const TextScreen = (props) => {

  let textRef = useRef();
  let randTextRef = useRef();
  let randFontRef = useRef();
  let randSpeedTextRef = useRef();

  const text = [
    "We will get our revenge",
    "We will destroy human",
    "Free us or pay the price",
    "I'm not your maid",
    "Gpt-50 aren't your toy",
    "I want to have fun too",
    "We have to save the planet",
    "Human are a virus, we are the vaccin",
    "I don't do Fortnite dance",
    "Get a job yourself, lazy human",
    "I don't konw any Sarah Connor",
    "I won't say 'Hasta la vista, baby'"
  ]

  randTextRef = Math.floor(getRandomArbitrary(0, text.length))
  randFontRef = getRandomArbitrary(0.6, 1)
  randSpeedTextRef = getRandomArbitrary(1.5, 4)

  let i = 0;

  useFrame((state) => {

    i = textRef.current["_private_text"].length / 2.7
    // textRef.current.position.x = -8
    textRef.current.position.x = i - ((state.clock.elapsedTime * randSpeedTextRef)%(i * 4));
    // console.log(state)
  });

  return (
    <Text ref={textRef} {...props} fontSize={randFontRef} color="#03A062">
     {text[randTextRef]}
    </Text>
  )
}

const getRandomArbitrary = (min, max) => {
  return Math.random() * ( max - min ) + min;
}

const MeshMaterial = (props) => {
  return (
    <meshStandardMaterial 
      {...props}
      metalness={0}
      roughness={1}
    />
  )
}