# Tiny Hands Home Daycare - Kindergarten & Baby Care

Sitio web moderno para jardín de infantes construido con React, Vite, TypeScript, i18next y Firebase.

## 🚀 Características

- ⚡️ **React 18 + Vite** - Desarrollo rápido y optimizado
- 🎨 **TypeScript** - Tipado estático para mayor seguridad
- 🌍 **i18next** - Soporte multiidioma (Inglés y Español)
- 🔥 **Firebase** - Authentication y Firestore integrados
- 📱 **Responsive** - Diseño adaptable a todos los dispositivos
- 🎯 **Componentizado** - Componentes reutilizables y modulares
- 🚀 **Vercel Ready** - Configurado para despliegue en Vercel

## 📦 Instalación

```bash
# Instalar dependencias
pnpm install

# Copiar archivo de variables de entorno
cp .env.example .env
```

## 🔧 Configuración

### Firebase

1. Crea un proyecto en [Firebase Console](https://console.firebase.google.com/)
2. Habilita Authentication y Firestore
3. Copia las credenciales de tu proyecto
4. Actualiza el archivo `.env` con tus credenciales:

```env
VITE_FIREBASE_API_KEY=tu_api_key
VITE_FIREBASE_AUTH_DOMAIN=tu_auth_domain
VITE_FIREBASE_PROJECT_ID=tu_project_id
VITE_FIREBASE_STORAGE_BUCKET=tu_storage_bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=tu_messaging_sender_id
VITE_FIREBASE_APP_ID=tu_app_id
```

## 🛠️ Desarrollo

```bash
# Iniciar servidor de desarrollo
pnpm dev

# Compilar para producción
pnpm build

# Vista previa de producción
pnpm preview

# Lint
pnpm lint
```

## 📁 Estructura del Proyecto

```
src/
├── components/       # Componentes reutilizables
│   ├── BlogCard.tsx
│   ├── ClassCard.tsx
│   ├── CounterItem.tsx
│   ├── LanguageSwitcher.tsx
│   ├── Preloader.tsx
│   ├── ProcessCard.tsx
│   ├── SearchBox.tsx
│   ├── ServiceCard.tsx
│   └── TeamCard.tsx
├── config/          # Configuraciones
│   └── firebase.ts
├── hooks/           # Custom hooks
│   └── useLanguage.ts
├── i18n/            # Internacionalización
│   ├── config.ts
│   └── locales/
│       ├── en.json
│       └── es.json
├── layouts/         # Layouts de página
│   ├── Footer.tsx
│   ├── Header.tsx
│   └── MainLayout.tsx
├── pages/           # Páginas
│   └── Home.tsx
├── App.tsx
├── main.tsx
└── index.css
```

## 🌍 Internacionalización

El proyecto soporta dos idiomas:
- 🇬🇧 Inglés (por defecto)
- 🇪🇸 Español

Para cambiar el idioma, usa el componente `LanguageSwitcher` en el header.

## 🚀 Despliegue en Vercel

1. Conecta tu repositorio con Vercel
2. Configura las variables de entorno en Vercel Dashboard
3. Despliega automáticamente con cada push

El archivo `vercel.json` ya está configurado para manejar el enrutamiento de SPA.

## 🔥 Firebase

### Authentication
```typescript
import { auth } from './config/firebase'
// Usa auth para autenticación
```

### Firestore
```typescript
import { db } from './config/firebase'
// Usa db para operaciones de base de datos
```

## 📝 Componentes Principales

- **ServiceCard** - Tarjetas de servicios
- **ClassCard** - Tarjetas de clases
- **TeamCard** - Tarjetas de equipo
- **BlogCard** - Tarjetas de blog
- **CounterItem** - Contadores animados
- **ProcessCard** - Pasos del proceso

## 🎨 Estilos y Assets

El proyecto utiliza todos los estilos y assets del template original:
- **Bootstrap 5.3** - Framework CSS
- **CSS personalizado** - `/assets/css/style.css` (267KB)
- **Font Awesome** - Iconos completos
- **Google Fonts** - Baloo 2 y Catamaran
- **Slick Slider** - Carruseles y sliders
- **WOW.js** - Animaciones al hacer scroll
- **Magnific Popup** - Lightbox para imágenes

### Estructura de Assets

```
assets/
├── css/           # Todos los estilos CSS
├── js/            # Scripts jQuery y plugins
├── img/           # Imágenes del template
├── fonts/         # Fuentes personalizadas
└── scss/          # Archivos SCSS originales
```

### Scripts Integrados

Los siguientes scripts se cargan automáticamente:
- jQuery 3.5.0
- Bootstrap JS
- Slick Carousel
- Magnific Popup
- Isotope (filtros)
- Counter Up (contadores animados)
- WOW.js (animaciones)
- Parallax
- Scripts personalizados del template

El hook `useTemplateScripts` inicializa automáticamente todos los plugins cuando los componentes se montan.

## 📄 Licencia

Este proyecto está basado en el template Tiny Hands Home Daycare de Vecuro Themes.

## 🤝 Contribuir

Las contribuciones son bienvenidas. Por favor, abre un issue primero para discutir los cambios que te gustaría hacer.

## 📧 Contacto

Para más información, visita [tu-sitio-web.com](https://tu-sitio-web.com)
