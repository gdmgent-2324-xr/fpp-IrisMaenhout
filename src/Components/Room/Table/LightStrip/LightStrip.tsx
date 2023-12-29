
import { useGLTF } from "@react-three/drei";
// import { GLTFResult } from "../../gltfResult";
import { GLTFResult } from "Components/Room/gltfResult";
import * as THREE from "three";
import React, { useRef } from "react";
import { GLTF } from "three-stdlib";

import glbModel from '../../room_final.glb';
import { RigidBody } from "@react-three/rapier";

export function LightStrip() {

    const { nodes, materials } = useGLTF(glbModel) as GLTFResult;

    

    const neon = useRef<THREE.Mesh>(null);

    
    

    
    return (
        <>
            
            {/* <directionalLight 
                position={[2.92, 2.413, -2.75]}
                castShadow={true}
                color={"#1e2a52"}
                intensity={15}
                

            /> */}

            <mesh
            ref={neon}
            name="Light_strip"
            castShadow
            receiveShadow
            geometry={nodes.Light_strip.geometry}
            // material={materials.Light_behind_table}
            position={[-2.92, 2.413, -2.75]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={[-0.011, -0.07, -0.035]}
            >
                <meshBasicMaterial color={[0.25, 0.3, 11.8]} toneMapped={false} />
            </mesh>
        </>
        


        
    );
}