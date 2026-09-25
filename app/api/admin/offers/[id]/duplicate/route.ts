import { createClient } from '@/lib/supabase/server';
import { NextResponse } from 'next/server';

export async function POST(req: Request, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const supabase = await createClient();
  
  // Auth check basic
  const { data: { session } } = await supabase.auth.getSession();
  if (!session) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const { data: offer, error } = await supabase.from('offers').select('*').eq('id', id).single();
  
  if (error || !offer) {
    return NextResponse.json({ error: 'Offer not found' }, { status: 404 });
  }

  const newOffer = {
    ...offer,
    id: undefined,
    slug: `${offer.slug}-copy-${Date.now()}`,
    status: 'draft',
    title_de: `${offer.title_de} (Kopie)`,
    view_count: 0,
    click_count: 0,
    created_at: new Date().toISOString()
  };

  const { data: created, error: insertError } = await supabase.from('offers').insert([newOffer]).select().single();

  if (insertError) {
    return NextResponse.json({ error: insertError.message }, { status: 500 });
  }

  return NextResponse.json(created);
}
