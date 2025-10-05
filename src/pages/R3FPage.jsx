import { Canvas } from "@react-three/fiber"
import { OrbitControls, Loader } from "@react-three/drei"
import useOrientation from "@/hooks/useOrientation"

export default function R3FPage(){
    const [isPortrait] = useOrientation()
    return (
        <div className="h-dvh" >
            <Canvas >
                <color attach="background" args={['lightblue']} />
                <OrbitControls />
                <mesh>
                    <boxGeometry args={[1,1,1]} />
                    <meshNormalMaterial />
                </mesh>
            </Canvas>
            <Loader />
        </div>
    )
}