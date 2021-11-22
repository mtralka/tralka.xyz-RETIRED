
import { useFrame, useThree } from "@react-three/fiber";
import { useRef } from "react";


export default function satOrbit({orbitSpeed, orbitRadius, ...props}) {
  
  const satOrbitRef = useRef();
  const { gl } = useThree();

  useFrame((_, dt) => {
    if (satOrbitRef?.current) {
        satOrbitRef.current.rotation.z -= dt * orbitSpeed;
    }
  });

  return (
    <>
    <group ref={satOrbitRef}>
        {props.children}
    </group>
    </>
  );
}
