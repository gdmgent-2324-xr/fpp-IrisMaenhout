import { Text} from "@react-three/drei";
import React from "react";

import { RigidBody } from "@react-three/rapier";


type Props = {
    nodes: any;
    materials: any;
    timeString: string;
};

const AlarmClock : React.FC<Props> = ({ nodes, materials, timeString }) => {


    return (
        <RigidBody colliders="hull" type="fixed">
            <group
                name="Alarm_clock"
                position={[2.875, 0.199, -2.889]}
                rotation={[Math.PI, 0, Math.PI]}
                scale={0.103}
            >
                <mesh
                    name="Cylinder008"
                    castShadow
                    receiveShadow
                    geometry={nodes.Cylinder008.geometry}
                    material={materials.Mat_black}
                />
                <mesh
                    name="Cylinder008_1"
                    castShadow
                    receiveShadow
                    geometry={nodes.Cylinder008_1.geometry}
                    material={materials.Outline_bloom_effect}
                />

                <mesh
                    name="Cylinder008_2"
                    castShadow
                    receiveShadow
                    geometry={nodes.Cylinder008_2.geometry}
                    material={materials.Glossy_black}
                />
                <mesh
                    name="Cylinder008_3"
                    castShadow
                    receiveShadow
                    geometry={nodes.Cylinder008_3.geometry}
                    material={materials.Metal}
                />
            </group>

            <Text 
                scale={0.065}
                name="Time_alarm_clock"  
                material={materials.Clock_bloom_effect}
                position={[2.765, 0.95, -2.86]}
                rotation={[-Math.PI / 2, -1.3, -Math.PI / 2]}
            >
                {timeString}
            </Text>

        </RigidBody>
        
    );
}

export default AlarmClock;