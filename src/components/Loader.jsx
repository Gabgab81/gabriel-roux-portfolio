import { Html, useProgress } from "@react-three/drei"

const Loader = () => {
  const { active, progress, errors, item, loaded, total } = useProgress()

  return (
    <Html>
      {/* <span className="canvas-load"></span> */}
      <div
        className="absolute top-[-150px] left-[-250px] w-[500px] h-[200px]
        flex flex-col justify-center items-center gap-10 "
      >
        <div
          className="bg-[black] rounded-full border-4 border-white h-1/6 w-9/12"
        >
          <div
            className={`bg-[white] rounded-full h-full`}
            style={{
              // width: '50%'
              width: `${progress.toFixed(2)}%`
            }}
          >
          
          </div>
        </div>
        <p
          className="text-white text-[20px]"
        >
          {progress.toFixed(2)}%
        </p>
        <p
          style={{
            fontSize: 14,
            color: "#f1f1f1",
            fontWeight: 800,
            // marginTop: 40
          }}
        >{item}</p>

      </div>
      
    </Html>
  )
}

export default Loader