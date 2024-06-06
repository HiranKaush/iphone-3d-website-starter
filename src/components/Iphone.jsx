import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';



const Model = () => {
  const gltf = useGLTF('/public/models/iphone_14_pro.glb');

  return (
    <primitive object={gltf.scene} />
  );
};

export default Model;
