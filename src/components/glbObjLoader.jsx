import { Canvas, useFrame } from "@react-three/fiber";
import { Suspense, useRef } from "react";
import { OrbitControls, Environment, Clone } from "@react-three/drei";
import { useGLTF } from "@react-three/drei";

const Models = [{ name: "brain", url: "/models/Brain.glb" }];

const Model = ({ url }) => {
    const { scene } = useGLTF(url);
    return <Clone object={scene} />;
};

export default function Page() {
    return (
        <div className="w-ful h-screen">
            <Canvas camera={{ position: [10, 10, 1000], near: 1 }}>
                <Suspense>
                    <pointLight position={[10, 10, 10]} />
                    <Model url={Models[0].url} />
                    <ambientLight intensity={1} />
                </Suspense>
                <OrbitControls />
                <Environment />
            </Canvas>
        </div>
    );
}
