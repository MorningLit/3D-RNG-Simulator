import { ThreeElements, useLoader } from "@react-three/fiber";
import { TextureLoader } from "three";
import { useCylinder } from "@react-three/cannon";
const Coin = (props: ThreeElements["mesh"]) => {
  const [ref, api] = useCylinder(() => ({
    mass: 1,
    args: [1, 1, 0.1, 16, 1],
    ...props,
  }));
  const [head, tail] = useLoader(TextureLoader, ["./head.png", "./tail.png"]);
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
      <meshStandardMaterial attach={"material-0"} color="gold" />
      <meshStandardMaterial attach={"material-1"} color="gold" map={head} />
      <meshStandardMaterial attach={"material-2"} color="gold" map={tail} />
    </mesh>
  );
};

export default Coin;
