'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { createClient } from '@/lib/supabase/client';

import { Brand, Category } from '@/types';

export default function NewOfferPage() {
  const router = useRouter();
  const supabase = createClient();
  const [brands, setBrands] = useState<Brand[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  
  const [formData, setFormData] = useState({
    title_de: '',
    slug: '',
    brand_id: '',
    category_id: '',
    description_de: '',
    status: 'draft',
    is_demo: false,
    discount_percent: 0,
    young_price: 0,
    normal_price: 0,
    external_url: '',
  });

  useEffect(() => {
    async function load() {
      const [b, c] = await Promise.all([
        supabase.from('brands').select('id, name'),
        supabase.from('categories').select('id, name_de')
      ]);
      if (b.data) setBrands(b.data as Brand[]);
      if (c.data) setCategories(c.data as Category[]);
    }
    load();
  }, [supabase]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const target = e.target as HTMLInputElement;
    const { name, value, type } = target;
    const checked = target.checked;
    setFormData(prev => ({ ...prev, [name]: type === 'checkbox' ? checked : value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const { data, error } = await supabase.from('offers').insert([formData]).select().single();
    if (error) {
      alert('Error: ' + error.message);
    } else if (data) {
      router.push(`/admin/angebote/${data.id}`);
    }
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6 text-gray-200">
      <h1 className="text-3xl font-bold">Nueva Oferta</h1>
      
      <form onSubmit={handleSubmit} className="bg-gray-900 p-6 rounded-lg border border-gray-800 space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm mb-1">Título</label>
            <input required type="text" name="title_de" value={formData.title_de} onChange={handleChange} className="w-full bg-gray-950 border border-gray-800 rounded p-2 text-white" />
          </div>
          <div>
            <label className="block text-sm mb-1">Slug</label>
            <input required type="text" name="slug" value={formData.slug} onChange={handleChange} className="w-full bg-gray-950 border border-gray-800 rounded p-2 text-white" />
          </div>
          
          <div>
            <label className="block text-sm mb-1">Empresa</label>
            <select name="brand_id" value={formData.brand_id} onChange={handleChange} className="w-full bg-gray-950 border border-gray-800 rounded p-2 text-white">
              <option value="">Seleccionar...</option>
              {brands.map((b) => <option key={b.id} value={b.id}>{b.name}</option>)}
            </select>
          </div>
          <div>
            <label className="block text-sm mb-1">Categoría</label>
            <select name="category_id" value={formData.category_id} onChange={handleChange} className="w-full bg-gray-950 border border-gray-800 rounded p-2 text-white">
              <option value="">Seleccionar...</option>
              {categories.map((c) => <option key={c.id} value={c.id}>{c.name_de}</option>)}
            </select>
          </div>
          
          <div className="col-span-2">
            <label className="block text-sm mb-1">Descripción</label>
            <textarea name="description_de" value={formData.description_de} onChange={handleChange} rows={4} className="w-full bg-gray-950 border border-gray-800 rounded p-2 text-white" />
          </div>

          <div>
            <label className="block text-sm mb-1">Estado</label>
            <select name="status" value={formData.status} onChange={handleChange} className="w-full bg-gray-950 border border-gray-800 rounded p-2 text-white">
              <option value="draft">Borrador</option>
              <option value="pending">Pendiente</option>
              <option value="verified">Verificado</option>
              <option value="published">Publicado</option>
              <option value="expired">Caducado</option>
            </select>
          </div>
          
          <div>
            <label className="block text-sm mb-1 flex items-center gap-2 mt-8">
              <input type="checkbox" name="is_demo" checked={formData.is_demo} onChange={handleChange} className="rounded bg-gray-950 border-gray-800" />
              Es oferta demo
            </label>
          </div>
        </div>

        <div className="pt-4 flex justify-end gap-2">
          <button type="button" onClick={() => router.back()} className="px-4 py-2 bg-gray-800 rounded text-white hover:bg-gray-700">Cancelar</button>
          <button type="submit" className="px-4 py-2 bg-blue-600 rounded text-white hover:bg-blue-700">Guardar</button>
        </div>
      </form>
    </div>
  );
}
