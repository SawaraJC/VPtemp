import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Sphere } from "@react-three/drei";
import { pointsInner, pointsOuter } from "./utils";

const Hero = () => {
  return (
    <div className="relative">
            <Canvas
        camera={{
          position: [0, -27.5, -25],
          // fov:50,
          zoom:3,
          near:1,
          far:100
        }}
        style={{ height: "100vh" }}
        className="bg-black" // Add a gradient background
      >
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          enableRotate={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <directionalLight intensity={1.5} position={[10, 10, 10]} />
        <pointLight position={[-30, 0, -30]} power={10.0} />
        <PointCircle />

      </Canvas>

      <div className="lg:-translate-y-[33rem] lg:translate-x-[32rem] translate-x-6 -translate-y-[40rem] absolute z-10">
          <img src='https://res.cloudinary.com/da5mmxnn3/image/upload/v1703051189/VP%2724/VP24_logo_oiho56.png' className="md:w-[50rem] md:ml-7 md:-translate-y-[30rem] lg:-ml-2 lg:-translate-y-[0rem] lg:w-[25rem] mx-auto filter brightness-110 contrast-150 w-[20rem]"/>
        </div>

      
      <div className="absolute lg:-translate-y-40 -translate-y-[20rem] -translate-x-32 lg:translate-x-0">
        <img src="https://res.cloudinary.com/da5mmxnn3/image/upload/v1703221409/VP%2724/Vishwapreneur_24_nfl766.png" className="w-[20rem] md:w-[54rem] lg:w-[60rem] ml-36 lg:ml-52 mt-5 filter brightness-120 contrast-150"/>
      </div>
    </div>
  );
};

const PointCircle = () => {
  const ref = useRef(null);

  useFrame(({ clock }) => {
    if (ref.current?.rotation) {
      ref.current.rotation.z = clock.getElapsedTime() * 0.05;
    }
  });

  return (
    <group ref={ref}>
      {pointsInner.map((point) => (
        <Point key={point.idx} position={point.position} color={point.color} />
      ))}
      {pointsOuter.map((point) => (
        <Point key={point.idx} position={point.position} color={point.color} />
      ))}
    </group>
  );
};

const Point = ({ position, color }) => {
  return (
    <Sphere position={position} args={[0.1, 10, 10]}>
      <meshStandardMaterial
        emissive={color}
        emissiveIntensity={0.5}
        roughness={0.5}
        color={color}
      />
    </Sphere>
  );
};

export default Hero;