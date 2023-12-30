
import { useGLTF } from "@react-three/drei";
import { GLTFResult } from "../gltfResult";

import * as THREE from "three";
import React, { useEffect, useRef } from "react";
import { GLTF } from "three-stdlib";
import glbModel from '../room_final.glb';
import { RigidBody } from "@react-three/rapier";
import { Radio } from "./Radio/Radio";
import { LightStrip } from "./LightStrip/LightStrip";
import { OpenBook } from "./OpenBook/OpenBook";
import ContactCard from "../ContactCard/ContactCard";
import { useLoader } from "@react-three/fiber";
import { TextureLoader } from 'three/src/loaders/TextureLoader'
import { Mesh } from "three";

import contactCardImg from './assets/Beige Gradient Minimalist Modern Business Card (2).png';

export function Table({ nodes, materials, isDarkMode }: any) {

  const contactCardRef = useRef<Mesh>(null!);

    return (
        // <RigidBody type="fixed">
        <>

        <RigidBody colliders="hull" type="fixed">
        <group name="Table">
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
          <group
            name="Book001"
            position={[-2.546, 0.297, -2.854]}
            rotation={[1.741, -1.539, 1.559]}
            scale={[-0.311, -1.126, -1.4]}
          >
            <mesh
              name="Mesh"
              castShadow
              receiveShadow
              geometry={nodes.Mesh.geometry}
              material={materials["Light_green.001"]}
            />
            <mesh
              name="Mesh_1"
              castShadow
              receiveShadow
              geometry={nodes.Mesh_1.geometry}
              material={materials.White}
            />
          </group>
          <group
            name="Book002"
            position={[-2.673, 0.354, -3.208]}
            rotation={[-1.933, 1.539, 1.583]}
            scale={[0.723, 1.579, 2.011]}
          >
            <mesh
              name="Mesh_2"
              castShadow
              receiveShadow
              geometry={nodes.Mesh_2.geometry}
              material={materials.Yellow}
            />
            <mesh
              name="Mesh_3"
              castShadow
              receiveShadow
              geometry={nodes.Mesh_3.geometry}
              material={materials.White}
            />
          </group>
          <group
            name="Book003"
            position={[-2.655, 0.773, -3.07]}
            rotation={[0, 1.531, -1.581]}
            scale={[0.723, 1.579, 2.011]}
          >
            <mesh
              name="Mesh_6"
              castShadow
              receiveShadow
              geometry={nodes.Mesh_6.geometry}
              material={materials.Light_pink}
            />
            <mesh
              name="Mesh_7"
              castShadow
              receiveShadow
              geometry={nodes.Mesh_7.geometry}
              material={materials.White}
            />
          </group>
          <group
            name="Book004"
            position={[-2.61, 0.822, -3.035]}
            rotation={[Math.PI, -1.395, 1.581]}
            scale={[-0.267, -1.579, -2.011]}
          >
            <mesh
              name="Mesh_4"
              castShadow
              receiveShadow
              geometry={nodes.Mesh_4.geometry}
              material={materials.Purple}
            />
            <mesh
              name="Mesh_5"
              castShadow
              receiveShadow
              geometry={nodes.Mesh_5.geometry}
              material={materials.White}
            />
          </group>
          <group
            name="Book005"
            position={[-2.57, 0.257, -2.889]}
            rotation={[1.741, -1.539, 1.559]}
            scale={[-0.256, -0.795, -1.093]}
          >
            <mesh
              name="Mesh_8"
              castShadow
              receiveShadow
              geometry={nodes.Mesh_8.geometry}
              material={materials["Blue.001"]}
            />
            <mesh
              name="Mesh_9"
              castShadow
              receiveShadow
              geometry={nodes.Mesh_9.geometry}
              material={materials.White}
            />
          </group>
          <group
            name="Book006"
            position={[-2.609, 0.856, -3.073]}
            rotation={[0, 0.135, -1.561]}
            scale={[-0.444, -1.483, -1.191]}
          >
            <mesh
              name="Mesh_14"
              castShadow
              receiveShadow
              geometry={nodes.Mesh_14.geometry}
              material={materials.Light_green_blue}
            />
            <mesh
              name="Mesh_15"
              castShadow
              receiveShadow
              geometry={nodes.Mesh_15.geometry}
              material={materials.White}
            />
          </group>
          <group
            name="Book007"
            position={[-2.581, 0.327, -2.822]}
            rotation={[-1.401, 1.539, 1.583]}
            scale={[0.155, 1.388, 1.4]}
          >
            <mesh
              name="Mesh_10"
              castShadow
              receiveShadow
              geometry={nodes.Mesh_10.geometry}
              material={materials.Light_pink}
            />
            <mesh
              name="Mesh_11"
              castShadow
              receiveShadow
              geometry={nodes.Mesh_11.geometry}
              material={materials.White}
            />
          </group>
          <group
            name="Book008"
            position={[-2.643, 0.756, -2.401]}
            rotation={[0, 1.255, -1.581]}
            scale={[0.422, 1.101, 1.955]}
          >
            <mesh
              name="Mesh_12"
              castShadow
              receiveShadow
              geometry={nodes.Mesh_12.geometry}
              material={materials.light_orange_yellow}
            />
            <mesh
              name="Mesh_13"
              castShadow
              receiveShadow
              geometry={nodes.Mesh_13.geometry}
              material={materials.White}
            />
          </group>
          <group
            name="Book009"
            position={[-2.645, 0.793, -2.408]}
            rotation={[-Math.PI, -1.395, 1.581]}
            scale={[-0.231, -1.363, -1.736]}
          >
            <mesh
              name="Mesh_16"
              castShadow
              receiveShadow
              geometry={nodes.Mesh_16.geometry}
              material={materials["Mid-blue"]}
            />
            <mesh
              name="Mesh_17"
              castShadow
              receiveShadow
              geometry={nodes.Mesh_17.geometry}
              material={materials.White}
            />
          </group>
          <group
            name="Book010"
            position={[-2.645, 0.82, -2.398]}
            rotation={[Math.PI, -1.192, 1.581]}
            scale={[-0.244, -0.621, -1.111]}
          >
            <mesh
              name="Mesh_18"
              castShadow
              receiveShadow
              geometry={nodes.Mesh_18.geometry}
              material={materials["Light_green.001"]}
            />
            <mesh
              name="Mesh_19"
              castShadow
              receiveShadow
              geometry={nodes.Mesh_19.geometry}
              material={materials.White}
            />
          </group>
          <group
            name="Book011"
            position={[-2.667, 0.926, -2.684]}
            rotation={[-1.686, 1.539, 1.583]}
            scale={[0.363, 1.578, 2.011]}
          >
            <mesh
              name="Mesh_22"
              castShadow
              receiveShadow
              geometry={nodes.Mesh_22.geometry}
              material={materials.Pink_red}
            />
            <mesh
              name="Mesh_23"
              castShadow
              receiveShadow
              geometry={nodes.Mesh_23.geometry}
              material={materials.White}
            />
          </group>
          <group
            name="Book012"
            position={[-2.587, 1.495, -2.676]}
            rotation={[-1.686, 1.539, 1.583]}
            scale={[0.522, 1.615, 2.048]}
          >
            <mesh
              name="Mesh_20"
              castShadow
              receiveShadow
              geometry={nodes.Mesh_20.geometry}
              material={materials.Light_pink}
            />
            <mesh
              name="Mesh_21"
              castShadow
              receiveShadow
              geometry={nodes.Mesh_21.geometry}
              material={materials.White}
            />
          </group>
          <group
            name="Book013"
            position={[-2.516, 1.439, -2.621]}
            rotation={[-1.686, 1.539, 1.583]}
            scale={[0.521, 1.243, 1.221]}
          >
            <mesh
              name="Mesh_24"
              castShadow
              receiveShadow
              geometry={nodes.Mesh_24.geometry}
              material={materials["Brown.001"]}
            />
            <mesh
              name="Mesh_25"
              castShadow
              receiveShadow
              geometry={nodes.Mesh_25.geometry}
              material={materials.White}
            />
          </group>
          <group
            name="Book014"
            position={[-2.613, 1.461, -2.567]}
            rotation={[-1.686, 1.539, 1.583]}
            scale={[0.522, 1.418, 1.591]}
          >
            <mesh
              name="Mesh_28"
              castShadow
              receiveShadow
              geometry={nodes.Mesh_28.geometry}
              material={materials.Strong_pink}
            />
            <mesh
              name="Mesh_29"
              castShadow
              receiveShadow
              geometry={nodes.Mesh_29.geometry}
              material={materials.White}
            />
          </group>
          <group
            name="Book015"
            position={[-2.613, 1.461, -2.247]}
            rotation={[-1.359, 1.539, 1.583]}
            scale={[0.522, 1.418, 1.591]}
          >
            <mesh
              name="Mesh_30"
              castShadow
              receiveShadow
              geometry={nodes.Mesh_30.geometry}
              material={materials.Purple}
            />
            <mesh
              name="Mesh_31"
              castShadow
              receiveShadow
              geometry={nodes.Mesh_31.geometry}
              material={materials.White}
            />
          </group>
          <group
            name="Book016"
            position={[-2.554, 1.443, -2.311]}
            rotation={[-1.359, 1.539, 1.583]}
            scale={[0.519, 1.249, 1.591]}
          >
            <mesh
              name="Mesh_26"
              castShadow
              receiveShadow
              geometry={nodes.Mesh_26.geometry}
              material={materials["Mid-blue"]}
            />
            <mesh
              name="Mesh_27"
              castShadow
              receiveShadow
              geometry={nodes.Mesh_27.geometry}
              material={materials.White}
            />
          </group>
          <group
            name="Book017"
            position={[-2.587, 2.035, -2.671]}
            rotation={[-1.599, 1.539, 1.583]}
            scale={[0.908, 1.813, 2.048]}
          >
            <mesh
              name="Mesh_32"
              castShadow
              receiveShadow
              geometry={nodes.Mesh_32.geometry}
              material={materials["Material.002"]}
            />
            <mesh
              name="Mesh_33"
              castShadow
              receiveShadow
              geometry={nodes.Mesh_33.geometry}
              material={materials.White}
            />
          </group>
          <group
            name="Book018"
            position={[-2.587, 2.018, -2.588]}
            rotation={[-1.599, 1.539, 1.583]}
            scale={[0.729, 1.678, 1.643]}
          >
            <mesh
              name="Mesh_36"
              castShadow
              receiveShadow
              geometry={nodes.Mesh_36.geometry}
              material={materials.Light_green_blue}
            />
            <mesh
              name="Mesh_37"
              castShadow
              receiveShadow
              geometry={nodes.Mesh_37.geometry}
              material={materials.White}
            />
          </group>
          <group
            name="Book019"
            position={[-2.529, 1.989, -2.489]}
            rotation={[-1.599, 1.539, 1.583]}
            scale={[1.195, 1.408, 1.462]}
          >
            <mesh
              name="Mesh_38"
              castShadow
              receiveShadow
              geometry={nodes.Mesh_38.geometry}
              material={materials["Light_green.001"]}
            />
            <mesh
              name="Mesh_39"
              castShadow
              receiveShadow
              geometry={nodes.Mesh_39.geometry}
              material={materials.White}
            />
          </group>
          <group
            name="Book020"
            position={[-2.523, 1.476, -2.368]}
            rotation={[-1.88, 1.471, -1.025]}
            scale={[0.817, 1.582, 1.032]}
          >
            <mesh
              name="Mesh_34"
              castShadow
              receiveShadow
              geometry={nodes.Mesh_34.geometry}
              material={materials.Light_green_blue}
            />
            <mesh
              name="Mesh_35"
              castShadow
              receiveShadow
              geometry={nodes.Mesh_35.geometry}
              material={materials.White}
            />
          </group>
          <group
            name="Book021"
            position={[-2.551, 2.043, -2.254]}
            rotation={[-1.459, 1.539, 1.583]}
            scale={[0.685, 1.89, 1.463]}
          >
            <mesh
              name="Mesh_40"
              castShadow
              receiveShadow
              geometry={nodes.Mesh_40.geometry}
              material={materials.Pink_red}
            />
            <mesh
              name="Mesh_41"
              castShadow
              receiveShadow
              geometry={nodes.Mesh_41.geometry}
              material={materials.White}
            />
          </group>
          <group
            name="Book022"
            position={[-2.529, 2.003, -2.312]}
            rotation={[-1.459, 1.539, 1.583]}
            scale={[0.391, 1.495, 1.463]}
          >
            <mesh
              name="Mesh_46"
              castShadow
              receiveShadow
              geometry={nodes.Mesh_46.geometry}
              material={materials.Purple}
            />
            <mesh
              name="Mesh_47"
              castShadow
              receiveShadow
              geometry={nodes.Mesh_47.geometry}
              material={materials.White}
            />
          </group>
          <group
            name="Book023"
            position={[-2.587, 2.035, -3.264]}
            rotation={[-1.599, 1.539, 1.583]}
            scale={[0.908, 1.813, 2.048]}
          >
            <mesh
              name="Mesh_44"
              castShadow
              receiveShadow
              geometry={nodes.Mesh_44.geometry}
              material={materials.Light_pink}
            />
            <mesh
              name="Mesh_45"
              castShadow
              receiveShadow
              geometry={nodes.Mesh_45.geometry}
              material={materials.White}
            />
          </group>
          <group
            name="Book024"
            position={[-2.587, 1.324, -2.991]}
            rotation={[-0.028, 1.539, 1.583]}
            scale={[0.383, 1.467, 1.657]}
          >
            <mesh
              name="Mesh_42"
              castShadow
              receiveShadow
              geometry={nodes.Mesh_42.geometry}
              material={materials.Purple}
            />
            <mesh
              name="Mesh_43"
              castShadow
              receiveShadow
              geometry={nodes.Mesh_43.geometry}
              material={materials.White}
            />
          </group>
          <group
            name="Book025"
            position={[-2.587, 1.509, -3.273]}
            rotation={[-1.599, 1.539, 1.583]}
            scale={[0.613, 1.812, 1.624]}
          >
            <mesh
              name="Mesh_48"
              castShadow
              receiveShadow
              geometry={nodes.Mesh_48.geometry}
              material={materials.Blue}
            />
            <mesh
              name="Mesh_49"
              castShadow
              receiveShadow
              geometry={nodes.Mesh_49.geometry}
              material={materials.White}
            />
          </group>
          <group
            name="Book026"
            position={[-2.561, 1.371, -2.991]}
            rotation={[-0.004, 1.369, 1.56]}
            scale={[0.517, 1.467, 1.657]}
          >
            <mesh
              name="Mesh_54"
              castShadow
              receiveShadow
              geometry={nodes.Mesh_54.geometry}
              material={materials["Light_green.001"]}
            />
            <mesh
              name="Mesh_55"
              castShadow
              receiveShadow
              geometry={nodes.Mesh_55.geometry}
              material={materials.White}
            />
          </group>
          <group
            name="Book027"
            position={[-2.558, 1.422, -2.991]}
            rotation={[-3.141, -0.019, -1.586]}
            scale={[0.512, 1.384, 1.563]}
          >
            <mesh
              name="Mesh_52"
              castShadow
              receiveShadow
              geometry={nodes.Mesh_52.geometry}
              material={materials.Yellow}
            />
            <mesh
              name="Mesh_53"
              castShadow
              receiveShadow
              geometry={nodes.Mesh_53.geometry}
              material={materials.White}
            />
          </group>
          <group
            name="Book028"
            position={[-2.535, 1.476, -2.971]}
            rotation={[-3.141, -0.168, -1.586]}
            scale={[0.512, 1.384, 1.259]}
          >
            <mesh
              name="Mesh_50"
              castShadow
              receiveShadow
              geometry={nodes.Mesh_50.geometry}
              material={materials.Pink_red}
            />
            <mesh
              name="Mesh_51"
              castShadow
              receiveShadow
              geometry={nodes.Mesh_51.geometry}
              material={materials.White}
            />
          </group>
          <group
            name="Book029"
            position={[-2.587, 1.996, -3.17]}
            rotation={[-1.599, 1.539, 1.583]}
            scale={[0.908, 1.429, 2.047]}
          >
            <mesh
              name="Mesh_56"
              castShadow
              receiveShadow
              geometry={nodes.Mesh_56.geometry}
              material={materials.Strong_pink}
            />
            <mesh
              name="Mesh_57"
              castShadow
              receiveShadow
              geometry={nodes.Mesh_57.geometry}
              material={materials.White}
            />
          </group>
          <group
            name="Book030"
            position={[-2.587, 2.009, -3.098]}
            rotation={[-1.599, 1.539, 1.583]}
            scale={[0.486, 1.597, 1.927]}
          >
            <mesh
              name="Mesh_62"
              castShadow
              receiveShadow
              geometry={nodes.Mesh_62.geometry}
              material={materials["Brown.001"]}
            />
            <mesh
              name="Mesh_63"
              castShadow
              receiveShadow
              geometry={nodes.Mesh_63.geometry}
              material={materials.White}
            />
          </group>
          <group
            name="Book031"
            position={[-2.587, 2.009, -2.833]}
            rotation={[-1.422, 1.539, 1.583]}
            scale={[0.486, 1.597, 1.597]}
          >
            <mesh
              name="Mesh_60"
              castShadow
              receiveShadow
              geometry={nodes.Mesh_60.geometry}
              material={materials.Yellow}
            />
            <mesh
              name="Mesh_61"
              castShadow
              receiveShadow
              geometry={nodes.Mesh_61.geometry}
              material={materials.White}
            />
          </group>
          <group
            name="Book032"
            position={[-2.587, 2.001, -2.902]}
            rotation={[-1.422, 1.539, 1.583]}
            scale={[0.826, 1.456, 1.269]}
          >
            <mesh
              name="Mesh_58"
              castShadow
              receiveShadow
              geometry={nodes.Mesh_58.geometry}
              material={materials.Light_green_blue}
            />
            <mesh
              name="Mesh_59"
              castShadow
              receiveShadow
              geometry={nodes.Mesh_59.geometry}
              material={materials.White}
            />
          </group>
          <group
            name="Book033"
            position={[-2.587, 1.966, -3.066]}
            rotation={[-1.599, 1.539, 1.583]}
            scale={[0.223, 1.146, 1.926]}
          >
            <mesh
              name="Mesh_64"
              castShadow
              receiveShadow
              geometry={nodes.Mesh_64.geometry}
              material={materials["Mid-blue"]}
            />
            <mesh
              name="Mesh_65"
              castShadow
              receiveShadow
              geometry={nodes.Mesh_65.geometry}
              material={materials.White}
            />
          </group>
          <group
            name="Book034"
            position={[-2.587, 1.984, -3.028]}
            rotation={[-1.69, 1.539, 1.583]}
            scale={[0.331, 1.394, 1.44]}
          >
            <mesh
              name="Mesh_68"
              castShadow
              receiveShadow
              geometry={nodes.Mesh_68.geometry}
              material={materials["Blue.001"]}
            />
            <mesh
              name="Mesh_69"
              castShadow
              receiveShadow
              geometry={nodes.Mesh_69.geometry}
              material={materials.White}
            />
          </group>
          <group
            name="Book035"
            position={[-2.533, 0.385, -2.633]}
            rotation={[-1.77, 1.539, 1.583]}
            scale={[0.908, 1.813, 1.585]}
          >
            <mesh
              name="Mesh_70"
              castShadow
              receiveShadow
              geometry={nodes.Mesh_70.geometry}
              material={materials["Material.002"]}
            />
            <mesh
              name="Mesh_71"
              castShadow
              receiveShadow
              geometry={nodes.Mesh_71.geometry}
              material={materials.White}
            />
          </group>
          <group
            name="Book036"
            position={[-2.587, 0.361, -2.355]}
            rotation={[-1.523, 1.539, 1.583]}
            scale={[0.729, 1.678, 1.643]}
          >
            <mesh
              name="Mesh_66"
              castShadow
              receiveShadow
              geometry={nodes.Mesh_66.geometry}
              material={materials.Mat_black}
            />
            <mesh
              name="Mesh_67"
              castShadow
              receiveShadow
              geometry={nodes.Mesh_67.geometry}
              material={materials.White}
            />
          </group>
          <group
            name="Book037"
            position={[-2.529, 0.324, -2.259]}
            rotation={[-1.523, 1.539, 1.583]}
            scale={[1.195, 1.408, 1.462]}
          >
            <mesh
              name="Mesh_72"
              castShadow
              receiveShadow
              geometry={nodes.Mesh_72.geometry}
              material={materials.Purple}
            />
            <mesh
              name="Mesh_73"
              castShadow
              receiveShadow
              geometry={nodes.Mesh_73.geometry}
              material={materials.White}
            />
          </group>
          
          <LightStrip/>
        </group>

        <OpenBook />
        {/* <group 
        position={[-0.726, 1.323, -2.964]}
        rotation={[0, 0.208, 0]}
        scale={1.54}>
        <ContactCard materials={materials} nodes={nodes}/>

        </group> */}
        
        <ContactCard nodes={nodes} materials={materials} isDarkMode={isDarkMode}/>
        

        </RigidBody>

        </>
        
    );
}

export default Table;

