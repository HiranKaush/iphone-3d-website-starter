import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';



const Model2 = () => {
  const gltf = useGLTF('/public/models/iphone_15_pro_max.glb');

  return (
    <primitive object={gltf.scene} />
  );
};

export default Model2;
