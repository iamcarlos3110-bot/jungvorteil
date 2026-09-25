import { createClient } from '@/lib/supabase/server';
import { Brand } from '@/types';

export default async function BrandsPage() {
  const supabase = await createClient();
  const { data: brands } = await supabase.from('brands').select('*, offers(count)').order('name');

  return (
    <div className="space-y-6 text-gray-200">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Marcas</h1>
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded">
          Nueva marca
        </button>
      </div>

      <div className="bg-gray-900 border border-gray-800 rounded-lg overflow-hidden">
        <table className="min-w-full divide-y divide-gray-800 text-sm">
          <thead className="bg-gray-950">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Nombre</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Sitio Web</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Ofertas</th>
              <th className="px-6 py-3 text-right text-xs font-medium text-gray-400 uppercase tracking-wider">Acciones</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-800">
            {(brands as (Brand & { offers?: { count: number }[] })[])?.map((brand) => (
              <tr key={brand.id} className="hover:bg-gray-800">
                <td className="px-6 py-4 whitespace-nowrap font-medium">{brand.name}</td>
                <td className="px-6 py-4 whitespace-nowrap text-blue-400">
                  {brand.website_url ? (
                    <a href={brand.website_url} target="_blank" rel="noreferrer">{brand.website_url}</a>
                  ) : (
                    <span className="text-gray-500">-</span>
                  )}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">{brand.offers?.[0]?.count ?? 0}</td>
                <td className="px-6 py-4 whitespace-nowrap text-right">
                  <button className="text-blue-500 hover:text-blue-400 mr-3">Editar</button>
                  <button className="text-red-500 hover:text-red-400">Eliminar</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
