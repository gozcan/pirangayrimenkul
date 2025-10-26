import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { OrbitControls, Environment } from '@react-three/drei';
import { useRef, useMemo, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import * as THREE from 'three';

// Mouse pozisyonuna göre gece/gündüz geçişi
function DayNightCycle() {
  const { scene } = useThree();
  const [mouseX, setMouseX] = useState(0.5); // 0 (sol) ile 1 (sağ) arası
  const sunLightRef = useRef<THREE.DirectionalLight>(null);
  const moonLightRef = useRef<THREE.DirectionalLight>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Mouse X pozisyonunu 0-1 aralığına normalize et
      const normalizedX = e.clientX / window.innerWidth;
      setMouseX(normalizedX);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useFrame(() => {
    // 0 (sol/gece) -> 1 (sağ/gündüz)
    const dayProgress = mouseX;

    // Güneş ışığı (gündüz) - azaltıldı
    if (sunLightRef.current) {
      sunLightRef.current.intensity = dayProgress * 3; // 5'ten 3'e düşürüldü
    }

    // Ay ışığı (gece) - daha yumuşak
    if (moonLightRef.current) {
      moonLightRef.current.intensity = (1 - dayProgress) * 2.5;
    }

    // Gökyüzü arkaplan rengi - gece siyahından parlak gök mavisine
    const nightSky = new THREE.Color('#000814'); // Siyaha yakın gece
    const daySky = new THREE.Color('#87CEEB'); // Parlak gök mavisi gündüz
    scene.background = new THREE.Color().lerpColors(
      nightSky,
      daySky,
      dayProgress
    );

    // Arka plan fog rengi - gece siyahına yakın'dan parlak gök maviye
    if (scene.fog instanceof THREE.Fog) {
      const nightColor = new THREE.Color('#000814'); // Çok koyu
      const dayColor = new THREE.Color('#b3d9ff'); // Açık gök mavisi
      scene.fog.color.lerpColors(nightColor, dayColor, dayProgress);
    }

    // Ambient ışık - gece neredeyse yok, gündüz orta seviye
    scene.traverse((obj) => {
      if (obj instanceof THREE.AmbientLight) {
        obj.intensity = 0.05 + dayProgress * 0.5; // 0.05-0.55 arası (0.85'ten azaltıldı)
      }
    });
  });

  return (
    <>
      {/* Güneş ışığı - gündüz (sarımtırak, sıcak) */}
      <directionalLight
        ref={sunLightRef}
        position={[20, 15, 10]}
        intensity={0}
        color="#ffd700"
        castShadow
      />

      {/* Ay ışığı - gece (soğuk mavi) */}
      <directionalLight
        ref={moonLightRef}
        position={[-20, 10, -10]}
        intensity={2.5}
        color="#1e3a8a"
      />
    </>
  );
}

// Sinematik Kamera Animasyonu
function CinematicCamera() {
  const { camera } = useThree();
  const [time, setTime] = useState(0);

  useFrame((_state, delta) => {
    setTime((t) => t + delta * 0.2);

    // Yavaş sinüzoidal hareket - sağa sola sallanma
    const swayX = Math.sin(time) * 2;
    const swayY = Math.sin(time * 0.5) * 0.5 + 3;

    camera.position.x = swayX;
    camera.position.y = swayY;
    camera.position.z = 15 + Math.sin(time * 0.3) * 2; // Yakınlaş/uzaklaş

    camera.lookAt(0, 2, 0);
  });

  return null;
}

// Veri Partikülleri - Geliştirilmiş versiyon
function DataParticles() {
  const particlesRef = useRef<THREE.Points>(null);
  const particleCount = 300;
  const colorsRef = useRef<Float32Array>(new Float32Array());

  const particles = useMemo(() => {
    const positions = new Float32Array(particleCount * 3);
    const velocities = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);
    const sizes = new Float32Array(particleCount);

    for (let i = 0; i < particleCount; i++) {
      // Pozisyonlar
      positions[i * 3] = (Math.random() - 0.5) * 70;
      positions[i * 3 + 1] = Math.random() * 10;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 8;

      // Hızlar - daha yavaş ve organik
      velocities[i * 3] = (Math.random() - 0.5) * 0.015;
      velocities[i * 3 + 1] = Math.random() * 0.008 + 0.002; // Yukarı doğru
      velocities[i * 3 + 2] = (Math.random() - 0.5) * 0.015;

      // Renkler - mavi-mor gradient
      const colorVariant = Math.random();
      if (colorVariant < 0.4) {
        // Cyan
        colors[i * 3] = 0.26; // R
        colors[i * 3 + 1] = 0.71; // G
        colors[i * 3 + 2] = 0.88; // B
      } else if (colorVariant < 0.7) {
        // Blue
        colors[i * 3] = 0.26;
        colors[i * 3 + 1] = 0.65;
        colors[i * 3 + 2] = 0.96;
      } else {
        // Purple
        colors[i * 3] = 0.49;
        colors[i * 3 + 1] = 0.34;
        colors[i * 3 + 2] = 0.76;
      }

      // Boyutlar - varyasyonlu
      sizes[i] = Math.random() * 0.12 + 0.05;
    }

    colorsRef.current = colors;
    return { positions, velocities, sizes };
  }, []);

  useFrame((state) => {
    if (!particlesRef.current) return;

    const positions = particlesRef.current.geometry.attributes.position
      .array as Float32Array;
    const sizes = particlesRef.current.geometry.attributes.size
      .array as Float32Array;

    for (let i = 0; i < particleCount; i++) {
      // Partikül hareketi
      positions[i * 3] += particles.velocities[i * 3];
      positions[i * 3 + 1] += particles.velocities[i * 3 + 1];
      positions[i * 3 + 2] += particles.velocities[i * 3 + 2];

      // Sınırları kontrol et
      if (positions[i * 3] > 35) positions[i * 3] = -35;
      if (positions[i * 3] < -35) positions[i * 3] = 35;
      if (positions[i * 3 + 1] > 10) {
        positions[i * 3 + 1] = 0;
        positions[i * 3] = (Math.random() - 0.5) * 70;
        positions[i * 3 + 2] = (Math.random() - 0.5) * 8;
      }
      if (positions[i * 3 + 2] > 4) positions[i * 3 + 2] = -4;
      if (positions[i * 3 + 2] < -4) positions[i * 3 + 2] = 4;

      // Size pulse animasyonu
      const pulse = Math.sin(state.clock.elapsedTime * 2 + i * 0.1) * 0.5 + 0.5;
      sizes[i] = particles.sizes[i] + pulse * 0.03;
    }

    particlesRef.current.geometry.attributes.position.needsUpdate = true;
    particlesRef.current.geometry.attributes.size.needsUpdate = true;
  });

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particleCount}
          array={particles.positions}
          itemSize={3}
          args={[particles.positions, 3]}
        />
        <bufferAttribute
          attach="attributes-color"
          count={particleCount}
          array={colorsRef.current!}
          itemSize={3}
          args={[colorsRef.current!, 3]}
        />
        <bufferAttribute
          attach="attributes-size"
          count={particleCount}
          array={particles.sizes}
          itemSize={1}
          args={[particles.sizes, 1]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.1}
        vertexColors
        transparent
        opacity={0.8}
        sizeAttenuation={true}
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </points>
  );
}

// Atmosferik Sis/Bulutlar
function AtmosphericFog() {
  const cloudsRef = useRef<THREE.Points>(null);
  const cloudCount = 100;

  const clouds = useMemo(() => {
    const positions = new Float32Array(cloudCount * 3);

    for (let i = 0; i < cloudCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 80;
      positions[i * 3 + 1] = Math.random() * 12 - 2; // -2 ile 10 arası
      positions[i * 3 + 2] = (Math.random() - 0.5) * 10;
    }

    return positions;
  }, []);

  useFrame((state) => {
    if (!cloudsRef.current) return;

    // Yavaşça sağa kayıyor
    cloudsRef.current.rotation.y = state.clock.elapsedTime * 0.02;
  });

  return (
    <points ref={cloudsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={cloudCount}
          array={clouds}
          itemSize={3}
          args={[clouds, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={2}
        color="#1a237e"
        transparent
        opacity={0.25}
        sizeAttenuation={true}
      />
    </points>
  );
}

// Zemin - Cam Platform (Transparan, Parlak Yansımalı)
function Ground() {
  const platformRef = useRef<THREE.Mesh>(null);
  const reflectionRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    const time = state.clock.elapsedTime;

    // Cam platformda hafif dalga efekti
    if (
      platformRef.current &&
      platformRef.current.material instanceof THREE.MeshPhysicalMaterial
    ) {
      // Yansıma yoğunluğunda pulse
      const pulse = Math.sin(time * 0.8) * 0.3 + 0.7; // 0.4-1.0 arası
      platformRef.current.material.metalness = 0.1 + pulse * 0.2;
      platformRef.current.material.roughness = 0.02 + pulse * 0.05;
    }

    // Yansıma efektlerinde shimmer
    if (reflectionRef.current) {
      reflectionRef.current.children.forEach((child, i) => {
        if (
          child instanceof THREE.Mesh &&
          child.material instanceof THREE.MeshBasicMaterial
        ) {
          const shimmer = Math.sin(time * 2 + i * 0.5) * 0.5 + 0.5;
          child.material.opacity = 0.1 + shimmer * 0.15;
        }
      });
    }
  });

  return (
    <group>
      {/* Ana cam platform - Fiziksel cam materyal */}
      <mesh
        ref={platformRef}
        position={[0, -0.15, 0]}
        receiveShadow
      >
        <boxGeometry args={[100, 0.3, 20]} />
        <meshPhysicalMaterial
          color="#e3f2fd"
          metalness={0.2}
          roughness={0.05}
          transmission={0.9} // Transparan cam efekti
          thickness={0.5}
          transparent
          opacity={0.3}
          clearcoat={1.0}
          clearcoatRoughness={0.1}
          reflectivity={1.0}
          ior={1.5} // Cam kırılma indeksi
        />
      </mesh>

      {/* Alt glow katmanı - Cam altında ışık */}
      <mesh position={[0, -0.35, 0]}>
        <boxGeometry args={[100, 0.05, 20]} />
        <meshBasicMaterial
          color="#1976d2"
          transparent
          opacity={0.4}
        />
      </mesh>

      {/* Yansıma çizgileri - İnce detaylar */}
      <group ref={reflectionRef}>
        {/* X ekseni yansıma çizgileri */}
        {Array.from({ length: 15 }).map((_, i) => (
          <mesh
            key={`reflect-x-${i}`}
            position={[-35 + i * 5, -0.05, 0]}
          >
            <boxGeometry args={[0.03, 0.01, 20]} />
            <meshBasicMaterial
              color="#64b5f6"
              transparent
              opacity={0.2}
            />
          </mesh>
        ))}

        {/* Z ekseni yansıma çizgileri */}
        {Array.from({ length: 7 }).map((_, i) => (
          <mesh
            key={`reflect-z-${i}`}
            position={[0, -0.05, -9 + i * 3]}
          >
            <boxGeometry args={[100, 0.01, 0.03]} />
            <meshBasicMaterial
              color="#90caf9"
              transparent
              opacity={0.15}
            />
          </mesh>
        ))}
      </group>

      {/* Kenar parlak çizgiler - Cam sınırları */}
      <mesh position={[0, -0.05, -10]}>
        <boxGeometry args={[100, 0.1, 0.1]} />
        <meshStandardMaterial
          color="#bbdefb"
          metalness={0.8}
          roughness={0.1}
          emissive="#42a5f5"
          emissiveIntensity={0.5}
          transparent
          opacity={0.7}
        />
      </mesh>
      <mesh position={[0, -0.05, 10]}>
        <boxGeometry args={[100, 0.1, 0.1]} />
        <meshStandardMaterial
          color="#bbdefb"
          metalness={0.8}
          roughness={0.1}
          emissive="#42a5f5"
          emissiveIntensity={0.5}
          transparent
          opacity={0.7}
        />
      </mesh>

      {/* Köşe ışıkları - Yumuşak mavi aydınlatma */}
      <pointLight
        position={[-45, 0.5, -9]}
        color="#90caf9"
        intensity={3}
        distance={10}
      />
      <pointLight
        position={[45, 0.5, -9]}
        color="#64b5f6"
        intensity={3}
        distance={10}
      />
      <pointLight
        position={[-45, 0.5, 9]}
        color="#42a5f5"
        intensity={3}
        distance={10}
      />
      <pointLight
        position={[45, 0.5, 9]}
        color="#1976d2"
        intensity={3}
        distance={10}
      />

      {/* Merkez cam detayı - Donuk yansıma */}
      <mesh
        position={[0, -0.1, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
      >
        <circleGeometry args={[4, 64]} />
        <meshPhysicalMaterial
          color="#e3f2fd"
          metalness={0.3}
          roughness={0.1}
          transmission={0.7}
          transparent
          opacity={0.2}
          clearcoat={1.0}
          side={THREE.DoubleSide}
        />
      </mesh>

      {/* İç halka - Detay */}
      <mesh
        position={[0, -0.08, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
      >
        <ringGeometry args={[2, 2.2, 64]} />
        <meshBasicMaterial
          color="#90caf9"
          transparent
          opacity={0.4}
          side={THREE.DoubleSide}
        />
      </mesh>
    </group>
  );
}

// Tek Bina - Random Bağımsız Animasyon (veya statik)
function Building({ position, height, color, delay, speed, isStatic }: any) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current && !isStatic) {
      const time = state.clock.elapsedTime * speed + delay;

      // Her bina kendi hızında ve fazında hareket eder
      const cycle = (Math.sin(time) + 1) / 2; // 0 ile 1 arasında
      const currentScale = cycle;

      meshRef.current.scale.y = currentScale;
      // Zeminden başlasın - position.y her zaman scale ile orantılı
      meshRef.current.position.y = (height / 2) * currentScale;
    } else if (meshRef.current && isStatic) {
      // Statik binalar zeminde sabit dursun - scale 1, position height/2
      meshRef.current.scale.y = 1;
      meshRef.current.position.y = height / 2;
      meshRef.current.position.y = height / 2;
    }
  });

  return (
    <group position={position}>
      {/* Ana bina */}
      <mesh
        ref={meshRef}
        position={[0, height / 2, 0]}
      >
        <boxGeometry args={[1.2, height, 1.2]} />
        <meshStandardMaterial
          color={color}
          metalness={0.6}
          roughness={0.4}
          emissive={color}
          emissiveIntensity={isStatic ? 0.2 : 0.35}
        />
      </mesh>
    </group>
  );
}

// Şehir Skyline - Ekran Genişliğinde
function ClonerCity() {
  const buildings = useMemo(() => {
    const buildingArray = [];
    const gridWidth = 20; // Azaltıldı: 35'ten 20'ye
    const gridDepth = 3; // Azaltıldı: 4'ten 3'e
    const spacing = 1.5; // Arttırıldı: 0.5'ten 1.5'e

    for (let x = -gridWidth; x <= gridWidth; x++) {
      for (let z = -gridDepth; z <= gridDepth; z++) {
        // Merkeze yakın binaları daha yüksek yap
        const centerDistance = Math.abs(x) / gridWidth;
        const depthFactor = 1 - (Math.abs(z) / gridDepth) * 0.3;

        // Yükseklik - daha düşük max (6 yerine 10)
        const heightCurve = Math.pow(1 - centerDistance, 0.9);
        const baseHeight = 0.6 + Math.random() * 6 * heightCurve * depthFactor;

        // Geliştirilmiş mavi-mor gradient tonlar
        const hue = 0.55 + Math.random() * 0.15; // 0.55-0.70 = mavi'den mor'a
        const saturation = 0.75 + Math.random() * 0.2;
        const lightness = 0.35 + heightCurve * 0.35 + Math.random() * 0.15;

        const color = new THREE.Color().setHSL(hue, saturation, lightness);

        // %30 ihtimalle statik bina (animasyon yok)
        const isStatic = Math.random() < 0.3;

        // Tamamen random delay ve speed - sadece animasyonlu binalar için
        const delay = Math.random() * Math.PI * 2; // 0 - 2π arası random faz
        const speed = 0.15 + Math.random() * 0.25; // 0.15 - 0.4 arası (önceden 0.3 - 0.8)

        buildingArray.push({
          position: [x * spacing, 0, z * spacing],
          height: baseHeight,
          color: '#' + color.getHexString(),
          delay: delay,
          speed: speed,
          isStatic: isStatic,
        });
      }
    }

    return buildingArray;
  }, []);

  return (
    <group>
      {buildings.map((building, i) => (
        <Building
          key={i}
          position={building.position}
          height={building.height}
          color={building.color}
          delay={building.delay}
          speed={building.speed}
          isStatic={building.isStatic}
        />
      ))}
    </group>
  );
}

// Ana Sahne - Yan Görünüm Lighting
function Scene() {
  return (
    <>
      {/* Gece/Gündüz sistemi */}
      <DayNightCycle />

      {/* Düşük ambient - dinamik olarak değişecek */}
      <ambientLight intensity={0.1} />

      {/* Modern accent lights - gece modunda daha belirgin */}
      <pointLight
        position={[0, 8, 5]}
        intensity={1.5}
        color="#42a5f5"
        distance={40}
        decay={1.5}
      />
      <pointLight
        position={[-15, 6, 0]}
        intensity={2}
        color="#7e57c2"
        distance={30}
        decay={1.5}
      />
      <pointLight
        position={[15, 6, 0]}
        intensity={2}
        color="#5c6bc0"
        distance={30}
        decay={1.5}
      />

      <ClonerCity />
      <Ground />
      <DataParticles />
      <AtmosphericFog />
      <CinematicCamera />

      <Environment
        preset="night"
        environmentIntensity={0.1}
      />
      <fog
        attach="fog"
        args={['#000814', 8, 35]}
      />
    </>
  );
}

export default function HeroSpline() {
  return (
    <div className="relative w-full h-screen bg-gradient-to-b from-gray-950 via-slate-950 to-black overflow-hidden">
      {/* 3D Canvas - Tam Ekran */}
      <div className="absolute inset-0">
        <Canvas
          camera={{ position: [0, 3, 15], fov: 60 }}
          gl={{
            antialias: true,
            alpha: true,
            outputColorSpace: THREE.SRGBColorSpace,
          }}
        >
          <Scene />
          <OrbitControls
            enableZoom={true}
            enablePan={false}
            autoRotate={false}
            enabled={false}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2.5}
            maxDistance={25}
            minDistance={10}
            target={[0, 2, 0]}
            enableDamping={false}
            makeDefault
          />
        </Canvas>
      </div>

      {/* Content Overlay - Minimalist */}
      <div className="relative z-10 flex flex-col justify-between h-screen px-8 py-12 pointer-events-none">
        {/* Üst Kısım */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="pointer-events-auto flex items-center gap-4"
        >
          <div className="inline-block px-5 py-2 bg-blue-500/10 backdrop-blur-xl border border-blue-300/20 rounded-full">
            <span className="text-sm text-blue-200/90 font-medium">
              🌊 Random Wave
            </span>
          </div>
          <div className="px-5 py-2 bg-purple-500/10 backdrop-blur-xl border border-purple-300/20 rounded-full">
            <span className="text-sm text-purple-200/90 font-medium">
              🌓 Mouse → Gece/Gündüz
            </span>
          </div>
        </motion.div>

        {/* Orta Kısım - Ana Başlık */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-center max-w-5xl mx-auto pointer-events-auto"
        >
          <h1 className="text-7xl md:text-9xl font-bold leading-none mb-6">
            <span className="block bg-gradient-to-r from-blue-200 via-cyan-100 to-blue-200 bg-clip-text text-transparent">
              Gayrimenkul
            </span>
            <span className="block bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-600 bg-clip-text text-transparent">
              Ekosistemi
            </span>
          </h1>
          <p className="text-xl text-blue-100/40 mb-8">
            Her bina bir veri • Her veri bir fırsat
          </p>
        </motion.div>

        {/* Alt Kısım - Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="flex justify-between items-end pointer-events-auto"
        >
          <div className="flex gap-12">
            <div>
              <div className="text-4xl font-bold text-cyan-300">639</div>
              <div className="text-sm text-blue-200/30 uppercase tracking-wider">
                Bina
              </div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-400">₺350M+</div>
              <div className="text-sm text-blue-200/30 uppercase tracking-wider">
                Portföy
              </div>
            </div>
            <div>
              <div className="text-4xl font-bold text-sky-500">120+</div>
              <div className="text-sm text-blue-200/30 uppercase tracking-wider">
                Müşteri
              </div>
            </div>
          </div>

          <div className="text-right">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-2xl font-bold shadow-lg shadow-blue-500/20 hover:shadow-2xl hover:shadow-blue-500/40 transition-all"
            >
              Platformu Keşfet
            </motion.button>
            <p className="text-xs text-blue-200/20 mt-3">
              Sürükle • Zoom • Keşfet
            </p>
          </div>
        </motion.div>
      </div>

      {/* Gradient Overlay - Bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-slate-950 via-blue-950/40 to-transparent pointer-events-none" />
    </div>
  );
}
