import { styles } from "../styles";
import { SectionWrapper } from "../hoc";

import { AnimatePresence, motion } from "framer-motion";

import OverlayWorks from "./OverlayWorks";

import * as THREE from 'three';
import { useEffect, useRef, useState } from "react";
import { Canvas, useFrame, useThree} from "@react-three/fiber";
import { Scroll, ScrollControls, useScroll, Image, Html} from "@react-three/drei";


const Works = () => {

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
  const over = (e) => (e.stopPropagation(), setHovered(true));
  const out = () => setHovered(false);
  useEffect(() => {
    if (hovered) document.body.style.cursor = "pointer"
    return () => (document.body.style.cursor = "auto")
  }, [hovered])
  
  function Page({ m = 0.4, index1, ...props }) {
    const { width } = useThree((state) => state.viewport);
    const w = width < 10 ? 1.5 / 3 : 1 / 3;
    return (
      <group {...props}>
      {projects.map((project, i) => (
      
        <Image 
          key={project.id} 
          position={[-width * w * i, -0.1, i / 4]} 
          scale={[width * w - m * 2, 5, 1]} 
          url={`https://res.cloudinary.com/dgk1xld7w/image/upload/v1683485154/development/${projects[i + index1 < projects.length ? i + index1 : ( i + index1 ) - projects.length].image}.png`} 
          onClick={function(event) {
              setScroll(!scroll)
              setHovered(false)
              setIndex(i + index1 < projects.length ? i + index1 : ( i + index1 ) - projects.length);
              event.stopPropagation()
            }
          }
          onPointerOver={over}
          onPointerOut={out}
        >
        </Image>
      ))}
      </group>
    )
  }
  
  function Pages() {
    const { width } = useThree((state) => state.viewport)
    return (
      <>
        {projects.map((project, index) => (
          <Page 
            key={project.name} 
            position={[width * index, 0, 0]} 
            index1={index}
          />
        ))}
        <Page 
          position={[width * projects.length, 0, 0]} 
          index1={0}
        />

        <Page 
          position={[width * (projects.length + 1), 0, 0]} 
          index1={1}
        />
        <Page 
          position={[width * (projects.length + 2), 0, 0]} 
          index1={2}
        />
      </>
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
        <Canvas gl={{ antialias: false }} dpr={[1, 1.5]}>
          <ScrollControls enabled={scroll} horizontal infinite pages={projects.length + 1}>
            <Scroll enabled={scroll} >
              <Pages />
            </Scroll>
          </ScrollControls>
        </Canvas>
        <OverlayWorks isScroll={scroll} setIsScroll={setIsScroll} projects={projects} index={index} />
      </>
      
      }
    </section>
    
  )
}

export default Works