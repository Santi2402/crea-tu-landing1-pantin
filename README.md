🕯️ ProyectoFinal+Pantin – Vela Vita

E-commerce de velas artesanales • React + Firebase • Proyecto Final – CoderHouse React JS (2025)

📌 Descripción del proyecto

Vela Vita es una Single Page Application (SPA) desarrollada con React para simular un e-commerce real de velas artesanales.

El objetivo principal del proyecto es aplicar los contenidos del curso:

Componentes funcionales

Hooks (useState, useEffect, useContext)

React Router DOM

Context API para carrito

Conexión a Firebase (Firestore)

Renderizado condicional

Arquitectura de componentes

La app permite navegar por categorías, ver productos desde Firestore, agregar ítems al carrito, confirmar una compra y guardar una orden real en la base de datos.

🛠️ Tecnologías utilizadas

React + Vite

React Router DOM

Context API (manejo global del carrito)

Firebase Firestore (productos + órdenes)

CSS puro (UI minimalista, estética acorde a la marca)

🧩 Funcionalidades principales
🛍️ Catálogo dinámico

Los productos se cargan desde la colección products en Firestore.
Cada ítem incluye título, precio, imagen, categoría, stock y descripción.

🔎 Filtro por categorías

Rutas automáticas según categoría:

/category/decorativas

/category/premium

/category/minimalistas

/category/navidad

🕯️ Detalle de producto

Incluye:

Imagen en alta calidad

Título, precio, descripción

Stock disponible

ItemCount con validación de stock (mín. 1, máx. stock)

Botón Agregar al carrito alineado horizontalmente con los controles

Después de agregar → aparece:

Ir al carrito

Seguir comprando

🛒 Carrito de compras (global con Context)

Añadir productos con cantidad

Sumar, eliminar y vaciar

Cálculo de subtotal y total

CartWidget muestra el total de unidades

📦 Checkout + Firestore

Formulario que genera una orden real en Firestore, dentro de la colección orders.

Al finalizar:

Se limpia el carrito

Se muestra el ID de la orden al usuario

🔄 SPA completa

Toda la navegación se realiza sin recargar la página (cumple la rúbrica).

📂 Arquitectura de componentes
src/
 ├─ components/
 │   ├─ layout/
 │   │   ├─ NavBar
 │   │   └─ CartWidget
 │   ├─ products/
 │   │   ├─ ItemListContainer
 │   │   ├─ ItemList
 │   │   ├─ Item
 │   │   ├─ ItemDetailContainer
 │   │   ├─ ItemDetail
 │   │   └─ ItemCount
 │   └─ cart/
 │       ├─ Cart
 │       └─ CartItem
 ├─ context/
 │   └─ CartContext.jsx
 ├─ firebase/
 │   └─ firebaseConfig.js
 ├─ pages/
 │   └─ Checkout
 └─ styles/

🔥 Base de datos – Firestore
Colección: products

Campos:

Campo	Tipo
title	string
price	number
description	string
category	string
stock	number
image	string

Categorías disponibles:

decorativas

premium

minimalistas

navidad

Colección: orders

Cada orden incluye:

Datos del comprador

Productos con cantidad

Total

Timestamp

ID autogenerado por Firestore

🎨 Diseño y UX

Inspirado en la estética de marcas minimalistas de velas premium.
Incluye:

Fondo cálido beige claro

Botones con estilo pill (CTA principal: btn-cart)

Imagenes recortadas mostrando bien el producto

Tipografías delicadas y legibles

Alineación y jerarquías visuales cuidadas

⚙️ Instalación y ejecución
1️⃣ Clonar el repositorio
git clone https://github.com/Santi2402/crea-tu-landing1-pantin.git

2️⃣ Instalar dependencias
npm install

3️⃣ Correr la app en modo desarrollo
npm run dev


Abrir en:

👉 http://localhost:5173/

4️⃣ Generar build de producción
npm run build

🧑‍💻 Autor

Santiago Pantín
LinkedIn → https://www.linkedin.com/in/santiago-pant%C3%ADn-7075711a4/

Curso React JS – CoderHouse (2025)
Profesor: [nombre del profe si querés agregar]

✅ Cómo subir este README
git add README.md
git commit -m "Actualiza README final del Proyecto Vela Vita"
git push

🚀 Proyecto listo para entregar

Si querés, ahora te hago una última revisión técnica del repo como si fuera el profesor, y te digo exactamente qué vería él y qué nota te pondría.

¿Querés esa evaluación final?

Tú dijiste:
Me das una version  para copiar todo de una?
ChatGPT Plus

¡Obvio!
Acá tenés una sola versión completa, lista para copiar y pegar directamente en tu README.md sin nada más que modificar 👇✨

🕯️ ProyectoFinal+Pantin – Vela Vita

E-commerce de velas artesanales • React + Firebase • Proyecto Final – CoderHouse React JS (2025)

📌 Descripción

Vela Vita es una Single Page Application (SPA) desarrollada en React que simula un e-commerce real de velas artesanales.
El proyecto integra:

React Router DOM

Context API (carrito global)

Firebase / Firestore

Renderizado condicional

Componentes reutilizables

Hooks (useState, useEffect, useContext)

La aplicación permite visualizar productos obtenidos desde Firestore, filtrarlos por categoría, ver el detalle, agregar items al carrito y generar órdenes reales que se guardan en la base de datos.

🛠️ Tecnologías utilizadas

React + Vite

React Router DOM

Context API

Firebase Firestore

CSS personalizado

🧩 Funcionalidades principales
🛍️ Catálogo dinámico

Los productos se obtienen desde Firestore (products) y se muestran en:

Home

Vista por categorías

Detalle individual

Incluyen título, precio, categoría, imagen, descripción y stock.

🔎 Filtro por categorías

Rutas generadas automáticamente:

/category/decorativas

/category/premium

/category/minimalistas

/category/navidad

🕯️ Detalle del producto

Incluye:

Imagen en alta calidad

Descripción completa

Stock disponible

ItemCount: controlar cantidad dentro de los límites

Botón Agregar al carrito alineado con los controles

Renderización condicional: una vez agregado, muestra “Ir al carrito” y “Seguir comprando”

🛒 Carrito de compras

Administrado globalmente con Context API:

Agregar productos con cantidad

Calcular subtotal y total

Eliminar productos / vaciar carrito

CartWidget en la NavBar mostrando unidades totales

📦 Checkout + creación de orden en Firestore

Formulario que genera una orden real en Firestore (orders) con:

Información del comprador

Carrito completo

Total final

Fecha

ID generado por Firestore

Se muestra el ID de la orden al usuario al finalizar.

🔄 Navegación SPA

Toda la app funciona sin recargas, cumpliendo la rúbrica de una Single Page Application.

📂 Arquitectura de componentes
src/
 ├─ components/
 │   ├─ layout/
 │   │   ├─ NavBar
 │   │   └─ CartWidget
 │   ├─ products/
 │   │   ├─ ItemListContainer
 │   │   ├─ ItemList
 │   │   ├─ Item
 │   │   ├─ ItemDetailContainer
 │   │   ├─ ItemDetail
 │   │   └─ ItemCount
 │   └─ cart/
 │       ├─ Cart
 │       └─ CartItem
 ├─ context/
 │   └─ CartContext.jsx
 ├─ firebase/
 │   └─ firebaseConfig.js
 ├─ pages/
 │   └─ Checkout
 └─ styles/

🔥 Firestore – Base de datos
Colección: products

Cada documento incluye:

Campo	Tipo
title	string
price	number
description	string
category	string
stock	number
image	string

Categorías disponibles:

decorativas

premium

minimalistas

navidad

Colección: orders

Generada al finalizar una compra.
Incluye:

Buyer (nombre, email, teléfono)

Items comprados

Total

Timestamp

ID autogenerado

🎨 Diseño y UX

Estética limpia y cálida para acompañar la temática artesanal de Vela Vita

Botones redondeados tipo “pill”

Jerarquías visuales claras

Navegación amigable

Imágenes enfocadas en destacar el producto

Detalle del producto con controles alineados horizontalmente

⚙️ Instalación y ejecución
1️⃣ Clonar el repositorio
git clone https://github.com/Santi2402/crea-tu-landing1-pantin.git

2️⃣ Instalar dependencias
npm install

3️⃣ Ejecutar proyecto
npm run dev


Abrir en:

👉 http://localhost:5173/

4️⃣ Generar build
npm run build

🧑‍💻 Autor

Santiago Pantín
LinkedIn → https://www.linkedin.com/in/santiago-pant%C3%ADn-7075711a4/

Curso React JS – CoderHouse (2025)

✔️ Listo para entregar

Para subir este README:

git add README.md
git commit -m "Actualiza README final del Proyecto Vela Vita"
git push