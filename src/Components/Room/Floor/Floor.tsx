import { useGLTF } from "@react-three/drei";
import { GLTFResult } from "../gltfResult";

import * as THREE from "three";
import React, { useRef } from "react";
import { GLTF } from "three-stdlib";
import { RigidBody } from "@react-three/rapier";

export function Floor({nodes, materials} :any) {
    return (
        <RigidBody colliders={"cuboid"} type="fixed">
            {/* <group name="Floor"> */}
                {/* <mesh
                    name="Cube079"
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube079.geometry}
                    material={materials.Stylized_wood_vertical_brown}
                />
                <mesh
                    name="Cube079_1"
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube079_1.geometry}
                    material={materials.Brown}
                /> */}



            <group name="Floor">
                <mesh
                    name="Cube077"
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube077.geometry}
                    material={materials.Brown}
                />
                <mesh
                    name="Cube077_1"
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube077_1.geometry}
                    material={materials.Stylized_wood_vertical_brown}
                />
            </group>
        </RigidBody>
        
    );
}

export default Floor;