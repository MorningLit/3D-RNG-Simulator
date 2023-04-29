import Dice from "./Dice";
import { Canvas } from "@react-three/fiber";
import { Physics, Debug } from "@react-three/cannon";
import Coin from "./Coin";
import { OrbitControls, Stats, useTexture } from "@react-three/drei";
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
          position: [0, 14, 26],
        }}
      >
        <Physics>
          {/* <Debug scale={1} color="black"> */}
          <OrbitControls />
          {/* <ambientLight /> */}
          <pointLight position={[0, 50, 20]} />
          {Array.from({ length: numberOfDice }).map((_, i) => {
            const randomX = Math.random() * 41 - 20;
            const randomZ = Math.random() * 41 - 20;
            return <Dice position={[randomX, 1, randomZ]} key={i} />;
          })}
          {Array.from({ length: numberOfCoin }).map((_, i) => {
            const randomX = Math.random() * 41 - 20;
            const randomZ = Math.random() * 41 - 20;
            return (
              <Coin
                key={i}
                position={[randomX, 1, randomZ]}
                rotation={[0, 0, 0]}
              />
            );
          })}
          <Plane />
          {/* <Stats /> */}
          {/* </Debug> */}
        </Physics>
      </Canvas>
    </>
  );
}

export default App;
