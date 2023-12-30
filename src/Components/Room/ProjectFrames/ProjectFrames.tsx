import { Html, useGLTF, useKeyboardControls } from "@react-three/drei";
import * as THREE from "three";
import React, { useEffect, useRef, useState } from "react";
import { GLTF } from "three-stdlib";

import { RigidBody } from "@react-three/rapier";
import HoverPopup from "Components/UserInterface/Popups/HoverPopup";
import { useFrame, useThree } from "@react-three/fiber";
import { KEYBINDINGS } from "Configs/keybindings";

export function ProjectFrames({nodes, materials, isDarkMode} :any) {

    const projectInfo = {
        edu: {
            title: "Edu (onderwijsplatform)",
            text: "Edu is een website waar (toekomstige) islamitische leerkrachten kennis, onderzoeken en lessenmateriaal met elkaar kunnen delen. Bij dit project maakte ik zowel het design als de website zelf met behulp van statamic (cms)."
            },
        internship: {
            title: "Rebranding Ntriga website",
            text: "Ik heb in het 2de semester van 2023 een stage gedaan bij Ntriga. Het design voor deze website heb ik gemaakt onder de begeleiding van mijn stagementor."
            },
        
        deRuytter: {
            title: "Rebranding De Ruytter website ",
            text: "Op mijn stage kreeg ik de taak om een nieuw webdesign voor de website van De Ruytter (een B2B bedrijf dat eten verkoopt) te voorzien. Het design moest ook algemeen toepasbaar zijn op webshops voor de toekomstige klanten van Ntriga."
            },

    }

    const [hoverPopupData, setHoverPopupData] = useState({
        isHovered: false,
        popupInfo: {
            title: "",
            text: ""
        }
    });

   

    

    function openProject(link: string) {
        
        window.open(link, '_blank');
        
        alert("Wandel naar links of rechts tot jouw cursor niet meer in het kader zit van een project waarop je al eens eerder klikte, klik vervolgens op de ruimte om de cursor weer te activeren.");
    }


    function handleOnHover(title: string, text: string){
        setHoverPopupData(
            {
                isHovered: true,
                popupInfo: {
                    title: title,
                    text: text
                }
            }
        )
    }

    function handleNotOnHover(){
        setHoverPopupData(
            {
                isHovered: false,
                popupInfo: {
                    title: "",
                    text: ""
                }
            }
        )
    }


    return (
        <>
            <RigidBody colliders="cuboid" type="fixed">
                <group
                    name="Frame_internship"
                    position={[-2.999, 1.83, 1.65]}
                    rotation={[0, 0, -Math.PI / 2]}
                    scale={0.545}
                    onClick={()=> openProject("https://ntriga.be/")}
                    onPointerOver={()=> handleOnHover(projectInfo.internship.title, projectInfo.internship.text)}
                    onPointerOut={handleNotOnHover}
                    >
                    <mesh
                        name="Plane004"
                        castShadow
                        receiveShadow
                        geometry={nodes.Plane004.geometry}
                        material={materials.Window_frame}
                    />
                    <mesh
                        name="Plane004_1"
                        castShadow
                        receiveShadow
                        geometry={nodes.Plane004_1.geometry}
                        material={materials.Project_internship}
                    />
                </group>
            </RigidBody>

            <RigidBody colliders="cuboid" type="fixed">
                <group
                name="Frame_deruyter"
                position={[-2.999, 1.83, 1.65]}
                rotation={[0, 0, -Math.PI / 2]}
                scale={0.545}
                onClick={()=> openProject("https://xd.adobe.com/view/5aa3a966-bec2-4768-9eae-9119fbd0bd19-0ff0/screen/7ba1e7a5-5ff3-47bb-a9bb-e79bc7adef9b?fullscreen")}
                onPointerOver={()=> handleOnHover(projectInfo.deRuytter.title, projectInfo.deRuytter.text)}
                onPointerOut={handleNotOnHover}
                >
                <mesh
                    name="Plane008"
                    castShadow
                    receiveShadow
                    geometry={nodes.Plane008.geometry}
                    material={materials.Window_frame}
                />
                <mesh
                    name="Plane008_1"
                    castShadow
                    receiveShadow
                    geometry={nodes.Plane008_1.geometry}
                    material={materials["Material.005"]}
                />
                </group>
            </RigidBody>

            <RigidBody colliders="cuboid" type="fixed">
                <group
                name="Frame_edu"
                position={[-2.999, 1.83, 1.65]}
                rotation={[0, 0, -Math.PI / 2]}
                scale={0.545}
                onClick={()=> openProject("https://github.com/cms-development/werkstuk---edu-platform-IrisMaenhout")}
                onPointerOver={()=> handleOnHover(projectInfo.edu.title, projectInfo.edu.text)}
                onPointerOut={handleNotOnHover}
                >
                <mesh
                    name="Plane023"
                    castShadow
                    receiveShadow
                    geometry={nodes.Plane023.geometry}
                    material={materials.Window_frame}
                />
                <mesh
                    name="Plane023_1"
                    castShadow
                    receiveShadow
                    geometry={nodes.Plane023_1.geometry}
                    material={materials.Project_edu}
                />
                </group>

            </RigidBody>

            <RigidBody colliders="cuboid" type="fixed">
            <group
                name="Rome_picture"
                position={[2.485, 1.305, -3.4]}
                rotation={[Math.PI / 2, Math.PI / 2, 0]}
                scale={[-0.202, -0.545, -0.347]}
            >
                <mesh
                    name="Plane006"
                    castShadow
                    receiveShadow
                    geometry={nodes.Plane006.geometry}
                    material={materials.Mat_white}
                />
                <mesh
                    name="Plane006_1"
                    castShadow
                    receiveShadow
                    geometry={nodes.Plane006_1.geometry}
                    material={materials.Img_rome}
                />
                </group>
            </RigidBody>

            {/* Display the popup based on hover and sideways movement */}
            {hoverPopupData.isHovered && (
                <Html position={[-2.999, 1.83, 1.65]}>
                <HoverPopup
                    title={hoverPopupData.popupInfo.title}
                    text={hoverPopupData.popupInfo.text}
                    isDarkmode={isDarkMode}
                />
                </Html>
            )}
        </>

         
        
    );
}

export default ProjectFrames;