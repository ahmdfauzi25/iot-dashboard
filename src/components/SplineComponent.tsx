'use client'
import Spline from "@splinetool/react-spline";

export default function SplineComponent() {
  return (
    <div className="h-screen">
      <Spline
        scene="https://prod.spline.design/gqXgyvLfSRoCyzDC/scene.splinecode" 
      />
    </div>
  );
}