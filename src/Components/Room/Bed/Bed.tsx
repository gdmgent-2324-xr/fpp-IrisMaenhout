import { Billboard, Html, Text, useGLTF } from "@react-three/drei";
import * as THREE from "three";
import React, { useRef, useState } from "react";
import { GLTF } from "three-stdlib";

import { RigidBody } from "@react-three/rapier";
import Popup from "Components/UserInterface/Popups/Popup";
import { cursorActiveHandler, cursorInactiveHandler } from "Components/UserInterface/CursorOverlay";




export function Bed({nodes, materials, isDarkMode} :any) {
    


    const colors = {
        yellow: "#f7d96a",
        purple: "#b284d1",
    }

    const [selectedColor, setSelectedColor] = useState(colors.yellow);
    const [showPopup, setShowPopup] = useState(false);
    // const [showPopup, setShowPopup] = useState(false);
    

    function handleClick(){
        // Open popup with choices for different colors
        setShowPopup(true);
    }

    function handleColorChange(color: string) {
        if(sessionStorage.getItem("isPointerLockActive")){
            sessionStorage.removeItem("isPointerLockActive");
        }

        console.log("moet weer normaal zijn")

        setSelectedColor(color);
        setShowPopup(false); // Close the popup after color selection

        setTimeout(()=> sessionStorage.setItem("isPointerLockActive", "true"), 500);
    }

    return (
        <RigidBody colliders={"hull"} type="fixed">
            <mesh
                name="Blanket"
                castShadow
                receiveShadow
                geometry={nodes.Bed.geometry}
                // material={materials.Yellow}
                material={
                    new THREE.MeshStandardMaterial({
                        color: selectedColor
                    })
                }
                position={[1.132, 0.676, -1.789]}
                rotation={[Math.PI / 2, Math.PI / 2, 0]}
                scale={[-1.684, -1.096, -0.576]}
                onClick={handleClick}
                onPointerEnter={cursorActiveHandler}
                onPointerLeave={cursorInactiveHandler}
                onPointerOut={cursorInactiveHandler}
                onPointerOver={cursorActiveHandler}
                >
                
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
                        title="Kies een kleur voor de bedovertrek:"
                        isDarkmode={isDarkMode} 
                        handleClose={()=> {
                            setShowPopup(false);
                            setTimeout(()=> sessionStorage.setItem("isPointerLockActive", "true"), 500);}}>
                            <div className="flex gap-8">
                                <button className="w-12 h-12 bg-amber-300 block rounded-full"
                                onClick={()=> handleColorChange(colors.yellow)}>
                                    {selectedColor === colors.yellow ? 
                                    <i className="fa-solid fa-check text-lg"></i> : 
                                    null}
                                    
                                </button>

                                <button className="w-12 h-12 bg-purple-400 block rounded-full"
                                onClick={()=> handleColorChange(colors.purple)}>
                                    {selectedColor === colors.purple ? 
                                    <i className="fa-solid fa-check text-lg"></i> : 
                                    null}
                                </button>

                                <button className="w-12 h-12 bg-rose-400 block rounded-full"></button>

                                <button className="color block"></button>

                                <button className="color block"></button>
                            </div>
                        </Popup>
                    </Html>
                    
                }

        </RigidBody>
        
    );
}

export default Bed;