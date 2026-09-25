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
        <h1 className="text-3xl font-bold text-white">Ofertas</h1>
        <Link href="/admin/angebote/new" className="bg-[#3F5E39] hover:bg-[#324B2D] text-white px-4 py-2.5 rounded-xl font-semibold transition-colors shadow-md">
          + Nueva oferta
        </Link>
      </div>

      <div className="flex gap-2 mb-4 border-b border-gray-800 pb-3 overflow-x-auto">
        <Link href="?status=all" className={`px-3.5 py-1.5 rounded-xl text-sm font-medium transition-all ${!status || status === 'all' ? 'bg-[#3F5E39] text-white shadow-sm' : 'bg-gray-850 text-gray-400 hover:text-white border border-gray-800'}`}>Todos</Link>
        <Link href="?status=published" className={`px-3.5 py-1.5 rounded-xl text-sm font-medium transition-all ${status === 'published' ? 'bg-[#3F5E39] text-white shadow-sm' : 'bg-gray-850 text-gray-400 hover:text-white border border-gray-800'}`}>Publicado</Link>
        <Link href="?status=draft" className={`px-3.5 py-1.5 rounded-xl text-sm font-medium transition-all ${status === 'draft' ? 'bg-[#3F5E39] text-white shadow-sm' : 'bg-gray-850 text-gray-400 hover:text-white border border-gray-800'}`}>Borrador</Link>
        <Link href="?status=pending" className={`px-3.5 py-1.5 rounded-xl text-sm font-medium transition-all ${status === 'pending' ? 'bg-[#3F5E39] text-white shadow-sm' : 'bg-gray-850 text-gray-400 hover:text-white border border-gray-800'}`}>Pendiente</Link>
        <Link href="?status=verified" className={`px-3.5 py-1.5 rounded-xl text-sm font-medium transition-all ${status === 'verified' ? 'bg-[#3F5E39] text-white shadow-sm' : 'bg-gray-850 text-gray-400 hover:text-white border border-gray-800'}`}>Verificado</Link>
        <Link href="?status=expired" className={`px-3.5 py-1.5 rounded-xl text-sm font-medium transition-all ${status === 'expired' ? 'bg-[#3F5E39] text-white shadow-sm' : 'bg-gray-850 text-gray-400 hover:text-white border border-gray-800'}`}>Caducado</Link>
      </div>

      <div className="floating-table bg-gray-900/90 border border-gray-700/80 rounded-2xl overflow-hidden shadow-xl">
        <table className="min-w-full divide-y divide-gray-800 text-sm">
          <thead className="bg-gray-950/90">
            <tr>
              <th className="px-6 py-3.5 text-left text-xs font-semibold text-gray-300 uppercase tracking-wider">Título</th>
              <th className="px-6 py-3.5 text-left text-xs font-semibold text-gray-300 uppercase tracking-wider">Estado</th>
              <th className="px-6 py-3.5 text-left text-xs font-semibold text-gray-300 uppercase tracking-wider">Marca/Cat</th>
              <th className="px-6 py-3.5 text-left text-xs font-semibold text-gray-300 uppercase tracking-wider">Stats</th>
              <th className="px-6 py-3.5 text-left text-xs font-semibold text-gray-300 uppercase tracking-wider">Fechas</th>
              <th className="px-6 py-3.5 text-right text-xs font-semibold text-gray-300 uppercase tracking-wider">Acciones</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-800/80">
            {(offers as (Offer & { categories?: { name_de: string }; brands?: { name: string } })[])?.map((offer) => (
              <tr key={offer.id} className="hover:bg-gray-850 transition-colors">
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="font-medium text-white">{offer.title_de}</div>
                  {offer.is_demo && <span className="text-xs bg-red-900/60 text-red-200 px-2 py-0.5 rounded-md ml-2 border border-red-800">DEMO</span>}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`px-2.5 py-1 text-xs rounded-full font-medium ${
                    offer.status === 'published' ? 'bg-green-900/50 text-green-300 border border-green-800/60' :
                    offer.status === 'draft' ? 'bg-gray-800 text-gray-300 border border-gray-700' :
                    offer.status === 'pending' ? 'bg-amber-900/50 text-amber-300 border border-amber-800/60' :
                    offer.status === 'verified' ? 'bg-blue-900/50 text-blue-300 border border-blue-800/60' :
                    'bg-red-900/50 text-red-300 border border-red-800/60'
                  }`}>
                    {offer.status}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-gray-300">
                  <div className="font-medium">{offer.brands?.name}</div>
                  <div className="text-xs text-gray-500">{offer.categories?.name_de}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-gray-400 text-xs font-mono">
                  <div>V: {offer.view_count || 0}</div>
                  <div>C: {offer.click_count || 0}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-gray-400 text-xs">
                  <div>C: {format(new Date(offer.created_at), 'dd MMM yyyy', { locale: es })}</div>
                  {offer.end_date && <div>F: {format(new Date(offer.end_date), 'dd MMM yyyy', { locale: es })}</div>}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <div className="flex justify-end gap-3">
                    <Link href={`/admin/angebote/${offer.id}`} className="text-[#3F5E39] hover:text-[#537A4B] font-semibold">Editar</Link>
                    <a href={`/de/angebot/${offer.slug}`} target="_blank" rel="noreferrer" className="text-gray-400 hover:text-gray-200">Ver</a>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      {totalPages > 1 && (
        <div className="flex justify-center gap-2 mt-6">
          {Array.from({ length: totalPages }).map((_, i) => (
            <Link key={i} href={`?page=${i + 1}&status=${status}&q=${q}`} className={`px-3.5 py-1.5 rounded-xl font-medium text-sm transition-all ${page === i + 1 ? 'bg-[#3F5E39] text-white shadow-sm' : 'bg-gray-900 text-gray-400 border border-gray-800 hover:text-white'}`}>
              {i + 1}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
