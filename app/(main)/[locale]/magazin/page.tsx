export const metadata = {
  title: 'Magazin | JungVorteil'
};

export default function MagazinPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-20 text-center">
      <div className="mb-8 text-6xl">📰</div>
      <h1 className="text-4xl md:text-5xl font-bold mb-6">JungVorteil Magazin</h1>
      <div className="inline-block bg-purple-100 text-purple-800 px-4 py-2 rounded-full font-bold text-sm tracking-wider mb-8">
        BALD VERFÜGBAR
      </div>
      
      <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
        Hier entsteht unser neues Magazin mit spannenden Artikeln, Spartipps und Ratgebern rund um Finanzen, Studium und Freizeit in der Schweiz.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 text-left">
        <div className="bg-gray-50 p-6 rounded-xl border">
          <h3 className="font-bold text-lg mb-2">💸 Spartipps</h3>
          <p className="text-gray-600 text-sm">Praktische Tipps für den Alltag, um das Budget zu schonen.</p>
        </div>
        <div className="bg-gray-50 p-6 rounded-xl border">
          <h3 className="font-bold text-lg mb-2">🎓 Studium</h3>
          <p className="text-gray-600 text-sm">Alles rund um Uni, FH und das Studentenleben.</p>
        </div>
        <div className="bg-gray-50 p-6 rounded-xl border">
          <h3 className="font-bold text-lg mb-2">🌍 Freizeit</h3>
          <p className="text-gray-600 text-sm">Günstig reisen, essen gehen und die Freizeit geniessen.</p>
        </div>
      </div>

      <div className="bg-purple-900 text-white p-8 md:p-12 rounded-2xl">
        <h2 className="text-2xl font-bold mb-4">Bleib auf dem Laufenden</h2>
        <p className="mb-6 opacity-90">Trage dich ein, um zu erfahren, wenn unser Magazin startet.</p>
        <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto" onSubmit={(e) => { e.preventDefault(); alert('Danke für dein Interesse!'); }}>
          <input 
            type="email" 
            placeholder="Deine E-Mail Adresse" 
            required 
            className="flex-1 px-4 py-3 rounded-lg text-gray-900 outline-none focus:ring-2 focus:ring-purple-500"
          />
          <button type="submit" className="bg-white text-purple-900 font-bold px-6 py-3 rounded-lg hover:bg-gray-100 transition">
            Anmelden
          </button>
        </form>
      </div>
    </div>
  );
}
