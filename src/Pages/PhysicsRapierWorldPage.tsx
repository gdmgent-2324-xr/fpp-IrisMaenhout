import { GroupProps } from "@react-three/fiber";

import { World } from "Components/Physics/Rapier/World";
import ContactCardPopup from "Components/UserInterface/Popups/ContactCardPopup";
import Popup from "Components/UserInterface/Popups/Popup";
import { Layout } from "Layouts/SceneRapierFirstPersonLayout";
import { useState } from "react";


/**
 * Page for Rapier World.
 *
 * @param {GroupProps} props
 * @returns {React.JSX.Element}
 */
const PhysicsRapierWorldPage = (props: GroupProps): React.JSX.Element => {

  // Clear sesion storage on page reload
  sessionStorage.clear();


  return (
    <Layout>
      <World {...props} />
    </Layout>
    
  );
};

export { PhysicsRapierWorldPage };
