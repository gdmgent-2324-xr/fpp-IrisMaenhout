/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from "three";
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";

import floorModel from "./color_switch_floor.glb";
import { RigidBody } from "@react-three/rapier";

type GLTFResult = GLTF & {
  nodes: {
    Cube: THREE.Mesh;
    Cube001: THREE.Mesh;
    Cube002: THREE.Mesh;
    Cube003: THREE.Mesh;
    Cube004: THREE.Mesh;
    Cube005: THREE.Mesh;
    Cube006: THREE.Mesh;
    Cube007: THREE.Mesh;
    Cube008: THREE.Mesh;
    Cube009: THREE.Mesh;
    Cube010: THREE.Mesh;
    Cube011: THREE.Mesh;
    Cube012: THREE.Mesh;
    Cube013: THREE.Mesh;
    Cube014: THREE.Mesh;
    Cube025: THREE.Mesh;
    Cube026: THREE.Mesh;
    Cube027: THREE.Mesh;
    Cube028: THREE.Mesh;
    Cube029: THREE.Mesh;
    Cube030: THREE.Mesh;
    Cube031: THREE.Mesh;
    Cube032: THREE.Mesh;
    Cube033: THREE.Mesh;
    Cube034: THREE.Mesh;
  };
  materials: {
    Green: THREE.MeshStandardMaterial;
    White: THREE.MeshStandardMaterial;
    Pink: THREE.MeshStandardMaterial;
    Red: THREE.MeshStandardMaterial;
    Blue: THREE.MeshStandardMaterial;
    Orange: THREE.MeshStandardMaterial;
    Yellow: THREE.MeshStandardMaterial;
    Purple: THREE.MeshStandardMaterial;
  };
};

export function MiniGameFloor(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF(floorModel) as GLTFResult;

  return (
    <group {...props} dispose={null} scale={2.5}>
      <RigidBody type="fixed" colliders={"hull"}>
        <group name="Green tiles">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube.geometry}
            material={materials.Green}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube007.geometry}
            material={materials.Green}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube011.geometry}
            material={materials.Green}
          />

          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube026.geometry}
            material={materials.Green}
          />
        </group>
      </RigidBody>

      <RigidBody type="fixed" colliders={"hull"}>
        <group name="White tiles">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube001.geometry}
            material={materials.White}
          />

          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube010.geometry}
            material={materials.White}
          />

          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube028.geometry}
            material={materials.White}
          />
        </group>
      </RigidBody>

      <RigidBody type="fixed" colliders={"hull"}>
        <group name="Pink tiles">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube002.geometry}
            material={materials.Pink}
          />

          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube005.geometry}
            material={materials.Pink}
          />

          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube034.geometry}
            material={materials.Pink}
          />

        </group>
      </RigidBody>


      <RigidBody type="fixed" colliders={"hull"}>
        <group name="Red tiles">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube003.geometry}
            material={materials.Red}
          />

          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube012.geometry}
            material={materials.Red}
          />

          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube029.geometry}
            material={materials.Red}
          />

        </group>
      </RigidBody>

      <RigidBody type="fixed" colliders={"hull"}>
        <group name="Blue tiles">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube004.geometry}
            material={materials.Blue}
          />

          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube013.geometry}
            material={materials.Blue}
          />

          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube033.geometry}
            material={materials.Blue}
          />

        </group>
      </RigidBody>

      <RigidBody type="fixed" colliders={"hull"}>
        <group name="Orange tiles">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube006.geometry}
            material={materials.Orange}
          />

          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube025.geometry}
            material={materials.Orange}
          />

          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube032.geometry}
            material={materials.Orange}
          />

        </group>
      </RigidBody>

      <RigidBody type="fixed" colliders={"hull"}>
        <group name="Yellow tiles">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube008.geometry}
            material={materials.Yellow}
          />

          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube014.geometry}
            material={materials.Yellow}
          />

          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube031.geometry}
            material={materials.Yellow}
          />
        </group>
      </RigidBody>

      <RigidBody type="fixed" colliders={"hull"}>
        <group name="Purple tiles">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube009.geometry}
            material={materials.Purple}
          />

          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube027.geometry}
            material={materials.Purple}
          />
        
        
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube030.geometry}
            material={materials.Purple}
          />

        </group>
      </RigidBody>

    </group>
  );
}

useGLTF.preload(floorModel);