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


  return (
    <>
    
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
