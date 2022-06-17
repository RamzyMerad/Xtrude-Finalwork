import React from 'react';
import { Canvas,useThree } from '@react-three/fiber';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader'
import { useLoader } from '@react-three/fiber'
import { OrbitControls } from "@react-three/drei";
import { TextureLoader } from 'three/src/loaders/TextureLoader'
import "./style.scss";
const Viewer = () => {
  function Scene() {
    const obj = useLoader(OBJLoader, './3D/Human.obj')
    return <primitive object={obj} />
  }
  
  return (
    <div id="canvas-container">
     
    <Canvas flat dpr={[1,2]} camera={{fov:35,position:[50,50,50]}}>
    <color attach="background" args ={['']}/>

    <ambientLight intensity={0.3}/>
    <directionalLight color="white" position={[-20, 0, 0]} intensity={0.3} />
    <directionalLight color="white" position={[20, 0, 0]} intensity={0.3}/>
    <directionalLight color="white" position={[0, 20, 0]} intensity={0.3}/>
    <directionalLight color="white" position={[0, 0, 20]} intensity={0.3}/>
    <directionalLight color="white" position={[0, 0, -20]} intensity={0.3}/>
      {/* <mesh >
        <boxGeometry args={[2, 2, 2]}/>
        <meshStandardMaterial />
      </mesh> */}
    
      <OrbitControls/>
      <Scene/> 
        
    </Canvas>

  </div>
  );
}

export default Viewer;
