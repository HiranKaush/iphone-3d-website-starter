import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';



const Iphone11 = () => {
  const gltf = useGLTF('/public/models/iphone_11.glb');

  return (
    <primitive object={gltf.scene} />
  );
};

export default Iphone11;
