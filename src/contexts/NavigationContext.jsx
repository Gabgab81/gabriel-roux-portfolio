import { createContext, useContext, useState } from "react";

const NavigationContext = createContext({});

export const NavigationProvider = (props) => {
  const [hero, setHero] = useState(true);
  const [about, setAbout] = useState(false);
  const [work, setWork] = useState(false);
  const [contact, setContact] = useState(false);

  return (
  <NavigationContext.Provider value={{
    hero,
    setHero,
    about,
    setAbout,
    work,
    setWork,
    contact,
    setContact,
  }} >
    {props.children}
  </NavigationContext.Provider>
  );
};

export const useNavigation = () => {
  return useContext(NavigationContext)
}