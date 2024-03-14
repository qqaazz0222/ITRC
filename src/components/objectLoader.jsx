import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import Earth from "../../public/Earth";

const EarthLoader = () => {
    return (
        <Canvas>
            <ambientLight />
            <OrbitControls />
            <Suspense fallback={null}>
                <Earth />
            </Suspense>
            <Environment />
        </Canvas>
    );
};

export { EarthLoader };
