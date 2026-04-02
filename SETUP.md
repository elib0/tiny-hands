# 🚀 Guía de Configuración - Tiny Hands Home Daycare Kindergarten

## ✅ Configuración Completada

El proyecto ha sido completamente convertido de HTML estático a React + Vite con las siguientes características:

### 📦 Tecnologías Integradas

- ✅ React 18 + TypeScript
- ✅ Vite 5 (Build tool ultra-rápido)
- ✅ React Router DOM (Navegación)
- ✅ i18next (Inglés y Español)
- ✅ Firebase (Auth + Firestore)
- ✅ Bootstrap 5.3
- ✅ Todos los estilos CSS originales
- ✅ jQuery y plugins del template

### 🎨 Estilos y Diseño

**Todos los estilos del template original están integrados:**

1. **CSS del Template** - Cargado en `index.html`:
   - Bootstrap
   - Font Awesome
   - Magnific Popup
   - Slick Slider
   - Style.css principal (267KB)

2. **Fuentes de Google**:
   - Baloo 2 (headings)
   - Catamaran (body text)

3. **Scripts jQuery**:
   - Todos los plugins originales funcionando
   - Inicializados automáticamente con `useTemplateScripts` hook

### 🔧 Configuración Inicial

1. **Instalar dependencias** (ya hecho):
   ```bash
   pnpm install
   ```

2. **Configurar Firebase**:
   - Edita `.env.local` con tus credenciales de Firebase
   - Obtén las credenciales desde [Firebase Console](https://console.firebase.google.com/)

3. **Iniciar desarrollo**:
   ```bash
   pnpm dev
   ```
   Abre http://localhost:5173/

### 📁 Estructura del Proyecto

```
Tiny Hands Home Daycare-kindergarten/
├── assets/                    # Assets del template original
│   ├── css/                  # Estilos CSS
│   ├── js/                   # Scripts jQuery
│   ├── img/                  # Imágenes
│   ├── fonts/                # Fuentes
│   └── scss/                 # SCSS originales
├── src/
│   ├── components/           # Componentes reutilizables
│   │   ├── BlogCard.tsx
│   │   ├── ClassCard.tsx
│   │   ├── CounterItem.tsx
│   │   ├── LanguageSwitcher.tsx
│   │   ├── Preloader.tsx
│   │   ├── ProcessCard.tsx
│   │   ├── SearchBox.tsx
│   │   ├── ServiceCard.tsx
│   │   └── TeamCard.tsx
│   ├── config/
│   │   └── firebase.ts       # Configuración Firebase
│   ├── hooks/
│   │   ├── useLanguage.ts    # Hook para cambiar idioma
│   │   └── useTemplateScripts.ts  # Inicializa jQuery plugins
│   ├── i18n/
│   │   ├── config.ts         # Configuración i18next
│   │   └── locales/
│   │       ├── en.json       # Traducciones inglés
│   │       └── es.json       # Traducciones español
│   ├── layouts/
│   │   ├── Header.tsx        # Header con navegación
│   │   ├── Footer.tsx        # Footer
│   │   └── MainLayout.tsx    # Layout principal
│   ├── pages/
│   │   └── Home.tsx          # Página principal
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css             # Estilos React mínimos
├── index.html                # HTML principal con CSS/JS
├── vite.config.ts            # Configuración Vite
├── tsconfig.json             # Configuración TypeScript
├── package.json
├── vercel.json               # Configuración Vercel
└── README.md

```

### 🌍 Internacionalización (i18n)

**Idiomas soportados:**
- 🇬🇧 Inglés (por defecto)
- 🇪🇸 Español

**Cambiar idioma:**
- Usa el selector de idioma en el header (botones EN/ES)
- El idioma se guarda en localStorage

**Agregar traducciones:**
1. Edita `src/i18n/locales/en.json` o `es.json`
2. Usa `t('clave.de.traduccion')` en componentes

### 🔥 Firebase

**Servicios configurados:**
- Authentication (para login futuro)
- Firestore (base de datos)

**Uso en componentes:**
```typescript
import { auth, db } from '@/config/firebase'

// Usar auth para autenticación
// Usar db para Firestore
```

### 🚀 Despliegue a Vercel

1. **Conecta tu repositorio** con Vercel
2. **Configura variables de entorno** en Vercel Dashboard:
   - `VITE_FIREBASE_API_KEY`
   - `VITE_FIREBASE_AUTH_DOMAIN`
   - `VITE_FIREBASE_PROJECT_ID`
   - `VITE_FIREBASE_STORAGE_BUCKET`
   - `VITE_FIREBASE_MESSAGING_SENDER_ID`
   - `VITE_FIREBASE_APP_ID`

3. **Despliega**:
   - Cada push a main desplegará automáticamente
   - El archivo `vercel.json` ya está configurado

### 📝 Scripts Disponibles

```bash
# Desarrollo
pnpm dev          # Inicia servidor de desarrollo

# Producción
pnpm build        # Compila para producción
pnpm preview      # Vista previa de build

# Linting
pnpm lint         # Ejecuta ESLint
```

### 🎯 Características Clave

1. **Componentes Reutilizables**: Todos los elementos están componentizados
2. **Traducciones**: Soporte completo EN/ES
3. **Firebase Ready**: Listo para backoffice
4. **Responsive**: Diseño adaptable
5. **SEO Friendly**: Meta tags configurados
6. **Optimizado**: Build optimizado con Vite

### ⚠️ Notas Importantes

1. **Assets**: La carpeta `assets/` contiene todos los recursos del template original
2. **jQuery**: Los scripts jQuery se cargan desde `index.html` y se inicializan con el hook `useTemplateScripts`
3. **Estilos**: Los estilos CSS originales se cargan desde `index.html`, no desde imports de React
4. **Imágenes**: Usa rutas absolutas `/assets/img/...` para las imágenes

### 🐛 Solución de Problemas

**Los estilos no se cargan:**
- Verifica que la carpeta `assets/` esté en la raíz del proyecto
- Revisa que `index.html` tenga los links a los CSS

**Los carruseles no funcionan:**
- Asegúrate de que `useTemplateScripts()` esté llamado en el componente
- Verifica que jQuery se haya cargado (abre DevTools Console)

**Firebase no funciona:**
- Revisa que `.env.local` tenga las credenciales correctas
- Verifica que el proyecto de Firebase esté activo

### 📚 Recursos

- [Documentación React](https://react.dev/)
- [Documentación Vite](https://vitejs.dev/)
- [Documentación i18next](https://www.i18next.com/)
- [Documentación Firebase](https://firebase.google.com/docs)
- [Documentación Vercel](https://vercel.com/docs)

### 🤝 Próximos Pasos

1. Configura Firebase con tus credenciales
2. Personaliza las traducciones según tus necesidades
3. Agrega más páginas (About, Classes, Contact, etc.)
4. Implementa el backoffice con Firebase
5. Despliega a Vercel

---

**¡El proyecto está listo para desarrollo!** 🎉
