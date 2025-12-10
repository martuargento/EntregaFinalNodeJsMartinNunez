# API de Productos con Node.js, Express y Firebase

Este proyecto es una API RESTful desarrollada con Node.js y Express para gestionar un catálogo de productos. Utiliza Firebase (Firestore) como base de datos para persistir la información.

## ✨ Características

- **Gestión de Productos (CRUD):**
  - 📦 **Obtener todos los productos:** Lista todos los productos disponibles.
  - 📦 **Obtener un producto por ID:** Busca y devuelve un producto específico.
  - 📦 **Agregar un nuevo producto:** Crea un nuevo producto en la base de datos.
  - 📦 **Eliminar un producto:** Borra un producto por su ID.

- **Autenticación:** Endpoint de login preparado para ser implementado.
- **Arquitectura por capas:** El código está organizado en Controladores, Servicios y Modelos para una mejor mantenibilidad.
- **Configuración de CORS:** Preparado para aceptar peticiones desde dominios específicos de forma segura.
- **Variables de entorno:** Manejo seguro de credenciales y configuración a través de archivos `.env`.

---

## 📖 Documentación de la API

Todos los endpoints están prefijados con `/api`.

### Autenticación

#### `POST /login`
- **Descripción:** Endpoint para la autenticación de usuarios 
- **Body:** `{ "email": "test@gmail.com", "password": "123456" }`

### Productos

#### `GET /products`
- **Descripción:** Obtiene la lista completa de productos.
- **Respuesta Exitosa (200):** `[{ "id": "...", "nombre": "...", "precio": ... }, ...]`

#### `GET /products/:id`
- **Descripción:** Obtiene un único producto por su ID.
- **Respuesta Exitosa (200):** `{ "id": "...", "nombre": "...", "precio": ... }`
- **Respuesta de Error (404):** `{"message": "Producto no encontrado"}`

#### `POST /products`
- **Descripción:** Crea un nuevo producto.
- **Body:** `{ "nombre": "Producto Nuevo", "precio": 29.99, "descripcion": "..." }`
- **Respuesta Exitosa (200):** Devuelve el objeto del producto recién creado con su nuevo ID.

#### `DELETE /products/:id`
- **Descripción:** Elimina un producto por su ID.
- **Respuesta Exitosa (200):** `OK`

---

## 🏗️ Estructura del Proyecto

```
/
├── src/
│   ├── controllers/  # Lógica de peticiones y respuestas (req, res).
│   ├── data/         # Configuración de la conexión a Firebase y token.
│   ├── models/       # Lógica de acceso a la base de datos de Firestore.
│   ├── routes/       # Definición de los endpoints de la API.
│   └── services/     # Lógica de negocio y orquestación.
├── .env              # (No versionado) Credenciales y configuración.
├── index.js          # Punto de entrada de la aplicación y configuración de Express.
└── package.json      # Dependencias y scripts del proyecto.
```