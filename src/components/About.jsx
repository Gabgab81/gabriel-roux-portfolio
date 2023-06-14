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
      className="xs:w-[200px] w-full">
      <div className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card ">
        <div
          // options={{
          //   max: 45,
          //   scale: 1,
          //   speed: 450
          // }}
          className="bg-tertiary rounded-[20px] py-5 px-12
          flex justify-evenly items-center flex-col"
        >
        <img 
          src={`https://res.cloudinary.com/dgk1xld7w/image/upload/v1683485154/development/${keyImg}.png`}
          alt={title}
          className="w-16 h-16 object-contain hidden lg:inline"
        />
        <h3 className="text-white sm:text-[20px] font-bold text-center">{title}</h3>
        </div>
      </div>
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
    <section className='relative w-full h-screen lg:mx-auto flex flex-col justify-between lg:justify-between lg:flex-row'>
      {isLoading && <p>Loading services...</p>}

      <div className="lg:w-6/12 lg:h-full h-2/6">
        
        <div>
          <p className={styles.sectionSubText} >Introduction</p>
          <h2 className={styles.sectionHeadText} >Overview.</h2>
        </div>
        {!fetchError && !isLoading && 
        <>
          <p className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px] " >
          I'm a skilled software developper with experince in TypeScript and 
          Javascript, and expertise in framworks like REact,  Node.js, and Three.js.
          I'm a quick lerner and collaborate closely with clients to create efficient,
          scalable, and user-friendly solutions that solve real-world problems.
          Let's work together to bring yojur ideas to life!
        </p>
        {/* <p> {services[0].title}</p> */}
        
        </>}
        {fetchError && <p style={{color:"red"}}>{`Error: ${fetchError}`}</p>}
        
        <div className="lg:h-fit h-2/6">
          <div className="mt-1 flex flex-wrap gap-5">
            {services.map((service, index) => (
              <ServiceCard key={service.id} index={index} {...service} />
            ))}
          </div>
        </div>
        
      </div>
      
      
      <div className="lg:w-6/12 lg:h-full h-2/6" >
        <SceneAboutCanvas />
      </div>
      
    </section>
    
  )
}

export default SectionWrapper(About, "about")