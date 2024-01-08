import React, { useState } from "react";
import { RigidBody } from "@react-three/rapier";
import DrawerInside from "./DrawerInside";

function Drawer({nodes, materials} :any) {

    type DrawersState = {
        drawer1: boolean;
        drawer2: boolean;
        drawer3: boolean;
    };
    
    const [drawersOut, setDrawersOut] = useState<DrawersState>({
        drawer1: false,
        drawer2: false,
        drawer3: false
    });
    

    function handleClick(drawer: keyof DrawersState) {
        setDrawersOut(prevState => (
        {
            ...prevState,
            [drawer]: !prevState[drawer]
        }));
    }
      
    
    return (
        <group>  
           
            <DrawerInside 
                name={"drawer1"}
                isActive={drawersOut.drawer1}
                geometry={{
                    mesh1: nodes.Cube070.geometry,
                    mesh2: nodes.Cube070_1.geometry
                }}

                materials={{
                    mesh1: materials.Mat_white,
                    mesh2: materials.See_through_white
                }}

                handleClick={
                    ()=> handleClick("drawer1")
                }
                
            />


            <DrawerInside 
                name={"drawer2"}
                isActive={drawersOut.drawer2}
                geometry={{
                    mesh1: nodes.Cube076.geometry,
                    mesh2: nodes.Cube076_1.geometry
                }}

                materials={{
                    mesh1: materials.Mat_white,
                    mesh2: materials.See_through_white
                }}

                handleClick={
                    ()=> handleClick("drawer2")
                }
                
            />


            <DrawerInside 
                name={"drawer3"}
                isActive={drawersOut.drawer3}
                geometry={{
                    mesh1: nodes.Cube075.geometry,
                    mesh2: nodes.Cube075_1.geometry
                }}

                materials={{
                    mesh1: materials.Mat_white,
                    mesh2: materials.See_through_white
                }}

                handleClick={
                    ()=> handleClick("drawer3")
                }
                
            />
            

            <RigidBody colliders="hull" type="fixed">
                <mesh
                    name="Drawer"
                    castShadow
                    receiveShadow
                    geometry={nodes.Drawer.geometry}
                    material={materials.Mat_white}
                />
            </RigidBody>

            <RigidBody colliders="cuboid" type="fixed">
                <mesh
                    name="Painting"
                    castShadow
                    receiveShadow
                    geometry={nodes.Painting.geometry}
                    material={materials.Painting}
                />
            </RigidBody>

            <RigidBody colliders="cuboid" type="fixed">
                <group
                    name="Jar_brushes"
                    position={[2.681, 2.103, 3.218]}
                    scale={[0.133, 0.146, 0.133]}
                >
                    <mesh
                        name="Mesh_74"
                        castShadow
                        receiveShadow
                        geometry={nodes.Mesh_74.geometry}
                        material={materials.Glass}
                    />
                    <mesh
                        name="Mesh_75"
                        castShadow
                        receiveShadow
                        geometry={nodes.Mesh_75.geometry}
                        material={materials.Brown}
                    />
                    <mesh
                        name="Mesh_76"
                        castShadow
                        receiveShadow
                        geometry={nodes.Mesh_76.geometry}
                        material={materials.Glossy_metal}
                    />
                    <mesh
                        name="Mesh_77"
                        castShadow
                        receiveShadow
                        geometry={nodes.Mesh_77.geometry}
                        material={materials["Brown.001"]}
                    />
                    <mesh
                        name="Mesh_78"
                        castShadow
                        receiveShadow
                        geometry={nodes.Mesh_78.geometry}
                        material={materials.Brush_color}
                    />
                </group>
            </RigidBody>
        </group>
        
    );
}

export default Drawer;
