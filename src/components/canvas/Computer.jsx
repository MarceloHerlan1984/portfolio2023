import { PresentationControls, OrbitControls, Preload, useGLTF } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"
import React, { Suspense, useEffect, useState } from "react"
import LoaderCanvas from "./Loader"

function Computer({ isMobile }) {
  const model = useGLTF("./desktop_pc/scene.gltf")
  return (
    <mesh>
      <hemisphereLight intensity={0.3} groundColor="black" />
      <pointLight intensity={1} />
      <primitive
        object={model.scene}
        scale={isMobile ? 0.55 : 0.75}
        position={isMobile ? [0, -3, -2.2] : [0, -3.25, -1.5]}
        rotation={[-0.01, -0.2, -0.1]}
      />{" "}
    </mesh>
  )
}

export const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width:500px)")
    setIsMobile(mediaQuery.matches)

    const handleMediaQueryChange = (e) => {
      setIsMobile(e.matches)
    }

    mediaQuery.addEventListener("change", handleMediaQueryChange)

    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange)
    }
  }, [])
  return (
    <Canvas frameloop="demand" shadows camera={{ position: [20, 3, 5], fov: 25 }} gl={{ preserveDrawingBuffer: true }}>
      <Suspense fallback={<LoaderCanvas />}>
        <OrbitControls enableZoom={false} />
        <Computer isMobile={isMobile} />
      </Suspense>
      <Preload />
    </Canvas>
  )
}

export default Computer
