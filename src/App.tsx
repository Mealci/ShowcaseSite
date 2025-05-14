import React from 'react';
import { Canvas } from '@react-three/fiber';
import PhoneMockup from './components/phonemockup';

// Bouton stylé
function Button({
  children,
  className,
  onClick,
}: {
  children: React.ReactNode;
  className: string;
  onClick?: () => void;
}) {
  return (
    <button
      className={`px-6 py-3 text-base sm:text-lg rounded-full font-semibold shadow-md transition-all duration-300 hover:shadow-xl hover:scale-105 ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default function IBSAppPromoPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-200 via-purple-300 to-purple-500 text-white overflow-x-hidden">
      {/* Hero Section */}
      <section className="flex flex-col justify-between items-center min-h-[100vh] px-4 py-8 sm:py-12">
        <div className="text-center">
          <h1 className="text-2xl sm:text-4xl font-bold mb-3">
            Reprenez le contrôle de votre ventre !
          </h1>
          <p className="text-sm sm:text-base max-w-md mx-auto">
            Notre application vous aide à comprendre, suivre et apaiser les symptômes liés au SCI grâce à un accompagnement personnalisé.
          </p>
        </div>

        <div className="w-full h-[400px] sm:h-[500px] my-4">
          <Canvas camera={{ position: [0, 0, 6] }}>
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} />
            <PhoneMockup />
          </Canvas>
        </div>

        <div className="text-center">
          <Button
            className="bg-white text-purple-600"
            onClick={() => window.open('https://forms.gle/RnNZ6pmNgN1oEf517', '_blank')}
          >
            📱 Participer à la Beta
          </Button>
        </div>
      </section>

      {/* Section À propos */}
      <section className="py-12 px-4 sm:px-6">
        <h2 className="text-2xl sm:text-3xl text-center font-bold mb-8">À propos de l'application</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 mx-auto bg-purple-300 rounded-full mb-4"></div>
            <p>Suivi des symptômes jour après jour</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 mx-auto bg-pink-300 rounded-full mb-4"></div>
            <p>Conseils personnalisés par des experts</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 mx-auto bg-purple-400 rounded-full mb-4"></div>
            <p>Graphiques et visualisations apaisants</p>
          </div>
        </div>
      </section>

      <footer className="text-center py-8 text-sm text-purple-200">
        © 2025 MonAppSCI — Tous droits réservés
      </footer>
    </div>
  );
}
