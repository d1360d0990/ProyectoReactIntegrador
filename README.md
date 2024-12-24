# React + Vite
# Proyecto React & AtlasDB

## Tabla de Contenidos

1. [Resumen del Proyecto](#resumen-del-proyecto)
2. [Tecnologías Utilizadas](#tecnologías-utilizadas)
3. [Características](#características)
4. [Requisitos Previos](#Requisitos-Previos)
5. [Uso](#uso)
6. [Endpoints de la API](#endpoints-de-la-api)
7. [Esquema de la Base de Datos](#esquema-de-la-base-de-datos)


---

## Resumen del Proyecto

Este proyecto es una aplicación full-stack construida con React para el frontend y MongoDB Atlas como base de datos. Proporciona una interfaz de usuario intuitiva para gestionar y visualizar datos de manera eficiente. La aplicación está diseñada para ser escalable y segura, utilizando herramientas y tecnologías modernas.

---

## Tecnologías Utilizadas

### Frontend:
- React
- Material-UI para componentes de UI
- Axios para llamadas a la API

### Backend:
- Node.js con Express.js

### Base de Datos:
- MongoDB Atlas (MongoDB en la nube)

---

## Características

1. **Operaciones CRUD**:
   - Crear, Leer, Actualizar y Eliminar datos sin problemas.
2. **Interfaz de Usuario Dinámica**:
   - Totalmente responsiva y amigable, construida con Material-UI.
3. **Base de Datos en la Nube**:
   - Almacenamiento seguro y escalable con MongoDB Atlas.

---

## Requisitos Previos:
- Node.js instalado
- Cuenta en MongoDB Atlas con un clúster configurado



## Esquema de la Base de Datos

{
  "_id": "ObjectId",
  "name": "string",
  "description": "string",
  "date": "Date",
  "location": "string",
  "maxCapacity": "number"
}
```
