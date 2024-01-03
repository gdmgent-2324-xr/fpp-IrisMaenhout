import { Navigate, Route, Routes } from "react-router-dom";

import { NAVIGATION } from "Configs/navigation";
import { PhysicsRapierWorldPage } from "Pages/PhysicsRapierWorldPage";
import { PhysicsRapierXrArPage } from "Pages/PhysicsRapierXrArPage";
import { PhysicsRapierXrVrPage } from "Pages/PhysicsRapierXrVrPage";
import { ClockPage } from "Pages/ClockPage";
import { MiniGamePage } from "./MiniGamePage";

const Pages = (): JSX.Element => {
  const allPath = "*";
  const homePath = NAVIGATION.PATH.PHYSICS_RAPIER_WORLD;
  const miniGamePath = NAVIGATION.PATH.MINIGAME;
  const rootPath = "/";

  return (
    <Routes>
      <Route //
        element={<Navigate to={rootPath} />}
        path={allPath}
      />
      <Route //
        element={<Navigate to={homePath} />}
        path={rootPath}
      />
    
      <Route //
        element={<PhysicsRapierWorldPage />}
        path={NAVIGATION.PATH.PHYSICS_RAPIER_WORLD}
      />
      
      <Route //
        element={<MiniGamePage />}
        path={NAVIGATION.PATH.MINIGAME}
      />
      {/* <Route //
        element={<PhysicsRapierXrArPage />}
        path={NAVIGATION.PATH.PHYSICS_RAPIER_XR_AR}
      />
      <Route //
        element={<PhysicsRapierXrVrPage />}
        path={NAVIGATION.PATH.PHYSICS_RAPIER_XR_VR}
      /> */}
    </Routes>
  );
};

export { Pages };
