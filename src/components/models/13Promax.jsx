import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';



const Model1 = () => {
  const gltf = useGLTF('/public/models/apple_iphone_13_pro_max.glb');

  return (
    <primitive object={gltf.scene} />
  );
};

export default Model1;
