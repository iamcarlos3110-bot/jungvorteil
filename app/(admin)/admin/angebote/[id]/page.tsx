'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { createClient } from '@/lib/supabase/client';

import { Offer } from '@/types';

export default function EditOfferPage({ params }: { params: { id: string } }) {
  const router = useRouter();
  const supabase = createClient();
  const [formData, setFormData] = useState<Partial<Offer> | null>(null);

  useEffect(() => {
    async function load() {
      const { data } = await supabase.from('offers').select('*').eq('id', params.id).single();
      if (data) setFormData(data as Partial<Offer>);
    }
    load();
  }, [supabase, params.id]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const target = e.target as HTMLInputElement;
    const { name, value, type } = target;
    const checked = target.checked;
    setFormData((prev) => ({ ...prev, [name]: type === 'checkbox' ? checked : value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const { error } = await supabase.from('offers').update(formData ?? {}).eq('id', params.id);
    if (!error) {
      alert('Guardado!');
    }
  };

  const handleDelete = async () => {
    if (confirm('¿Eliminar esta oferta?')) {
      await supabase.from('offers').delete().eq('id', params.id);
      router.push('/admin/angebote');
    }
  };

  const handleDuplicate = async () => {
    const res = await fetch(`/api/admin/offers/${params.id}/duplicate`, { method: 'POST' });
    if (res.ok) {
      const data = await res.json();
      router.push(`/admin/angebote/${data.id}`);
    }
  };

  if (!formData) return <div>Cargando...</div>;

  return (
    <div className="max-w-4xl mx-auto space-y-6 text-gray-200">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Editar Oferta</h1>
        <div className="space-x-2">
          <button onClick={handleDuplicate} className="px-3 py-1 bg-gray-700 rounded hover:bg-gray-600">Duplicar</button>
          <a href={`/de/angebot/${formData.slug}`} target="_blank" rel="noreferrer" className="px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700">Ver pública</a>
          <button onClick={handleDelete} className="px-3 py-1 bg-red-900/50 text-red-400 rounded hover:bg-red-900/80">Eliminar</button>
        </div>
      </div>

      {formData.is_demo && (
        <div className="bg-red-900/30 border border-red-900 text-red-200 p-4 rounded-lg">
          <strong>¡ATENCIÓN!</strong> Esta es una oferta DEMO.
        </div>
      )}

      <div className="grid grid-cols-3 gap-6">
        <form onSubmit={handleSubmit} className="col-span-2 bg-gray-900 p-6 rounded-lg border border-gray-800 space-y-4">
          <div>
            <label className="block text-sm mb-1">Título</label>
            <input type="text" name="title_de" value={formData.title_de || ''} onChange={handleChange} className="w-full bg-gray-950 border border-gray-800 rounded p-2 text-white" />
          </div>
          <div>
            <label className="block text-sm mb-1">Slug</label>
            <input type="text" name="slug" value={formData.slug || ''} onChange={handleChange} className="w-full bg-gray-950 border border-gray-800 rounded p-2 text-white" />
          </div>
          <div>
            <label className="block text-sm mb-1">Descripción</label>
            <textarea name="description_de" value={formData.description_de || ''} onChange={handleChange} rows={4} className="w-full bg-gray-950 border border-gray-800 rounded p-2 text-white" />
          </div>
          <div>
             <label className="block text-sm mb-1">Estado</label>
             <select name="status" value={formData.status || ''} onChange={handleChange} className="w-full bg-gray-950 border border-gray-800 rounded p-2 text-white">
               <option value="draft">Borrador</option>
               <option value="published">Publicado</option>
             </select>
          </div>
          <button type="submit" className="px-4 py-2 bg-blue-600 rounded text-white w-full">Actualizar Oferta</button>
        </form>

        <div className="col-span-1 space-y-4">
          <div className="bg-gray-900 p-4 rounded-lg border border-gray-800">
            <h3 className="font-bold mb-2">Estadísticas</h3>
            <p className="text-sm text-gray-400">Vistas: {formData.view_count || 0}</p>
            <p className="text-sm text-gray-400">Clics: {formData.click_count || 0}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
