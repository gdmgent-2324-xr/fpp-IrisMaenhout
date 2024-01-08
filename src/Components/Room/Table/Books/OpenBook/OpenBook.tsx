import React from "react";

export function OpenBook({nodes, materials}: any) {

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



