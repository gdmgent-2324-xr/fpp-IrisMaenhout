
import { useGLTF } from "@react-three/drei";
// import { GLTFResult } from "../../gltfResult";
import { GLTFResult } from "Components/Room/gltfResult";
import * as THREE from "three";
import React, { useRef } from "react";
import { GLTF } from "three-stdlib";

import glbModel from '../../room_final.glb';
import { RigidBody } from "@react-three/rapier";

export function OpenBook() {

    const { nodes, materials } = useGLTF(glbModel) as GLTFResult;
    return (

      <group
        name="Open_book"
        position={[-0.726, 1.323, -2.964]}
        rotation={[0, 0.208, 0]}
        scale={1.54}
      >
        <mesh
          name="Cube086"
          castShadow
          receiveShadow
          geometry={nodes.Cube086.geometry}
          material={materials["White.002"]}
        />
        <mesh
          name="Cube086_1"
          castShadow
          receiveShadow
          geometry={nodes.Cube086_1.geometry}
          material={materials.Bright_pink}
        />
      </group>
    );

}



