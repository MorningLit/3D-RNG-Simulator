import { ThreeElements } from "@react-three/fiber";
import { useBox } from "@react-three/cannon";

const Dice = (props: ThreeElements["mesh"]) => {
  const [ref, api] = useBox(() => ({ mass: 1, ...props, args: [1, 1, 1] }));
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
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={"red"} />
    </mesh>
  );
};

export default Dice;
