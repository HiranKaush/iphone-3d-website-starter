import React, { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Environment } from "@react-three/drei";
import Model1 from "../components/models/13Promax";
import Model2 from "../components/models/13Pro";
import Model3 from "../components/Iphone";
import IphoneX from "../components/models/IphoneX";
import Iphone11 from "../components/models/Iphone11";
import IphoneSE from "../components/models/IphoneSE";
import "../styles/Store.css";

const RotatingModel = ({ children, scale }) => {
    const groupRef = useRef();
    useFrame(() => {
        groupRef.current.rotation.y -= 0.01; // Adjust the rotation speed here
    });

    return (
        <group ref={groupRef} scale={scale}>
            {children}
        </group>
    );
};

const RotatingModel2 = ({ children, scale }) => {
    const groupRef = useRef();
    useFrame(() => {
        groupRef.current.rotation.y += 0.02; // Adjust the rotation speed here
    });

    return (
        <group ref={groupRef} scale={scale}>
            {children}
        </group>
    );
};

const modelsData = [
    {
        name: "Iphone SE",
        price: "$399",
        component: IphoneSE,
        scale: [0.8, 0.8, 0.8],
        rotationDirection: 'reverse'
    },
    {
        name: "Iphone X",
        price: "$599",
        component: IphoneX,
        scale: [5, 5, 5],
        rotationDirection: 'reverse'
    },
    {
        name: "Iphone 11",
        price: "$699",
        component: Iphone11,
        scale: [1.5, 1.5, 1.5],
        rotationDirection: 'reverse'
    },
    {
        name: "Iphone 11 Pro Max",
        price: "$999",
        component: Model3,
        scale: [18, 18, 18],
        rotationDirection: 'normal'
    },
    {
        name: "13 Pro Max",
        price: "$1099",
        component: Model1,
        scale: [3, 3, 3],
        rotationDirection: 'normal'
    },
    {
        name: "13 Pro",
        price: "$999",
        component: Model2,
        scale: [0.8, 0.8, 0.8],
        rotationDirection: 'normal'
    }
];

const Store = () => {
    return (
        <div className="page-container">
            <h1 className="store-title">Welcome to the Store</h1>
            <div className="grid-container">
                {modelsData.map((model, index) => {
                    const ModelComponent = model.component;
                    const RotatingComponent = model.rotationDirection === 'normal' ? RotatingModel : RotatingModel2;
                    return (
                        <div className="grid-item" key={index}>
                            <Canvas>
                                <RotatingComponent scale={model.scale}>
                                    <ambientLight intensity={1} />
                                    <OrbitControls />
                                    <Suspense fallback={null}>
                                        <ModelComponent />
                                    </Suspense>
                                    <Environment preset="sunset" />
                                </RotatingComponent>
                            </Canvas>
                            <div className="product-info">
                                <h2>{model.name}</h2>
                                <p>{model.price}</p>
                                <button>Add to Cart</button>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Store;
