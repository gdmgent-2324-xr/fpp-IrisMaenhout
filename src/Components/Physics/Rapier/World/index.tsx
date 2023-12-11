import { Floor } from "Components/Physics/Rapier/World/Floor";
import { Obstacles } from "Components/Physics/Rapier/World/Obstacles";
import { Player } from "Components/Physics/Rapier/World/Player";

const PhysicsRapierWorld = () => {
  return (
    <group name="Rapier World">
      <Floor />
      <Obstacles />
      <Player />
    </group>
  );
};

export { PhysicsRapierWorld as World };
