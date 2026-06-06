# Agencia Horizonte — Proyecto 2

Sitio web de una agencia de viajes ficticia.
Desarrollado en la Unidad 2 del taller de Desarrollo Web.

## Estructura

```
proyecto2/
├── index.html               ← Inicio
├── .gitignore
├── README.md
└── src/
    ├── components/
    │   ├── destinos.html    ← Catálogo de destinos (filtro JS en Clase 1)
    │   ├── paquetes.html    ← Comparativa de paquetes
    │   └── contacto.html   ← Formulario de cotización (validación JS en Clase 1)
    ├── css/
    │   ├── global.css       ← Variables, navbar, footer, card-hover, btn-az
    │   ├── home.css         ← Hero con gradiente
    │   ├── destinos.css     ← Imagen de card + badge superpuesto
    │   ├── paquetes.css     ← Columna destacada en tabla
    │   └── contacto.css    ← .alert-exito / .visible
    ├── js/
    │   ├── destinos.js      ← (pendiente Clase 1) filtro por categoría
    │   └── form.js          ← (pendiente Clase 1) validación del formulario
    └── assets/
        ├── logo.svg
        └── favicon.svg
```

## Cómo abrir

```bash
python3 -m http.server 8000
```

Luego visitar `http://localhost:8000`.

## Estado

| Archivo       | Estado         |
|---------------|----------------|
| HTML + CSS    | ✅ Completo    |
| destinos.js   | ⏳ Clase 1     |
| form.js       | ⏳ Clase 1     |
