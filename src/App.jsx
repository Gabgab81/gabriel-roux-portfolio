import { BrowserRouter } from 'react-router-dom';

import { Navbar, Hero, Footer, About, Works, Contact } from "./components";

import { useNavigation } from "./contexts/NavigationContext";

import { motion, AnimatePresence, usePresence } from "framer-motion";
import { useEffect } from 'react';

const App = () => {

  const { hero, about, work, contact } = useNavigation()
  // console.log("hero:", hero )

  const [isPresent, safeToRemove] = usePresence()

  useEffect(() => {
    console.log('here')
    !isPresent && setTimeout(safeToRemove, 1000)
  }, [isPresent])

  return (
    <BrowserRouter>
      <div className='relative z-0 bg-black'>
        <div className=''>
          
          <Navbar />
          <AnimatePresence>

            {hero && isPresent  && ( 
              <motion.div
                key="hero"
                initial={{ 
                  // x: 300,
                  opacity: 0 
                  }}
                animate={{ 
                  // x: 0,
                  opacity: 1 }}
                exit={{ 
                  // x: -300,
                  opacity: 0 }}
              >
                <Hero />
              </motion.div> 
            )}
            {about && isPresent && ( 
              <motion.div
                key="about"
                initial={{ 
                  // x: 300,
                  
                  opacity: 0 }}
                animate={{ 
                  // x: 0,
                  opacity: 1 }}
                exit={{ 
                  // x: -300,
                  opacity: 0 }}
              >
                <About />
              </motion.div> 
            )}
            {work && isPresent && ( 
              <motion.div
                key="work"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <Works />
              </motion.div> 
            )}
            {contact && isPresent && ( 
              <motion.div
                key="contact"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <Contact />
              </motion.div> 
            )}

          </AnimatePresence>
          
        </div> 
      </div>
    </BrowserRouter>
  )
}

export default App
