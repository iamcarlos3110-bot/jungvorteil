import { ADSTERRA_CONFIG, isAdsterraEnabled } from "@/config/adSlots";

export default function AdsPage() {
  const isEnabled = isAdsterraEnabled();

  return (
    <div className="space-y-6 text-gray-200">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Publicidad (Adsterra)</h1>
        <span
          className={`px-3 py-1 rounded-full text-xs font-bold ${
            isEnabled
              ? "bg-emerald-500/20 text-emerald-400 border border-emerald-500/30"
              : "bg-amber-500/20 text-amber-400 border border-amber-500/30"
          }`}
        >
          {isEnabled ? "● Publicidad Activa" : "○ Desactivada"}
        </span>
      </div>

      {!isEnabled ? (
        <div className="bg-amber-900/30 border border-amber-800 text-amber-200 p-4 rounded-xl">
          <h2 className="font-bold">Publicidad desactivada</h2>
          <p className="mt-1 text-sm">
            Para desactivar los anuncios de Adsterra, define <code>NEXT_PUBLIC_ADSTERRA_ENABLED=false</code>.
          </p>
        </div>
      ) : (
        <div className="bg-emerald-950/40 border border-emerald-800 text-emerald-200 p-4 rounded-xl text-sm">
          ✅ Los 4 bloques publicitarios de Adsterra están configurados y activos automáticamente en todo el portal.
        </div>
      )}

      <div className="bg-gray-900 p-6 rounded-2xl border border-gray-800">
        <h2 className="text-xl font-bold mb-4">Formatos configurados</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 border border-gray-800 rounded-xl bg-gray-950 space-y-1">
            <span className="text-xs text-emerald-400 font-semibold uppercase">Desktop</span>
            <h3 className="font-bold text-white">Banner 728x90</h3>
            <p className="text-xs text-gray-400 font-mono">Key: {ADSTERRA_CONFIG.banner728x90Key}</p>
          </div>

          <div className="p-4 border border-gray-800 rounded-xl bg-gray-950 space-y-1">
            <span className="text-xs text-emerald-400 font-semibold uppercase">Mobile</span>
            <h3 className="font-bold text-white">Banner 320x50</h3>
            <p className="text-xs text-gray-400 font-mono">Key: {ADSTERRA_CONFIG.banner320x50Key}</p>
          </div>

          <div className="p-4 border border-gray-800 rounded-xl bg-gray-950 space-y-1">
            <span className="text-xs text-purple-400 font-semibold uppercase">Cuadrícula de Ofertas</span>
            <h3 className="font-bold text-white">Bandera Nativa (Native Banner)</h3>
            <p className="text-xs text-gray-400 font-mono">Container: {ADSTERRA_CONFIG.nativeContainerId}</p>
          </div>

          <div className="p-4 border border-gray-800 rounded-xl bg-gray-950 space-y-1">
            <span className="text-xs text-blue-400 font-semibold uppercase">Global Flotante</span>
            <h3 className="font-bold text-white">Bar Social (Social Bar)</h3>
            <p className="text-xs text-gray-400">Notificación flotante de alta conversión activa en todo el sitio.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
