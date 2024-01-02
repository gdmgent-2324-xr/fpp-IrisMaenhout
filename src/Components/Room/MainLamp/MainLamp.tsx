import { useGLTF } from "@react-three/drei";
import * as THREE from "three";
import React, { useRef, useState } from "react";
import { GLTF } from "three-stdlib";

import {
    cursorActiveHandler,
    cursorInactiveHandler,
  } from "Components/UserInterface/CursorOverlay";

import { RigidBody } from "@react-three/rapier";
import { ThreeEvent } from "@react-three/fiber";

export function MainLamp({nodes, materials} :any) {
    const [lightIsTurnedOn, setLightIsTurnedOn] = useState(false);


    // Event Handlers.
    const clickHandler = (event: ThreeEvent<MouseEvent>) => {
        event.stopPropagation();
        setLightIsTurnedOn((prev)=> !prev);
    };


    return (
        <>
            <RigidBody colliders="hull" type="fixed">
                {/* <mesh
                    name="Light_switch_frame"
                    castShadow
                    receiveShadow
                    geometry={nodes.Light_switch_frame.geometry}
                    material={materials.Metal}
                    position={[-0.074, 0.316, 0]}
                    >
                    <mesh
                        name="Light_switch"
                        castShadow
                        receiveShadow
                        geometry={nodes.Light_switch.geometry}
                        material={materials.Mat_black}
                    />
                </mesh> */}


                <group
                    name="Light_switch_frame"
                    onPointerEnter={cursorActiveHandler}
                    onPointerLeave={cursorInactiveHandler}
                    onPointerOut={cursorInactiveHandler}
                    onPointerOver={cursorActiveHandler}
                    onClick={clickHandler}
                >
                    <mesh
                        name="Plane007"
                        castShadow
                        receiveShadow
                        geometry={nodes.Plane007.geometry}
                        material={materials.Metal}
                    />

                    <mesh
                        name="Plane007_1"
                        castShadow
                        receiveShadow
                        geometry={nodes.Plane007_1.geometry}
                        material={materials.Mat_black}
                    />
                </group>
            </RigidBody>

            <RigidBody type="fixed">
                {/* <mesh
                    name="Lamp"
                    castShadow
                    receiveShadow
                    geometry={nodes.Lamp.geometry}
                    material={materials.Main_light_off}
                    position={[0, 2.895, 0]}
                    scale={0.754}
                    >
                    
        
                    </mesh> */}

                <group name="Lamp">
                    <mesh
                    name="Cylinder011"
                    castShadow
                    receiveShadow
                    geometry={nodes.Cylinder011.geometry}
                    // material={materials.Main_light_on}
                    material={
                        lightIsTurnedOn
                            ? materials.Main_light_on
                            : new THREE.MeshStandardMaterial({
                                color: "#E7E7E7"
                            })
                    }
                    />
                    <mesh
                        name="Cylinder011_1"
                        castShadow
                        receiveShadow
                        geometry={nodes.Cylinder011_1.geometry}
                        material={materials.Mat_white}
                    />
                    {/* <group
                        name="Light_inside"
                        position={[0, 2.769, 0]}
                        rotation={[-Math.PI / 2, 0, 0]}
                        scale={0.24}
                    /> */}
                    
                </group>
                <group
                name="Main_light"
                position={[0, 3.441, 0]}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={2.996}
                />
                    
            </RigidBody>

            {lightIsTurnedOn && 

                <group name="light" visible={lightIsTurnedOn}>
                <directionalLight
                        name="Light_inside"
                        color={"#FFA154"}
                        intensity={10}
                        position={[0, 0.07, 0]}
                        rotation={[-Math.PI / 2, 0, 0]}
                        scale={0.24}
                        castShadow={true}
                    />
                <pointLight
                    name="Light_roof"
                    intensity={15}
                    decay={2}
                    color={"#FFB48A"}
                    position={[0, 0.497, 0]}
                    rotation={[-Math.PI / 2, 0, 0]}
                    castShadow={false}
                />

                <directionalLight
                    name="Main_light"
                    position={[0, 3.441, 0]}
                    rotation={[-Math.PI / 2, 0, 0]}
                    // scale={2.996}
                    color={"#FF9874"}
                    castShadow={true}
                    intensity={3}
                />
                </group>
            }
            
            
        </>
        
    );
}

export default MainLamp;