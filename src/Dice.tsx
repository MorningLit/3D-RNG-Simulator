import { ThreeElements, useLoader } from "@react-three/fiber";
import { useBox } from "@react-three/cannon";
import { useTexture } from "@react-three/drei";
import { TextureLoader } from "three";

const Dice = (props: ThreeElements["mesh"]) => {
  const [ref, api] = useBox(() => ({ mass: 1, ...props, args: [1, 1, 1] }));
  // const [dice1, dice2] = useTexture(["/dice1.png", "/dice2.png"]);
  const [dice1, dice2, dice3, dice4, dice5, dice6] = useLoader(TextureLoader, [
    "/dice1.png",
    "/dice2.png",
    "/dice3.png",
    "/dice4.png",
    "/dice5.png",
    "/dice6.png",
  ]);

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
      <meshStandardMaterial attach="material-0" map={dice1} color="white" />
      <meshStandardMaterial attach="material-1" map={dice2} color="white" />
      <meshStandardMaterial attach="material-2" map={dice3} color="white" />
      <meshStandardMaterial attach="material-3" map={dice4} color="white" />
      <meshStandardMaterial attach="material-4" map={dice5} color="white" />
      <meshStandardMaterial attach="material-5" map={dice6} color="white" />
    </mesh>
  );
};

export default Dice;
