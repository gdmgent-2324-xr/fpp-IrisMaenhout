import { useGLTF } from "@react-three/drei";
import * as THREE from "three";
import React, { useRef } from "react";
import { GLTF } from "three-stdlib";

import { RigidBody } from "@react-three/rapier";

export function Walls({nodes, materials} :any) {

    return (
        <>
            {/* <RigidBody colliders="hull"> */}
                {/* <mesh
                    name="Walls"
                    castShadow
                    receiveShadow
                    geometry={nodes.Walls.geometry}
                    material={materials.Pink_walls}
                /> */}
            {/* </RigidBody> */}

            {/* <RigidBody colliders="cuboid"> */}
                {/* <mesh
                name="Roof"
                castShadow
                receiveShadow
                geometry={nodes.Roof.geometry}
                material={materials.Pink_walls}
                position={[0, -4.529, 0]}
                /> */}
            {/* </RigidBody> */}

            
            {/* <mesh
                name="Purple_wall"
                castShadow
                receiveShadow
                geometry={nodes.Purple_wall.geometry}
                material={materials.Dark_muted_purple}
                position={[0.994, 0, 0]}
            /> */}



            {/* <mesh
                castShadow
                receiveShadow
                geometry={nodes.Walls.geometry}
                material={materials.Pink_walls}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Roof.geometry}
                material={materials.Pink_walls}
                position={[0, -4.948, 0]}
                scale={1.053}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Purple_wall.geometry}
                material={materials.Dark_muted_purple}
                position={[0.994, 0, 0]}
            /> */}


            <RigidBody colliders="cuboid" type="fixed">
            <mesh
                name="Door_wall"
                castShadow
                receiveShadow
                geometry={nodes.Door_wall.geometry}
                material={materials.Pink_walls}
                scale={[1, 1.4, 1]}
                />
            </RigidBody>

            <RigidBody colliders="cuboid" type="fixed">
                <mesh
                    name="Purple_wall"
                    castShadow
                    receiveShadow
                    geometry={nodes.Purple_wall.geometry}
                    material={materials.Dark_muted_purple}
                    position={[0.994, 0, 0]}
                    scale={[1, 0.438, 0.7]}
                />
            </RigidBody>

            <RigidBody colliders="cuboid" type="fixed">
            <mesh
                name="Window_wall"
                castShadow
                receiveShadow
                geometry={nodes.Window_wall.geometry}
                material={materials.Pink_walls}
                scale={[1, 1.4, 1]}
                />
            </RigidBody>

            <RigidBody colliders="cuboid" type="fixed">
            <mesh
                name="Right_wall"
                castShadow
                receiveShadow
                geometry={nodes.Right_wall.geometry}
                material={materials.Pink_walls}
                scale={[1, 1.4, 1]}
                />
            </RigidBody>

            <RigidBody colliders="cuboid" type="fixed">
            <mesh
                name="Roof"
                castShadow
                receiveShadow
                geometry={nodes.Roof.geometry}
                material={materials.Pink_walls}
                position={[0, -5.219, 0]}
                scale={[0.816, 1.088, 0.761]}
                />
            </RigidBody>
            
        </>
        
        
    );
}

export default Walls;
