import { useSpring } from "@react-spring/web";
import { GroupProps } from "@react-three/fiber";

import { World } from "Components/Physics/Rapier/World";
import ContactCardPopup from "Components/UserInterface/Popups/ContactCardPopup";
import HelpPopup from "Components/UserInterface/Popups/HelpPopup";
import Popup from "Components/UserInterface/Popups/Popup";
import { Layout } from "Layouts/SceneRapierFirstPersonLayout";
import { useEffect, useState } from "react";


/**
 * Page for Rapier World.
 *
 * @param {GroupProps} props
 * @returns {React.JSX.Element}
 */
const PhysicsRapierWorldPage = (props: GroupProps): React.JSX.Element => {

  // Clear sesion storage on page reload
  sessionStorage.clear();

  useEffect(()=>{
    setTimeout(()=> sessionStorage.setItem("isPointerLockActive", "true"), 500);

  }, []);


  const [helpPopupVisible, setHelpPopupVisible] = useState(false);

  function handleHelpBtnClick() {
    setHelpPopupVisible(true);
  }


  const popupAnimation = useSpring({
    opacity: helpPopupVisible ? 1 : 0,
    transform: helpPopupVisible ? 'scale(1)' : 'scale(0.5)',
    config: { duration: 300 }
  });


  return (
    <>
      {/* _____ Help button _______*/}
  
      <button 
        className="bg-sky-500 rounded-full w-[3rem] h-[3rem] z-10 absolute bottom-0 left-0 m-8 hover:scale-125 transition duration-300 ease-in-out hover:bg-gradient-to-r hover:from-cyan-400 hover:to-blue-400"
        onClick={handleHelpBtnClick}
      >
        <i className="fa-solid fa-question text-3xl text-white"></i>
      </button>


      { 
        helpPopupVisible && (
          <HelpPopup 
            handleClose={()=>{
            setHelpPopupVisible(false);
            setTimeout(()=> sessionStorage.setItem("isPointerLockActive", "true"), 1000);
            }} 

            styleAnimated={popupAnimation}
          />
        )
      }

      <Layout>
        <World {...props} />
      </Layout>
    </>
    
    
  );
};

export { PhysicsRapierWorldPage };
