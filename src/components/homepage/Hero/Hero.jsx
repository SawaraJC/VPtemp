import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Sphere } from "@react-three/drei";
import { pointsInner, pointsOuter } from "./utils";

const Hero = () => {
  return (
    <div id="Home">
      <div className="relative">
        <Canvas
          camera={{
            position: [0, -27.5, -25],
            // fov:50,
            zoom: 3,
            near: 1,
            far: 100,
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
        <div className="logoWrapper absolute flex flex-col items-center w-screen">
          <div className="   ">
            <img
              src="https://res.cloudinary.com/da5mmxnn3/image/upload/v1703051189/VP%2724/VP24_logo_oiho56.png"
              className="md:w-[50rem]   lg:w-[25rem]  filter brightness-110 contrast-150 w-[20rem]"
            />
          </div>

          <div className=" ">
            <img
              src="https://res.cloudinary.com/da5mmxnn3/image/upload/v1703221409/VP%2724/Vishwapreneur_24_nfl766.png"
              className="w-[20rem] md:w-[54rem] lg:w-[60rem] filter brightness-120 contrast-150"
            />
          </div>
        </div>
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