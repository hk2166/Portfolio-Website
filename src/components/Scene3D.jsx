import { Canvas } from "@react-three/fiber";
import { Float, MeshDistortMaterial } from "@react-three/drei";

export function Scene3D() {
  return (
    <div className="absolute inset-0 -z-10">
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <pointLight
          position={[-10, -10, -10]}
          intensity={0.5}
          color="#39ff14"
        />

        {/* Floating Icosahedron */}
        <Float speed={1.5} rotationIntensity={1} floatIntensity={2}>
          <mesh position={[-2, 0, 0]} scale={0.8}>
            <icosahedronGeometry args={[1, 1]} />
            <MeshDistortMaterial
              color="#39ff14"
              emissive="#39ff14"
              emissiveIntensity={0.5}
              distort={0.3}
              speed={2}
              roughness={0.4}
            />
          </mesh>
        </Float>

        {/* Floating Torus */}
        <Float speed={1} rotationIntensity={0.5} floatIntensity={1}>
          <mesh position={[2, 1, -1]} scale={0.6}>
            <torusGeometry args={[1, 0.3, 16, 100]} />
            <meshStandardMaterial
              color="#ffffff"
              metalness={0.9}
              roughness={0.1}
              emissive="#39ff14"
              emissiveIntensity={0.2}
            />
          </mesh>
        </Float>
      </Canvas>
    </div>
  );
}
