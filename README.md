# NextJS

## Content

-   **[Instalación](#Instalar-NextJS)**
-   **[Routing](#Routing)**

# Instalar NextJS

## Requisitos

-   Node (recomendado version mayor a 12, minimo version mayor a 10)
-   Git
-   Browser

## Instalación

### CLI

Forma automatica en donde un paquete da una estructura predeterminada.

```console
  yarn create next-app
```

### Manual

Inicializar un proyecto de npm.

```console
  npm init -y
```

Instalar paquetes a usar y framework.

```console
yarn add next react react-dom
```

Remplazar scrips en el package.json por:

```json
"dev": "next",
"buid": "next build",
"start": "next start"
```

Crear carpeta de pages y ya queda listo NextJS para su uso.

# Routing

NextJS usa routing basado en el FileSystem, esto quiere decir que Next hace routing dependiendo con el contenido de la carpeta de pages.

## Rutas dinamicas

Para hacer uso de las rutas dinamicas se debe crear una carpeta con el predecesor de el identificador, ejemplo:

```
domain/product/papas
          ^      ^
    predecesor  identificador
```

Crear una carpeta llamada product y dentro un archivo nombrado: `[id].js`, añadir el codigo de react y para tomar el id en el codigo se debe:

```javascript
import { useRouter } from "next/router"; // importar el router de next

const router = useRouter(); // instanciar el router

router.query.id; // hacer el query para mostrar el id del producto
```

## Linkeando paginas

Para linkear las paginas se hace uso de Link del modulo de `next/link`
