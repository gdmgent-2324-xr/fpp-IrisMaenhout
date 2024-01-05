import { useGLTF } from "@react-three/drei";
import * as THREE from "three";
import React, { useRef } from "react";
import { GLTF } from "three-stdlib";

import { RigidBody } from "@react-three/rapier";

export function Window({nodes, materials, darkMode} :any) {

    return (
        <>
            <group
                    name="Outside_light"
                    position={[-1.261, 2.387, -3.395]}
                    rotation={[-2.545, -0.51, 0.099]}
                >


                    <directionalLight
                        castShadow={true}
                        color={darkMode? "#2C3B59" : "#FFC678"}
                        intensity={darkMode ? 10 :  20}
                        name="Outside_light"
                        position={[-1.261, 0.35, -3.395]}
                        rotation={[-2.545, -0.51, 0.099]}
                    />

                    <ambientLight 
                        intensity={darkMode ? 1.8 : 2.5}
                        color={darkMode ? "#203454" : "#d6a783"}
                    />

                </group>



                <RigidBody colliders="cuboid" type="fixed">
            
            
                {/* <group name="Window" position={[-0.984, 2.285, -3.62]}>
                    <mesh
                        name="Cube083"
                        castShadow
                        receiveShadow
                        geometry={nodes.Cube083.geometry}
                        material={materials.Window_frame}
                    />
                    <mesh
                        name="Cube083_1"
                        castShadow
                        receiveShadow
                        geometry={nodes.Cube083_1.geometry}
                        material={
                            darkMode
                                ? new THREE.MeshStandardMaterial({
                                    color: "#0F0D24",
                                    emissive: "#0F0D24",
                                    emissiveIntensity: 1,
                                })
                                : materials.Window_light
                        }
                    />
        
                
                    <mesh
                        name="Cube083_2"
                        castShadow
                        receiveShadow
                        geometry={nodes.Cube083_2.geometry}
                        material={materials.See_trough_white}
                    />
                    <mesh
                        name="Cube083_3"
                        castShadow
                        receiveShadow
                        geometry={nodes.Cube083_3.geometry}
                        material={materials.Gold}
                    />
                    <mesh
                        name="Cube083_4"
                        castShadow
                        receiveShadow
                        geometry={nodes.Cube083_4.geometry}
                        material={materials.Material}
                    />
                </group> */}











{/*                 
                    <group
                    name="Outside_light"
                    position={[-1.261, 2.387, -3.395]}
                    rotation={[-2.545, -0.51, 0.099]}
                    /> */}
                    <group name="Window">
                    <mesh
                        name="Cube083"
                        castShadow
                        receiveShadow
                        geometry={nodes.Cube083.geometry}
                        material={materials.Window_frame}
                    />
                    <mesh
                        name="Cube083_1"
                        castShadow
                        receiveShadow
                        geometry={nodes.Cube083_1.geometry}
                        material={
                            darkMode
                                ? new THREE.MeshStandardMaterial({
                                    color: "#0F0D24",
                                    emissive: "#0F0D24",
                                    emissiveIntensity: 1,
                                })
                                : materials.Window_light
                        }
                    />
                    <mesh
                        name="Cube083_2"
                        castShadow
                        receiveShadow
                        geometry={nodes.Cube083_2.geometry}
                        material={materials.See_trough_white}
                    />
                    <mesh
                        name="Cube083_3"
                        castShadow
                        receiveShadow
                        geometry={nodes.Cube083_3.geometry}
                        material={materials.Gold}
                    />
                    <mesh
                        name="Cube083_4"
                        castShadow
                        receiveShadow
                        geometry={nodes.Cube083_4.geometry}
                        material={materials.Material}
                    />
                    </group>
            </RigidBody>
        
        </>
        
    );
}

export default Window;

