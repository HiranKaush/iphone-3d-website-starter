import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';



const IphoneSE = () => {
  const gltf = useGLTF('/public/models/iphone_se_3.glb');

  return (
    <primitive object={gltf.scene} />
  );
};

export default IphoneSE;
