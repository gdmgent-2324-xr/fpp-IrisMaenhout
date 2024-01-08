import React from "react";
    
export const Book = ({materials, position, rotation, scale, outsideBookGeometry, insideBookGeometry, mainMaterial}: any) => {
        
    return (

        <group
            name="Book002"
            position={position}
            rotation={rotation}
            scale={scale}
        >
            <mesh
                name="Mesh_2"
                castShadow
                receiveShadow
                geometry={outsideBookGeometry}
                material={mainMaterial}
            />
            <mesh
                name="Mesh_3"
                castShadow
                receiveShadow
                geometry={insideBookGeometry}
                material={materials.White}
            />
        </group>

    );

}



