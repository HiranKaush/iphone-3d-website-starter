import React, { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Environment } from "@react-three/drei";
import Model from "./Iphone";
import "../styles/Phone.css";

const Phone = () => {
  return (
    <div className="page-container">
      <h1 className="title"> iPhone 14 Pro</h1>
      <div className="model-container">
        <Canvas>
          <RotationControlledModel />
        </Canvas>
      </div>
      <div className="description">
        <h2>Specifications:</h2>
        <ul>
          <li>Display: 6.7-inch Super Retina XDR display</li>
          <li>Processor: A15 Bionic chip</li>
          <li>Camera: Triple 12MP camera system with Night mode</li>
          <li>Battery: Up to 2 days of battery life</li>
          <li>Connectivity: 5G capable</li>
          <li>Storage: Up to 1TB</li>
        </ul>
      </div>
      <button className="button">
        Add to cart
      </button>
    </div>
  );
};

const RotationControlledModel = () => {
  const groupRef = useRef();

  useFrame(() => {
    groupRef.current.rotation.y += 0.005; 
    groupRef.current.rotation.x += 0.005;
  });

  return (
    <group ref={groupRef} scale={[30, 30, 30]}>
      <ambientLight intensity={1} />
      <OrbitControls enableZoom={false} />
      <Suspense fallback={null}>
        <Model />
      </Suspense>
      <Environment preset="sunset" />
    </group>
  );
};

export default Phone;
