import { useGLTF } from "@react-three/drei";
import * as THREE from "three";
import React, { useRef } from "react";
import { GLTF } from "three-stdlib";

import { RigidBody } from "@react-three/rapier";

export function PostIts({nodes, materials} :any) {

    return (
        
        <>
            <mesh
            name="Post_it1"
            castShadow
            receiveShadow
            geometry={nodes.Post_it1.geometry}
            material={materials["Material.001"]}
            position={[-2.703, 1.958, -2.101]}
            rotation={[Math.PI / 2, 0, 0]}
            scale={0.09}
            />
            <mesh
            name="Post_it1001"
            castShadow
            receiveShadow
            geometry={nodes.Post_it1001.geometry}
            material={materials.JS}
            position={[-2.424, 1.853, -2.101]}
            rotation={[Math.PI / 2, 0, 0]}
            scale={0.09}
            />
            <mesh
            name="Post_it1002"
            castShadow
            receiveShadow
            geometry={nodes.Post_it1002.geometry}
            material={materials.Blender}
            position={[-2.479, 1.296, -2.101]}
            rotation={[Math.PI / 2, 0, 0]}
            scale={0.09}
            />
            <mesh
            name="Post_it1003"
            castShadow
            receiveShadow
            geometry={nodes.Post_it1003.geometry}
            material={materials.Laravel}
            position={[-2.468, 2.066, -2.099]}
            rotation={[Math.PI / 2, 0, 0]}
            scale={0.09}
            />
            <mesh
            name="Post_it1004"
            castShadow
            receiveShadow
            geometry={nodes.Post_it1004.geometry}
            material={materials.Light_blue_css}
            position={[-2.761, 2.069, -2.101]}
            rotation={[Math.PI / 2, 0, 0]}
            scale={0.09}
            />
            <mesh
            name="Post_it1005"
            castShadow
            receiveShadow
            geometry={nodes.Post_it1005.geometry}
            material={materials.React}
            position={[-2.752, 1.44, -2.101]}
            rotation={[Math.PI / 2, 0, 0]}
            scale={0.09}
            />
            <mesh
            name="Post_it1006"
            castShadow
            receiveShadow
            geometry={nodes.Post_it1006.geometry}
            material={materials.NodeJS}
            position={[-2.54, 1.633, -2.101]}
            rotation={[Math.PI / 2, 0, 0]}
            scale={0.09}
            />
            <mesh
            name="Post_it1007"
            castShadow
            receiveShadow
            geometry={nodes.Post_it1007.geometry}
            material={materials["Material.003"]}
            position={[-2.703, 0.945, -2.101]}
            rotation={[Math.PI / 2, 0, 0]}
            scale={0.09}
            />
            <mesh
            name="Post_it1008"
            castShadow
            receiveShadow
            geometry={nodes.Post_it1008.geometry}
            material={materials.TailwindCSS}
            position={[-2.468, 1.054, -2.099]}
            rotation={[Math.PI / 2, 0, 0]}
            scale={0.09}
            />
            <mesh
            name="Post_it1009"
            castShadow
            receiveShadow
            geometry={nodes.Post_it1009.geometry}
            material={materials.AdobeXD}
            position={[-2.678, 1.185, -2.101]}
            rotation={[Math.PI / 2, 0, 0]}
            scale={0.09}
            />
            <mesh
            name="Post_it1010"
            castShadow
            receiveShadow
            geometry={nodes.Post_it1010.geometry}
            material={materials["Material.004"]}
            position={[-2.54, 0.62, -2.101]}
            rotation={[Math.PI / 2, 0, 0]}
            scale={0.09}
            />
        </>
        
        
    );
}

export default PostIts;