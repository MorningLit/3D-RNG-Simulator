import { ThreeElements } from "@react-three/fiber";
import { usePlane } from "@react-three/cannon";

const Plane = (props: ThreeElements["planeGeometry"]) => {
  const [ref] = usePlane(() => ({ rotation: [-Math.PI / 2, 0, 0], ...props }));
  return (
    <mesh ref={ref}>
      <planeGeometry args={[100, 100]} />
      <meshBasicMaterial color="black" />
    </mesh>
  );
};

export default Plane;
