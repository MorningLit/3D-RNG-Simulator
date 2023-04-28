import { ThreeElements } from "@react-three/fiber";
import { DoubleSide } from "three";
import { useBox } from "@react-three/cannon";
const Coin = (props: ThreeElements["mesh"]) => {
  const [ref, api] = useBox(() => ({
    mass: 1,
    ...props,
  }));
  //somehow fix why coin is sinking into the plane or file a github issue
  return (
    <mesh
      ref={ref}
      onClick={(e) => {
        const zNeg = e.point.z < 0;
        const randomZ = Math.random() * 8 + 4;
        const randomY = Math.random() * 10 + 10;
        api.applyImpulse([0, randomY, zNeg ? -randomZ : randomZ], [0, -1, 0]);
      }}
    >
      <cylinderGeometry args={[1, 1, 0.1, 64, 64]} />
      <meshBasicMaterial color="gold" side={DoubleSide} />
    </mesh>
  );
};

export default Coin;
