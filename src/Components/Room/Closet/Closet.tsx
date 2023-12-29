import { useGLTF } from "@react-three/drei";
import * as THREE from "three";
import React, { useRef } from "react";
import { GLTF } from "three-stdlib";

import { RigidBody } from "@react-three/rapier";

export function Closet({nodes, materials} :any) {

    return (
        <RigidBody colliders={"hull"}>
            <group
                name="Closet"
                position={[-2.392, 0.101, 3.208]}
                rotation={[0, Math.PI / 2, 0]}
                scale={[0.163, 0.157, 0.157]}
            >
                <mesh
                    name="Cube047"
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube047.geometry}
                    material={materials.Stylized_wood_vertical_grey}
                />
                <mesh
                    name="Cube047_1"
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube047_1.geometry}
                    material={materials.Metal}
                />
            </group>
        </RigidBody>
        
    );
}

export default Closet;

