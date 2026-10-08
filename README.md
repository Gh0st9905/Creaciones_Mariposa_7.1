# Evaluación final 7.1: Creación de un sitio web
**Curso:** WADE 1000L-3663ONL - Front-End Technologies and User Interface (UI) and Laboratory  
**Módulo 7:** Buenas prácticas de rendimiento front-end   
**Estudiante:** Wilberto Joel Luna Alvarado  
**Número de estudiante:** 2312499622  
**Fecha:** 8 de octubre de 2026  

---

## 1. DESCRIPCIÓN DEL PROYECTO
Este proyecto corresponde al desarrollo práctico de la Evaluación Final del curso, centrado en el diseño y despliegue de un sitio web funcional, creativo y completamente responsivo. Para esta evaluación, se seleccionó el Escenario 2: Tienda Online, de nombre Creaciones Mariposa enfocado en una plataforma de comercio electrónico moderna, atractiva y optimizada para el usuario. El sitio web cuenta con una arquitectura de navegación fluida compuesta por una página de inicio (index.html) y un catálogo extendido de 11 páginas en total (1 página de inicio principal y 10 páginas subordinadas interconectadas).

El desarrollo demuestra la integración avanzada de la estructura de HTML5 semántico, la aplicación de estilos personalizados mediante CSS local para reflejar la identidad visual de la marca, y el uso del framework Bootstrap para acelerar el diseño responsivo y garantizar una adaptación perfecta en dispositivos móviles, tabletas y ordenadores. Asimismo, se incorpora lógica e interactividad del lado del cliente a través de JavaScript, cumpliendo estrictamente con las buenas prácticas de desarrollo web, accesibilidad y control de versiones mediante Visual Studio y GitHub.

---

## 2. ESTRUCTURA DEL PROYECTO (.ZIP)

El archivo comprimido entregado para evaluación contiene la organización jerárquica de archivos requerida para la tienda online:

* `index.html` - Página de inicio del e-commerce construida con HTML5 semántico. Contiene la barra de navegación global, un carrusel promocional de productos, secciones destacadas y el pie de página.

* Páginas Subordinadas (10 páginas obligatorias):

	* `info.html` - Información sobre la dueña de la página web.
	* `contacto.html` - Información de contacto para pedidos por encargo.
    * `productos.html` - Galería de todas las categorias de productos filtrada.
	* `carteras.html` - Galería de productos filtrada exclusivamente para la categoría de carteras.
	* `wallets.html` - Galería de productos filtrada exclusivamente para la categoría de wallets.
	* `sombreros.html` - Galería de productos filtrada exclusivamente para la categoría de sombreros.
    * `pantallas.html` - Galería de productos filtrada exclusivamente para la categoría de pantallas.
    * `chancletas.html` - Galería de productos filtrada exclusivamente para la categoría de chancletas.
    * `camisas.html` -  Galería de productos filtrada exclusivamente para la categoría de camisas.
    * `collares.html` - Galería de productos filtrada exclusivamente para la categoría de collares.
	

* css/
	* `styles.css` - Hoja de estilos CSS personalizada que extiende las clases nativas de Bootstrap y maneja el modelo de caja específico.

* js/
	* `main.js` - Script de JavaScript encargado de las validaciones de formularios, animaciones y la lógica interactiva del carrito de compras.

* imagenes/ - Carpeta de recursos locales que almacena las imágenes de los productos, íconos y el logotipo oficial de la tienda.

* `README.md` - Este archivo con la documentación detallada y técnica de la evaluación final.

---

## 3. CARACTERÍSTICAS TÉCNICAS E INSTRUCCIONES IMPLEMENTADAS

### A. Estructura HTML5 Semántica y Notas Técnicas
* **Estructura Moderna:** Uso estricto de etiquetas semánticas (`<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`) para mejorar la accesibilidad y el SEO.

* **Documentación en Código:** Inclusión de notas y comentarios detallados dentro del archivo HTML especificando las principales características de la estructura HTML5 y los contenedores de Bootstrap utilizados.

### B. Integración y Estilos de Bootstrap Framework
* **Menú de Navegación Interconectado:** Barra de navegación (`navbar`) completamente responsiva y colapsable en dispositivos móviles, enlazada perfectamente entre las tres secciones principales.

* **Diseño de Interfaz Atractivo y Componentes:** Implementación de secciones tipo "Hero" con imágenes adaptables, llamados a la acción (CTA) estilizados mediante la clase .btn-primary y alertas del sistema.

* **Sistema de Rejilla (Grid System):** Uso de contenedores `.container`, `.row` y columnas responsivas (`.col-md-4`, `.col-sm-16`, etc.) para lograr una cuadrícula fluida en la página de productos.

* **Componente de Tarjetas (Cards):** Presentación organizada en la página de productos que agrupa imágenes, textos descriptivos y botones de acción contextuales de manera limpia.

### C. Personalización con CSS Local
* **Uso Selectivo de Selectores:** Aplicación de reglas CSS empleando selectores de elementos (etiquetas globales), clases (estilos reutilizables) e IDs (elementos únicos de la interfaz).

* **Modelo de Caja (Box Model):** Ajuste preciso de propiedades de diseño como margin, padding, border, width y height en el archivo styles.css para crear espaciados personalizados que rompen la homogeneidad del framework por defecto.
Diseño Responsivo: Reglas CSS complementarias para asegurar transiciones fluidas y correcta adaptación visual de tipografías y fondos.

---

## 4. ENLACE AL REPOSITORIO DE GITHUB
El código fuente completo, el historial de confirmaciones (commits) y la gestión del proyecto se encuentran sincronizados de forma segura en la nube:

* **URL del Repositorio:** [https://github.com/Gh0st9905/Creaciones_Mariposa_7.1]