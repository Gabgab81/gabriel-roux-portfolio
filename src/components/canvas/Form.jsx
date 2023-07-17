import { useRef, useState } from "react";
import { useContactFrom } from "../../contexts/ContactForm";
import { Html, RoundedBox, Text, useTexture } from "@react-three/drei";
// import fontUrl from "./../../../public/fonts/ElevateSans.otf";
import { Text3dWood } from "./"
import * as THREE from "three"
import { folder, useControls } from "leva";

const Inputs = (props) => {
  const formRef = useRef()
  // const [ name, setName ] = useState('');
  const { name, setName, email, setEmail, message, setMessage } = useContactFrom();
  const [ fetchError, setFetchError ] = useState(null)

  const [ loading, setLoading ] = useState(false)

  const handleNameChange = (e) => {
    setName(e.target.value)
  }

  const handleEmailChange = (e) => {
    setEmail(e.target.value)
  }

  const handleMessageChange = (e) => {
    setMessage(e.target.value)
  }

  const HandleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setFetchError(null)
    try{
      const response = await fetch('https://api-portfolio-gabriel-roux-17ad74d10c12.herokuapp.com/api/v1/contacts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-User-Email': 'rouxgab81@gmail.com',
        'X-User-Token': 'yygfpqZzYtGDsU_1uxTc',
      },
      body: JSON.stringify({
        "contact": { "name": name, "email": email, "message": message },
      })
    })
  
    const data = await response.json();
    setFetchError(data.errors)
    // console.log("fetch error: ", fetchError.errors)
    } catch (error){
      alert(error)
      // console.log(error)
    } finally {
      console.log('hello')
      setLoading(false);
      // setFetchError()
      setName('');
      setEmail('');
      setMessage('');
    }
  }

  return (
    <Html {...props} transform>
      <form
        onSubmit={HandleSubmit}
        ref={formRef}
        className='flex flex-col gap-8 text-3xl '
      >
          <input
            type="text"
            name='name' 
            value={name}
            onChange={handleNameChange}
            onClick={ () => setFetchError(null)}
            placeholder="What's your name?"
            className='text-center bg-tertiary/0 py-4 px-6 placeholder:text-white text-white
            rounded-lg outlined-none border-none font-medium'
          /> 
          {/* {fetchError.empty? (<p></p>)} */}
          <input
            type="email"
            name='email' 
            value={email}
            onChange={handleEmailChange}
            onClick={ () => setFetchError(null)}
            placeholder="What's your email?"
            className='text-center bg-tertiary/0 mt-4 py-4 px-6 placeholder:text-white text-white
            rounded-lg outlined-none border-none font-medium'
          /> 
          <textarea
            rows="5"
            name='message' 
            value={message}
            onChange={handleMessageChange}
            onClick={ () => setFetchError(null)}
            placeholder="What do you want to say?"
            className='text-center bg-tertiary/0 mt-4 py-4 px-6 placeholder:text-white text-white
            rounded-lg outlined-none border-none font-medium'
          /> 
          <button
            type='submit'
            className='ml-14 bg-[#ff2e2e]/0 py-3 px-8 outline-none w-fit text-white font-bold
            shadow-md  rounded-xl'
          >
            {loading ? 'Sending...' : 'Send'}
          </button>
          <div className="absolute bottom-[85px] left-[50px]">
            {fetchError && (fetchError.map((error, index) => (
            <p 
              className='text-red-600 text-1xl text-center'
              key={index}
            >{error}</p>
            ))
            )}
          </div>
          
      </form>
    </Html>
  )
}

const Form = (props) => {

  // const { p_red, p_green, p_blue, r_red, r_green, r_blue, distance, angle } = useControls({
  //     position: folder({
  //       p_red: { value: 0.85, min: -5, max: 5, step: 0.01 },
  //       p_green: { value: -1.4, min: -5, max: 5, step: 0.01 },
  //       p_blue: { value: 0.66, min: -5, max: 5, step: 0.01 },
  //     }),
  
  //     rotation: folder({
  //       r_red: { value: 0, min: -5, max: 5, step: 0.1 },
  //       r_green: { value: 0, min: -5, max: 5, step: 0.1 },
  //       r_blue: { value: 0, min: -5, max: 5, step: 0.1 },
  //     }),
  //     distance: { value: 10, min: -5, max: 15, step: 0.1 },
  //     angle: { value: 0.4, min: 0, max: 5, step: 0.01 },
  //     scale: { value: 0.3, min: -5, max: 5, step: 0.1 },
      
  //   })

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

  return (
    <group {...props}>
      {/* <Text font={fontUrl} fontSize={0.8} position={[0, 7.5, 0]} color={'white'}>
        Your name
      </Text> */}
      <Text3dWood text={"Your name"} position={[-3.2, 7, -0.4]} size={1} bevelSize={0.02}  />
      {/* <Text font={fontUrl} fontSize={0.8} position={[0, 4.5, 0]} color={'white'}>
        Your email (optional)
      </Text> */}
      <Text3dWood text={"Your email"} position={[-3.2, 4, -0.4]} size={1} bevelSize={0.02}  />
      {/* <Text font={fontUrl} fontSize={0.8} position={[0, 1.5, 0]} color={'white'}>
        Your message
      </Text> */}
      <Text3dWood text={"Your message"} position={[-4, 1.2, -0.4]} size={1} bevelSize={0.02}  />
      {/* <mesh scale={[2, 1, 1]}>
        <boxGeometry />
        <meshStandardMaterial color={"#ff2e2e"} {...woodTextureprops} />
      </mesh> */}
      <RoundedBox
        args={[2.4, 1.5, 0.6]} 
        radius={0.1}
        smoothness={2} 
        // scale={[3, 1.3, 0.5]}
        position={[-1.7, -5.95, -0.2]}
        castShadow
        // receiveShadow
      >
         <meshStandardMaterial color={"#ff2e2e"} {...woodTextureprops} />
      </RoundedBox>
      {/* <Inputs position={[p_red, p_green, p_blue]} rotation={[r_red, r_green, r_blue]} /> */}
      <Inputs position={[0, 0, 0]} />
    </group> 
  )
}

export default Form;