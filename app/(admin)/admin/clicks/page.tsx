import { createClient } from '@/lib/supabase/server';

export default async function ClicksPage() {
  const supabase = await createClient();
  const { data: offers } = await supabase
    .from('offers')
    .select('id, title_de, click_count, view_count')
    .order('click_count', { ascending: false })
    .limit(10);

  return (
    <div className="space-y-6 text-gray-200">
      <h1 className="text-3xl font-bold">Estadísticas de clics</h1>

      <div className="bg-gray-900 border border-gray-800 rounded-lg overflow-hidden">
        <table className="min-w-full divide-y divide-gray-800 text-sm">
          <thead className="bg-gray-950">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Oferta</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Clics</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Vistas</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">CTR</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-800">
            {(offers as { id: string; title_de: string; click_count: number; view_count: number }[])?.map((offer) => {
              const ctr = offer.view_count ? ((offer.click_count / offer.view_count) * 100).toFixed(2) : 0;
              return (
                <tr key={offer.id} className="hover:bg-gray-800">
                  <td className="px-6 py-4 whitespace-nowrap font-medium">{offer.title_de}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{offer.click_count || 0}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{offer.view_count || 0}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{ctr}%</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
