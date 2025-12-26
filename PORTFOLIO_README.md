# 💼 Portafolio Personal - Gerardo Esparza

Portafolio profesional moderno desarrollado con React + Vite, inspirado en el diseño minimalista y elegante de Apple.

![React](https://img.shields.io/badge/React-19-blue)
![Vite](https://img.shields.io/badge/Vite-5.x-purple)

## 🌟 Características

- ✨ **Diseño Inspirado en Apple**: Estilo minimalista, elegante y profesional
- 🎨 **Animaciones Fluidas**: Implementadas con Framer Motion
- 📱 **Totalmente Responsivo**: Optimizado para móviles, tablets y desktop
- 🌓 **Dark Mode**: Soporte automático de tema oscuro
- ⚡ **Alto Rendimiento**: Construido con Vite para carga ultra rápida
- 📧 **Formulario de Contacto**: Integración directa con email
- 🔄 **Smooth Scroll**: Navegación suave entre secciones

## 🚀 Secciones

1. **Hero** - Presentación impactante con animaciones
2. **Sobre Mí** - Información profesional y personal
3. **Experiencia** - Timeline de experiencia profesional
4. **Proyectos** - Showcase de proyectos destacados
5. **Habilidades** - Stack tecnológico con visualización
6. **Contacto** - Formulario y links de contacto

## 🛠️ Tecnologías Utilizadas

- **React 19** - Librería de UI
- **Vite** - Build tool y dev server
- **Framer Motion** - Animaciones avanzadas
- **React Intersection Observer** - Detección de elementos en viewport
- **CSS Modules** - Estilos componentizados

## 📦 Instalación y Uso

```bash
# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev

# Construir para producción
npm run build

# Vista previa de producción
npm run preview
```

El servidor de desarrollo estará disponible en: **http://localhost:5173**

## 🎨 Personalización

### 1. Actualizar Información Personal

Edita el archivo `src/data/portfolio.js` para actualizar:

- Información personal (nombre, título, ubicación)
- Experiencia profesional
- Proyectos
- Habilidades técnicas
- Datos de contacto y redes sociales

### 2. Agregar Foto de Perfil

1. Coloca tu foto en `public/profile.jpg`
2. En `src/sections/About.jsx`, descomenta la línea:

```jsx
<img src="/profile.jpg" alt={personalInfo.name} />
```

### 3. Agregar Imágenes de Proyectos

1. Coloca las imágenes de tus proyectos en `public/projects/`
2. Actualiza las rutas en `src/data/portfolio.js`:

```javascript
image: "/projects/tu-proyecto.jpg";
```

**Sugerencias para capturas de pantalla:**

- Vista del dashboard principal
- Pantalla de login/registro
- Vista móvil del proyecto
- Funcionalidades clave en acción

### 4. Cambiar Colores del Tema

Modifica las variables en `src/styles/variables.css`:

```css
:root {
  --color-accent: #0071e3; /* Color principal */
  --color-accent-hover: #0077ed;
}
```

## 📁 Estructura del Proyecto

```
MyPortfolio/
├── src/
│   ├── components/        # Componentes reutilizables (Navbar, Footer)
│   ├── sections/          # Secciones principales (Hero, About, etc.)
│   ├── styles/            # Estilos globales y variables
│   ├── data/              # Datos del portafolio
│   ├── hooks/             # Custom hooks
│   ├── App.jsx           # Componente principal
│   └── main.jsx          # Entry point
├── public/               # Assets estáticos
└── package.json
```

## 🌐 Despliegue

### Vercel (Recomendado)

1. Push tu código a GitHub
2. Conecta tu repo en [Vercel](https://vercel.com)
3. Deploy automático

### Netlify

1. Push tu código a GitHub
2. Conecta en [Netlify](https://netlify.com)
3. Build command: `npm run build`
4. Publish directory: `dist`

## 📝 Próximas Mejoras

- [ ] Implementar PWA completa
- [ ] Agregar sección de blog
- [ ] Integrar sistema de comentarios
- [ ] Modo multiidioma (ES/EN)
- [ ] Integrar backend para formulario de contacto
- [ ] Agregar certificaciones

## 👨‍💻 Autor

**Gerardo Esparza**

- 🔗 GitHub: [@GerardoEsparza529](https://github.com/GerardoEsparza529)
- 💼 LinkedIn: [esparz4-gerardo](https://www.linkedin.com/in/esparz4-gerardo)
- 📧 Email: gerardo.esparz4@gmail.com

---

⭐ Si te gustó este proyecto, no olvides darle una estrella!

Hecho con ❤️ por Gerardo Esparza
