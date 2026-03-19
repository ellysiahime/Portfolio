import React from "react";
import { useState } from "react"

export function GlowWrapper({
    children,
    className = "",
  }: {
    children: React.ReactNode
    className?: string
  }) {
    const [pos, setPos] = useState({ x: 0, y: 0 })
  
    return (
      <div
        className={`glow-card ${className}`}
        onMouseMove={(e) => {
          const rect = e.currentTarget.getBoundingClientRect()
          setPos({
            x: e.clientX - rect.left,
            y: e.clientY - rect.top,
          })
        }}
        style={
          {
            "--x": `${pos.x}px`,
            "--y": `${pos.y}px`,
          } as React.CSSProperties
        }
      >
        {children}
      </div>
    )
  }