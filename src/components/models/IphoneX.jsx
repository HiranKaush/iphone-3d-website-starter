import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';



const IphoneX = () => {
  const gltf = useGLTF('/public/models/iphone_x.glb');

  return (
    <primitive object={gltf.scene} />
  );
};

export default IphoneX;
