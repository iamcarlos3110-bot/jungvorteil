# JungVorteil – Guía Completa

> **jungvorteil.ch** – Plataforma suiza de descuentos y ventajas para jóvenes y estudiantes

---

## 1. Cómo ejecutar el proyecto en local

```bash
cd jungvorteil
npm install
copy .env.local.example .env.local
# Editar .env.local con tus datos reales
npm run dev
```

Abre [http://localhost:3000/de](http://localhost:3000/de).
Panel admin: [http://localhost:3000/admin](http://localhost:3000/admin).

---

## 2. Cómo configurar Supabase

1. Crea proyecto en [supabase.com](https://supabase.com) (región Frankfurt recomendada)
2. **Project Settings → API** → copia las 3 claves en `.env.local`
3. **SQL Editor** → ejecuta en orden:
   - `db/migrations/001_initial_schema.sql`
   - `db/seed/001_demo_data.sql` _(solo desarrollo)_

---

## 3. Variables de entorno requeridas

```env
NEXT_PUBLIC_SITE_URL=https://jungvorteil.ch
NEXT_PUBLIC_SUPABASE_URL=https://xxxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJ...
SUPABASE_SERVICE_ROLE_KEY=eyJ...
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
NEXT_PUBLIC_ADSTERRA_ENABLED=false
```

**NUNCA subas `.env.local` a Git.**

---

## 4. Cómo entrar en /admin

1. En Supabase → **Authentication → Users → Add user** → crea tu usuario
2. Ve a `/admin/login` → introduce email y contraseña

> El admin está en español. La web pública está en alemán.

---

## 5. Cómo crear ofertas

1. `/admin/angebote/new`
2. Rellena todos los campos (título en alemán, categoría, edad, fuente)
3. Añade siempre: **URL fuente** y **Fecha verificación**
4. Estado `published` para publicar
5. **`es_demo = false`** para ofertas reales

> No publiques información sin verificarla primero.

---

## 6. Cómo activar Adsterra

1. Regístrate y obtén aprobación en [adsterra.com](https://adsterra.com)
2. Crea códigos de anuncio (Banner, Native, Social Bar)
3. Pega cada código en `.env.local`:
   ```env
   NEXT_PUBLIC_ADSTERRA_ENABLED=true
   NEXT_PUBLIC_ADSTERRA_BANNER_TOP_CODE=<!-- código -->
   NEXT_PUBLIC_ADSTERRA_NATIVE_CODE=<!-- código -->
   NEXT_PUBLIC_ADSTERRA_SOCIAL_BAR_CODE=<!-- código -->
   ```
4. `npm run dev` para reiniciar

---

## 7. Slots de publicidad

| Slot | Variable |
|------|----------|
| Leaderboard superior | `NEXT_PUBLIC_ADSTERRA_BANNER_TOP_CODE` |
| Banner inline | `NEXT_PUBLIC_ADSTERRA_BANNER_INLINE_CODE` |
| Native | `NEXT_PUBLIC_ADSTERRA_NATIVE_CODE` |
| Social Bar | `NEXT_PUBLIC_ADSTERRA_SOCIAL_BAR_CODE` |
| Popunder | `NEXT_PUBLIC_ADSTERRA_POPUNDER_CODE` |
| Interstitial | `NEXT_PUBLIC_ADSTERRA_INTERSTITIAL_CODE` |

El componente `<AdSlot />` gestiona todo automáticamente.

---

## 8. Cómo cambiar el logo

Edita `components/layout/Header.tsx` → busca el JSX del logo.
Para imagen: coloca `public/logo.svg` y usa `<Image src="/logo.svg" ...>`.

---

## 9. Cómo cambiar textos

- **Textos públicos**: `messages/de.json`
- **Textos legales**: `app/[locale]/datenschutz/page.tsx`, `impressum/page.tsx`, `nutzungsbedingungen/page.tsx`
- Reemplaza los placeholders: `[BETREIBER NAME]`, `[EMAIL]`, `[ADRESSE]`

---

## 10. Cómo desplegar

```bash
npm install -g vercel
vercel --prod
```

Añade las variables de entorno en el dashboard de Vercel.

---

## 11. Cómo conectar el dominio

1. Vercel → tu proyecto → **Domains** → `jungvorteil.ch`
2. Copia los DNS records que te da Vercel
3. En tu registrador suizo ([Hostpoint](https://hostpoint.ch) / [Infomaniak](https://infomaniak.com)) → añade los registros

---

## 12. Cómo configurar Google Analytics

1. [analytics.google.com](https://analytics.google.com) → crear propiedad GA4
2. Flujo de datos Web → `jungvorteil.ch`
3. Copia el ID (`G-XXXXXXXXXX`) → `.env.local`
4. El tracking solo activa tras consentimiento del usuario

---

## 13. Cómo configurar Search Console

1. [search.google.com/search-console](https://search.google.com/search-console) → añadir `https://jungvorteil.ch`
2. Verificar con HTML tag en `app/layout.tsx`
3. Enviar sitemap: `https://jungvorteil.ch/sitemap.xml`

---

## Estructura del proyecto

```
jungvorteil/
├── app/[locale]/       # Páginas públicas (de/fr/it)
│   ├── page.tsx        # Homepage
│   ├── angebot/[slug]  # Ofertas individuales
│   ├── rabatte/[cat]   # Categorías
│   ├── stadt/[city]    # Ciudades
│   ├── marken/[slug]   # Marcas
│   ├── studentenrabatte/
│   ├── angebote-unter-30/
│   ├── angebote-unter-25/
│   └── ...
├── app/admin/          # Panel admin (protegido)
├── app/api/            # API Routes
├── components/         # Componentes React
├── config/             # Categorías, ciudades, slots publicitarios
├── db/                 # Migrations SQL + Seed DEMO
├── lib/                # Supabase, analytics, favorites, utils
├── messages/           # Traducciones de.json / fr.json / it.json
├── services/           # Capa de datos (offers, brands, etc.)
├── types/index.ts      # Tipos TypeScript
└── .env.local.example  # Template de variables
```

## Stack tecnológico

| Tecnología | Uso |
|---|---|
| Next.js 15 (App Router) | Framework principal |
| TypeScript | Tipado estático |
| Tailwind CSS | Estilos |
| Supabase (PostgreSQL) | Base de datos + Auth admin |
| next-intl | i18n (de/fr/it) |
| lucide-react | Iconos |
| date-fns | Formateo de fechas |
| zod | Validación |

## FAQ

**¿Cómo añadir francés o italiano?**
Los archivos `messages/fr.json` y `it.json` ya tienen la estructura. Traduce los valores y activa los locales en `lib/i18n/routing.ts`.

**¿Los datos DEMO aparecen en producción?**
Para eliminarlos: en Supabase SQL Editor ejecuta `DELETE FROM offers WHERE is_demo = true;` cuando tengas ofertas reales.

**¿Se pueden añadir ofertas reales ahora?**
Sí, desde `/admin/angebote/new`. Asegúrate de verificar la información antes de publicar.
