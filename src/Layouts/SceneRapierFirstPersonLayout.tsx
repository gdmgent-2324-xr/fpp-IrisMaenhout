import { KeyboardControls, Loader } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Physics } from "@react-three/rapier";
import { Suspense } from "react";

import { Helpers } from "Components/Helpers";
import { CursorOverlay } from "Components/UserInterface/CursorOverlay";
import { KEYBINDINGS } from "Configs/keybindings";
import { LayoutProps } from "Types/LayoutProps";

/**
 * Layout for a scene with Rapier physics engine for First Person view.
 *
 * @param {LayoutProps} props
 * @returns {React.JSX.Element}
 */
const SceneRapierFirstPersonLayout = ({
  children,
}: LayoutProps): React.JSX.Element => {

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
          {/* <Helpers /> */}
          <KeyboardControls map={KEYBINDINGS.UNIVERSAL}>
            <Physics
              colliders={undefined}
              gravity={[0.00, -9.81, 0.00]}
              paused={false}
              timeStep="vary"
              updatePriority={undefined}
            >
              {children}
            </Physics>
          </KeyboardControls>
        </Suspense>
      </Canvas>
      <CursorOverlay />
      <Loader />
    </>
  );
};

export { SceneRapierFirstPersonLayout as Layout };
