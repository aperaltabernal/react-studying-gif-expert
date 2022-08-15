import React from 'react'
import ReactDOM from 'react-dom/client'
import { GifExpertApp } from './GifExpertApp'
import './styles.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  
  //El React.StrictMode es para DEV, 
  //y se usa para que react nos diga si hay errores, es una doble verificación de nuestro código.
  //Para PROD se quita.
  //<React.StrictMode>
    <GifExpertApp />
  //</React.StrictMode>
)
