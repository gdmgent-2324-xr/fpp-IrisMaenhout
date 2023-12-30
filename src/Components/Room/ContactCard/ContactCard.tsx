import { Html, useGLTF } from "@react-three/drei";
import * as THREE from "three";
import React, { useRef, useState } from "react";
import { GLTF } from "three-stdlib";

import { RigidBody } from "@react-three/rapier";
import ContactCardPopup from "Components/UserInterface/Popups/ContactCardPopup";
import { cursorActiveHandler, cursorInactiveHandler } from "Components/UserInterface/CursorOverlay";

export function ContactCard({nodes, materials, isDarkMode} :any) {

    const [showPopup, setShowPopup] = useState(false);
    // const [showPopup, setShowPopup] = useState(false);
    

    function handleClick(){
        // Open popup with choices for different colors
        setShowPopup(true);
    }

    

    return (
    
        // <mesh
        //     name="Buisness_card"
        //     castShadow
        //     receiveShadow
        //     geometry={nodes.Buisness_card.geometry}
        //     material={materials.Buisness_card}
        // />
        <>
          <mesh 
            material={materials.Buisness_card}
            position={[-0.726, 1.323, -2.25]}
            rotation={[0, 3, 0]}
            onClick={handleClick}
            onPointerEnter={cursorActiveHandler}
            onPointerLeave={cursorInactiveHandler}
            onPointerOut={cursorInactiveHandler}
            onPointerOver={cursorActiveHandler}
          >
            <boxGeometry args={[0.25, 0.005, 0.15]}/>
            {/* <meshStandardMaterial /> */}

          </mesh>

          {
            showPopup && 
            <Html>
               <ContactCardPopup 
                  isDarkmode={isDarkMode} 
                  handleClose={()=> {
                      setShowPopup(false);
                      setTimeout(()=> sessionStorage.setItem("isPointerLockActive", "true"), 500);}}
                />

            </Html>
          }
        </>
     
    );
}

export default ContactCard;
