import { Navigate, Route, Routes } from "react-router-dom";

import { NAVIGATION } from "Configs/navigation";
import { PhysicsRapierWorldPage } from "Pages/PhysicsRapierWorldPage";
import { MiniGamePage } from "./MiniGamePage";

const Pages = (): JSX.Element => {
  const allPath = "*";
  const homePath = NAVIGATION.PATH.PHYSICS_RAPIER_WORLD;
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
    </Routes>
  );
};

export { Pages };
