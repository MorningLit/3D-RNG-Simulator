// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore

import { ThreeElements } from "@react-three/fiber";
import { usePlane } from "@react-three/cannon";
import { useTexture } from "@react-three/drei";

const Plane = (props: ThreeElements["planeGeometry"]) => {
  const [ref] = usePlane(() => ({
    args: [100, 100],
    rotation: [-Math.PI / 2, 0, 0],
    ...props,
  }));
  const background = useTexture("/background.jpg");

  return (
    <>
      <primitive attach="background" object={background} />
      <mesh ref={ref}>
        <planeGeometry args={[100, 100]} />
        <meshStandardMaterial color="#9a7b4f" />
      </mesh>
    </>
  );
};

export default Plane;
