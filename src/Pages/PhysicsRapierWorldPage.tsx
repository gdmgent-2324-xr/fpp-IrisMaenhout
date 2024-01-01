import { GroupProps } from "@react-three/fiber";

import { World } from "Components/Physics/Rapier/World";
import ContactCardPopup from "Components/UserInterface/Popups/ContactCardPopup";
import { Layout } from "Layouts/SceneRapierFirstPersonLayout";


/**
 * Page for Rapier World.
 *
 * @param {GroupProps} props
 * @returns {React.JSX.Element}
 */
const PhysicsRapierWorldPage = (props: GroupProps): React.JSX.Element => {

  // Clear sesion storage on page reload
  // sessionStorage.clear();
  return (
    <>

      {/* <ContactCardPopup/> */}
      
      <Layout>
        <World {...props} />
      </Layout>
    </>
    
  );
};

export { PhysicsRapierWorldPage };
