import { TransformControls, useHelper } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
// import { useControls } from "leva";
import { useEffect, useRef } from "react";
import { DirectionalLightHelper, Vector3 } from "three";
// DirectionalLightHelper, useHelper drei
export default function Lights({speed}) {
  const light = useRef();
  const lightGroup = useRef();
  const transform = useRef();
  const orbit = useRef();

  // useHelper(light, DirectionalLightHelper, 2);
  const { gl } = useThree();

  // const start = useRef(new Vector3(2 + position[0], 0 + position[1], 2 + position[2]));
  const start = useRef(new Vector3(4, 0, -2));


  useEffect(() => {
    if (transform?.current) {
      const controls = transform.current;
      controls.setMode("translate");
      const callback = (event) => {
        orbit.current.enabled = !event.value;
      };

      controls.addEventListener("dragging-changed", callback);
      return () => {
        controls.removeEventListener("dragging-changed", callback);
      };
    }
  }, [transform]);

  // const [autoRotate, setautoRotate] = useState(true);

  // useControls("AutoRotate", {
  //   AutoRotate: {
  //     value: true,
  //     onChange: (v) => {
  //       if (lightGroup?.current && !v) {
  //         lightGroup.current.rotation.y = 0;
  //       }
  //       setautoRotate(v);
  //     }
  //   }
  // });

  useEffect(() => {
    gl.state.lightPos = new Vector3();
  }, [gl]);

  useFrame((state, dt) => {
    if (lightGroup?.current && light.current) {
      lightGroup.current.rotation.y -= dt * speed;
    }
    if (gl.state.lightPos) light.current.getWorldPosition(gl.state.lightPos);
  });

  return (
    <>
      {/* <group position={position}> */}
      <group ref={lightGroup}>
        <TransformControls
          showX={false}
          showY={false}
          showZ={false}
          enabled={false}
          ref={transform}
          visible={true}
          
          position={start.current}
          // position={position}
        >
          <directionalLight layers={1} castShadow ref={light} intensity={0.6} />
        </TransformControls>
      </group>

      <ambientLight layers={1} intensity={0.3}  />
      {/* <OrbitControls ref={orbit} /> */}
      {/* </group> */}
    </>
  );
}
