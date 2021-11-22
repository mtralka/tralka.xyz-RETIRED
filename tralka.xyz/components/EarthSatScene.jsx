import { OrbitControls, Stars } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { sRGBEncoding } from "three";
import Earth from "./models/Earth";
import Halo from "./models/Halo";
import Lights from "./models/Lights";
import RenderOrder from "./models/modelRenderOrder";


export default function EarthSatScene() {

  const position = [.75,-.5,0]
  const radius = .75
  const lightSpeed = .08
  const cloudSpeed = 0.03
  const eartSpeed = 0.005

  return (
      
    <div w="full" h="full">
      {/* <Leva collapsed /> */}

      <Canvas
        gl={{
          antialias: true,
          outputEncoding: sRGBEncoding,
        //   pixelRatio: devicePixelRatio
        }}
        camera={{
          position: [0, 1, 1.5]
        }}
      >
        <Suspense fallback={null}>
          <group position={position}>
          
        

          <Earth radius={radius} cloudSpeed={cloudSpeed} earthSpeed={eartSpeed}/>
          <Halo  color={"#0000ff"} radius={radius} />
          <OrbitControls enableRotate={false} enablePan={true} enableZoom={false}  />
          {/* <TrackballControls /> */}

          <Stars radius={300} depth={50} count={5000} factor={4} saturation={5} fade />

          <Lights speed={lightSpeed}/>
          <RenderOrder />
          {/* <OrbitControls target={position} /> */}
          </group>
        </Suspense>
      </Canvas>
    </div>
 
  );
}
