export default function AdsPage() {
  const isAdsterraEnabled = process.env.ADSTERRA_ENABLED === 'true';

  return (
    <div className="space-y-6 text-gray-200">
      <h1 className="text-3xl font-bold">Publicidad (Adsterra)</h1>

      {!isAdsterraEnabled && (
        <div className="bg-amber-900/30 border border-amber-900 text-amber-200 p-4 rounded-lg">
          <h2 className="font-bold">Publicidad desactivada</h2>
          <p className="mt-1">Para activar los anuncios de Adsterra:</p>
          <ol className="list-decimal list-inside mt-2 space-y-1">
            <li>Añadir códigos en <code>.env.local</code></li>
            <li>Poner <code>ADSTERRA_ENABLED=true</code></li>
            <li>Reiniciar servidor</li>
          </ol>
        </div>
      )}

      <div className="bg-gray-900 p-6 rounded-lg border border-gray-800">
        <h2 className="text-xl font-bold mb-4">Zonas de anuncios</h2>
        <div className="space-y-4">
          <div className="p-4 border border-gray-800 rounded bg-gray-950">
            <h3 className="font-bold">Header (Desktop/Mobile)</h3>
            <p className="text-sm text-gray-400 mt-1">Env variable: NEXT_PUBLIC_ADSTERRA_HEADER</p>
          </div>
          <div className="p-4 border border-gray-800 rounded bg-gray-950">
            <h3 className="font-bold">Sidebar (Desktop)</h3>
            <p className="text-sm text-gray-400 mt-1">Env variable: NEXT_PUBLIC_ADSTERRA_SIDEBAR</p>
          </div>
        </div>
      </div>
    </div>
  );
}
