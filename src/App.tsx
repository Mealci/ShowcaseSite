import React from 'react';
import { Canvas } from '@react-three/fiber';
import PhoneMockup from './components/phonemockup';

// Bouton stylé
function Button({ children, className }: { children: React.ReactNode; className: string }) {
  return (
    <button
      className={`px-6 py-3 rounded-full font-semibold shadow-md transition-all duration-300 hover:shadow-xl hover:scale-105 ${className}`}
    >
      {children}
    </button>
  );
}

export default function IBSAppPromoPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-200 via-purple-300 to-purple-500 text-white overflow-hidden">
      <header className="text-center py-16 px-4 sm:px-6">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Apprivoisez le syndrome du côlon irritable</h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto">
          Notre application vous aide à comprendre, suivre et apaiser les symptômes liés au SCI grâce à un accompagnement personnalisé.
        </p>
      </header>

      <div className="h-[60vh] relative w-full">
        <Canvas camera={{ position: [0, 0, 6] }}>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} />
          <PhoneMockup />
        </Canvas>
      </div>

      <section className="text-center py-12 px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button className="bg-white text-purple-600">📱 Télécharger sur App Store</Button>
          <Button className="bg-white text-purple-600">🤖 Disponible sur Google Play</Button>
        </div>
      </section>

      <section className="py-12 px-4 sm:px-6 bg-white text-purple-800">
        <h2 className="text-3xl font-bold text-center mb-8">Témoignages</h2>
        <div className="flex flex-wrap justify-center gap-4 pb-4">
          {[1, 2, 3].map((id) => (
            <div key={id} className="w-full sm:w-auto sm:min-w-[250px] p-4 rounded-2xl shadow-lg bg-purple-100">
              <p className="italic">"Cette appli a changé ma vie ! J'ai appris à mieux vivre avec le SCI."</p>
              <p className="mt-2 font-semibold">– Utilisateur {id}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6">
        <h2 className="text-3xl text-center font-bold mb-8">À propos de l'application</h2>
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