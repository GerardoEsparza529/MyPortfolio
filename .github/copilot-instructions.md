# Copilot Instructions — MyPortfolio

## Proyecto

Portafolio profesional de **Gerardo Esparza**, Ingeniero en Sistemas Computacionales y Desarrollador Full Stack. Single Page Application (SPA) sin routing, con 6 secciones principales: Hero, About, Experience, Projects, Skills y Contact.

## Tech Stack

| Categoría   | Tecnología                              |
| ----------- | --------------------------------------- |
| Framework   | React 19 (functional components, hooks) |
| Build Tool  | Vite 7                                  |
| Animaciones | Framer Motion 12                        |
| Iconos      | React Icons 5                           |
| Viewport    | React Intersection Observer 10          |
| Linting     | ESLint 9 (flat config)                  |
| Módulos     | ES Modules                              |

## Estructura del Proyecto

```
src/
├── components/    → Componentes reutilizables (Navbar, Footer, DeviceMockup, ProjectGallery)
├── sections/      → Secciones de la página (Hero, About, Experience, Projects, Skills, Contact)
├── data/          → Datos del portafolio (portfolio.js)
├── hooks/         → Custom hooks (useScrollPosition, useInView, useMediaQuery, useBreakpoint, useSmoothScroll, useDebounce)
├── styles/        → Estilos globales (variables.css, global.css)
├── assets/        → Imágenes y recursos estáticos importados
├── documents/     → CVs en PDF
public/projects/   → Imágenes de galería organizadas por proyecto (desktop/, movil/)
```

## Convenciones de Código

### Naming

- **Componentes**: PascalCase (`DeviceMockup.jsx`, `ProjectGallery.jsx`)
- **Hooks**: camelCase con prefijo `use` (`useScrollPosition`, `useBreakpoint`)
- **Archivos CSS**: `NombreComponente.module.css` junto al componente
- **Variables CSS**: kebab-case con prefijo semántico (`--bg-primary`, `--text-accent`, `--space-4`)
- **Datos**: camelCase para exports (`personalInfo`, `experience`, `projects`)

### Exports

- **Componentes**: `export default`
- **Hooks**: Named exports desde `hooks/index.js`
- **Datos**: Named exports desde `data/portfolio.js`

### Componentes

- Siempre functional components con hooks de React
- Props desestructuradas en los parámetros de la función
- Sin state management global (no Context API, no Redux)
- Animaciones con Framer Motion (`motion.div`, `variants`, `whileInView`)
- Detección de viewport con `react-intersection-observer` o el hook `useInView`

### Estilos

- **CSS Modules** para scoping de estilos por componente (`.module.css`)
- **Variables CSS** definidas en `src/styles/variables.css` — siempre usar variables, nunca valores hardcodeados de color, fuente o espaciado
- **Dark mode** via `prefers-color-scheme: dark` media query en variables.css
- **Responsive design** mobile-first con media queries `min-width`
- **Breakpoints**: 768px (tablet), 1024px (desktop), 1440px (large)
- Paleta de colores inspirada en Apple (blancos limpios, negros profundos, acento azul)

### Idioma

- Contenido del portafolio en **español**
- Código (nombres de variables, funciones, comentarios técnicos) en **inglés**
- Datos del portafolio (`portfolio.js`) en español

## Patrones Importantes

### Custom Hooks (`src/hooks/index.js`)

Seis hooks disponibles:

- `useScrollPosition()` → `{ scrollPosition, scrollDirection }`
- `useInView(options)` → `[ref, isInView]`
- `useMediaQuery(query)` → `boolean`
- `useBreakpoint()` → `{ isMobile, isTablet, isDesktop, isLarge }`
- `useSmoothScroll()` → `scrollToElement(elementId, offset)`
- `useDebounce(value, delay)` → `debouncedValue`

### Datos del Portafolio (`src/data/portfolio.js`)

Estructura centralizada con: `personalInfo`, `experience`, `education`, `projects`, `skills`, `certifications`, `socialLinks`. Cada proyecto tiene `gallery.desktop[]` y `gallery.mobile[]` con rutas a imágenes en `public/projects/`.

### Galería de Proyectos

- Imágenes en `public/projects/{nombre}/desktop/` y `public/projects/{nombre}/movil/`
- Variantes Light/Dark filtradas por tema del navegador
- Modal fullscreen con navegación teclado (← → ESC)

### DeviceMockup

- Tipo `mobile` (estilo iPhone) o `desktop` (estilo MacBook)
- Renderizado CSS puro, sin imágenes de frame

## Scripts

```bash
npm run dev       # Servidor de desarrollo Vite (--host)
npm run build     # Build de producción
npm run lint      # ESLint
npm run preview   # Preview de producción
```

## Reglas de Desarrollo

1. Mantener la estética Apple-like: limpia, minimalista, con transiciones suaves
2. Usar siempre CSS Modules — nunca estilos globales para componentes específicos
3. Usar las variables CSS de `variables.css` — nunca hardcodear colores o espaciados
4. Respetar dark mode: todo nuevo estilo debe funcionar en ambos temas
5. Animaciones con Framer Motion para entradas y transiciones; CSS keyframes para loops simples
6. Nuevos proyectos se agregan solo en `portfolio.js` con sus imágenes en `public/projects/`
7. No hay backend; el formulario de contacto usa `mailto:`
8. No hay routing; la navegación es por scroll suave a secciones con `id`
9. Mantener accesibilidad: focus states, alt text, semántica HTML
10. No agregar dependencias sin justificación clara
