import { Html } from "@react-three/drei";
import React, { useState } from "react";
import { useSpring } from '@react-spring/web';
import ContactCardPopup from "Components/UserInterface/Popups/ContactCardPopup";
import { cursorActiveHandler, cursorInactiveHandler } from "Components/UserInterface/CursorOverlay";

type Props = {
  materials: any;
  isDarkMode: boolean;
};

const ContactCard: React.FC<Props> = ({materials, isDarkMode}) => {

  const [showPopup, setShowPopup] = useState(false);

  function handleClick(){
    // Open popup with contact card
    setShowPopup(true);
  }

  const popupAnimation = useSpring({
    opacity: showPopup ? 1 : 0,
    transform: showPopup ? 'scale(1)' : 'scale(0.5)',
    config: { duration: 300 }
  });

    

  return (
    <group name="Contact card">
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
      </mesh>

      {
        showPopup && 
        <Html>
          <ContactCardPopup 
            styleAnimated={popupAnimation}
            isDarkmode={isDarkMode} 
            handleClose={()=> {
              setShowPopup(false);
              setTimeout(()=> sessionStorage.setItem("isPointerLockActive", "true"), 500);}}
          />

        </Html>
      }
    </group>
     
  );
}

export default ContactCard;
