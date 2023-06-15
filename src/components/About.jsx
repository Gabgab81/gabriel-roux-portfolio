import { useState } from "react";
import { styles } from "../styles";
import { useEffect } from "react";
import SceneAboutCanvas from "./canvas/SceneAboutCanvas";
import { Tilt } from "react-tilt";
import { SectionWrapper } from "../hoc"


const ServiceCard = ({ index, title, icon }) => {

  let keyImg = icon
  
  if(keyImg == null) {
    keyImg = 'pvf59cynicfmobpq4xr8dhkxmscn';
  }

  return(
    <Tilt 
      className="xs:w-[200px] xl:w-3/12 lg:w-5/12 md:w-4/12 sm:w-5/12 h-8/12"
    >
      <div className="w-full h-full green-pink-gradient p-[1px] rounded-[20px] shadow-card 
     ">
        <div
          // options={{
          //   max: 45,
          //   scale: 1,
          //   speed: 450
          // }}
          className="bg-black h-full rounded-[20px] sm:py-5 sm:px-12 py-3 px-4
          flex justify-evenly items-center flex-col"
          // className={`bg-tertiary rounded-[20px] sm:py-5 sm:px-12 py-${index+1} px-${index}
          // flex justify-evenly items-center flex-col`}
        >
          <img 
            src={`https://res.cloudinary.com/dgk1xld7w/image/upload/v1683485154/development/${keyImg}.png`}
            alt={title}
            className="w-16 h-16 object-contain hidden lg:inline"
          />
          <h3 className="text-white sd:text-[20px] sm:text-[16px] text-[14px] font-bold text-center">{title}</h3>
        </div>
      </div>
      {/* <h3 className="text-white sm:text-[20px] text-[14px] font-bold 
      text-center sm:hidden block">{title}</h3> */}
    </Tilt>
  )
}

const About = () => {

  const API_URL = "http://localhost:3000/api/v1/services";

  const [ services, setServices ] = useState([]);
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
        setServices(listServices);
        setFetchError(null);
        // console.log(services)
      } catch (err) {
        // alert(err.message)
        setFetchError(err.message)
      } finally {
        setIsLoading(false)
        // console.log(services)
      }
    }
    setTimeout(() => {
      fetchServices()
    }, 1000)
  }, [])
  // console.log(services)
  return (
    <section className='relative w-full h-screen sm:mx-auto flex flex-col justify-center md:justify-center sm:flex-row'>
      
      <div className="xl:w-5/12 md:w-5/12 h-3/6 sm:h-full w-full bg-[black] px-4 md:px-0 overflow-auto">
        
        
          <div className="pt-20">
            <h2 className={styles.sectionHeadText} >About</h2>
          </div>
          
          <p className="text-secondary sm:text-[17px] text-[14px] max-w-3xl 
          sm:leading-[30px] leading-[20px] " >
            I'm a skilled software developper with experince in TypeScript and 
            Javascript, and expertise in framworks like REact,  Node.js, and Three.js.
            I'm a quick lerner and collaborate closely with clients to create efficient,
            scalable, and user-friendly solutions that solve real-world problems.
            Let's work together to bring yojur ideas to life!
          </p>
        
        
      
        {fetchError && <p style={{color:"red"}}>{`Error: ${fetchError}`}</p>}

        {!fetchError && !isLoading && 
          <>
            <div className="mt-8 sm:h-fit h-fit">
              <div className="mt-1 flex flex-wrap justify-center gap-5">
                {isLoading && <p>Loading services...</p>}
                {services.map((service, index) => (
                  <ServiceCard key={service.id} index={index} {...service} />
                ))}
              </div>
            </div>
          </>
        } 
      </div>
      
      
      <div className="xl:w-5/12 md:w-5/12 sm:h-full h-3/6 sm:w-6/12" >
        <SceneAboutCanvas />
      </div>
      
    </section>
    
  )
}

export default SectionWrapper(About, "about")