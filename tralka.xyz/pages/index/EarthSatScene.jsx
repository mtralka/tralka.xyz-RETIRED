import { OrbitControls, Stars } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { sRGBEncoding } from "three";
import Earth from "./models/Earth";
import Halo from "./models/Halo";
import Landsat from "./models/Landsat";
import Lights from "./models/Lights";
import RenderOrder from "./models/modelRenderOrder";
import SatOrbit from "./models/SatOrbit";

export default function EarthSatScene() {

  const position = [.75,-.5,0]
  const radius = 0.75
  const lightSpeed = .08
  const cloudSpeed = 0.03
  const eartSpeed = 0.008
  const satSpeed = 0.2
  const orbitRadius = 1.2
  const satRotateSpeed = 0.01
  
  return (
    <div w="full" h="full">
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
          <group>
            <group renderOrder={Infinity}>
              <Earth radius={radius} cloudSpeed={cloudSpeed} earthSpeed={eartSpeed}/>
              <Halo  color={"#0000ff"} radius={radius} />
              <Lights speed={lightSpeed}/>
            </group>
            <SatOrbit orbitSpeed={satSpeed}>
              <Landsat position={[orbitRadius,0,0]} scale={[.1, .1, .1]} satRotateSpeed={satRotateSpeed}/>
              <directionalLight castShadow intensity={0.6} layers={2} />
              <ambientLight  intensity={1.3} layers={2} />
            </SatOrbit>
          </group>
          <RenderOrder />
          <OrbitControls enableRotate={false} enablePan={false} enableZoom={false}  />
          <Stars radius={300} depth={50} count={5000} factor={4} saturation={5} fade />
        </group>
        </Suspense>
      </Canvas>
    </div>
  );
}
