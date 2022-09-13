# GifExpertApp

Este es mi repositorio del proyecto GifExpertApp de React.

ATENTAMENTE: JOAN ANDRES PERALTA BERNAL.

# INSTALACION DE LIBRERIA PARA PRUEBAS CON JEST Y REACT TESTING LIBRARY

# Instalación de JEST como librería para realizar pruebas:
npm install --save-dev jest

# Instalación que permite a VS reconocer las funciones y ayudas (docs) de jest:
npm install --save-dev @types/jest


# Opcional: Al importar un archivo js en un set de pruebas de la manera 'import { function } from './path'; la prueba arroja un error como el siguiente:
Jest encountered an unexpected token
Jest failed to parse a file. This happens e.g. when your code or its dependencies use non-standard JavaScript syntax, or when Jest is not configured to support such syntax.        
Out of the box Jest supports Babel, which will be used to transform your files into valid JS based on your Babel configuration.

# Para solucionarlo hacer lo siguiente:

npm install --save-dev babel-jest @babel/core @babel/preset-env @babel/preset-react 

# Luego se debe crear el archivo babel.config.cjs en la raiz del projecto con lo siguiente:

module.exports = {
    presets: [
        [ '@babel/preset-env', { targets: { esmodules: true } } ],
        [ '@babel/preset-react', { runtime: 'automatic' } ],
    ],
};

# Instalar testing-library/react para realizar pruebas sobre componentes de react:
npm install --save-dev @testing-library/react

# Intalación de jsdom para el entorno de pruebas basado en navegador, si no se coloca por defecto el entorno de pruebas es node.js
npm install --save-dev jest-environment-jsdom

# Adicionalmente se debe crear el archivo jest.config.cjs en la raiz del proyecto

Especialmente para probar componentes de react.
Por ejemplo al usar el método render, si este archivo no existe entonces arroja el siguiente error:

The error below may be caused by using the wrong test environment, see https://jestjs.io/docs/configuration#testenvironment-string.
Consider using the "jsdom" test environment.

Para solucionar ello se crea el archivo jest.config.cjs con el siguiente contenido:

module.exports = {
    testEnvironment: 'jest-environment-jsdom'
}

# Para probar operaciones que llaman fetch API instalar ls siguiente dependencia en dev:
npm install --save-dev whatwg-fetch

# Luego crear el archivo jest.setup.js y colocar lo siguiente:

import 'whatwg-fetch';

# Posteriormente en el archivo jest.config.cjs colocar lo siguiente:

module.exports= {
	...,
	setupFiles: ['./jest.setup.js']
}

# Finalmente, en el script del package.json agregar el "test":

"scripts": {
    ...
    "test": "jest --watchAll"
  },