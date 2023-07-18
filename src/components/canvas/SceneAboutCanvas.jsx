import { Canvas } from "@react-three/fiber"
import { GptHand } from "./GptHandFront"
import { Environment, OrbitControls } from "@react-three/drei"
import { useControls, folder } from "leva"
import SphericalTech from "./SphericalTech"
import { Suspense, useEffect, useState } from "react"
import CanvasLoader from '../Loader'
import { Bloom, EffectComposer, Noise, Vignette } from "@react-three/postprocessing"
import CameraZoom from "./CameraZoom"



const SceneAboutCanvas = () =>  {

  // const { p_red, p_green, p_blue, r_red, r_green, r_blue, scale, text, minAzimuthAngle, maxAzimuthAngle, hidden, fov, zoom } = useControls({
  //   position: folder({
  //     p_red: { value: 0, min: -10, max: 1, step: 0.01 },
  //     p_green: { value: 0, min: -10, max: 10, step: 0.1 },
  //     p_blue: { value: 0, min: -10, max: 10, step: 0.1 },
  //   }),
  //   // rotation: folder({
  //   //   r_red: { value: -0.5, min: -5, max: 5, step: 0.1 },
  //   //   r_green: { value: 1.6, min: -5, max: 5, step: 0.1 },
  //   //   r_blue: { value: 0.5, min: -5, max: 5, step: 0.1 },
  //   // }),
  //   // scale: { value: 0.3, min: -5, max: 5, step: 0.1 },
  //   // text: "Hi, I'm Gabriel",
  //   // minAzimuthAngle: { value: 6, min: -20, max: 20, step: 0.1 },
  //   // maxAzimuthAngle: { value: 6, min: -10, max: 10, step: 0.1 },
  //   // hidden: true
  //   // fov: { value: 18, min: 18, max: 60, step: 0.1 },
  //   // zoom: { value: 1, min: 0.01, max: 1, step: 0.01 },
  // })

  const [ tech, setTech ] = useState([]);
  const [ fetchError, setFetchError ] = useState(null);
  const [ isLoading, setIsLoading ] = useState(true);

  useEffect(() => {

    const API_URL = 'https://api-portfolio-gabriel-roux-17ad74d10c12.herokuapp.com/api/v1/technologies';

    const headers =  {
      'Content-Type': 'application/json',
      'X-User-Email': import.meta.env.VITE_EMAIL,
      'X-User-Token': import.meta.env.VITE_TOKEN,
    };

    const fetchTech = async () => {
      try {
        const response = await fetch(API_URL, {headers})
        if (!response.ok) throw Error('Did not receive expected data');
        // console.log(response)
        const listTech = await response.json();
        setTech(listTech);
        setFetchError(null);
      } catch (err) {
        // alert(err.message)
        setFetchError(err.message)
      } finally {
        // setTech(listTech);
        setIsLoading(false)
      }
    }
    setTimeout(() => {
      fetchTech()
    }, 2000)
  }, [setTech])
  return (
    <>
      {fetchError && 
      <div className="w-full h-full flex justify-center items-center">
        <p className=" text-[red]">{`Error: ${fetchError}`}</p>
      </div>
      }
      {!fetchError && !isLoading && (
      <Canvas
        camera={{
          fov: 8
        }}
        shadows
        gl={{ preserveDrawingBuffer: true }}
        // dpr={[1, 1]}
        dpr={window.devicePixelRatio}
      >
        {/* <OrbitControls /> */}
        <Suspense fallback={<CanvasLoader />}>
          <color attach="background" args={["black"]} />
          <CameraZoom z500={1} z750={0.5} z1000={0.6} z1500={0.7} />
          {/* {!fetchError && !isLoading && ( */}
            <group position={[-0.01, 0, 0.2]}>
              <GptHand position={[0.2, -1.63, 1.2]} rotation={[0, 0.7, 0]} />
              <SphericalTech tech={tech} />   
            {/* <Environment preset="night" /> */}
            </group>
          {/* )} */}
          <EffectComposer>
            <Bloom luminanceThreshold={0} luminanceSmoothing={4} height={300} />
            <Noise opacity={0.3} />
            <Vignette eskil={false} offset={0.2} darkness={1.2} />
          </EffectComposer>
        </Suspense>
        
      </Canvas>)}
    </>
    
    
  )
}

export default SceneAboutCanvas