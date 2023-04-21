import { Html, useProgress } from "@react-three/drei"
import React from "react"

function LoaderCanvas() {
  const { progress } = useProgress()
  return (
    <Html>
      <span></span>
      <p style={{ fontSize: 22, color: "#f1f1f1", fontWeight: 800, marginTop: 40 }}>{progress.toFixed(2)}%</p>
    </Html>
  )
}

export default LoaderCanvas
