import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="text-center max-w-md">
        <h1 className="text-8xl md:text-9xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#1C331B] to-[#3F5E39] mb-4">
          404
        </h1>
        <h2 className="text-2xl font-bold text-gray-900 mb-3">
          Ups! Dieser Vorteil wurde nicht gefunden.
        </h2>
        <p className="text-gray-600 mb-8">
          Die Seite, nach der du suchst, existiert leider nicht oder wurde verschoben.
        </p>
        <Link 
          href="/" 
          className="inline-block bg-[#3F5E39] text-white font-bold py-3 px-8 rounded-xl hover:bg-[#324B2D] transition shadow-sm hover:shadow"
        >
          Alle Vorteile entdecken
        </Link>
      </div>
    </div>
  );
}
