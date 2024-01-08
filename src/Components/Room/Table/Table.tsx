import React from "react";
import { RigidBody } from "@react-three/rapier";
import { LightStrip } from "./LightStrip/LightStrip";
import { OpenBook } from "./Books/OpenBook/OpenBook";
import ContactCard from "../ContactCard/ContactCard";
import { booksData } from "./Books/BooksData";
import { Book } from "./Books/Book";

type Props = {
    nodes: any;
    materials: any;
    isDarkMode: boolean;
};
    
const Table: React.FC<Props> = ({nodes, materials, isDarkMode}) => {

    return (
      <RigidBody colliders="hull" type="fixed">
        <group name="Table">
          {/* Table */}
          <mesh
            name="Cube064"
            castShadow
            receiveShadow
            geometry={nodes.Cube064.geometry}
            material={materials.Stylized_wood_vertical_brown}
          />
          <mesh
            name="Cube064_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube064_1.geometry}
            material={materials.Stylized_wood_horizontal_light_brown}
          />

          {/* Map through the booksData array to render multiple books */}
          {booksData.map((bookData, index) => (
            <Book
              key={index}
              position={bookData.position}
              rotation={bookData.rotation}
              scale={bookData.scale}
              materials={materials}
              mainMaterial={materials[bookData.mainMaterial]}
              outsideBookGeometry={nodes[bookData.geometry.outsideBook].geometry}
              insideBookGeometry={nodes[bookData.geometry.insideBook].geometry}
            />
          ))}
          
          <LightStrip nodes={nodes} materials={materials}/>
        </group>

        <OpenBook nodes={nodes} materials={materials}/>
        
        <ContactCard materials={materials} isDarkMode={isDarkMode}/>
        
      </RigidBody> 
    );
}

export default Table;

