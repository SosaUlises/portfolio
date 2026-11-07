# Portfolio Personal — Brief de Diseño Visual

**Proyecto:** Portfolio profesional de Ulises Sosa  
**Versión:** 1.0  
**Estado:** Diseño conceptual aprobado — pendiente de implementación  
**Stack existente:** Next.js · React · TypeScript · Tailwind CSS

---

## 1. Visión del proyecto

Transformar el portfolio actual en una experiencia web profesional, moderna y visualmente distintiva, que represente la evolución académica, técnica y laboral de Ulises Sosa.

El sitio debe comunicar tres dimensiones fundamentales:

- **Formación:** Analista en Sistemas Informáticos y estudiante avanzado de Ingeniería en Sistemas.
- **Desarrollo de software:** experiencia en soluciones backend .NET y aplicaciones full stack.
- **Experiencia profesional IT:** incorporación a Avalian en el área de Soporte e Infraestructura, a partir del 10 de noviembre de 2026.

El portfolio no debe encasillar el perfil exclusivamente en desarrollo backend ni presentarlo como un experto en áreas en las que está comenzando a adquirir experiencia.

### Objetivo principal

Transmitir profesionalismo, criterio técnico, claridad, identidad propia y potencial de crecimiento ante reclutadores, líderes técnicos y profesionales del sector IT.

## 2. Dirección estética

**Estilo aprobado: Dark Premium + Editorial Moderno.**

La estética combina la sofisticación de una interfaz tecnológica con la claridad y personalidad de un diseño editorial contemporáneo.

### Atributos visuales

- Elegante y sobrio.
- Tecnológico, sin estética gamer.
- Minimalista, pero no vacío.
- Moderno, sin depender de tendencias pasajeras.
- Personal y reconocible.
- Altamente legible.
- Consistente entre desktop y mobile.

La identidad debe apoyarse principalmente en tipografía, composición, fotografía, ritmo visual y presentación de proyectos, no en efectos decorativos.

## 3. Sistema cromático

Paleta de referencia para implementar mediante tokens CSS reutilizables.

| Token | Color | Aplicación |
|---|---|---|
| Background | `#0B0D12` | Fondo principal |
| Background elevated | `#11151D` | Superficies secundarias |
| Surface | `#171C26` | Tarjetas y contenedores |
| Border | `#2A3240` | Bordes y divisores |
| Text primary | `#F4F6FA` | Títulos y contenido destacado |
| Text secondary | `#B5BFCD` | Párrafos |
| Text muted | `#8A97A8` | Metadatos |
| Accent | `#648DFF` | Acciones y elementos interactivos |
| Accent hover | `#83A5FF` | Estados hover |
| Accent subtle | `#1C2949` | Fondos de elementos destacados |

**Reglas cromáticas:**

- Mantener una sola familia de acento azul/índigo.
- No introducir múltiples colores decorativos por categoría.
- Priorizar contrastes accesibles.
- Reservar colores semánticos para estados reales.
- Evitar gradientes intensos, neones y superficies excesivamente luminosas.

## 4. Tipografía

### Fuente principal: Inter

Utilizar para títulos, párrafos, navegación, botones y contenido general.

### Fuente secundaria: JetBrains Mono

Utilizar exclusivamente para fechas, metadatos, identificadores técnicos y pequeñas etiquetas.

### Escala tipográfica orientativa

| Elemento | Desktop | Mobile |
|---|---|---|
| Nombre / Hero H1 | 64–80 px | 40–48 px |
| Titular profesional | 28–36 px | 22–26 px |
| Título de sección | 36–44 px | 28–32 px |
| Título de proyecto | 28–36 px | 24–28 px |
| Texto destacado | 18–20 px | 17–18 px |
| Texto general | 16–18 px | 16 px |
| Metadatos | 12–14 px | 12–13 px |

**Principio:** la tipografía debe establecer jerarquía sin necesidad de utilizar efectos o colores llamativos.

## 5. Layout y composición

### Contenedores

- Ancho principal máximo: 1200 px.
- Ancho de lectura para textos extensos: 680–760 px.
- Márgenes laterales responsive.
- Sistema de espaciado basado en múltiplos de 8 px.

### Espaciado

- Separación entre secciones desktop: 112–144 px.
- Separación entre secciones mobile: 72–96 px.
- Separación entre elementos internos: 16–32 px.

Los valores podrán ajustarse durante la implementación para garantizar una composición equilibrada.

### Principios editoriales

- Alternancia controlada entre composiciones de una y dos columnas.
- Uso generoso de espacio negativo.
- Títulos importantes con presencia.
- Líneas divisorias discretas.
- Alineaciones consistentes.
- Evitar que todas las secciones estén encerradas en tarjetas idénticas.

## 6. Componentes visuales

### Tarjetas

- Fondo sólido o ligeramente elevado.
- Bordes finos.
- Radio recomendado: 16–20 px.
- Sombras muy discretas.
- Hover mediante cambios suaves de borde, color o elevación.

No utilizar múltiples glows, desenfoques y capas superpuestas.

### Botones

- Acción principal: acento azul, claramente identificable.
- Acción secundaria: superficie oscura o borde discreto.
- Enlaces terciarios: texto con indicador visual simple.
- Estados hover, focus y disabled consistentes.

### Etiquetas técnicas

- Compactas y legibles.
- Sin exceso de colores.
- Utilizar JetBrains Mono cuando corresponda.
- Mostrar únicamente tecnologías relevantes.

### Iconografía

Lucide Icons o biblioteca equivalente, con estilo lineal, grosor consistente y tamaños contenidos.

## 7. Animaciones e interacciones

La animación debe acompañar la navegación sin competir con el contenido.

**Permitido:**

- Fade-in y desplazamientos verticales sutiles.
- Transiciones hover de 150–250 ms.
- Revelado de secciones mediante scroll.
- Transiciones discretas de navegación.
- Microinteracciones en enlaces y botones.

**Evitar:**

- Desenfoques animados extensivos.
- Parallax agresivo.
- Rebotes.
- Efectos 3D innecesarios.
- Animaciones que oculten contenido durante demasiado tiempo.

Respetar `prefers-reduced-motion`.

## 8. Estructura definitiva de la Home

### 01 — Navbar

Navegación superior discreta, fija o flotante.

Desktop: navegación horizontal con enlaces claramente identificados.

Mobile: menú compacto accesible, preferentemente tipo hamburguesa.

Secciones: Inicio, Sobre mí, Experiencia, Proyectos, Tecnologías, Educación y Contacto.

### 02 — Hero

**Objetivo:** generar una primera impresión profesional y personal.

Desktop: composición editorial de dos columnas.

Columna principal:
- Nombre: Ulises Sosa.
- Titular profesional.
- Presentación breve.
- Acciones principales.

Columna secundaria:
- Fotografía personal bien integrada.
- Recursos gráficos mínimos.

Mobile: composición vertical adaptada para priorizar la presentación y los enlaces principales.

CTA prioritario: Ver proyectos.

CTA secundarios: Descargar CV y LinkedIn, con GitHub accesible.

### 03 — Sobre mí

Bloque editorial con dos o tres párrafos breves.

Debe comunicar formación, experiencia técnica, trayectoria y objetivos profesionales.

Evitar repeticiones del Hero y textos excesivamente técnicos.

### 04 — Experiencia profesional

Presentación mediante timeline editorial o lista cronológica elegante.

**Experiencias:**

1. Avalian — Pasantía en Soporte e Infraestructura IT, desde el 10/11/2026.
2. Blossom Institute — Desarrollo Backend Freelance.

Cada experiencia incluirá empresa, rol, período, resumen y responsabilidades reales.

No atribuir tareas que todavía no hayan sido realizadas.

### 05 — Proyectos destacados

**Proyectos principales:**

1. Entrenate.
2. Blossom Institute.

Diseño editorial con imágenes grandes, bloques de texto y composiciones alternadas.

Cada proyecto incluirá:

- Nombre y categoría.
- Problema que aborda.
- Descripción breve.
- Participación personal.
- Tecnologías relevantes.
- Imagen real.
- Enlace a caso de estudio.
- Repositorio o demo, según disponibilidad.

Sosa Gym API y VetIng dejarán de aparecer como proyectos destacados, sin eliminar sus repositorios de GitHub.

### 06 — Casos de estudio individuales

Cada proyecto contará con su propia página profesional.

Estructura prevista:

1. Introducción al proyecto.
2. Problema y objetivo.
3. Solución desarrollada.
4. Rol y responsabilidades.
5. Stack tecnológico.
6. Arquitectura y decisiones técnicas.
7. Funcionalidades destacadas.
8. Galería de capturas.
9. Aprendizajes y estado actual.
10. Enlaces relevantes.

Mantener navegación global y una forma sencilla de regresar a la Home.

### 07 — Tecnologías

Mostrar capacidades técnicas organizadas por categorías:

- Backend.
- Frontend.
- Bases de datos.
- Herramientas, DevOps y Cloud.
- Soporte e Infraestructura.

Incluir únicamente conocimientos y herramientas utilizados realmente, diferenciando experiencia práctica de tecnologías en aprendizaje.

No presentar una colección excesiva de badges.

### 08 — Educación

Lista editorial de formación académica:

- Ingeniería en Sistemas Informáticos — En curso.
- Analista en Sistemas Informáticos — Finalizado.
- Inglés B2 y formación complementaria.

Estados y textos en español.

### 09 — Contacto

Sección de cierre visualmente clara.

Incluir email, LinkedIn y GitHub, con opción de conservar WhatsApp.

Mensaje breve y profesional, sin frases comerciales genéricas.

### 10 — Footer

Footer semántico presente en todas las páginas, con nombre, copyright y enlaces discretos.

## 9. Responsive y accesibilidad

El sitio debe diseñarse con enfoque mobile-first.

Puntos de validación:

- 375 px.
- 430 px.
- 768 px.
- 1366 px.
- 1920 px.

Requisitos:

- Navegación completamente funcional.
- Sin desbordamiento horizontal.
- Tipografía legible.
- Botones accesibles.
- Imágenes proporcionadas.
- Estados de foco visibles.
- Contraste conforme a WCAG AA.
- Enlaces e identificadores HTML correctos.
- Compatibilidad con navegación por teclado.
- Animaciones accesibles.

## 10. Requisitos de calidad técnica

La implementación deberá respetar la arquitectura existente de Next.js App Router y TypeScript.

Prioridades:

- Código limpio y mantenible.
- Componentes reutilizables donde aporten valor.
- Separación entre datos y presentación.
- Server Components por defecto.
- Client Components únicamente cuando sean necesarios.
- Sin dependencias innecesarias.
- Validación estricta de TypeScript.
- Optimización de imágenes.
- Metadata SEO y Open Graph.
- Sin enlaces rotos.
- Sin duplicación de identificadores.
- Compatibilidad con Vercel.

Los cambios deberán organizarse en etapas verificables, con commits descriptivos y revisión previa al despliegue en producción.

## 11. Restricciones de diseño

Evitar expresamente:

- Apariencia de template genérico.
- Glassmorphism excesivo.
- Gradientes intensos.
- Glows decorativos repetitivos.
- Colores pastel dispersos.
- Tarjetas idénticas para todas las secciones.
- Párrafos extensos dentro de las tarjetas de proyectos.
- Animaciones exageradas.
- Métricas profesionales inventadas.
- Experiencia laboral exagerada.
- Tecnologías que no se hayan utilizado realmente.

## 12. Criterios de aceptación

El rediseño estará completo cuando:

1. El portfolio comunique correctamente la identidad profesional de Ulises Sosa.
2. La navegación y el diseño funcionen correctamente en desktop y mobile.
3. Avalian y Blossom estén presentados de manera precisa.
4. Entrenate y Blossom sean los únicos proyectos principales.
5. Los casos de estudio contengan información técnica verificable.
6. Exista consistencia visual entre todas las páginas.
7. El sitio supere las verificaciones de compilación, tipos, accesibilidad básica y enlaces.
8. Los metadatos y recursos compartidos estén configurados correctamente.
9. El diseño conserve una estética Dark Premium + Editorial Moderno.
10. El resultado tenga una identidad propia, evitando el aspecto de una plantilla prediseñada.

---

**Principio rector del proyecto**

El portfolio debe transmitir madurez profesional a través de contenido auténtico, presentación visual cuidada y calidad técnica.

El diseño debe potenciar la trayectoria y el trabajo realizado, nunca sustituirlos por efectos decorativos.

**Estado:** Brief visual v1.0 aprobado como referencia para la planificación e implementación.