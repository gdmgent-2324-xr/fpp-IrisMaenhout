import { useGLTF } from "@react-three/drei";
import * as THREE from "three";
import React, { useRef } from "react";
import { GLTF } from "three-stdlib";

import { RigidBody } from "@react-three/rapier";

export function Door({nodes, materials} :any) {

    return (
        <RigidBody colliders="cuboid" type="fixed">
            <group name="Door" position={[0, 1.584, 3.464]} scale={[0.892, 1, 1]}>
                <mesh
                    name="Cube088"
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube088.geometry}
                    material={materials.Light_blue}
                />
                <mesh
                    name="Cube088_1"
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube088_1.geometry}
                    material={materials.Metal}
                />
            </group>
        </RigidBody>
        
    );
}

export default Door;