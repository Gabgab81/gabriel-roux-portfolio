import { SectionWrapper } from '../hoc';
import { SceneCanvas } from './canvas';
import { motion } from 'framer-motion'

const Hero = () => {

  console.log('I would like to thank:')
  console.log('Venkatesh for the room: https://sketchfab.com/3d-models/room-c006e44a66a94d099297133a466d42f6')
  console.log('Eric Fan for the book: https://sketchfab.com/3d-models/book-fc1b43e332d147edb7dca8f89cffa4d7')
  console.log('SebastianSosnowski for the moon: https://sketchfab.com/3d-models/truth-about-the-dark-side-of-the-moon-33502f4cf5724096a8c03fcdd68d8b68')
  console.log('irons3th for the Billboard: https://sketchfab.com/3d-models/billboard-park-932773f38faa41f38e74927b5a5fd08c')
  console.log('Mixamo for the characters and animations: https://www.mixamo.com/')
 
  return (
    <section className='relative w-full  h-screen mx-auto'
      // style={{
      //   display: enable ? "relative" : "none"
      // }}
    >
      {/* <div className={`${styles.paddingX} absolute inset-0
      top-[120px] max-w-7xl mx-auto flex flex-row  items-start gap-5`}>
        
        <div className='flex flex-col justify-center items-center mt-5'>
           <div className='w-5 h-5 rounded-full bg-[#915eff]' />
           <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>Hi, I'm <span className='text-[#915eff]'>Gabriel</span></h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I develop 3D visuals, user <br className='sm:block hidden'/> interfaces and web applications.
          </p>
        </div>

      </div> */}

      <SceneCanvas />

      {/* <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center
      items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary
          flex justify-center items-start p-2'>
            <motion.div 
              animate={{
                y: [0, 24, 0]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: 'loop'
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div> */}

    </section>
  )
}

export default SectionWrapper(Hero, "")