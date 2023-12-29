import { useGLTF } from "@react-three/drei";
import { GLTFResult } from "../gltfResult";

import * as THREE from "three";
import React, { useRef } from "react";
import { GLTF } from "three-stdlib";
import glbModel from '../room_final.glb';
import { RigidBody } from "@react-three/rapier";

export function Chair({ nodes, materials }: any) {

    return (
        <RigidBody colliders={"cuboid"} type="dynamic" >
            <group
                name="Chair"
                position={[-1.257, 0.098, -1.941]}
                rotation={[-Math.PI, 0.032, -Math.PI]}
                scale={[0.145, 0.159, 0.169]}
                >
                <mesh
                    name="Sphere002"
                    castShadow
                    receiveShadow
                    geometry={nodes.Sphere002.geometry}
                    material={materials.Mat_black}
                />
                <mesh
                    name="Sphere002_1"
                    castShadow
                    receiveShadow
                    geometry={nodes.Sphere002_1.geometry}
                    material={materials.Mat_black_not_reflective}
                />
                </group>
        </RigidBody>
        
    );
}

export default Chair;