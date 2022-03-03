# NextJS

## Content

-   **[Instalar NextJS](#Instalar-NextJS)**
    -   **[Requisitos](#Requisitos)**
    -   **[Instalación](#Instalación)**
-   **[Routing](#Routing)**
    -   **[Rutas dinamicas](#Rutas-dinamicas)**
    -   **[Linkeando paginas](#Linkeando-paginas)**
-   **[Extendiendo NextJS](#Extendiendo-NextJS)**
    -   **[Extender document](#Extender-document)**
    -   **[Extender app](#Extender-app)**
-   **[Styles in NextJS](#Styles-in-NextJS)**

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

# Extendiendo NextJS

## Extender document

(No tan recomendado)
Extender el document sirve para hacer modificaciones sobre todas las paginas, por ejemplo para añadir favicons o fuentes personalizadas, tambien para añadir estilos o scripts de librerias externas, meta tags o cualquier cosa que se necesite añadir en el head del documento.

[Documentación de Next sobre Custom document](https://nextjs.org/docs/advanced-features/custom-document)

## Extender app

Extender el app sirve para añadir providers, layouts, themes, props o cualquier cosa que necesitemos para toda la aplicacion.

[Documentación de Next sobre Custom app](https://nextjs.org/docs/advanced-features/custom-app)

# Styles in NextJS

Nativamente en Next se puede hacer uso de 3 formas para aplicar css:

1. Global CSS: crear un archivo global `.css` en la ruta principal e importarlo en `_app.js`.

    ```javascript
    import "../style.css";
    ```

2. Module CSS: crear un archivo `.css` e importarlo en los archivos que se va a usar (crea las clases con un hash en el nombre para evitar colisiones).

    ```javascript
    import styles from "archivo.css";
    ```

3. CSS-in-JS Styled JSX: propia de Next y desarrollada por Vercel, se usa dentro de un componente de react por medio de las etiquetas style con un atributo jsx y dentro de la etiqueta especificar un template literal de js "``" y colocar el nombre de la clase en la etiqueta en la cual se quiere aplicar (crea las clases con un hash en el nombre para evitar colisiones).

    ```html
    <style jsx>
    	{``}
    </style>
    ```
