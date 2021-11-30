import { useGLTF } from '@react-three/drei';
import { useFrame } from "@react-three/fiber";
import React, { useEffect, useRef } from 'react';

export default function Model({satRotateSpeed, ...props }) {

  const group = useRef()
  const { nodes, materials } = useGLTF('/landsat.glb')

  useEffect(() => {
    group.current.rotation.z = Math.PI
    group.current.rotation.y = .002
  }, null);

  useFrame((_, dt) => {
    if (group?.current) {
      group.current.rotation.x += dt * satRotateSpeed
    }
  });

  return (
    <group ref={group} {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} layers={2} >
        <group position={[0.05, -0.01, -0.01]} scale={[0.01, 0.25, 0.21]} layers={2}>
          <mesh geometry={nodes.Cube_0.geometry} material={nodes.Cube_0.material} layers={2} />
        </group>
        <group position={[0.16, -0.19, -0.19]} rotation={[0, Math.PI / 2, 0]} scale={[-0.01, -0.06, -0.1]}>
          <mesh geometry={nodes.Cube001_0.geometry} material={nodes.Cube001_0.material} layers={2} />
        </group>
        <group position={[0.16, -0.04, -0.19]} rotation={[0, Math.PI / 2, 0]} scale={[-0.01, -0.06, -0.1]}>
          <mesh geometry={nodes.Cube002_0.geometry} material={nodes.Cube002_0.material} layers={2} />
        </group>
        <group position={[0.16, 0.01, -0.25]} rotation={[Math.PI / 2, Math.PI / 2, 0]} scale={[-0.01, -0.06, -0.1]}>
          <mesh geometry={nodes.Cube003_0.geometry} material={nodes.Cube003_0.material} layers={2} />
        </group>
        <group position={[0.4, -0.02, -0.22]} rotation={[-Math.PI / 4, Math.PI / 2, 0]} scale={[0, -0.04, 0]}>
          <mesh geometry={nodes.Cube004_0.geometry} material={nodes.Cube004_0.material} layers={2} />
        </group>
        <group position={[0.16, 0.21, -0.25]} rotation={[Math.PI / 2, Math.PI / 2, 0]} scale={[-0.01, -0.06, -0.1]}>
          <mesh geometry={nodes.Cube005_0.geometry} material={nodes.Cube005_0.material} layers={2} />
        </group>
        <group position={[0.16, 0.13, -0.19]} rotation={[0, Math.PI / 2, 0]} scale={[-0.01, -0.08, -0.1]}>
          <mesh geometry={nodes.Cube006_0.geometry} material={nodes.Cube006_0.material} layers={2} />
        </group>
        <group position={[-0.38, -0.23, 0.19]} rotation={[-Math.PI / 4, 0, 0]} scale={[0.19, 1, 1]}>
          <mesh geometry={nodes.Cube007_0.geometry} material={nodes.Cube007_0.material} layers={2} />
        </group>
        <group position={[0.28, 0.13, -0.13]} rotation={[-Math.PI, 0.56, -Math.PI]} scale={[0, -0.07, -0.04]}>
          <mesh geometry={nodes.Cube008_0.geometry} material={nodes.Cube008_0.material} layers={2} />
        </group>
        <group position={[-0.38, -0.23, 0.19]} rotation={[-Math.PI / 4, 0, 0]} scale={[0.19, 1, 1]}>
          <ambientLight  intensity={0.3} scale={0.2} layers={2} />
          <mesh geometry={nodes.Cube009_0.geometry} material={materials['solar.002']} layers={2} />
        </group>
        <group position={[-0.38, -0.17, 0.15]} rotation={[2.41, 0, -Math.PI]} scale={[0, -0.02, -0.01]}>
          <mesh geometry={nodes.Cube010_0.geometry} material={nodes.Cube010_0.material} layers={2} />
        </group>
        <group position={[0.02, 0.09, -0.11]} scale={[0.02, 0.01, 0.01]}>
          <mesh geometry={nodes.Cube011_0.geometry} material={nodes.Cube011_0.material} layers={2} />
        </group>
        <group position={[0.11, -0.24, -0.14]} rotation={[-Math.PI / 2, 0, -Math.PI]} scale={[-0.05, -0.05, 0]}>
          <mesh geometry={nodes.Cube012_0.geometry} material={nodes.Cube012_0.material} layers={2} />
        </group>
        <group position={[0.11, -0.16, -0.14]} rotation={[-Math.PI / 2, 0, -Math.PI]} scale={[-0.05, -0.05, 0]}>
          <mesh geometry={nodes.Cube013_0.geometry} material={nodes.Cube013_0.material} layers={2} />
        </group>
        <group position={[0.11, -0.01, -0.14]} rotation={[-Math.PI / 2, 0, -Math.PI]} scale={[-0.05, -0.05, 0]}>
          <mesh geometry={nodes.Cube014_0.geometry} material={nodes.Cube014_0.material} layers={2} />
        </group>
        <group position={[0.11, -0.08, -0.14]} rotation={[-Math.PI / 2, 0, -Math.PI]} scale={[-0.05, -0.05, 0]}>
          <mesh geometry={nodes.Cube015_0.geometry} material={nodes.Cube015_0.material} layers={2} />
        </group>
        <group position={[0.16, 0.13, -0.15]} rotation={[Math.PI, -Math.PI / 2, 0]} scale={[0.05, 0.07, 0.03]}>
          <mesh geometry={nodes.Cube016_0.geometry} material={nodes.Cube016_0.material} layers={2} />
          <mesh geometry={nodes.Cube016_1.geometry} material={materials['black_lens.002']} layers={2} />
        </group>
        <group position={[0.28, -0.13, 0.01]} scale={[0.11, 0.07, 0.11]}>
          <mesh geometry={nodes.Cube017_0.geometry} material={nodes.Cube017_0.material} layers={2} />
        </group>
        <group position={[0.34, 0, 0]} scale={[0.03, 0.08, 0.05]}>
          <mesh geometry={nodes.Cube018_0.geometry} material={nodes.Cube018_0.material} layers={2} />
        </group>
        <group position={[0.34, 0.03, 0.06]} scale={[0.02, 0.04, 0.04]}>
          <mesh geometry={nodes.Cube019_0.geometry} material={nodes.Cube019_0.material} layers={2} />
        </group>
        <group position={[0.12, -0.01, -0.01]} scale={[0.01, 0.25, 0.21]}>
          <mesh geometry={nodes.Cube020_0.geometry} material={nodes.Cube020_0.material} layers={2} />
        </group>
        <group position={[0.15, -0.07, 0.07]} scale={[0.02, 0.01, 0.01]}>
          <mesh geometry={nodes.Cube021_0.geometry} material={nodes.Cube021_0.material} layers={2} />
        </group>
        <group position={[0.15, -0.18, 0.07]} scale={[0.02, 0.01, 0.01]}>
          <mesh geometry={nodes.Cube022_0.geometry} material={nodes.Cube022_0.material} layers={2} />
        </group>
        <group position={[0.15, -0.18, -0.07]} scale={[0.02, 0.01, 0.01]}>
          <mesh geometry={nodes.Cube023_0.geometry} material={nodes.Cube023_0.material} layers={2} />
        </group>
        <group position={[0.15, -0.07, -0.08]} scale={[0.02, 0.01, 0.01]}>
          <mesh geometry={nodes.Cube024_0.geometry} material={nodes.Cube024_0.material} layers={2} />
        </group>
        <group position={[0.08, -0.07, -0.08]} scale={[0.02, 0.01, 0.01]}>
          <mesh geometry={nodes.Cube025_0.geometry} material={nodes.Cube025_0.material} layers={2} />
        </group>
        <group position={[0.08, -0.18, -0.07]} scale={[0.02, 0.01, 0.01]}>
          <mesh geometry={nodes.Cube026_0.geometry} material={nodes.Cube026_0.material} layers={2} />
        </group>
        <group position={[0.08, -0.18, 0.07]} scale={[0.02, 0.01, 0.01]}>
          <mesh geometry={nodes.Cube027_0.geometry} material={nodes.Cube027_0.material} layers={2} />
        </group>
        <group position={[0.08, -0.07, 0.07]} scale={[0.02, 0.01, 0.01]}>
          <mesh geometry={nodes.Cube028_0.geometry} material={nodes.Cube028_0.material} layers={2} />
        </group>
        <group position={[0.02, -0.11, -0.1]} scale={[0.02, 0.01, 0.01]}>
          <mesh geometry={nodes.Cube029_0.geometry} material={nodes.Cube029_0.material} layers={2} />
        </group>
        <group position={[0.02, -0.1, 0.11]} scale={[0.02, 0.01, 0.01]}>
          <mesh geometry={nodes.Cube030_0.geometry} material={nodes.Cube030_0.material} layers={2} />
        </group>
        <group position={[0.02, 0.09, 0.1]} scale={[0.02, 0.01, 0.01]}>
          <mesh geometry={nodes.Cube031_0.geometry} material={nodes.Cube031_0.material} layers={2} />
        </group>
        <group position={[0.14, -0.04, 0.13]} scale={[0.01, 0.03, 0.03]}>
          <mesh geometry={nodes.Cube032_0.geometry} material={nodes.Cube032_0.material} layers={2} />
        </group>
        <group position={[0.14, -0.12, 0.13]} scale={[0.01, 0.03, 0.03]}>
          <mesh geometry={nodes.Cube033_0.geometry} material={nodes.Cube033_0.material} layers={2} />
        </group>
        <group position={[0.14, -0.12, 0]} scale={[0.01, 0.03, 0.03]}>
          <mesh geometry={nodes.Cube034_0.geometry} material={nodes.Cube034_0.material} layers={2} />
        </group>
        <group position={[-0.02, -0.21, -0.19]} rotation={[-0.44, -0.44, 0]} scale={[0.01, 0.14, 0.12]}>
          <mesh geometry={nodes.Cube035_0.geometry} material={nodes.Cube035_0.material} layers={2} />
        </group>
        <group position={[0.02, -0.21, -0.17]} rotation={[-0.44, -0.44, 0]} scale={[0.03, 0.03, 0.02]}>
          <mesh geometry={nodes.Cube036_0.geometry} material={nodes.Cube036_0.material} layers={2} />
        </group>
        <group position={[-0.2, -0.21, 0]} scale={[0.06, 0.05, 0.05]}>
          <mesh geometry={nodes.Cube037_0.geometry} material={nodes.Cube037_0.material} layers={2} />
        </group>
        <group position={[-0.21, -0.06, 0.2]}>
          <mesh geometry={nodes.Cube038_0.geometry} material={nodes.Cube038_0.material} layers={2} />
        </group>
        <group position={[-0.38, -0.23, 0.19]} rotation={[-Math.PI / 4, 0, 0]} scale={[0.19, 1, 1]}>
          <mesh geometry={nodes.Cube039_0.geometry} material={nodes.Cube039_0.material} layers={2} />
        </group>
        <group position={[-0.31, -0.04, -0.18]} rotation={[1.39, 0, 0]} scale={[0.06, 0.05, 0.05]}>
          <mesh geometry={nodes.Cube040_0.geometry} material={nodes.Cube040_0.material} layers={2} />
        </group>
        <group position={[-0.37, 0.17, -0.07]} rotation={[-0.34, 0, 0]} scale={[0.02, 0.01, 0.02]}>
          <mesh geometry={nodes.Cube041_0.geometry} material={nodes.Cube041_0.material} layers={2} />
        </group>
        <group position={[-0.28, 0.17, -0.07]} rotation={[-0.34, 0, 0]} scale={[0.02, 0.01, 0.02]}>
          <mesh geometry={nodes.Cube042_0.geometry} material={nodes.Cube042_0.material} layers={2} />
        </group>
        <group position={[-0.08, 0.17, -0.07]} rotation={[-0.34, 0, 0]} scale={[0.02, 0.01, 0.02]}>
          <mesh geometry={nodes.Cube043_0.geometry} material={nodes.Cube043_0.material} layers={2} />
        </group>
        <group position={[-0.38, -0.18, 0.13]} rotation={[2.41, 0, -Math.PI]} scale={[0, -0.02, -0.01]}>
          <mesh geometry={nodes.Cube044_0.geometry} material={nodes.Cube044_0.material} layers={2} />
        </group>
        <group position={[-0.2, -0.01, 0]} rotation={[0, -Math.PI / 2, 0]} scale={0.2}>
          
          <mesh geometry={nodes.Cylinder_0.geometry} material={materials['gold.002']} layers={2} />
          <mesh geometry={nodes.Cylinder_1.geometry} material={nodes.Cylinder_1.material} layers={2} />
        </group>
        <group position={[-0.16, -0.22, 0.01]} rotation={[1.57, 0.14, 3.14]} scale={[-0.03, -0.03, -0.01]}>
          <mesh geometry={nodes.Cylinder001_0.geometry} material={nodes.Cylinder001_0.material} layers={2} />
        </group>
        <group position={[-0.25, -0.22, 0.01]} rotation={[Math.PI / 2, -0.15, 3.14]} scale={[-0.03, -0.03, -0.01]}>
          <mesh geometry={nodes.Cylinder002_0.geometry} material={nodes.Cylinder002_0.material} layers={2} />
        </group>
        <group position={[-0.25, -0.05, 0.21]}>
          <mesh geometry={nodes.Cylinder003_0.geometry} material={nodes.Cylinder003_0.material} layers={2} />
        </group>
        <group position={[-0.17, -0.05, 0.21]}>
          <mesh geometry={nodes.Cylinder004_0.geometry} material={nodes.Cylinder004_0.material} layers={2} />
        </group>
        <group position={[-0.37, 0.2, 0.08]} rotation={[-1.1, 0, 0]} scale={[0.01, 0.01, 0.05]}>
          <mesh geometry={nodes.Cylinder005_0.geometry} material={nodes.Cylinder005_0.material} layers={2} />
        </group>
        <group position={[-0.1, 0.2, 0.08]} rotation={[-1.1, 0, 0]} scale={[0.01, 0.01, 0.05]}>
          <mesh geometry={nodes.Cylinder006_0.geometry} material={nodes.Cylinder006_0.material} layers={2}/>
        </group>
        <group position={[-0.45, -0.01, 0]} rotation={[-Math.PI / 2, -Math.PI / 2, 0]} scale={[0.05, 0.05, 0.03]}>
          <mesh geometry={nodes.Cylinder007_0.geometry} material={nodes.Cylinder007_0.material} layers={2} />
        </group>
        <group position={[-0.36, -0.01, 0]} rotation={[-Math.PI / 2, -Math.PI / 2, 0]} scale={[0.17, 0.17, 0.09]}>
          <mesh geometry={nodes.Cylinder008_0.geometry} material={nodes.Cylinder008_0.material} layers={2} />
        </group>
        <group position={[-0.29, -0.01, 0]} rotation={[-Math.PI / 2, -Math.PI / 2, 0]} scale={[0.18, 0.18, 0.17]}>
          <mesh geometry={nodes.Cylinder009_0.geometry} material={nodes.Cylinder009_0.material} layers={2} />
        </group>
        <group position={[-0.39, -0.17, 0.13]} rotation={[0.64, 0.1, 0.14]}>
          <mesh geometry={nodes.Cylinder010_0.geometry} material={nodes.Cylinder010_0.material} layers={2} />
        </group>
        <group position={[-0.43, -0.01, 0]} rotation={[0, Math.PI / 2, 0]} scale={[0.1, 0.1, 0.03]}>
          <mesh geometry={nodes.Cylinder011_0.geometry} material={nodes.Cylinder011_0.material} layers={2} />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/landsat.glb')
