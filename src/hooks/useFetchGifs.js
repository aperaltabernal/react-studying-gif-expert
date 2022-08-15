import { useState, useEffect } from 'react';
import { getGifs } from '../helpers/getGisfs';

/* CUSTOM HOOK: Es una funcion como un functional component de react
 pero la diferencia es que retorna un objeto, no un jsx.
 Permite extraer la lógica y dejarla modularizada.
 También se puede usar con otros hooks.
 Principalmente sirve para modularizar ejecuciones de hooks
 como el useEffect, etc. y esto afectará los renderizados
 del componente.*/

 export const useFetchGifs = (category) => {
    console.log(`useFetchGifs ${category}`);

    const [imagenes, setImagenes] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const getImagenes = async() => {
        console.log(`getImages ${category}`)
        const imgs = await getGifs(category);
        
        setImagenes(imgs); 
        setIsLoading(false);

        return imgs;
    }

    /* Al usar este Hook, le estamos indicando a React que 
    el componente tiene que hacer algo después de renderizarse:
    Si se deja de la siguiente manera, la funcion getGifs sólo sera llamada una vez por el elemento
    nuevo, y no por otra ejecucion previa */
    useEffect(() => {
        console.log(`useEffect ${category}`)
        
        getImagenes();
        
    }, []);//Si el valor de category cambia, entonces vuelve a ejecutar el effecto, en caso contrario no (esto optimiza el rendimiento al no hacer llamados innecesarios)
    //Si este cambio no depende de props o state entonces se puede colocar []

    return {
        images: imagenes,
        isLoading
    };
 }