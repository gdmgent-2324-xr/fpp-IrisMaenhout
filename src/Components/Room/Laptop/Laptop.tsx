import { Html, useGLTF } from "@react-three/drei";
import * as THREE from "three";
import React, { useRef, useState } from "react";
import { GLTF } from "three-stdlib";
import audioFile from "./audio/keyboard-typing-shorter.mp3";

import { RigidBody } from "@react-three/rapier";
import { ThreeEvent } from "@react-three/fiber";
import { cursorActiveHandler, cursorInactiveHandler } from "Components/UserInterface/CursorOverlay";

export function Laptop({nodes, materials} :any) {
    const sound = useRef<HTMLAudioElement>(new Audio(audioFile));
    const audioDuration = sound.current.duration;
    const [soundIsPlaying, setSoundIsPlaying] = useState(false);
    
    function handleEndOfSound(){
        sound.current.pause();
        sound.current.currentTime = 0;
        setSoundIsPlaying(false);
    }

    // Event Handlers.
    const clickHandler = (event: ThreeEvent<MouseEvent>) => {
        event.stopPropagation();
        setSoundIsPlaying((prev) => !prev);

        if(!soundIsPlaying){
            sound.current.play();

            setTimeout(handleEndOfSound, audioDuration * 1000);
        }

    };




    return (
        <RigidBody colliders="hull" type="fixed">
            {/* <group name="Laptop" position={[-1.48, 1.29, -2.491]}>
                <mesh
                    name="Cube081"
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube081.geometry}
                    material={materials.Glossy_black}
                />
                <mesh
                    name="Cube081_1"
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube081_1.geometry}
                    material={materials.Mat_black}
                />
                <mesh
                    name="Cube081_2"
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube081_2.geometry}
                    material={materials.Code_img}
                />
                <mesh
                    name="Cube081_3"
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube081_3.geometry}
                    material={materials.Metal}
                />
            </group> */}


                {/* Needs to be adjusted because now it's lighting up the whole table */}
                <directionalLight
                name="Pc_light"
                position={[-1.474, 1.501, -2.794]}
                rotation={[2.61, 0, 0]}
                intensity={0.5}
                color={"#CEEEFF"}

                />





            <group name="Laptop" 
                onPointerEnter={soundIsPlaying? cursorInactiveHandler : cursorActiveHandler}
                onPointerLeave={cursorInactiveHandler}
                onPointerOut={cursorInactiveHandler}
                onPointerOver={soundIsPlaying? cursorInactiveHandler : cursorActiveHandler}
                onClick={clickHandler}
            >
            <mesh
                name="Cube080"
                castShadow
                receiveShadow
                geometry={nodes.Cube080.geometry}
                material={materials.Metal}
            />
            <mesh
                name="Cube080_1"
                castShadow
                receiveShadow
                geometry={nodes.Cube080_1.geometry}
                material={materials.Mat_black}
            />
            <mesh
                name="Cube080_2"
                castShadow
                receiveShadow
                geometry={nodes.Cube080_2.geometry}
                material={materials.Glossy_black}
            />
            <mesh
                name="Cube080_3"
                castShadow
                receiveShadow
                geometry={nodes.Cube080_3.geometry}
                material={materials.Code_img}
            />
            </group>
            {/* <group
            name="Pc_light"
            position={[-1.474, 1.501, -2.794]}
            rotation={[2.61, 0, 0]}
            /> */}

            <Html>
                <audio ref={sound}>
                    <source src={audioFile} type="audio/mpeg" />
                    Your browser does not support the audio element.
                </audio>
            </Html>
        </RigidBody>
        
    );
}

export default Laptop;