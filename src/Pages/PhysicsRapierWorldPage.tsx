import { useSpring } from "@react-spring/web";
import { GroupProps } from "@react-three/fiber";

import { World } from "Components/Physics/Rapier/World";
import IconBtn from "Components/UserInterface/Btns/IconBtn";
import SecondaryBtn from "Components/UserInterface/Btns/SecondaryBtn";
import CreditsPopup from "Components/UserInterface/Popups/CreditsPopup";
import HelpPopup from "Components/UserInterface/Popups/HelpPopup";
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
    // Make sure I don't get an error about the pointerLock by using a timeOut
    setTimeout(()=> sessionStorage.setItem("isPointerLockActive", "true"), 500);

  }, []);


  const [helpPopupVisible, setHelpPopupVisible] = useState(false);
  const [creditsPopupVisible, setCreditsPopupVisible] = useState(false);

  function handleHelpBtnClick() {
    setHelpPopupVisible(true);
  }

  function handleCreditsBtnClick() {
    setTimeout(()=> sessionStorage.setItem("isPointerLockActive", "false"), 1000);
    setCreditsPopupVisible(true);
  }


  // __________ Animation popups ____________
  const helpPopupAnimation = useSpring({
    opacity: helpPopupVisible ? 1 : 0,
    transform: helpPopupVisible ? 'scale(1)' : 'scale(0.5)',
    config: { duration: 300 }
  });

  const creditsPopupAnimation = useSpring({
    opacity: creditsPopupVisible ? 1 : 0,
    transform: creditsPopupVisible ? 'scale(1)' : 'scale(0.5)',
    config: { duration: 300 }
  });


  return (
    <>
      
      <div className="z-10 absolute bottom-0 left-0 flex gap-2">
        {/* _____ Help button _______*/}
        <IconBtn handleClick={handleHelpBtnClick} classNamesBtn="bg-sky-500 hover:from-cyan-400 hover:to-blue-400" iconClassNames="fa-question text-3xl"/>

        {/* _____ Credits button _______*/}
        <SecondaryBtn text={"Credits"} handleClick={handleCreditsBtnClick} classNames="outline outline-2 outline-amber-500 text-amber-500 bg-white/80 hover:from-amber-500 hover:to-yellow-400 hover:text-white backdrop-blur-xl"/>
      </div>


      { 
        helpPopupVisible && (
          <HelpPopup 
            handleClose={()=>{
            setHelpPopupVisible(false);
            setTimeout(()=> sessionStorage.setItem("isPointerLockActive", "true"), 1000);
            }} 

            styleAnimated={helpPopupAnimation}
          />
        )
      }

      { 
        creditsPopupVisible && (
          <CreditsPopup 
            handleClose={()=>{
              setCreditsPopupVisible(false);
              setTimeout(()=> sessionStorage.setItem("isPointerLockActive", "true"), 1000);
              }} 

            styleAnimated={creditsPopupAnimation}
            isDarkmode={true}
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
