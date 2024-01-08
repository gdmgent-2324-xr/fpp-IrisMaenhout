import React from "react";
import { RigidBody } from "@react-three/rapier";


const BedsideTable = ({nodes, materials} :any) => {

    return (
        <group name="Bedside table">
            <RigidBody colliders="cuboid"  type={"fixed"}>
                <group name="Lade1001">
                    <mesh
                        name="Cube055"
                        castShadow
                        receiveShadow
                        geometry={nodes.Cube055.geometry}
                        material={materials.Stylized_wood_horizontal_grey}
                    />
                    <mesh
                        name="Cube055_1"
                        castShadow
                        receiveShadow
                        geometry={nodes.Cube055_1.geometry}
                        material={materials.Metal}
                    />
                </group>
            </RigidBody>

            <RigidBody colliders="hull" type={"fixed"}>
                <group name="Lade2001">
                    <mesh
                        name="Cube003"
                        castShadow
                        receiveShadow
                        geometry={nodes.Cube003.geometry}
                        material={materials.Stylized_wood_horizontal_grey}
                    />
                    <mesh
                        name="Cube003_1"
                        castShadow
                        receiveShadow
                        geometry={nodes.Cube003_1.geometry}
                        material={materials.Metal}
                    />
                </group>
            </RigidBody>

            <RigidBody colliders="hull" type={"fixed"}>
                <group
                name="Bedside_table"
                position={[2.433, 0.219, -2.833]}
                rotation={[Math.PI, 0, Math.PI]}
                scale={0.103}
                >
                <mesh
                    name="Cube059"
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube059.geometry}
                    material={materials.Stylized_wood_vertical_grey}
                />
                <mesh
                    name="Cube059_1"
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube059_1.geometry}
                    material={materials.Stylized_wood_horizontal_grey}
                />
                </group>
            </RigidBody>
        </group>
 
    );
}

export default BedsideTable;