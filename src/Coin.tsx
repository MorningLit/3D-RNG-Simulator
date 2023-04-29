import { ThreeElements } from "@react-three/fiber";
import { DoubleSide } from "three";
import { useBox, useCylinder } from "@react-three/cannon";
const Coin = (props: ThreeElements["mesh"]) => {
  const [ref, api] = useCylinder(() => ({
    mass: 1,
    args: [1, 1, 0.1, 16, 1],
    ...props,
  }));
  //somehow fix why coin is sinking into the plane or file a github issue
  return (
    <mesh
      ref={ref}
      onClick={(e) => {
        const xNeg = e.point.x < 0;
        const zNeg = e.point.z < 0;
        const randomX = Math.random() * 8 + 4;
        const randomZ = Math.random() * 8 + 4;
        const randomY = Math.random() * 10 + 10;
        api.applyImpulse(
          [xNeg ? -randomX : randomX, randomY, zNeg ? -randomZ : randomZ],
          [0, -1, 0]
        );
      }}
    >
      <cylinderGeometry args={[1, 1, 0.1, 16, 1]} />
      <meshStandardMaterial color="gold" side={DoubleSide} />
    </mesh>
  );
};

export default Coin;
