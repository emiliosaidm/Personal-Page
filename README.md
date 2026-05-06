# Emilio Said Maccise — personal site

Next.js 15 (App Router), TypeScript, Tailwind CSS v4, Framer Motion, Lenis, next-themes. Una sola página: hero, sobre mí, Meefi, bitácora, herramientas, trabajo, fuera de la pantalla, leyendo, contacto.

## Correr en local

```bash
npm install
npm run dev
```

Abre **http://localhost:3005** (`npm run dev` usa ese puerto a propósito: el 3000 suele estar ocupado por otra app y verías error o otra cosa). El build por defecto **no** usa `basePath` (sirve para desarrollo).

```bash
npm run lint
```

### Probar el build como en GitHub Pages (raíz)

```bash
NEXT_PUBLIC_SITE_URL=https://emiliosaidm.github.io npm run build
```

El sitio estático queda en la carpeta `out/`. Puedes servirla con `npx serve out` y abrir la raíz (`/`).

## GitHub Pages en `https://emiliosaidm.github.io/`

GitHub solo sirve la **raíz** de `username.github.io` desde el repositorio con nombre exacto **`emiliosaidm.github.io`**. Un repo con otro nombre (por ejemplo `Personal-Page`) siempre queda en `https://emiliosaidm.github.io/NombreDelRepo/`.

Para usar la URL sin subruta:

1. Crea (o usa) el repo **`emiliosaidm.github.io`** en tu cuenta.
2. Pon ahí este mismo código (remoto `origin` apuntando a ese repo) o fusiona lo que tengas en `Personal-Page`.
3. En **Settings → Pages**, fuente **GitHub Actions** (no “Deploy from a branch”).
4. El workflow ya hace `npm run build` con `NEXT_PUBLIC_SITE_URL=https://emiliosaidm.github.io` y **sin** `NEXT_PUBLIC_BASE_PATH` (rutas y assets en `/`).

Push a `main` o `master`: el sitio queda en **https://emiliosaidm.github.io/**

### Activar Pages (obligatorio antes del primer deploy)

Si el job **deploy** falla con `HttpError: Not Found` / *Failed to create deployment*, casi siempre es porque Pages no está enlazado a Actions:

1. Repo **`emiliosaidm.github.io`** → **Settings** → **Pages**.
2. En **Build and deployment** → **Source**, elige **GitHub Actions**. Guarda si aparece la opción.
3. Vuelve a correr el workflow (**Actions** → workflow → **Re-run all jobs**) o haz un push.

### Repo privado

En cuenta gratuita, **GitHub Pages en repos privados** tiene restricciones. Si el repo es privado y sigue fallando, prueba hacerlo **público** o revisa [documentación de Pages para repos privados](https://docs.github.com/en/pages/getting-started-with-github-pages/github-pages-limits).

## Variables de entorno

| Variable | Uso |
|----------|-----|
| `NEXT_PUBLIC_BASE_PATH` | Opcional. Subruta solo si el sitio vive bajo un path (ej. `/repo`). **Vacío** para `emiliosaidm.github.io` en la raíz. |
| `NEXT_PUBLIC_SITE_URL` | URL canónica (`https://emiliosaidm.github.io`) para Open Graph, `sitemap.xml` y `robots.txt`. |

## Fotos

Archivos bajo `public/`:

| Ruta | Sección |
|------|---------|
| `images/hero.jpg` | Hero |
| `images/about-1.jpg`, `about-2.jpg` | Sobre mí |
| `images/meefi.jpg` | Meefi |
| `images/projects/1.jpg` … `6.jpg` | Tarjetas de proyectos |
| `images/personal/1.jpg` … `4.jpg` | Galería |
| `images/books/1.jpg` … `5.jpg` | Libros |

Los bloques usan `ImagePlaceholder` hasta que existan los archivos.

## Contenido

Texto y datos en **`src/lib/content.ts`**. Los `id` de sección deben coincidir con `SiteNav`.

## Contacto en Pages

No hay backend en Pages: el formulario abre **mailto:** con el mensaje armado. Para envío sin cliente de correo, más adelante puedes usar Formspree o Resend en un host con Node (p. ej. Vercel).

## Lighthouse

Con imágenes reales optimizadas y build de producción, vuelve a medir en Chrome DevTools.
