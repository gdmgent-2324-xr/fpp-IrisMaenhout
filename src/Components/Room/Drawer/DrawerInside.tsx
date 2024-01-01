import { RigidBody } from "@react-three/rapier";
import { cursorActiveHandler, cursorInactiveHandler } from "Components/UserInterface/CursorOverlay";

export function DrawerInside({geometry, materials, handleClick, position, name} :any) {
    // geometry nodes object {
    //     mesh1: 
    //     mesh2: 
    // }

    // materials object {
    //     mesh1: 
    //     mesh2: 
    // }

    return ( 
        <RigidBody colliders="hull" type="fixed">
            <group 
                name={name}
                onClick={handleClick}
                position={position}
                onPointerEnter={cursorActiveHandler}
                onPointerLeave={cursorInactiveHandler}
                onPointerOut={cursorInactiveHandler}
                onPointerOver={cursorActiveHandler}
            >
                <mesh
                    name="Cube070"
                    castShadow
                    receiveShadow
                    geometry={geometry.mesh1}
                    material={materials.mesh1}
                />

                <mesh
                    name="Cube070_1"
                    castShadow
                    receiveShadow
                    geometry={geometry.mesh2}
                    material={materials.mesh2}
                    onClick={handleClick}
                />
            </group>
        </RigidBody>
        
    );
}

export default DrawerInside;
