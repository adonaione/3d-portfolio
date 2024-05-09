import { useState, useRef, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial, Preload } from '@react-three/drei';
import * as random from 'match/random/dist/maath-random.esm';
import { Group } from 'three/examples/jsm/libs/tween.module.js';

const Stars = () => {
  const ref = useRef();

  const sphere = random.inSphere(new Float32Array(5000), { radius }
  return (
    <group>
      <Points ref={ref} positions={sphere} />
    </group>
  )
}

const StarsCanvas = () => {
  return (
    <div className='w-full h-full absolute inset-0 z-[-1]'>
      <Canvas camera={{ position: [0, 0, 1]}}>
        <Suspense fallback={null}>
          <Stars />
        </Suspense>
      </Canvas>
    </div>
  )
}

export default StarsCanvas