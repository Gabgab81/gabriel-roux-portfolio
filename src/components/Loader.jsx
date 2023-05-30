import { Html, useProgress } from "@react-three/drei"

const Loader = () => {
  const { active, progress, errors, item, loaded, total } = useProgress()

  return (
    <Html>
      <span className="canvas-load"></span>
      <p
        style={{
          fontSize: 24,
          color: "#f1f1f1",
          fontWeight: 800,
          marginTop: 40
        }}
      >{progress.toFixed(2)}%</p>
      <p
        style={{
          fontSize: 14,
          color: "#f1f1f1",
          fontWeight: 800,
          marginTop: 40
        }}
      >{item}</p>
    </Html>
  )
}

export default Loader