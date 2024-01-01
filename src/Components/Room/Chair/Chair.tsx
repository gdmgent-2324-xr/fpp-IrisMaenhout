import { useGLTF } from "@react-three/drei";
import { GLTFResult } from "../gltfResult";

import * as THREE from "three";
import React, { useEffect, useRef, useState } from "react";
import { GLTF } from "three-stdlib";
import glbModel from '../room_final.glb';
import { RigidBody } from "@react-three/rapier";
import { useSpring, animated } from '@react-spring/three';
import { to } from '@react-spring/three';
import { a } from "@react-spring/three";
import { cursorActiveHandler, cursorInactiveHandler } from "Components/UserInterface/CursorOverlay";

export function Chair({ nodes, materials }: any) {
    const [movedBackwards, setMovedBackwards] = useState(false);
    const [rotateChair, setRotateChair] = useState(false);
    

    const handleChairClick = () => {
        setMovedBackwards(!movedBackwards);

        // Rotate chair when chair moves backwards
        setRotateChair(movedBackwards);

    };

     // create a common spring that will be used later to interpolate other values
    const { spring } = useSpring({
        spring: Number(rotateChair),
        config: { mass: 10, tension: 400, friction: 200, precision: 0.0001 },
    });

    const { position } = useSpring({
        position: movedBackwards ? [-1.257, 0.098, -1.9] : [-1.257, 0.098, -1],
    });

    const rotation = spring.to([0, 1], [0, 2 * Math.PI]);

    const animatedPosition = to(position, (x, y, z) => [x, y, z]);

    return (
        <RigidBody colliders={"cuboid"} type="fixed" >
            <animated.group
                name="Chair"
                position={animatedPosition}
                rotation={[-Math.PI, 0.032, -Math.PI]}
                scale={[0.145, 0.159, 0.169]}
                onClick={handleChairClick}
                onPointerEnter={cursorActiveHandler}
                onPointerLeave={cursorInactiveHandler}
                onPointerOut={cursorInactiveHandler}
                onPointerOver={cursorActiveHandler}

                >


                <a.mesh
                    rotation-y={rotateChair ? rotation : 0}
                >
                    <mesh
                        name="Sphere002"
                        castShadow
                        receiveShadow
                        geometry={nodes.Sphere002.geometry}
                        material={materials.Mat_black}
                    />
                    <mesh
                        name="Sphere002_1"
                        castShadow
                        receiveShadow
                        geometry={nodes.Sphere002_1.geometry}
                        material={materials.Mat_black_not_reflective}
                    />
                </a.mesh>
                </animated.group>
        </RigidBody>
        
    );
}

export default Chair;