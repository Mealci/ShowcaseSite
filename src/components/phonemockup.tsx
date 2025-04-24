import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { useFrame } from '@react-three/fiber';
import { useGLTF, Html } from '@react-three/drei';

function PhoneMockup() {
  const { scene } = useGLTF('/models/phone.glb');
  const groupRef = useRef<THREE.Group>(null);
  const screenRef = useRef<THREE.Mesh>(null);

  // Animation de flottement subtile
  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    if (groupRef.current) {
      // Mouvement de flottement doux
      groupRef.current.rotation.y = Math.sin(time * 0.5) * 0.15;
      groupRef.current.position.y = Math.sin(time * 0.8) * 0.05;
      
      // Rotation très légère de l'écran pour le réalisme
      if (screenRef.current) {
        screenRef.current.rotation.z = Math.sin(time * 0.3) * 0.02;
      }
    }
  });

    // Vérification du modèle chargé
    useEffect(() => {
        console.log('Modèle chargé:', scene);
        scene.traverse((obj) => {
          console.log('Objet:', obj.name);
        });
      }, [scene]);

  return (
    <group ref={groupRef}>
        <Html
          transform
          occlude="blending"
          position={[0, 0, 0.3]}
          rotation={[0, 0, 0]}
          distanceFactor={7} // Ajustement précis de la taille
          ref={screenRef}
          className="w-[220px] h-[460px]"
        >
          <div className="relative w-full h-full overflow-hidden rounded-[30px] shadow-xl">
            {/* Capture d'écran avec bordure intégrée */}
            <img 
              src="/images/app.jpeg" 
              alt="App Screenshot" 
              className="absolute inset-0 w-full h-full object-cover"
            />
            
            {/* Overlay pour effets d'écran réalistes */}
            <div className="absolute inset-0 pointer-events-none">
              {/* Reflet d'écran */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-30" />
              
              {/* Bordure noire pour simuler le bezel */}
              <div className="absolute inset-0 border-[12px] border-black rounded-[26px]" />
            </div>
          </div>
        </Html>
    </group>
  );
}

export default PhoneMockup;