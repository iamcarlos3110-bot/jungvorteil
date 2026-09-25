import { createClient } from '@/lib/supabase/server';

export default async function SettingsPage() {
  const supabase = await createClient();
  const { count } = await supabase.from('offers').select('*', { count: 'exact', head: true }).eq('is_demo', true);
  
  return (
    <div className="space-y-6 text-gray-200">
      <h1 className="text-3xl font-bold">Configuración</h1>

      {count !== null && count > 0 && (
        <div className="bg-amber-900/30 border border-amber-900 text-amber-200 p-4 rounded-lg">
          <h2 className="font-bold">Datos DEMO detectados</h2>
          <p>La base de datos contiene {count} ofertas DEMO.</p>
          <p className="mt-2 text-sm opacity-80">Para eliminarlas, ve a Ofertas, filtra por DEMO y elimínalas manualmente, o bórralas desde Supabase SQL Editor.</p>
        </div>
      )}

      <div className="bg-gray-900 p-6 rounded-lg border border-gray-800 space-y-4">
        <h2 className="text-xl font-bold">Información del sitio</h2>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <span className="text-gray-400 block text-sm">URL del sitio</span>
            <span className="font-medium">{process.env.NEXT_PUBLIC_SITE_URL || 'No configurada'}</span>
          </div>
          <div>
            <span className="text-gray-400 block text-sm">Supabase</span>
            <span className="font-medium text-green-400">Conectado</span>
          </div>
          <div>
            <span className="text-gray-400 block text-sm">Google Analytics</span>
            <span className="font-medium">{process.env.NEXT_PUBLIC_GA_ID ? 'Configurado' : 'No configurado'}</span>
          </div>
        </div>
      </div>

      <div className="bg-gray-900 p-6 rounded-lg border border-gray-800">
        <h2 className="text-xl font-bold mb-2">Textos legales</h2>
        <p className="text-gray-400">
          Editar textos legales en <code>app/[locale]/datenschutz</code>, <code>impressum</code>, <code>nutzungsbedingungen</code>.
        </p>
      </div>
    </div>
  );
}
