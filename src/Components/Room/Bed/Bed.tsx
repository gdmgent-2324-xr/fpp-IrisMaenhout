import { Html, } from "@react-three/drei";
import React, { useState } from "react";

import { RigidBody } from "@react-three/rapier";
import Popup from "Components/UserInterface/Popups/Popup";
import { cursorActiveHandler, cursorInactiveHandler } from "Components/UserInterface/CursorOverlay";

import { useSpring, animated } from '@react-spring/three';
import { useSpring as useSpringWeb} from '@react-spring/web';

type Props = {
    nodes: any;
    materials: any;
    isDarkMode: boolean;
};

const Bed: React.FC<Props> = ({nodes, materials, isDarkMode}) => {

    const colors = {
        yellow: "#f7d96a",
        purple: "#C084FC",
        pink: "#FB7185",
        blue: "#67E8F9",
        green: "#6EE7B7",
    }

    const [selectedColor, setSelectedColor] = useState(colors.yellow);
    const [showPopup, setShowPopup] = useState(false);


    // __________ ANIMATIONS __________
    const {colorAnimated} = useSpring({ colorAnimated:  selectedColor});

    const popupAnimation = useSpringWeb({
        opacity: showPopup ? 1 : 0,
        transform: showPopup ? 'scale(1)' : 'scale(0.5)',
        config: { duration: 300 }
    });

    function handleClick(){
        // Open popup with choices for different colors
        setShowPopup(true);
    }

    function handleColorChange(color: string) {
        if(sessionStorage.getItem("isPointerLockActive")){
            sessionStorage.removeItem("isPointerLockActive");
        }

        setSelectedColor(color);
        setShowPopup(false); // Close the popup after color selection

        setTimeout(()=> sessionStorage.setItem("isPointerLockActive", "true"), 500);
    }

    return (
        <RigidBody 
            colliders={"hull"} 
            type="fixed"
        >
            <mesh
                name="Blanket"
                castShadow
                receiveShadow
                geometry={nodes.Bed.geometry}
                position={[1.132, 0.676, -1.789]}
                rotation={[Math.PI / 2, Math.PI / 2, 0]}
                scale={[-1.684, -1.096, -0.576]}
                onClick={handleClick}
                onPointerEnter={cursorActiveHandler}
                onPointerLeave={cursorInactiveHandler}
                onPointerOut={cursorInactiveHandler}
                onPointerOver={cursorActiveHandler}
                >
                    <animated.meshStandardMaterial color={colorAnimated}/>
                
                <group
                    name="Bedframe"
                    position={[0.34, 0.005, -0.105]}
                    rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
                    scale={[-0.574, -0.196, -0.302]}
                >
                    <mesh
                    name="Plane002"
                    castShadow
                    receiveShadow
                    geometry={nodes.Plane002.geometry}
                    material={materials.Stylized_wood_vertical_brown}
                    />
                    <mesh
                    name="Plane002_1"
                    castShadow
                    receiveShadow
                    geometry={nodes.Plane002_1.geometry}
                    material={materials.Stylized_wood_horizontal_light_brown}
                    />
                    <mesh
                    name="Materas"
                    castShadow
                    receiveShadow
                    geometry={nodes.Plane002_2.geometry}
                    material={materials.light_orange_yellow}
                    />
                </group>
                <mesh
                    name="Big-pillow"
                    castShadow
                    receiveShadow
                    geometry={nodes.Materas001.geometry}
                    material={materials["Carot_orange.001"]}
                    position={[0.551, -0.151, -1.257]}
                    rotation={[-Math.PI, 0, -Math.PI / 2]}
                    scale={[-1.537, -1, -2.68]}
                />
                <mesh
                    name="Medium-pillow"
                    castShadow
                    receiveShadow
                    geometry={nodes.Materas002.geometry}
                    material={materials["Material.002"]}
                    position={[0.583, -0.149, -1.257]}
                    rotation={[-Math.PI, 0, -Math.PI / 2]}
                    scale={[-1.537, -1, -2.68]}
                />
                <mesh
                    name="Small-pillow"
                    castShadow
                    receiveShadow
                    geometry={nodes.Materas003.geometry}
                    material={materials.pastel_blue}
                    position={[0.583, -0.118, -1.257]}
                    rotation={[-Math.PI, 0, -Math.PI / 2]}
                    scale={[-1.537, -1, -2.68]}
                />
                </mesh>
                
                {showPopup && 
                    
                    <Html
                    >
                        <Popup
                        styleAnimated={popupAnimation} 
                        title="Kies een kleur voor de bedovertrek:"
                        isDarkmode={isDarkMode} 
                        handleClose={()=> {
                            setShowPopup(false);
                            setTimeout(()=> sessionStorage.setItem("isPointerLockActive", "true"), 500);}}>
                            <div className="flex gap-8 mt-8">

                                {/* Color buttons */}
                                {Object.keys(colors).map((color, i) => (
                                    <button
                                        key={i}
                                        style={{ backgroundColor: colors[color as keyof typeof colors] }}
                                        className="w-12 h-12 block rounded-full"
                                        onClick={() => handleColorChange(colors[color as keyof typeof colors])}
                                    >
                                        {selectedColor === colors[color as keyof typeof colors] ? (
                                            <i className="fa-solid fa-check text-lg"></i>
                                        ) : null}
                                    </button>
                                ))}



                            </div>
                        </Popup>
                    </Html>
                    
                }

        </RigidBody>
        
    );
}

export default Bed;