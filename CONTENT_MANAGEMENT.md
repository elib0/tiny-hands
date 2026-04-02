# 📝 Guía de Gestión de Contenido

## 🎯 Estructura de Datos Centralizada

Todos los datos del sitio web están centralizados en `/src/data/siteData.json`. Este archivo contiene toda la información que se muestra en el sitio, facilitando su actualización sin tocar el código.

## 📂 Archivo de Datos: `siteData.json`

### 📞 Datos de Contacto Globales

```json
"contact": {
  "phone": "+256 (3156) 2156 236",
  "email": "info@Knirpseteam.com",
  "address": "256 Lonely Street Ave, Brooklyn CA, United State",
  "schedule": "Mon - Fri: 9.00am to 5.00pm"
}
```

**Usado en:**
- ✅ Header (teléfono, dirección, horario)
- ✅ Footer (teléfono, email, dirección)
- ✅ Sección CTA "Join Our New Session" (teléfono)

### 🌐 Redes Sociales Globales

```json
"social": {
  "facebook": "#",
  "twitter": "#",
  "instagram": "#",
  "linkedin": "#",
  "pinterest": "#",
  "skype": "#"
}
```

**Usado en:**
- ✅ Header (todas las redes)
- ✅ Footer (facebook, twitter, pinterest, linkedin)
- ✅ Team Cards (redes individuales por miembro)

### 🎨 Secciones de la Página Home

#### 1. Hero Section (Slider Principal)

```json
"hero": {
  "slides": [
    {
      "id": 1,
      "background": "/assets/img/bg/hero1-1.jpg",
      "tag1": "Welcome To Knirpse",
      "tag2": "Best Kindergarten",
      "title": "A lifetime of <span class=\"focus text-theme\">ChildCare</span> start with us!",
      "buttonText": "Book a visit",
      "buttonLink": "/contact"
    }
  ]
}
```

**Cómo agregar más slides:**
```json
{
  "id": 2,
  "background": "/assets/img/bg/hero1-2.jpg",
  "tag1": "Nueva Etiqueta 1",
  "tag2": "Nueva Etiqueta 2",
  "title": "Nuevo título del slide",
  "buttonText": "Texto del botón",
  "buttonLink": "/ruta-destino"
}
```

#### 2. Services Section (Servicios)

```json
"services": [
  {
    "id": 1,
    "icon": "/assets/img/icon/service-1.png",
    "color": "#ff6b6b",
    "titleKey": "services.items.bus.title",
    "descriptionKey": "services.items.bus.description",
    "link": "/service-details"
  }
]
```

**Características:**
- ✅ Cada servicio tiene un **color personalizado**
- ✅ Usa claves de traducción (i18n) para título y descripción
- ✅ Icono personalizado por servicio

**Cómo agregar un nuevo servicio:**
1. Agrega el objeto al array `services`
2. Agrega las traducciones en `/src/i18n/locales/en.json` y `es.json`

#### 3. About Section (Más Sobre Nosotros)

```json
"about": {
  "image": "/assets/img/shape/shape-slide-1.png",
  "subtitleKey": "about.subtitle",
  "titleKey": "about.title",
  "descriptionKey": "about.description",
  "buttonTextKey": "about.button",
  "buttonLink": "/about"
}
```

#### 4. Counter Section (Estadísticas)

```json
"counters": [
  {
    "id": 1,
    "icon": "fa-light fa-chalkboard-user",
    "number": 45,
    "textKey": "counter.teachers"
  }
]
```

**Datos numéricos:**
- Qualified Teachers: `45`
- Years Of Experience: `20`
- Students Enrolled: `565`
- Total Awards: `15`

**Para actualizar:** Solo cambia el valor de `number`

#### 5. Classes Section (Clases en Curso)

```json
"classes": [
  {
    "id": 1,
    "image": "/assets/img/class/class-1.jpg",
    "titleKey": "classes.items.language.title",
    "descriptionKey": "classes.items.language.description",
    "feeKey": "classes.items.language.fee",
    "ageKey": "classes.items.language.age",
    "timeKey": "classes.items.language.time",
    "capacityKey": "classes.items.language.capacity",
    "link": "/class-details"
  }
]
```

**Datos de cada clase:**
- Imagen
- Título
- Descripción
- Tarifa (Fee)
- Edad (Age)
- Horario (Time)
- Capacidad (Capacity)

#### 6. Process Section (Proceso)

```json
"process": [
  {
    "id": 1,
    "number": "01",
    "icon": "/assets/img/icon/process-1.png",
    "titleKey": "process.items.instructor.title",
    "descriptionKey": "process.items.instructor.description",
    "showDirection": true
  }
]
```

**Nota:** `showDirection: false` en el último paso para ocultar la flecha

#### 7. Team Section (Nuestro Personal Experto)

```json
"team": [
  {
    "id": 1,
    "image": "/assets/img/team/t-1.jpg",
    "name": "Bableo Dablo",
    "designation": "Kids Specialist",
    "description": "Assertively repurpose orthogonal architectures...",
    "social": {
      "facebook": "#",
      "twitter": "#",
      "instagram": "#",
      "linkedin": "#"
    },
    "link": "/team-details"
  }
]
```

**Datos de cada miembro:**
- Imagen
- Nombre
- Cargo/Designación
- Descripción
- Redes sociales individuales
- Link a detalles

#### 8. CTA Section (Llamado a la Acción)

```json
"cta": {
  "subtitleKey": "cta.subtitle",
  "titleKey": "cta.title",
  "buttonTextKey": "cta.button",
  "buttonLink": "/about"
}
```

**Nota:** El teléfono se toma de `contact.phone`

#### 9. Blog Section

```json
"blog": [
  {
    "id": 1,
    "image": "/assets/img/blog/blog-1.jpg",
    "title": "Education Always Best For Parent Develope",
    "date": "10 October, 2024",
    "comments": "02",
    "link": "/blog-details"
  }
]
```

## 🌍 Multiidioma (i18n)

### Archivos de Traducción

- **Inglés:** `/src/i18n/locales/en.json`
- **Español:** `/src/i18n/locales/es.json`

### Estructura de Traducciones

```json
{
  "services": {
    "subtitle": "What We Offer",
    "title": "Our Services",
    "items": {
      "bus": {
        "title": "Bus Service",
        "description": "Descripción del servicio..."
      }
    }
  }
}
```

### Cómo Agregar Nuevas Traducciones

1. Agrega la clave en ambos archivos (en.json y es.json)
2. Usa la clave en el componente: `t('ruta.de.la.clave')`

**Ejemplo:**
```typescript
// En el componente
const { t } = useTranslation()
<h2>{t('services.title')}</h2>
```

## 📋 Componentes de Sección

Todos los componentes de sección están en `/src/components/sections/`:

- `HeroSection.tsx` - Slider principal
- `ServicesSection.tsx` - Servicios
- `AboutSection.tsx` - Sobre nosotros
- `CounterSection.tsx` - Estadísticas
- `ClassesSection.tsx` - Clases
- `ProcessSection.tsx` - Proceso
- `TeamSection.tsx` - Equipo
- `CTASection.tsx` - Llamado a la acción
- `BlogSection.tsx` - Blog

### Uso en Home.tsx

```typescript
import siteData from '../data/siteData.json'

<HeroSection slides={siteData.hero.slides} />
<ServicesSection services={siteData.services} />
<AboutSection {...siteData.about} />
// etc...
```

## 🔧 Cómo Actualizar Contenido

### 1. Cambiar Información de Contacto

Edita `/src/data/siteData.json`:
```json
"contact": {
  "phone": "TU_NUEVO_TELEFONO",
  "email": "TU_NUEVO_EMAIL",
  "address": "TU_NUEVA_DIRECCION"
}
```

### 2. Agregar un Nuevo Servicio

1. En `siteData.json`:
```json
{
  "id": 5,
  "icon": "/assets/img/icon/service-5.png",
  "color": "#your-color",
  "titleKey": "services.items.nuevo.title",
  "descriptionKey": "services.items.nuevo.description",
  "link": "/service-details"
}
```

2. En `en.json` y `es.json`:
```json
"services": {
  "items": {
    "nuevo": {
      "title": "Nuevo Servicio",
      "description": "Descripción del nuevo servicio"
    }
  }
}
```

### 3. Actualizar Estadísticas (Counters)

Simplemente cambia los números en `siteData.json`:
```json
"counters": [
  { "id": 1, "number": 50 },  // Cambiar de 45 a 50
  { "id": 2, "number": 25 }   // Cambiar de 20 a 25
]
```

### 4. Agregar un Miembro del Equipo

```json
{
  "id": 4,
  "image": "/assets/img/team/t-4.jpg",
  "name": "Nuevo Miembro",
  "designation": "Cargo",
  "description": "Descripción...",
  "social": {
    "facebook": "https://facebook.com/...",
    "twitter": "https://twitter.com/..."
  },
  "link": "/team-details"
}
```

## 🎨 Colores de Servicios

Los servicios tienen colores personalizados:
- Servicio 1 (Bus): `#ff6b6b`
- Servicio 2 (Sports): `#4ecdc4`
- Servicio 3 (Music): `#95e1d3`
- Servicio 4 (Teachers): `#f38181`

Para cambiar colores, edita el campo `color` en cada servicio.

## ✅ Ventajas de Esta Estructura

1. **Centralización:** Todos los datos en un solo lugar
2. **Reutilización:** Datos compartidos (contacto, redes) usados en múltiples lugares
3. **Multiidioma:** Soporte completo para inglés y español
4. **Fácil Mantenimiento:** Actualizar contenido sin tocar código
5. **Escalabilidad:** Fácil agregar nuevos elementos a cualquier sección
6. **Tipado:** TypeScript valida la estructura de datos

## 🚀 Próximos Pasos

Para gestión de contenido desde un backoffice:
1. Conectar Firebase Firestore
2. Crear interfaces de administración
3. Migrar datos de JSON a Firestore
4. Implementar CRUD para cada sección

---

**Nota:** Siempre mantén sincronizadas las traducciones en `en.json` y `es.json` cuando agregues nuevas claves.
