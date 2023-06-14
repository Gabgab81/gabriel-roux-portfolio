import React, { useEffect, useState} from "react";
import { Link } from "react-router-dom";

import { styles } from '../styles';
import { logo, menu, close } from "../assets"

import { navLinks } from "../constants"

import { useNavigation } from "../contexts/NavigationContext";


const Navbar = () => {
  const [active, setActive] = useState('');
  const [toggle, setToggle] = useState(false)

  const { setHero, setAbout, setWork, setContact } = useNavigation();

  const navigation = (id) => {
    switch (id) {
      case "/": 
        setHero(true);
        setAbout(false);
        setWork(false);
        setContact(false);
      break;
      case "about":
        setHero(false);
        setAbout(true);
        setWork(false);
        setContact(false);
      break;
      case "work":
        setHero(false);
        setAbout(false);
        setWork(true);
        setContact(false);
      break;
      case "contact":
        setHero(false);
        setAbout(false);
        setWork(false);
        setContact(true);
      break;
      default:
        setHero(true);
        setAbout(false);
        setWork(false);
        setContact(false);
    }
    
  }
 
  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-5 fixed 
      top-0 z-20 bg-primary`}>
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">

        {/* <Link 
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt="logo" className="w-9 h-9 object-contain" />
          <p 
            className="text-white text-[18px] font-bold cursor-pointer flex"
          >
            Gabriel Roux&nbsp;
            <span className="sm:block hidden">
            | Portfolio</span>
          </p>
        </Link> */}

        {/* <div
          className="flex justify-between gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        > */}
          <a 
            className="flex justify-between gap-2"
            onClick={() => {
              setActive("");
              navigation("/")
              // window.scrollTo(0, 0);
            }}
            href={`/`}>
            <img src={logo} alt="logo" className="w-9 h-9 object-contain" />
            <p 
              className="text-white text-[18px] font-bold cursor-pointer flex"
            >
              Gabriel Roux&nbsp;
              <span className="sm:block hidden">
              | Portfolio</span>
            </p>
          </a>
          
        {/* </div> */}

        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((link) => (
            <li 
              key={link.id}
              className={`${active == link.title
              ? "text-white" : "text-secondary"} hover:text-white text-[18px]
              font-medium cursor-pointer`}
              onClick={() => {
                setActive(link.title)
                navigation(link.id)
              }}
              
              >
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>

        <div className="sm:hidden flex flex-1 justify-end items-center">
          
          <img src={toggle ? close : menu }
            alt="menu"
            className="w-[28px] h-[28px] object-contain cursor-pointer"
            onClick={() => setToggle(!toggle)}
          />

          <div className={`${!toggle ? "hidden" : "flex"} p-6 black-gradient absolute
          top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}>
            <ul className="list-none flex justify-end items-start flex-col gap-4">
            {navLinks.map((link) => (
            <li 
              key={link.id}
              className={`${active == link.title
              ? "text-white" : "text-secondary"} text-[16px]
              font-poppins font-medium cursor-pointer`}
              onClick={() => {
                setToggle(!toggle);
                setActive(link.title);
                }}
              >
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul> 
          </div>

        </div>
      </div>
    </nav>
  )
}

export default Navbar