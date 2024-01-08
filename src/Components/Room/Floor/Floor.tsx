import React from "react";
import { RigidBody } from "@react-three/rapier";

function Floor({nodes, materials} :any) {
    return (
        <RigidBody colliders={"cuboid"} type="fixed">
            
            <group name="Floor">
                <mesh
                    name="Bottom part floor"
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube077.geometry}
                    material={materials.Brown}
                />
                <mesh
                    name="Top part floor"
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube077_1.geometry}
                    material={materials.Stylized_wood_vertical_brown}
                />
            </group>
        </RigidBody>
        
    );
}

export default Floor;