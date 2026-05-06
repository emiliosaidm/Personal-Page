# Emilio Said Maccise — personal site

Next.js 15 (App Router), TypeScript, Tailwind CSS v4, Framer Motion, Lenis, next-themes. Una sola página: hero, sobre mí, Meefi, bitácora, herramientas, trabajo, fuera de la pantalla, leyendo, contacto.

Repo: **https://github.com/emiliosaidm/Personal-Page** (usuario de GitHub: `emiliosaidm`).

## Correr en local

```bash
npm install
npm run dev
```

Abre **http://localhost:3005** (`npm run dev` usa ese puerto a propósito: el 3000 suele estar ocupado por otra app y verías error o otra cosa). El build por defecto **no** usa `basePath` (sirve para desarrollo).

```bash
npm run lint
```

### Probar el build como en GitHub Pages

```bash
NEXT_PUBLIC_BASE_PATH=/Personal-Page NEXT_PUBLIC_SITE_URL=https://emiliosaidm.github.io/Personal-Page npm run build
```

El sitio estático queda en la carpeta `out/`. Para previsualizar con la misma base: `npx serve out` y abre **`http://localhost:3000/Personal-Page/`** (ajusta el puerto si `serve` usa otro).

## GitHub Pages

El sitio público queda en:

**https://emiliosaidm.github.io/Personal-Page/**

GitHub Actions + export estático (`output: 'export'` en `next.config.ts`).

### Activar Pages (obligatorio antes del primer deploy)

Si el job **deploy** falla con `HttpError: Not Found` / *Failed to create deployment*, casi siempre es porque Pages no está enlazado a Actions:

1. Repo **Personal-Page** → **Settings** → **Pages** (menú izquierdo).
2. En **Build and deployment** → **Source**, elige **GitHub Actions** (no “Deploy from a branch”). Guarda si aparece la opción.
3. Vuelve a correr el workflow (**Actions** → workflow → **Re-run all jobs**) o haz un push.

### Flujo normal

Push a `main` o `master`: el workflow corre `npm run build` con `NEXT_PUBLIC_BASE_PATH=/Personal-Page` y `NEXT_PUBLIC_SITE_URL=https://emiliosaidm.github.io/Personal-Page`.

### Se ve “sin CSS” / sin estilos

1. Entra con la URL del **proyecto** (con el nombre del repo): **https://emiliosaidm.github.io/Personal-Page/** (no la raíz `github.io` sola).
2. En el navegador, **recarga forzada** (p. ej. vaciar caché) por si quedó un `index.html` viejo.
3. En **DevTools → Network**, el CSS debe pedirse como `/Personal-Page/_next/static/css/...` (status 200). Si ves `/_next/...` sin `/Personal-Page`, el deploy se construyó **sin** las variables del workflow: revisa **Actions** → último job → paso **Install and build**.

### Raíz `https://emiliosaidm.github.io/` (sin `/Personal-Page`)

Eso solo aplica si publicas desde el repo con nombre exacto **`emiliosaidm.github.io`**, no desde **Personal-Page**.

### Repo privado

En cuenta gratuita, **GitHub Pages en repos privados** tiene restricciones. Si falla, prueba repo **público** o revisa [límites de Pages](https://docs.github.com/en/pages/getting-started-with-github-pages/github-pages-limits).

## Variables de entorno

| Variable | Uso |
|----------|-----|
| `NEXT_PUBLIC_BASE_PATH` | Subruta en GitHub Pages: **`/Personal-Page`**. Vacío en local. |
| `NEXT_PUBLIC_SITE_URL` | URL canónica: **`https://emiliosaidm.github.io/Personal-Page`**. |

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

No hay backend en Pages: el formulario abre **mailto:** con el mensaje armado.

## Lighthouse

Con imágenes reales optimizadas y build de producción, vuelve a medir en Chrome DevTools.
