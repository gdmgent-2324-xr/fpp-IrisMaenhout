import * as THREE from 'three';
import React, { Suspense, useRef, useMemo } from 'react';
import { Canvas, extend, useThree, useLoader, useFrame } from '@react-three/fiber';
import { OrbitControls, Sky } from '@react-three/drei';
import { Water } from 'three-stdlib';

extend({ Water });

export function Ocean(): JSX.Element {
  const ref = useRef<THREE.Mesh>();
  const gl = useThree((state) => state.gl);
  const waterNormals = useLoader(THREE.TextureLoader, './waternormals.jpeg') as THREE.Texture;
  waterNormals.wrapS = waterNormals.wrapT = THREE.RepeatWrapping;
  const geom = useMemo(() => new THREE.PlaneGeometry(10000, 10000), []);
  const config = useMemo(
    () => ({
      textureWidth: 512,
      textureHeight: 512,
      waterNormals,
      sunDirection: new THREE.Vector3(),
      sunColor: 0xffffff,
      waterColor: 0x001e0f,
      distortionScale: 3.7,
      fog: false,
      format: (gl as any).encoding || THREE.LinearEncoding,
    }),
    [waterNormals, gl]
  );


  useFrame((_, delta) => {
    if (ref.current && ref.current.material instanceof THREE.ShaderMaterial) {
      const material = ref.current.material as THREE.ShaderMaterial;
      if (material.uniforms) {
        material.uniforms.time.value += delta;
      }
    }
  });

  // Use React.createElement to manually create the water element
  return React.createElement('water', { ref, args: [geom, config], rotation: [-Math.PI / 2, 0, 0] });
}
