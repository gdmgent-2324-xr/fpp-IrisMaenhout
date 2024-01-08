
import { Html } from "@react-three/drei";
import React, { useRef, useState } from "react";
import playlist from "./audio/Lauv - Paris In The Rain.mp3";
import { RigidBody } from "@react-three/rapier";
import { cursorActiveHandler, cursorInactiveHandler } from "Components/UserInterface/CursorOverlay";
import { ThreeEvent } from "@react-three/fiber";

export function Radio({ nodes, materials }: any) {

    const music = useRef<HTMLAudioElement>(new Audio(playlist));
    const [isRadioOn, setIsRadioOn] = useState(false);
    const FADE_DURATION = 0.5; // Duration for fade in/out in seconds

    const fadeIn = () => {
        if (music.current) {
            music.current.volume = 0;
            music.current.play();
            const fadeInterval = setInterval(() => {
                music.current.volume = Math.min(1, music.current.volume + 0.1);
                if (music.current.volume >= 1) {
                    clearInterval(fadeInterval);
                }
            }, FADE_DURATION * 100);
        }
    };

    const fadeOut = () => {
        if (music.current) {
            const fadeInterval = setInterval(() => {
                music.current.volume = Math.max(0, music.current.volume - 0.1);
                if (music.current.volume <= 0) {
                    clearInterval(fadeInterval);
                    music.current.pause();
                }
            }, FADE_DURATION * 100);
        }
    };

    const clickHandler = (event: ThreeEvent<MouseEvent>) => {
        event.stopPropagation();
        setIsRadioOn((prev) => !prev);
        if (!isRadioOn) {
            fadeIn();
        } else {
            fadeOut();
        }
    };


    return (

        <RigidBody colliders={"cuboid"} type="fixed">
            <group name="Radio"
             onPointerEnter={cursorActiveHandler}
             onPointerLeave={cursorInactiveHandler}
             onPointerOut={cursorInactiveHandler}
             onPointerOver={cursorActiveHandler}
             onClick={clickHandler}>
                <mesh
                    name="Cube002"
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube002.geometry}
                    material={materials.Metal}
                />
                <mesh
                    name="Cube002_1"
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube002_1.geometry}
                    material={materials.Mat_black}
                />
                <mesh
                    name="Cube002_2"
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube002_2.geometry}
                    material={materials.Glossy_black}
                />
                <mesh
                    name="Cube002_3"
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube002_3.geometry}
                    material={materials.Glossy_metal}
                />
            </group>

            
            <Html>
                <audio ref={music}>
                    <source src={playlist} type="audio/mpeg" />
                    Your browser does not support the audio element.
                </audio>
            </Html>
           
        </RigidBody>
    );
}