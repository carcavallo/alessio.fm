const PortfolioBadge = () => {
    return (
      <Canvas>
        <Suspense fallback={<CanvasLoader />}>
          <ambientLight intensity={0.5} />
          <directionalLight position={[0, 5, 5]} />
          <Float speed={2} rotationIntensity={1.5} floatIntensity={2}>
            <mesh castShadow receiveShadow>
              <circleGeometry args={[1, 32]} />
              <meshStandardMaterial color="#915EFF" />
              <Decal
                position={[0, 0, 0]}
                scale={0.8}
                map={useTexture('/path-to-logo.png')}
              />
            </mesh>
          </Float>
          <OrbitControls enableZoom={false} />
        </Suspense>
        <Preload all />
      </Canvas>
    );
  };
  
  export default PortfolioBadge;
  