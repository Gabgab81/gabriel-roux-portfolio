import { useRef, useState } from "react";
import { useContactFrom } from "../../contexts/ContactForm";
import { Html, RoundedBox, Text, useTexture } from "@react-three/drei";
// import fontUrl from "./../../../public/fonts/ElevateSans.otf";
import { Text3dWood } from "./"
import * as THREE from "three"

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
      const response = await fetch('http://localhost:3000/api/v1/contacts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-User-Email': 'aaaa@gmail.com',
        'X-User-Token': 'g85DkGo-ghdTzy71sHMq',
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
        className='flex flex-col gap-14'
      >
          <input
            type="text"
            name='name' 
            value={name}
            onChange={handleNameChange}
            placeholder="What's your name?"
            className='bg-tertiary/0 py-4 px-6 placeholder:text-white text-white
            rounded-lg outlined-none border-none font-medium'
          /> 
          {/* {fetchError.empty? (<p></p>)} */}
          <input
            type="email"
            name='email' 
            value={email}
            onChange={handleEmailChange}
            placeholder="What's your email?"
            className='bg-tertiary/0 py-4 px-6 placeholder:text-white text-white
            rounded-lg outlined-none border-none font-medium'
          /> 
          <textarea
            rows="7"
            name='message' 
            value={message}
            onChange={handleMessageChange}
            placeholder="What do you want to say?"
            className='bg-tertiary/0 py-4 px-6 placeholder:text-white text-white
            rounded-lg outlined-none border-none font-medium'
          /> 
          <button
            type='submit'
            className='bg-[#ff2e2e]/0 py-3 px-8 outline-none w-fit text-white font-bold
            shadow-md  rounded-xl'
          >
            {loading ? 'Sending...' : 'Send'}
          </button>
          <div className="absolute bottom-[57px]">
            {fetchError && (fetchError.map((error, index) => (
            <p 
              className='text-red-500'
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
        args={[1, 1, 1]} 
        radius={0.1}
        smoothness={2} 
        scale={[2.5, 1, 0.5]}
        position={[-1.7, -6, -0.2]}
        castShadow
        // receiveShadow
      >
         <meshStandardMaterial color={"#ff2e2e"} {...woodTextureprops} />
      </RoundedBox>
      <Inputs position={[0, 0, 0]} />
    </group> 
  )
}

export default Form;