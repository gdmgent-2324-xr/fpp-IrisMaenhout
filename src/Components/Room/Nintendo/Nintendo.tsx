import { useGLTF } from "@react-three/drei";
import * as THREE from "three";
import React, { useRef } from "react";
import { GLTF } from "three-stdlib";

import { RigidBody } from "@react-three/rapier";
import { useNavigate } from "react-router-dom";
import { NAVIGATION } from "Configs/navigation";
import { cursorActiveHandler, cursorInactiveHandler } from "Components/UserInterface/CursorOverlay";

export function Nintendo({nodes, materials} :any) {
    const navigate = useNavigate();

    const handleClick = () => {
        setTimeout(()=>{
            navigate('../' + NAVIGATION.PATH.MINIGAME);
        }, 500);
    }
    return (
        <RigidBody colliders="cuboid" type="fixed">
            <group 
                name="Nintendo" 
                onClick={handleClick} 
                onPointerEnter={cursorActiveHandler}
                onPointerLeave={cursorInactiveHandler}
                onPointerOut={cursorInactiveHandler}
                onPointerOver={cursorActiveHandler}
            >
                <mesh
                    name="Cube096"
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube096.geometry}
                    material={materials.Bright_yellow}
                />
                <mesh
                    name="Cube096_1"
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube096_1.geometry}
                    material={materials.Mat_white}
                />
                <mesh
                    name="Cube096_2"
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube096_2.geometry}
                    material={materials.Glossy_black}
                />
            </group>
        </RigidBody> 
        
        
    );
}

export default Nintendo;