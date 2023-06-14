// Highter order component
import { styles } from '../styles';
import { motion } from "framer-motion";

import { useNavigation } from "../contexts/NavigationContext";


const SectionWrapper = (Component, idName) => 
function HOC() {
  
  return (
    <motion.section 
      // className={`${styles.padding} max-w-7xl mx-auto relative z-0`}
    >
      <span className='hash-span' id={idName}>
        &nbsp;
      </span>
      <Component enable={true} />
    </motion.section>
  )
}

export default SectionWrapper