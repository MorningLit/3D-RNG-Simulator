import { ThreeElements } from "@react-three/fiber";
import { usePlane } from "@react-three/cannon";

const Plane = (props: ThreeElements["planeGeometry"]) => {
  const [ref] = usePlane(() => ({
    args: [100, 100],
    rotation: [-Math.PI / 2, 0, 0],
    ...props,
  }));
  return (
    <mesh ref={ref}>
      <planeGeometry args={[100, 100]} />
      <meshStandardMaterial color="blue" />
    </mesh>
  );
};

export default Plane;
