import Dice from "./Dice";
import { Canvas } from "@react-three/fiber";
import { Physics } from "@react-three/cannon";
import Coin from "./Coin";
import { OrbitControls } from "@react-three/drei";
import Plane from "./Plane";
import { useState } from "react";
function App() {
  const [numberOfDice, setNumberOfDice] = useState(1);
  const [numberOfCoin, setNumberOfCoin] = useState(1);
  return (
    <>
      <div className="overlay">
        <div>
          <label>
            Number of Coins: {numberOfCoin}
            <input
              type="range"
              onChange={(e) => setNumberOfCoin(Number(e.target.value))}
              defaultValue={numberOfCoin}
              min={0}
              max={20}
            />
          </label>
        </div>
        <div>
          <label>
            Number of Dice: {numberOfDice}
            <input
              type="range"
              onChange={(e) => setNumberOfDice(Number(e.target.value))}
              defaultValue={numberOfDice}
              min={0}
              max={20}
            />
          </label>
        </div>
      </div>
      <Canvas
        camera={{
          fov: 90,
          near: 0.1,
          far: 1000,
          position: [0, 28, 10],
        }}
      >
        <Physics>
          <ambientLight />
          <OrbitControls />
          <pointLight position={[10, 10, 10]} />
          {Array.from({ length: numberOfDice }).map((_, i) => (
            <Dice position={[0, 1, 0]} key={i} />
          ))}
          {Array.from({ length: numberOfCoin }).map((_, i) => (
            <Coin key={i} position={[0, 1, 0]} rotation={[0, 0, 0]} />
          ))}
          <Plane />
        </Physics>
      </Canvas>
    </>
  );
}

export default App;
