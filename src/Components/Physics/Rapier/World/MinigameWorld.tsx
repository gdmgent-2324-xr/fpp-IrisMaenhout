// import { Floor } from "Components/Physics/Rapier/World/Floor";
import { Obstacles } from "Components/Physics/Rapier/World/Obstacles";
import { Player } from "Components/Physics/Rapier/World/Player";
import { RoomModel } from "Components/Room/RoomModel";
import { Floor } from "Components/Room/Floor/Floor";
import { useEffect, useRef, useState } from "react";
import { Environment, SoftShadows } from "@react-three/drei";
import { Bloom } from "Components/Effects/Bloom";
import { MiniGameFloor } from "Components/MiniGame/MiniGameFloor";

import { DirectionalLight } from "three";
import { Ocean } from "Components/MiniGame/Ocean/Ocean";

type props = {
  gameStarted: boolean;
}

const MiniGameWorld: React.FC<props> = ({ gameStarted }) => {

    const enviromentHDRI = ["dawn", "night"];

  return (
    <group name="Rapier World">
      {/* <Floor />
      <Obstacles /> */}
       {/* <SoftShadows samples={20} /> */}
      {/* <SoftShadows size={30} samples={18}/> */}
      <MiniGameFloor gameStarted={gameStarted}/>
      {/* <directionalLight color="red" position={[0, 0, 5]} /> */}
      {/* <Ocean /> */}
      <Player/>

      <Environment preset="dawn" background/>
    </group>
  );
};

export { MiniGameWorld};
