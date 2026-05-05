# Emilio Said Maccise — personal site

Next.js 15 (App Router), TypeScript, Tailwind CSS v4, Framer Motion, Lenis, next-themes. Una sola página: hero, sobre mí, Meefi, bitácora, herramientas, trabajo, fuera de la pantalla, leyendo, contacto.

## Correr en local

```bash
npm install
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000). El build por defecto **no** usa `basePath` (sirve para desarrollo).

```bash
npm run lint
```

### Probar el build como en GitHub Pages

```bash
NEXT_PUBLIC_BASE_PATH=/Personal-Page NEXT_PUBLIC_SITE_URL=https://emiliosaidm.github.io/Personal-Page npm run build
```

El sitio estático queda en la carpeta `out/`. Puedes servirla con cualquier servidor estático apuntando a `out` (por ejemplo `npx serve out` y entrar con la ruta `/Personal-Page/` si tu servidor lo respeta).

## GitHub Pages

El repo está pensado para **GitHub Actions → GitHub Pages** con export estático (`output: 'export'`).

1. Crea el repo vacío **Personal-Page** en tu cuenta (si aún no existe): [github.com/new](https://github.com/new).
2. En el repo: **Settings → Pages → Build and deployment → Source: GitHub Actions**.
3. Haz push de la rama `main` o `master`; el workflow `.github/workflows/deploy.yml` hace `npm ci`, `npm run build` con:
   - `NEXT_PUBLIC_BASE_PATH=/Personal-Page`
   - `NEXT_PUBLIC_SITE_URL=https://emiliosaidm.github.io/Personal-Page`
4. Cuando termine el job **deploy**, el sitio queda en **https://emiliosaidm.github.io/Personal-Page/**

Si renombraras el repo, cambia esas dos variables en el workflow y en cualquier prueba local.

## Variables de entorno

| Variable | Uso |
|----------|-----|
| `NEXT_PUBLIC_BASE_PATH` | Subruta del proyecto en GitHub Pages (ej. `/Personal-Page`). Vacío en local. |
| `NEXT_PUBLIC_SITE_URL` | URL canónica para Open Graph, `sitemap.xml` y `robots.txt`. |

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
