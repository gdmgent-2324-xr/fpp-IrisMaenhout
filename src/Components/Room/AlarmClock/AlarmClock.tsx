import { Text, Text3D, useGLTF } from "@react-three/drei";
import * as THREE from "three";
import React, { useRef } from "react";

// import font from "./digitalClockFont/digital_clock_font.json";


// import clockFont from "./digitalClockFont/digital_clock_font.json";

import { RigidBody } from "@react-three/rapier";



export function AlarmClock({nodes, materials, timeString} :any) {


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

            {/* <mesh
                name="Time_alarm_clock"
                castShadow
                receiveShadow
                geometry={nodes.Time_alarm_clock.geometry}
                material={materials.Clock_bloom_effect}
                position={[2.772, 0.969, -2.863]}
                rotation={[Math.PI / 2, -0.212, Math.PI / 2]}
                scale={0.055}
            /> */}

            {/* <Text3D font="./digitalClockFont/digital_clock_font.json">
                HELLO R3F
            </Text3D> */}

            <Text 
                // fontSize={0.08}
                scale={0.055}
                font=""
                name="Time_alarm_clock"  
                material={materials.Clock_bloom_effect}
                position={[2.765, 0.96, -2.855]}
                rotation={[-Math.PI / 2, -1.3, -Math.PI / 2]}
            >
                {timeString}
            </Text>



           
                







            {/* <group
                name="Alarm_clock"
                position={[2.875, 0.199, -2.889]}
                rotation={[Math.PI, 0, Math.PI]}
            >
            <mesh
                name="Cube063"
                castShadow
                receiveShadow
                geometry={nodes.Cube063.geometry}
                material={materials.Mat_black}
            />
            <mesh
                name="Cube063_1"
                castShadow
                receiveShadow
                geometry={nodes.Cube063_1.geometry}
                material={materials.Glossy_black}
            />
            <mesh
                name="Cube063_2"
                castShadow
                receiveShadow
                geometry={nodes.Cube063_2.geometry}
                material={materials.Outline_bloom_effect}
            />
            <mesh
                name="Cube063_3"
                castShadow
                receiveShadow
                geometry={nodes.Cube063_3.geometry}
                material={materials.Metal}
            /> */}
            {/* <mesh
                name="Time_alarm_clock"
                castShadow
                receiveShadow
                geometry={nodes.Time_alarm_clock.geometry}
                material={materials.Clock_bloom_effect}
                position={[0.01, 1.222, -2.316]}
                rotation={[Math.PI / 2, 0.201, -Math.PI / 2]}
            /> */}

            
            
            {/* </group> */}
        </RigidBody>
        
        
        
    );
}

export default AlarmClock;