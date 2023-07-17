import { styles } from "../styles"; 
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

const OverlayWorks = ({isScroll, setIsScroll, projects, index}) => {
  const [hovered, setHovered] = useState(false);

  const [ descrip, setDescrip ] = useState(false);
  const [ dataB, setDataB ] = useState(false);

  const over = (e) => (e.stopPropagation(), setHovered(true));
  const out = () => setHovered(false);

  useEffect(() => {
    if (hovered) document.body.style.cursor = "pointer"
    return () => (document.body.style.cursor = "auto")
  }, [hovered])
 
  const imageNewTab = (address) => {
    window.open(address, '_blank', 'noreferrer');
  }

  return (
    <AnimatePresence>
      {!isScroll && (
        <>
          <motion.div
            key="modal"
            initial={{ x: 300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -300, opacity: 0 }}
            className={`absolute z-40 top-[0px] bottom-[100px] left-[0px] right-[0px] m-auto w-11/12 h-5/6
            green-pink-gradient p-[10px] rounded-[20px]`}
            onPointerOut={out}
          >
            
            <div
              className={`rounded-[20px] h-full py-5 px-30 flex justify-evenly items-center flex-col`}
              style={{
                backgroundImage: `url('https://res.cloudinary.com/dgk1xld7w/image/upload/v1683485154/production/${projects[index].image}.png')`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                // backgroundSize: "100% 100%"
                backgroundSize: "cover"
              }}
            >
              <div className="absolute rounded-b-[20px] green-pink-gradient text-[26px] top-[8px] py-1 px-5">
                <h1> {projects[index].name} </h1>
              </div>
              <div 
                className="absolute rounded-[20px] top-[-20px] right-[-20px] flex justify-center items-center"
                onClick={function() {
                  setIsScroll()
                  setDescrip(false)
                  setDataB(false)
                }}
                onPointerOver={over}
                onPointerOut={out}
              >
                <img src="/icons/cross_icon.svg" alt="Back to the list" className="h-14 w-14" />
              </div>
              <div className="flex items-center justify-between w-full ">

                {/* -------------- Description -------------- */}

                <p 
                  className="rounded-r-[20px] green-pink-gradient p-2 text-[18px] "
                  onClick={function() {
                    setDescrip(!descrip)
                  }}
                  onPointerOver={over}
                  onPointerOut={out}
                >Descrition</p>
                <AnimatePresence>
                  { descrip && (
                    <motion.div
                      key="modal"
                      initial={{ x: 300, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      exit={{ x: -300, opacity: 0 }}
                      className={`absolute z-40 top-[0px] bottom-[0px] left-[0px] right-[0px] m-auto w-fit h-fit lg:max-w-[75%] lg:max-h-[80%]
                      md:max-w-[90%] md:max-h-[90%] max-w-[100%] max-h-[100%] green-pink-gradient lg:p-[30px] md:p-[20px] p-[10px]  rounded-[20px] shadow-card overflow-auto over`}
                      onClick={function() {
                      setDescrip(!descrip)
                      }}
                    >
                    <p
                      onPointerOver={over}
                      onPointerOut={out}
                      className=""
                    >{projects[index].description}</p>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* -------------- Description -------------- */}

                {/* -------------- DB -------------- */}
            
                <div
                  className="rounded-l-[20px] green-pink-gradient p-1"
                  onClick={function() {
                    setDataB(!dataB) 
                  }}
                  onPointerOver={over}
                  onPointerOut={out}
                >
                  <img src="/icons/db.svg" alt="Data base" className="rounded-l-[20px] p-2 w-fit h-14"/>
                </div>
                <AnimatePresence>
                  { dataB && (
                    <motion.div
                      key="project"
                      initial={{ x: 300, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      exit={{ x: -300, opacity: 0 }}
                      className={`absolute z-40 g top-[0px] bottom-[0px] left-[0px] right-[0px] green-pink-gradient m-auto w-full h-full
                      p-[10px] rounded-[20px] shadow-card`}
                    
                    >
                      <div
                        className={`rounded-[20px] h-full flex items-end`}
                        style={{
                          backgroundImage: `url('https://res.cloudinary.com/dgk1xld7w/image/upload/v1683485154/production/${projects[index].db}.png')`,
                          backgroundRepeat: "no-repeat",
                          // backgroundPosition: "center",
                          backgroundSize: "100% 100%",
                        }}
                      >
                        <div 
                          className="absolute rounded-[20px] top-[-20px] right-[-20px] flex justify-center items-center"
                          onClick={function() {
                            setDataB(!dataB)
                          }}
                          onPointerOver={over}
                          onPointerOut={out}
                        >
                          <img src="/icons/cross_icon.svg" alt="Back to project information" className="h-14 w-14" />
                        </div>
                        <p
                          className=" rounded-t-[20px] w-fit h-fit green-pink-gradient py-2 px-2 mx-auto"
                          onClick={function(){
                            imageNewTab(`https://res.cloudinary.com/dgk1xld7w/image/upload/v1683485154/production/${projects[index].db}.png`)
                          }}
                          onPointerOver={over}
                          onPointerOut={out}
                        >Better look</p>
                      </div>      

                    </motion.div>
                  )}
                </AnimatePresence>

                {/* -------------- DB -------------- */}

              </div>
              <div className="flex items-center justify-between w-full">

                {/* -------------- code -------------- */}

                <a href={`${projects[index].code}`} target="_blank" rel="noreferrer">
                  <img src="/icons/github-white.svg" alt="Github" className="rounded-r-[20px] green-pink-gradient p-2 w-fit h-14"/>
                </a>

                {/* -------------- code -------------- */}

                {/* -------------- figma -------------- */}

                { (projects[index].figma != '') && (
                  <a href={`${projects[index].figma}`} target="_blank" rel="noreferrer" className="">
                    <img src="/icons/Figma.svg" alt="Figma" className="rounded-l-[20px] green-pink-gradient p-2 w-fit h-14"/>
                  </a>
                )}

                {/* -------------- figma -------------- */}
                
              </div>

              <a href={`${projects[index].address}`} target="_blank" rel="noreferrer" className="absolute rounded-t-[20px] green-pink-gradient bottom-[8px] py-1 px-5">
                <p className="text-[16px]">Have a look</p>
              </a>
              
            </div>            
          </motion.div>
          <motion.div
            key="tech"
            initial={{ x: -300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 300, opacity: 0 }}
            className={'absolute z-40 green-pink-gradient rounded-[20px] bottom-[60px] left-[0px] right-[0px] m-auto w-11/12 m h-10 flex justify-around items-center wrap shadow-card'}
          >
            <AnimatePresence>
              {projects[index].techProjects.map((tech) =>(
                <motion.div
                  animate={{ 
                    x: 0, 
                    opacity: 1,
                    scale: [1, 1.4, 1],
                    rotate: [0, 180, 360],
                  }}
                  key={tech.id}
                  className="content_img" 
                  // onPointerOver={}
                >
                  <img 
                  key={tech.id} 
                  src={`https://res.cloudinary.com/dgk1xld7w/image/upload/v1683485154/production/${tech.icon}.png`}
                  alt={tech.name}
                  className="rounded-[20px] w-9 h-8"/>
                  <div>{tech.name}</div>
                </motion.div>
                
              ))}
            </AnimatePresence>
            
          </motion.div>
        </>
      )}
    </AnimatePresence>
    
  )
}

export default OverlayWorks;