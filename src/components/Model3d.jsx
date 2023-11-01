import { useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { Model } from './Scenes'
 
export default function Model3d() {
 
 
 
  return (
  
    <Canvas style={{ backgroundColor: '#13080E' , height:'25rem'}}>
      <ambientLight intensity={0.9} />
      <spotLight position={[11, 18, 11]} angle={0.15} />
      <pointLight position={[10, 10, 10]} />
     
        <Model  scale={[2,2,2]} position={[0,-1.4,0]} rotation={[-Math.PI, 3.09, -Math.PI]}/>
   
      <OrbitControls enableZoom={false}/>
    </Canvas>
   )
}
