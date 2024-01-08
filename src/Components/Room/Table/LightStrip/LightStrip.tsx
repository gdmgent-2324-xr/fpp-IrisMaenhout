import React from "react";

export function LightStrip({nodes, materials}: any) {
    
    return (
    
        <mesh
            name="Light_strip"
            castShadow
            receiveShadow
            geometry={nodes.Light_strip.geometry}
            // material={materials.Light_behind_table}
            position={[-2.92, 2.413, -2.75]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={[-0.011, -0.07, -0.035]}
        >
            <meshBasicMaterial color={[0.25, 0.3, 11.8]} toneMapped={false}/>
        </mesh>  
    );
}