import { Decal, Float, OrbitControls, Preload, useTexture } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"
import React, { Suspense } from "react"
import LoaderCanvas from "./Loader"

const BallCanvas = ({ icon }) => {
  return (
    <Canvas frameloop="demand" gl={{ preserveDrawingBuffer: true }}>
      <Suspense fallback={<LoaderCanvas />}>
        <OrbitControls enableZoom={false} />
        <Ball imgUrl={icon} />
      </Suspense>
      <Preload />
    </Canvas>
  )
}

function Ball({ imgUrl }) {
  const [decal] = useTexture([imgUrl])

  return (
    <Float
      speed={1} // Animation speed, defaults to 1
      rotationIntensity={1} // XYZ rotation intensity, defaults to 1
      floatIntensity={2} // Up/down float intensity, works like a multiplier with floatingRange,defaults to 1
    >
      <ambientLight intensity={0.5} />
      <directionalLight position={[0, 0, 0.05]} />
      <mesh castShadow receiveShadow scale={2.75}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial color="#fff8eb" polygonOffset polygonOffsetFactor={-5} flatShading />
        <Decal map={decal} rotation={[2 * Math.PI, 0, 6.25]} position={[0, 0, 1]} />
      </mesh>
    </Float>
  )
}

export default BallCanvas
