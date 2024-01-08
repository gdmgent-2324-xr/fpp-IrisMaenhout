import { RigidBody } from "@react-three/rapier";
import { cursorActiveHandler, cursorInactiveHandler } from "Components/UserInterface/CursorOverlay";

import { useSpring, animated } from '@react-spring/three';
import { to } from '@react-spring/three';

type Props = {
    geometry: any;
    materials: any;
    handleClick: VoidFunction;
    isActive: boolean;
    name: string;
};
    
const DrawerInside: React.FC<Props> = ({geometry, materials, handleClick, isActive, name}) => {

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
                    castShadow
                    receiveShadow
                    geometry={geometry.mesh1}
                    material={materials.mesh1}
                />

                <mesh
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
