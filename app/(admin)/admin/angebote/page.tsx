import { createClient } from '@/lib/supabase/server';
import Link from 'next/link';
import { format } from 'date-fns';
import { es } from 'date-fns/locale';
import { Offer } from '@/types';

export default async function OffersPage({
  searchParams,
}: {
  searchParams: Promise<{ q?: string; status?: string; page?: string }>;
}) {
  const supabase = await createClient();
  const searchParamsAwaited = await searchParams;
  const q = searchParamsAwaited.q || '';
  const status = searchParamsAwaited.status || '';
  const page = Number(searchParamsAwaited.page) || 1;
  const limit = 20;
  const offset = (page - 1) * limit;

  let query = supabase.from('offers').select('*, categories(name_de), brands(name)', { count: 'exact' });

  if (q) {
    query = query.ilike('title_de', `%${q}%`);
  }
  if (status && status !== 'all') {
    query = query.eq('status', status);
  }

  const { data: offers, count } = await query.order('created_at', { ascending: false }).range(offset, offset + limit - 1);

  const totalPages = count ? Math.ceil(count / limit) : 0;

  return (
    <div className="space-y-6 text-gray-200">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Ofertas</h1>
        <Link href="/admin/angebote/new" className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded">
          Nueva oferta
        </Link>
      </div>

      <div className="flex gap-4 mb-4 border-b border-gray-800 pb-2">
        <Link href="?status=all" className={`px-3 py-1 rounded ${!status || status === 'all' ? 'bg-gray-800 text-white' : 'text-gray-400 hover:text-white'}`}>Todos</Link>
        <Link href="?status=published" className={`px-3 py-1 rounded ${status === 'published' ? 'bg-gray-800 text-white' : 'text-gray-400 hover:text-white'}`}>Publicado</Link>
        <Link href="?status=draft" className={`px-3 py-1 rounded ${status === 'draft' ? 'bg-gray-800 text-white' : 'text-gray-400 hover:text-white'}`}>Borrador</Link>
        <Link href="?status=pending" className={`px-3 py-1 rounded ${status === 'pending' ? 'bg-gray-800 text-white' : 'text-gray-400 hover:text-white'}`}>Pendiente</Link>
        <Link href="?status=verified" className={`px-3 py-1 rounded ${status === 'verified' ? 'bg-gray-800 text-white' : 'text-gray-400 hover:text-white'}`}>Verificado</Link>
        <Link href="?status=expired" className={`px-3 py-1 rounded ${status === 'expired' ? 'bg-gray-800 text-white' : 'text-gray-400 hover:text-white'}`}>Caducado</Link>
      </div>

      <div className="bg-gray-900 border border-gray-800 rounded-lg overflow-hidden">
        <table className="min-w-full divide-y divide-gray-800 text-sm">
          <thead className="bg-gray-950">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Título</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Estado</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Marca/Cat</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Stats</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Fechas</th>
              <th className="px-6 py-3 text-right text-xs font-medium text-gray-400 uppercase tracking-wider">Acciones</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-800">
            {(offers as (Offer & { categories?: { name_de: string }; brands?: { name: string } })[])?.map((offer) => (
              <tr key={offer.id} className="hover:bg-gray-800">
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="font-medium">{offer.title_de}</div>
                  {offer.is_demo && <span className="text-xs bg-red-900 text-red-200 px-2 py-0.5 rounded ml-2">DEMO</span>}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`px-2 py-1 text-xs rounded-full ${
                    offer.status === 'published' ? 'bg-green-900/50 text-green-400' :
                    offer.status === 'draft' ? 'bg-gray-700 text-gray-300' :
                    offer.status === 'pending' ? 'bg-amber-900/50 text-amber-400' :
                    offer.status === 'verified' ? 'bg-blue-900/50 text-blue-400' :
                    'bg-red-900/50 text-red-400'
                  }`}>
                    {offer.status}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-gray-400">
                  <div>{offer.brands?.name}</div>
                  <div className="text-xs">{offer.categories?.name_de}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-gray-400 text-xs">
                  <div>V: {offer.view_count || 0}</div>
                  <div>C: {offer.click_count || 0}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-gray-400 text-xs">
                  <div>C: {format(new Date(offer.created_at), 'dd MMM yyyy', { locale: es })}</div>
                  {offer.end_date && <div>F: {format(new Date(offer.end_date), 'dd MMM yyyy', { locale: es })}</div>}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <div className="flex justify-end gap-2">
                    <Link href={`/admin/angebote/${offer.id}`} className="text-blue-500 hover:text-blue-400">Editar</Link>
                    <a href={`/de/angebot/${offer.slug}`} target="_blank" rel="noreferrer" className="text-gray-400 hover:text-gray-300">Ver</a>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      {totalPages > 1 && (
        <div className="flex justify-center gap-2 mt-4">
          {Array.from({ length: totalPages }).map((_, i) => (
            <Link key={i} href={`?page=${i + 1}&status=${status}&q=${q}`} className={`px-3 py-1 rounded ${page === i + 1 ? 'bg-blue-600' : 'bg-gray-800'}`}>
              {i + 1}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
