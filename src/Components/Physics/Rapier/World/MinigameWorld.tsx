import { Player } from "Components/Physics/Rapier/World/Player";
import { Environment} from "@react-three/drei";
import { MiniGameFloor } from "Components/MiniGame/MiniGameFloor";


type props = {
  gameStarted: boolean;
}

const MiniGameWorld: React.FC<props> = ({ gameStarted }) => {

  return (
    <group name="Rapier World">
      <MiniGameFloor gameStarted={gameStarted}/>
      <Player/>

      <Environment preset="dawn" background/>
    </group>
  );
};

export { MiniGameWorld};
