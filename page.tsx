'use client';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Box } from '@react-three/drei';

export default function Home() {
  return (
    <main style={{ height: "100vh", background: "#0f0f0f", color: "white" }}>
      <h1 style={{ textAlign: "center", paddingTop: "20px", color: "#facc15" }}>
        शुद्ध देसी दुकान
      </h1>
      <p style={{ textAlign: "center" }}>
        Code bhi desi, logic bhi tez 🚀
      </p>

      <Canvas style={{ height: "80vh" }}>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <Box args={[2, 2, 2]}>
          <meshStandardMaterial color="orange" />
        </Box>
        <OrbitControls />
      </Canvas>
    </main>
  );
}
