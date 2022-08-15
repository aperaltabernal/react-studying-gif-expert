import {useState} from 'react';
import { AddCategory, GifGrid } from './components';


export const GifExpertApp = () => {
    //NUNCA COLOCAR UN HOOK DENTRO DE UNA CONDICION
    const [categories, setCategories] = useState([ 'Baby' ]);//Si lo defino como un arreglo, siempre será un arreglo

    const onAddCategory = (newCategory) => {
        //setCategories((items) => [...items, 'Moto']);
        
        //Valida que no se permitan ingresar valores ya existentes
        if(categories.includes(newCategory)) return;

        setCategories([newCategory, ...categories]);
    }

    return (
        <>
            <h1>Gif Expert App</h1>

            {/*El componenten sólo debe encargarse de emitir el valor, no validar nada mas*/}
            <AddCategory onNewCategory={onAddCategory}/>

            { 
                categories.map(item => (
                    <GifGrid key={item} category={item}/>
                ))
            }
                
        </>
    );
}