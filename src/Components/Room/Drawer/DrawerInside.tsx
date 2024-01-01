import { RigidBody } from "@react-three/rapier";
import { cursorActiveHandler, cursorInactiveHandler } from "Components/UserInterface/CursorOverlay";

import { useSpring, animated } from '@react-spring/three';
import { to } from '@react-spring/three';


export function DrawerInside({geometry, materials, handleClick, isActive, name} :any) {
    // geometry nodes object {
    //     mesh1: 
    //     mesh2: 
    // }

    // materials object {
    //     mesh1: 
    //     mesh2: 
    // }
    const { position } = useSpring({ position: isActive ? [0, 0, -0.25] : [0, 0, 0] });

    const animatedPosition = to(position, (x, y, z) => [x, y, z]);


    return ( 
        <RigidBody colliders="hull" type="fixed">
            <animated.group 
                name={name}
                onClick={handleClick}
                position={animatedPosition}
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
            </animated.group>
        </RigidBody>
        
    );
}

export default DrawerInside;
