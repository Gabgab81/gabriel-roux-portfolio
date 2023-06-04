import { BrowserRouter } from 'react-router-dom';

import { Navbar, Hero, Footer, About } from "./components";

const App = () => {

  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar />
          <Hero />
          <About />
          <Footer />
        </div> 
      </div>
    </BrowserRouter>
  )
}

export default App
