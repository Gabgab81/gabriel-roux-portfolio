import { styles } from "../styles";
import { SectionWrapper } from "../hoc";

import { AnimatePresence, motion } from "framer-motion";

import OverlayWorks from "./OverlayWorks";
import CanvasLoader from './Loader'

import * as THREE from 'three';
import { Suspense, useEffect, useRef, useState } from "react";
import { Canvas, useFrame, useThree} from "@react-three/fiber";
import { Scroll, ScrollControls, useScroll, Image, Html, MeshWobbleMaterial, OrbitControls, Trail, useTexture, MeshReflectorMaterial, Text} from "@react-three/drei";
import { folder, useControls } from "leva";

import { easing } from 'maath'

import Img from "./canvas/Img";
import Frame from "./canvas/Frame";
import { Bloom, EffectComposer, Noise, Vignette } from "@react-three/postprocessing";

// import fontUrl from "/Coolvetica.otf"
// import fontUrl from "./../../public/fonts/Coolvetica.otf"


const Works = () => {

  //  const { p_red, p_green, p_blue, r_red, r_green, r_blue, distance, angle } = useControls({
  //   position: folder({
  //     p_red: { value: 0.85, min: -5, max: 5, step: 0.01 },
  //     p_green: { value: -1.4, min: -5, max: 5, step: 0.01 },
  //     p_blue: { value: 0.66, min: -5, max: 5, step: 0.01 },
  //   }),

  //   rotation: folder({
  //     r_red: { value: 0, min: -5, max: 5, step: 0.1 },
  //     r_green: { value: 0, min: -5, max: 5, step: 0.1 },
  //     r_blue: { value: 0, min: -5, max: 5, step: 0.1 },
  //   }),
  //   distance: { value: 10, min: -5, max: 15, step: 0.1 },
  //   angle: { value: 0.4, min: 0, max: 5, step: 0.01 },
  //   // scale: { value: 0.3, min: -5, max: 5, step: 0.1 },
    
  // })

  //API
  const API_URL = "http://localhost:3000/api/v1/projects";

  const [ projects, setProjects ] = useState([]);
  const [ fetchError, setFetchError] = useState(null);
  const [ isLoading, setIsLoading ] = useState(true);

  useEffect(() => {
    const headers =  {
      'Content-Type': 'application/json',
      'X-User-Email': 'aaaa@gmail.com',
      'X-User-Token': 'g85DkGo-ghdTzy71sHMq',
    };

    const fetchServices = async () => {
      try {
        const response = await fetch(API_URL, {headers})
        if (!response.ok) throw Error('Did not receive expected data');
        const listServices = await response.json();
        setProjects(listServices);
        setFetchError(null);
      } catch (err) {
        setFetchError(err.message)
      } finally {
        setIsLoading(false)
      }
    }
    setTimeout(() => {
      fetchServices()
    }, 1000)
  }, [])

  //API

  const [ scroll, setScroll ] = useState(true);
  const [hovered, setHovered] = useState(false);
  const [ index, setIndex ] = useState(0)
  const [ objectHovered, setObjectHovered ] = useState(null)
  const over = (e) => (
    // e.stopPropagation(), 
    setHovered(true));
  const out = () => setHovered(false);
  useEffect(() => {
    if (hovered) document.body.style.cursor = "pointer"
    return () => (document.body.style.cursor = "auto")
  }, [hovered])


  // function Img(props){
  //   const image = useRef()
  //   useFrame(() =>{
  //     // hovered && console.log(image.current.name)
  //   })
  //   return <Image ref={image} {...props} />
  // }
  
  function Page({ m = 0.4, index1, ...props }) {
    const { width } = useThree((state) => state.viewport);
    const w = width < 10 ? 1.5 / 3 : 1 / 3;

    const frame = useRef()
    // const image = useRef()
    // projects.map((project, index) => (
    //   image[index] = useRef()
    // ))

    // const imgScaleX = image.current.scale.x
    // const imgScaleY = image.current.scale.y

    useFrame((state, dt) => {
      // hovered && console.log(objectHovered.scale)
      // console.log(image.current)
      // image.current.material.zoom = 1
      // console.log(image.current.scale)
      // hovered && easing.damp3(objectHovered.scale.x, 
      //   [( hovered ? 4 : 2), 
      //   ( hovered ? 3: 2), 
      //   1], 0.1, dt)
      // easing.dampC(frame.current.material.color, hovered ? 'orange' : 'white', 0.1, dt)
    })

    const rnd = Math.floor(Math.random()* 1000000)
    return (
      <group {...props}>
      {projects.map((project, i) => (
        <group
        
        key={rnd + i} 
        >
          <Frame 
            // key={rnd + i * 3} 
            position={[-width * w * i, -0.1, (i / 5) * 5 - 0.03]}
            rotation={[Math.PI / 2, 0, 0]}
            // key={project.name} 
            scale={[width * w - m * 1.3, 0.05, 5.2]}
            width={width}
            w={w}
            m={m}
            projects={projects}
            i={i}
            index1={index1}
          />

          {/* <mesh
            position={[-width * w * i, -0.1, (i / 5) * 5 - 0.03]}
            rotation={[Math.PI / 2, 0, 0]}
            // key={project.name} 
            scale={[width * w - m * 1.4, 0.05, 5.2]}
            
          >
            <boxGeometry />
            <meshStandardMaterial color="grey" metalness={0.8} roughness={0.5} envMapIntensity={2} />
            <mesh
             ref={frame} 
             raycast={() => null} 
             scale={[0.96, 0.98, 0.98]} position={[0, 0.1, 0]}
            
             >
              <boxGeometry />
              <meshBasicMaterial toneMapped={false} fog={false} />
            </mesh>
          </mesh> */}
          
        <Image
          // transparent
          // opacity={0.9}
          // name={`${projects[i + index1 < projects.length ? i + index1 : ( i + index1 ) - projects.length].name}${project.name}-${project.id}-${index1}-${i}`}
          // ref={image}
          // key={project.id} 
          // key={`${projects[i + index1 < projects.length ? i + index1 : ( i + index1 ) - projects.length].name}${project.name}-${project.id}-${index1}-${i}`} 
          // key={rnd + i * 2} 
          position={[-width * w * i, -0.1, (i / 5) * 5]} 
          scale={[width * w - m * 2, 5, 1]} 
          url={`https://res.cloudinary.com/dgk1xld7w/image/upload/v1683485154/development/${projects[i + index1 < projects.length ? i + index1 : ( i + index1 ) - projects.length].image}.png`} 
          onClick={function(event) {
              setScroll(!scroll)
              setHovered(false)
              setIndex(i + index1 < projects.length ? i + index1 : ( i + index1 ) - projects.length);
              event.stopPropagation()
            }
          }
          // onPointerOver={function(e) {
          //   over(e)
          //   // setObjectHovered(e.object)
          // }}
          // onPointerOut={out}
        />
        {/* <Text scale={.2} position={[-width * w * i, -2.9, (i / 5) * 5]} >
          {projects[i + index1 < projects.length ? i + index1 : ( i + index1 ) - projects.length].name}
        </Text> */}
        </group>
        
         
        
      ))}
      </group>
    )
  }
  
  function Pages(props) {
    const { width } = useThree((state) => state.viewport)
    const rnd = Math.floor(Math.random()* 1000000)
    return (
      <group {...props}>
        {projects.map((project, index) => (
          <Page 
            // key={project.id + index} 
            key={rnd + index}
            position={[width * index, 0, 0]} 
            index1={index}
          />
        ))}
        <Page 
          key={rnd + index + 1}
          position={[width * projects.length, 0, 0]} 
          index1={0}
        />

        <Page 
        key={rnd + index + 2}
          position={[width * (projects.length + 1), 0, 0]} 
          index1={1}
        />
        <Page 
          key={rnd + index + 3}
          position={[width * (projects.length + 2), 0, 0]} 
          index1={2}
        />
      </group>
    )
  }

  const setIsScroll = () => {
    setScroll(!scroll);
  }

  return (
    <section className='relative w-full h-screen lg:mx-auto flex flex-col justify-between lg:justify-between lg:flex-row'>
      {isLoading && <p>Loading services...</p>}
      {!fetchError && !isLoading && 
      <>
        <Canvas gl={{ antialias: false }} dpr={[1, 1.5]} >
        <color attach="background" args={['#000']} />
        <Suspense fallback={<CanvasLoader />}>

          <Text fontSize={1.3} font="/fonts/BlackChancery.TTF" >
            Works
            <meshStandardMaterial 
              color="white" 
              toneMapped={false} 
              roughness={0}
              metalness={0.2}
            />
          </Text>
          <Text fontSize={1.35} font="/fonts/BlackChancery.TTF" position={[0, 0.03, -0.1]} >
            Works
            <meshStandardMaterial 
              color="black" 
              toneMapped={false} 
              roughness={0}
              metalness={0.2}
            />
          </Text>
          <ScrollControls enabled={scroll} horizontal infinite pages={projects.length + 1}>
            <Scroll enabled={scroll} >
              {/* <Pages position={[p_red, p_green, p_blue]} rotation={[r_red, r_green, r_blue]} /> */}
              <Pages position={[0, 0, -3.5]} rotation={[0, 0, 0]} />
            </Scroll>
          </ScrollControls>
          <EffectComposer>
            {/* <Bloom luminanceThreshold={0} luminanceSmoothing={4} height={300} /> */}
            <Noise opacity={0.3} />
            <Vignette eskil={false} offset={0.2} darkness={1.1} />
          </EffectComposer>
          <ambientLight intensity={1} />

        </Suspense>
          
        </Canvas>
        <OverlayWorks isScroll={scroll} setIsScroll={setIsScroll} projects={projects} index={index} />
      </>
      
      }
    </section>
    
  )
}

export default SectionWrapper(Works, "work")