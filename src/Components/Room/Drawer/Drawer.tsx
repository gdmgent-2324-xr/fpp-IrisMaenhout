import { useGLTF } from "@react-three/drei";
import * as THREE from "three";
import React, { useRef } from "react";
import { GLTF } from "three-stdlib";

import { RigidBody } from "@react-three/rapier";

export function Drawer({nodes, materials} :any) {

    return (
        <>
            <RigidBody colliders="hull" type="fixed">
                <group name="Lade1">
                    <mesh
                        name="Cube070"
                        castShadow
                        receiveShadow
                        geometry={nodes.Cube070.geometry}
                        material={materials.Mat_white}
                    />
                    <mesh
                        name="Cube070_1"
                        castShadow
                        receiveShadow
                        geometry={nodes.Cube070_1.geometry}
                        material={materials.See_through_white}
                    />
                </group>
            </RigidBody>

            <RigidBody colliders="hull" type="fixed">
                <group name="Lade2">
                    <mesh
                        name="Cube076"
                        castShadow
                        receiveShadow
                        geometry={nodes.Cube076.geometry}
                        material={materials.Mat_white}
                    />
                    <mesh
                        name="Cube076_1"
                        castShadow
                        receiveShadow
                        geometry={nodes.Cube076_1.geometry}
                        material={materials.See_through_white}
                    />
                </group>
            </RigidBody>

            <RigidBody colliders="hull" type="fixed">
                <group name="Lade3">
                    <mesh
                        name="Cube075"
                        castShadow
                        receiveShadow
                        geometry={nodes.Cube075.geometry}
                        material={materials.Mat_white}
                    />
                    <mesh
                        name="Cube075_1"
                        castShadow
                        receiveShadow
                        geometry={nodes.Cube075_1.geometry}
                        material={materials.See_through_white}
                    />
                </group>
            </RigidBody>

            <RigidBody colliders="hull" type="fixed">
                <mesh
                    name="Drawer"
                    castShadow
                    receiveShadow
                    geometry={nodes.Drawer.geometry}
                    material={materials.Mat_white}
                >
                    <mesh
                        name="Buisness_card"
                        castShadow
                        receiveShadow
                        geometry={nodes.Buisness_card.geometry}
                        material={materials.Buisness_card}
                    />
                </mesh>
            </RigidBody>

            <RigidBody colliders="cuboid" type="fixed">
                <mesh
                    name="Painting"
                    castShadow
                    receiveShadow
                    geometry={nodes.Painting.geometry}
                    material={materials.Painting}
                />
            </RigidBody>

            <RigidBody colliders="cuboid" type="fixed">
                <group
                    name="Jar_brushes"
                    position={[2.681, 2.103, 3.218]}
                    scale={[0.133, 0.146, 0.133]}
                    >
                    <mesh
                        name="Mesh_74"
                        castShadow
                        receiveShadow
                        geometry={nodes.Mesh_74.geometry}
                        material={materials.Glass}
                    />
                    <mesh
                        name="Mesh_75"
                        castShadow
                        receiveShadow
                        geometry={nodes.Mesh_75.geometry}
                        material={materials.Brown}
                    />
                    <mesh
                        name="Mesh_76"
                        castShadow
                        receiveShadow
                        geometry={nodes.Mesh_76.geometry}
                        material={materials.Glossy_metal}
                    />
                    <mesh
                        name="Mesh_77"
                        castShadow
                        receiveShadow
                        geometry={nodes.Mesh_77.geometry}
                        material={materials["Brown.001"]}
                    />
                    <mesh
                        name="Mesh_78"
                        castShadow
                        receiveShadow
                        geometry={nodes.Mesh_78.geometry}
                        material={materials.Brush_color}
                    />
                    </group>
            </RigidBody>
        </>
        
    );
}

export default Drawer;
