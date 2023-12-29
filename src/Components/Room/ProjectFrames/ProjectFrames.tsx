import { useGLTF } from "@react-three/drei";
import * as THREE from "three";
import React, { useRef } from "react";
import { GLTF } from "three-stdlib";

import { RigidBody } from "@react-three/rapier";

export function ProjectFrames({nodes, materials} :any) {

    return (
        <>
            <RigidBody colliders="cuboid" type="fixed">
                <group
                    name="Frame_internship"
                    position={[-2.999, 1.83, 1.65]}
                    rotation={[0, 0, -Math.PI / 2]}
                    scale={0.545}
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
        </>
         
        
    );
}

export default ProjectFrames;