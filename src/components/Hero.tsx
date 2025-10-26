import { useEffect, useRef, useState } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { OrbitControls, Sphere, MeshDistortMaterial } from '@react-three/drei';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import CountUp from 'react-countup';
import gsap from 'gsap';
import * as THREE from 'three';

// Animated Gradient Mesh Background
const GradientMesh = () => {
  const meshRef = useRef<THREE.Mesh>(null);
  const { viewport } = useThree();

  useFrame((state) => {
    if (meshRef.current) {
      const time = state.clock.getElapsedTime();
      (meshRef.current.material as THREE.ShaderMaterial).uniforms.uTime.value =
        time;
    }
  });

  const uniforms = {
    uTime: { value: 0 },
    uColorA: { value: new THREE.Color('#1e293b') }, // Slate-800
    uColorB: { value: new THREE.Color('#475569') }, // Slate-600
    uColorC: { value: new THREE.Color('#334155') }, // Slate-700
  };

  const vertexShader = `
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `;

  const fragmentShader = `
    uniform float uTime;
    uniform vec3 uColorA;
    uniform vec3 uColorB;
    uniform vec3 uColorC;
    varying vec2 vUv;

    void main() {
      vec2 uv = vUv;
      
      // Animated gradient flow
      float wave1 = sin(uv.x * 3.0 + uTime * 0.5) * 0.5 + 0.5;
      float wave2 = cos(uv.y * 2.0 - uTime * 0.3) * 0.5 + 0.5;
      
      vec3 color1 = mix(uColorA, uColorB, wave1);
      vec3 color2 = mix(uColorB, uColorC, wave2);
      vec3 finalColor = mix(color1, color2, uv.y);
      
      gl_FragColor = vec4(finalColor, 1.0);
    }
  `;

  return (
    <mesh
      ref={meshRef}
      position={[0, 0, -5]}
      scale={[viewport.width * 2, viewport.height * 2, 1]}
    >
      <planeGeometry args={[1, 1, 32, 32]} />
      <shaderMaterial
        uniforms={uniforms}
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
      />
    </mesh>
  );
};

// Interactive 3D Sphere with Data Points
interface DataPoint {
  position: [number, number, number];
  label: string;
  value: string;
  color: string;
}

interface InteractiveSphereProps {
  dataPoints: DataPoint[];
}

const InteractiveSphere = ({ dataPoints }: InteractiveSphereProps) => {
  const groupRef = useRef<THREE.Group>(null);
  const { mouse } = useThree();
  const [hovered, setHovered] = useState<number | null>(null);

  useFrame(() => {
    if (groupRef.current) {
      // Smooth mouse-based rotation
      const targetX = mouse.x * 0.3;
      const targetY = mouse.y * 0.3;

      groupRef.current.rotation.y = THREE.MathUtils.lerp(
        groupRef.current.rotation.y,
        targetX,
        0.05
      );
      groupRef.current.rotation.x = THREE.MathUtils.lerp(
        groupRef.current.rotation.x,
        -targetY,
        0.05
      );
    }
  });

  return (
    <group ref={groupRef}>
      {/* Main Glass Sphere */}
      <Sphere args={[1, 64, 64]}>
        <MeshDistortMaterial
          color="#334155"
          transparent
          opacity={0.1}
          distort={0.3}
          speed={2}
          roughness={0}
          metalness={0.8}
        />
      </Sphere>

      {/* Wireframe Sphere */}
      <Sphere args={[1.02, 32, 32]}>
        <meshBasicMaterial
          color="#64748b"
          wireframe
          opacity={0.15}
          transparent
        />
      </Sphere>

      {/* Data Points */}
      {dataPoints.map((point, idx) => (
        <group
          key={idx}
          position={point.position}
        >
          <Sphere
            args={[0.08, 16, 16]}
            onPointerOver={() => setHovered(idx)}
            onPointerOut={() => setHovered(null)}
          >
            <meshStandardMaterial
              color={point.color}
              emissive={point.color}
              emissiveIntensity={hovered === idx ? 1 : 0.5}
              metalness={0.8}
              roughness={0.2}
            />
          </Sphere>

          {/* Glow effect */}
          <pointLight
            position={point.position}
            color={point.color}
            intensity={hovered === idx ? 0.8 : 0.3}
            distance={2}
          />
        </group>
      ))}

      {/* Ambient particles */}
      <ParticleField />
    </group>
  );
};

// Particle Field around sphere
const ParticleField = () => {
  const particlesRef = useRef<THREE.Points>(null);
  const particleCount = 200;

  const positions = new Float32Array(particleCount * 3);
  const colors = new Float32Array(particleCount * 3);

  for (let i = 0; i < particleCount; i++) {
    // Random sphere distribution
    const radius = 1.5 + Math.random() * 1.5;
    const theta = Math.random() * Math.PI * 2;
    const phi = Math.acos(2 * Math.random() - 1);

    positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
    positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
    positions[i * 3 + 2] = radius * Math.cos(phi);

    // Gradient colors
    const color = new THREE.Color().setHSL(
      0.55 + Math.random() * 0.15,
      0.8,
      0.6
    );
    colors[i * 3] = color.r;
    colors[i * 3 + 1] = color.g;
    colors[i * 3 + 2] = color.b;
  }

  useFrame((state) => {
    if (particlesRef.current) {
      particlesRef.current.rotation.y = state.clock.getElapsedTime() * 0.05;
    }
  });

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particleCount}
          array={positions}
          itemSize={3}
          args={[positions, 3]}
        />
        <bufferAttribute
          attach="attributes-color"
          count={particleCount}
          array={colors}
          itemSize={3}
          args={[colors, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.03}
        vertexColors
        transparent
        opacity={0.6}
        sizeAttenuation
      />
    </points>
  );
};

// Glassmorphic Service Card
interface ServiceCardProps {
  title: string;
  description: string;
  index: number;
}

const ServiceCard = ({ title, description, index }: ServiceCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (cardRef.current) {
      gsap.fromTo(
        cardRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          delay: index * 0.15,
          ease: 'power3.out',
        }
      );
    }
  }, [index]);

  // Icon selection based on card index
  const getIcon = () => {
    switch (index) {
      case 0: // Piyasa Analizi
        return (
          <svg
            className="w-10 h-10"
            viewBox="0 0 24 24"
            fill="none"
          >
            <rect
              x="3"
              y="10"
              width="4"
              height="11"
              rx="1"
              className="fill-blue-400/60 group-hover:fill-blue-400 transition-all duration-300"
            />
            <rect
              x="10"
              y="6"
              width="4"
              height="15"
              rx="1"
              className="fill-purple-400/60 group-hover:fill-purple-400 transition-all duration-300"
            />
            <rect
              x="17"
              y="3"
              width="4"
              height="18"
              rx="1"
              className="fill-amber-400/60 group-hover:fill-amber-400 transition-all duration-300"
            />
            <path
              d="M5 9L12 5L19 2"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="opacity-60 group-hover:opacity-100 transition-opacity duration-300"
            />
            <circle
              cx="5"
              cy="9"
              r="2"
              className="fill-white group-hover:scale-110 transition-transform duration-300"
            />
            <circle
              cx="12"
              cy="5"
              r="2"
              className="fill-white group-hover:scale-110 transition-transform duration-300"
            />
            <circle
              cx="19"
              cy="2"
              r="2"
              className="fill-white group-hover:scale-110 transition-transform duration-300"
            />
          </svg>
        );
      case 1: // Yatırım Danışmanlığı
        return (
          <svg
            className="w-10 h-10"
            viewBox="0 0 24 24"
            fill="none"
          >
            <circle
              cx="12"
              cy="12"
              r="9"
              className="stroke-blue-400/40 group-hover:stroke-blue-400/60 transition-all duration-300"
              strokeWidth="1.5"
              strokeDasharray="4 2"
            />
            <path
              d="M12 3V12L17 17"
              className="stroke-purple-400 group-hover:stroke-purple-300 transition-all duration-300"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <circle
              cx="12"
              cy="12"
              r="1.5"
              className="fill-amber-400 group-hover:scale-125 transition-transform duration-300"
            />
            <circle
              cx="12"
              cy="5"
              r="1"
              className="fill-white/60 group-hover:fill-white transition-all duration-300"
            />
            <circle
              cx="19"
              cy="12"
              r="1"
              className="fill-white/60 group-hover:fill-white transition-all duration-300"
            />
            <circle
              cx="12"
              cy="19"
              r="1"
              className="fill-white/60 group-hover:fill-white transition-all duration-300"
            />
            <circle
              cx="5"
              cy="12"
              r="1"
              className="fill-white/60 group-hover:fill-white transition-all duration-300"
            />
          </svg>
        );
      case 2: // Risk Yönetimi
        return (
          <svg
            className="w-10 h-10"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M12 3L4 7V12C4 16.5 7 20.5 12 22C17 20.5 20 16.5 20 12V7L12 3Z"
              className="fill-blue-400/20 stroke-blue-400 group-hover:fill-blue-400/40 transition-all duration-300"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M9 12L11 14L15 10"
              className="stroke-amber-400 group-hover:stroke-amber-300 transition-all duration-300"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <circle
              cx="12"
              cy="12"
              r="6"
              className="stroke-purple-400/30 group-hover:stroke-purple-400/50 transition-all duration-300"
              strokeWidth="1"
              strokeDasharray="2 2"
            />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <motion.div
      ref={cardRef}
      className="group relative"
      whileHover={{ scale: 1.02, y: -3 }}
      transition={{ duration: 0.3 }}
    >
      <div className="relative backdrop-blur-xl bg-white/10 rounded-xl p-4 border border-white/20 shadow-2xl overflow-hidden">
        {/* Glass reflection effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        {/* Icon and Content Container */}
        <div className="flex items-start gap-4 relative z-10">
          {/* Icon */}
          <div className="flex-shrink-0 p-2 rounded-lg bg-white/5 backdrop-blur-sm group-hover:bg-white/10 transition-all duration-300">
            {getIcon()}
          </div>

          {/* Text Content */}
          <div className="flex-1 min-w-0">
            {/* Title */}
            <h3 className="text-lg font-bold text-white mb-2">{title}</h3>

            {/* Description */}
            <p className="text-blue-100/80 text-xs leading-relaxed">
              {description}
            </p>
          </div>
        </div>

        {/* Animated border */}
        <div className="absolute inset-0 rounded-xl border-2 border-blue-400/0 group-hover:border-blue-400/50 transition-all duration-500" />

        {/* Decorative gradient accent */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-amber-500 opacity-0 group-hover:opacity-60 transition-opacity duration-500" />
      </div>
    </motion.div>
  );
};

// Magnetic Cursor Effect
const MagneticCursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const cursorDotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const cursorDot = cursorDotRef.current;
    if (!cursor || !cursorDot) return;

    const moveCursor = (e: MouseEvent) => {
      gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.5,
        ease: 'power2.out',
      });

      gsap.to(cursorDot, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.1,
      });
    };

    // Magnetic attraction to interactive elements
    const handleHoverStart = (e: MouseEvent) => {
      const target = e.currentTarget as HTMLElement;
      const rect = target.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      gsap.to(cursor, {
        x: centerX,
        y: centerY,
        scale: 2,
        duration: 0.3,
      });
    };

    const handleHoverEnd = () => {
      gsap.to(cursor, {
        scale: 1,
        duration: 0.3,
      });
    };

    window.addEventListener('mousemove', moveCursor);

    // Add magnetic effect to buttons and cards
    const magneticElements = document.querySelectorAll('.magnetic');
    magneticElements.forEach((el) => {
      el.addEventListener('mouseenter', handleHoverStart as EventListener);
      el.addEventListener('mouseleave', handleHoverEnd);
    });

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      magneticElements.forEach((el) => {
        el.removeEventListener('mouseenter', handleHoverStart as EventListener);
        el.removeEventListener('mouseleave', handleHoverEnd);
      });
    };
  }, []);

  return (
    <>
      <div
        ref={cursorRef}
        className="fixed w-10 h-10 border-2 border-blue-400 rounded-full pointer-events-none z-[9999] mix-blend-difference"
        style={{ transform: 'translate(-50%, -50%)' }}
      />
      <div
        ref={cursorDotRef}
        className="fixed w-2 h-2 bg-blue-400 rounded-full pointer-events-none z-[9999] mix-blend-difference"
        style={{ transform: 'translate(-50%, -50%)' }}
      />
    </>
  );
};

// Main Hero Component
const HeroPremium = () => {
  const { t } = useTranslation();
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95]);

  const dataPoints: DataPoint[] = [
    {
      position: [1.2, 0.5, 0],
      label: t('hero.sphereData.marketAnalysis'),
      value: '2000+',
      color: '#64748b',
    },
    {
      position: [-1, 0.8, 0.5],
      label: t('hero.sphereData.investmentStrategy'),
      value: '%15',
      color: '#475569',
    },
    {
      position: [0.5, -1, 0.8],
      label: t('hero.sphereData.riskAssessment'),
      value: '%98',
      color: '#334155',
    },
    {
      position: [-0.8, -0.6, -0.5],
      label: t('hero.sphereData.portfolioManagement'),
      value: '35+',
      color: '#1e293b',
    },
    {
      position: [0, 1.2, -0.3],
      label: t('hero.sphereData.trendForecast'),
      value: '15 Yıl',
      color: '#0f172a',
    },
  ];

  const services = [
    {
      title: t('heroPremium.services.analysis.title'),
      description: t('heroPremium.services.analysis.description'),
    },
    {
      title: t('heroPremium.services.consulting.title'),
      description: t('heroPremium.services.consulting.description'),
    },
    {
      title: t('heroPremium.services.risk.title'),
      description: t('heroPremium.services.risk.description'),
    },
  ];

  const stats = [
    {
      label: t('heroPremium.stats.completedProjects'),
      value: 2000,
      suffix: '+',
    },
    { label: t('heroPremium.stats.satisfaction'), value: 98, suffix: '%' },
    { label: t('heroPremium.stats.experience'), value: 20, suffix: '+' },
    { label: t('heroPremium.stats.projectValue'), value: 2.5, suffix: 'Mil₺' },
  ];

  return (
    <>
      <MagneticCursor />

      <motion.section
        ref={containerRef}
        style={{ opacity, scale }}
        className="relative min-h-screen w-full flex items-center justify-center overflow-hidden cursor-none"
      >
        {/* 3D Background Canvas */}
        <div className="absolute inset-0 w-full h-full z-0">
          <Canvas
            camera={{ position: [0, 0, 5], fov: 50 }}
            style={{ width: '100%', height: '100%' }}
          >
            <GradientMesh />
            <ambientLight intensity={0.5} />
            <pointLight
              position={[10, 10, 10]}
              intensity={1}
            />
            <pointLight
              position={[-10, -10, -10]}
              color="#7c3aed"
              intensity={0.5}
            />
          </Canvas>
        </div>

        {/* Content Container */}
        <div className="relative z-10 w-full h-full px-4 lg:px-8 py-8">
          <div className="grid lg:grid-cols-2 gap-8 items-center h-full w-full">
            {/* Left Side - Typography & Cards */}
            <div className="space-y-8">
              {/* Main Heading */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
                className="space-y-6"
              >
                <h1 className="text-5xl lg:text-6xl font-black text-white leading-tight">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-slate-300 via-blue-200 to-slate-300">
                    {t('heroPremium.title.line1')}
                  </span>
                  <br />
                  {t('heroPremium.title.line2')}
                  <br />
                  {t('heroPremium.title.line3')}
                </h1>

                <p className="text-lg text-slate-300/90 max-w-xl leading-relaxed">
                  {t('heroPremium.subtitle')}
                </p>
              </motion.div>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="flex gap-3"
              >
                <a
                  href="#services"
                  className="magnetic px-6 py-3 bg-gradient-to-r from-slate-600 to-slate-700 rounded-full text-white font-semibold shadow-lg hover:shadow-slate-500/30 transition-all duration-300 inline-block"
                >
                  {t('heroPremium.cta.primary')}
                </a>
                <a
                  href="#contact"
                  className="magnetic px-6 py-3 backdrop-blur-xl bg-white/5 rounded-full text-white font-semibold border border-white/10 hover:bg-white/10 transition-all duration-300 inline-block"
                >
                  {t('heroPremium.cta.secondary')}
                </a>
              </motion.div>

              {/* Service Cards */}
              <div className="space-y-3 pt-6">
                {services.map((service, idx) => (
                  <ServiceCard
                    key={idx}
                    {...service}
                    index={idx}
                  />
                ))}
              </div>
            </div>

            {/* Right Side - 3D Interactive Sphere */}
            <div className="relative h-[600px]">
              <Canvas camera={{ position: [0, 0, 4], fov: 50 }}>
                <ambientLight intensity={0.5} />
                <directionalLight
                  position={[5, 5, 5]}
                  intensity={1}
                />
                <pointLight
                  position={[-5, -5, 5]}
                  color="#7c3aed"
                  intensity={0.5}
                />
                <InteractiveSphere dataPoints={dataPoints} />
                <OrbitControls
                  enableZoom={false}
                  enablePan={false}
                  autoRotate
                  autoRotateSpeed={0.5}
                />
              </Canvas>

              {/* Data Point Labels (2D Overlay) */}
              <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/4 right-1/4 backdrop-blur-md bg-blue-500/20 px-4 py-2 rounded-lg border border-blue-400/30">
                  <p className="text-xs text-blue-200">
                    {t('hero.dataPoints.marketAnalysis')}
                  </p>
                  <p className="text-lg font-bold text-white">2000+</p>
                </div>
                <div className="absolute bottom-1/3 left-1/4 backdrop-blur-md bg-purple-500/20 px-4 py-2 rounded-lg border border-purple-400/30">
                  <p className="text-xs text-purple-200">
                    {t('hero.dataPoints.roiIncrease')}
                  </p>
                  <p className="text-lg font-bold text-white">%15</p>
                </div>
                <div className="absolute top-1/2 right-1/3 backdrop-blur-md bg-amber-500/20 px-4 py-2 rounded-lg border border-amber-400/30">
                  <p className="text-xs text-amber-200">
                    {t('hero.dataPoints.successRate')}
                  </p>
                  <p className="text-lg font-bold text-white">%98</p>
                </div>
              </div>
            </div>
          </div>

          {/* Stats Section - Bottom */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-8 w-full"
          >
            {stats.map((stat, idx) => (
              <div
                key={idx}
                className="magnetic text-center backdrop-blur-xl bg-white/5 rounded-2xl p-6 border border-white/10"
              >
                <div className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                  <CountUp
                    end={stat.value}
                    duration={2.5}
                    delay={idx * 0.2}
                  />
                  {stat.suffix}
                </div>
                <p className="text-sm text-blue-100/70 mt-2">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20 cursor-pointer"
          onClick={() => {
            const servicesSection = document.getElementById('services');
            if (servicesSection) {
              servicesSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
              });
            }
          }}
        >
          <div className="flex flex-col items-center gap-2 animate-bounce">
            <p className="text-xs text-blue-200/70 uppercase tracking-wider">
              Scroll
            </p>
            <div className="w-6 h-10 border-2 border-blue-400/50 rounded-full flex items-start justify-center p-2">
              <div className="w-1 h-3 bg-blue-400 rounded-full" />
            </div>
          </div>
        </motion.div>
      </motion.section>
    </>
  );
};

export default HeroPremium;
