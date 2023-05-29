import { createContext, useContext, useState } from "react";

const FirstSceneContext = createContext({});

export const CameraModes = {
  // "DEFAULT": "DEFAULT",
  "FREE": "FREE",
  "BOOK": "BOOK",
  "BACK": "BACK",
}

export const FirstSceneProvider = (props) => {
  const [animationIndex, setAnimationIndex] = useState(0);
  const [animations, setAnimations] = useState([]);
  const [cameraMode, setCameraMode] = useState(CameraModes.FREE)

  return (
  <FirstSceneContext.Provider value={{
    animationIndex,
    setAnimationIndex,
    animations,
    setAnimations,
    cameraMode,
    setCameraMode,
  }} >
    {props.children}
  </FirstSceneContext.Provider>
  );
};

export const useFirstScene = () => {
  return useContext(FirstSceneContext)
}