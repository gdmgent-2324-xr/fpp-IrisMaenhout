import { KeyboardControls, Loader, SoftShadows } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Physics } from "@react-three/rapier";
import { Leva } from "leva";
import { Suspense, useState } from "react";

import { Helpers } from "Components/Helpers";
import { Lighting } from "Components/Lighting";
import { CursorOverlay } from "Components/UserInterface/CursorOverlay";
import { KEYBINDINGS } from "Configs/keybindings";
import { useLeva as useLevaCanvas } from "Hooks/Leva/Layout/Canvas";
import { useLeva as useLevaPhysics } from "Hooks/Leva/Layout/Physics";
import { LayoutProps } from "Types/LayoutProps";
import Popup from "Components/UserInterface/Popups/Popup";
import { useSpring } from "@react-spring/web";
import HelpPopup from "Components/UserInterface/Popups/HelpPopup";

/**
 * Layout for a scene with Rapier physics engine for First Person view.
 *
 * @param {LayoutProps} props
 * @returns {React.JSX.Element}
 */
const SceneRapierFirstPersonLayout = ({
  children,
}: LayoutProps): React.JSX.Element => {
  // Leva Controls.
  // const canvasControls = useLevaCanvas();
  // const physicsControls = useLevaPhysics();


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
      {/* __________ Help button _________________*/}
  
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


      <Canvas
        camera={undefined}
        flat={false}
        frameloop="always"
        linear={false}
        orthographic={false}
        shadows="soft"
      >
        <Suspense>
          <Helpers />
          {/* <Lighting /> */}
          <KeyboardControls map={KEYBINDINGS.UNIVERSAL}>
            <Physics
              colliders={undefined}
              // debug={true}
              gravity={[0.00, -9.81, 0.00]}
              paused={false}
              timeStep="vary"
              updatePriority={undefined}
            >
              {/* <SoftShadows size={4} focus={0.2} samples={15} /> */}
              {children}
            </Physics>
          </KeyboardControls>
        </Suspense>
      </Canvas>
      <CursorOverlay />
      {/* <Leva
        collapsed={false}
        fill={false}
        flat={false}
        hidden={false}
        oneLineLabels={true}
        titleBar={true}
      /> */}
      <Loader />
    </>
  );
};

export { SceneRapierFirstPersonLayout as Layout };
