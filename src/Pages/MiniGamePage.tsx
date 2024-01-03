import { GroupProps } from "@react-three/fiber";
import { MiniGameWorld } from "Components/Physics/Rapier/World/MinigameWorld";

import { Layout } from "Layouts/SceneRapierFirstPersonLayout";
import { useState } from "react";


/**
 * Page for Rapier World.
 *
 * @param {GroupProps} props
 * @returns {React.JSX.Element}
 */
const MiniGamePage = (props: GroupProps): React.JSX.Element => {

  // Clear sesion storage on page reload
  sessionStorage.clear();


  return (
    <Layout>
      <MiniGameWorld />
    </Layout>
    
  );
};

export { MiniGamePage };
