import { useState } from "react";

export const AddCategory = ({onNewCategory}) => {
    const [inputValue, setInputValue] = useState('');

    const onInputChange = ({target}) => {
        setInputValue(target.value);
    }

    const onSubmit = (event) => {
        event.preventDefault();//Evita que la página se refresque por ejecutar el onSubmit del form
        
        if(inputValue.trim().length <= 1) return;

        //El componenten sólo debe encargarse de emitir el valor, no validar nada mas
        onNewCategory(inputValue);
        setInputValue('');
    }

    return (
        <form onSubmit={onSubmit}>{/* Al presionar enter, el elemento form recarga toda la pagina */}
            <input
                type="text"
                placeholder="Buscar gifs"
                value={inputValue}
                onChange={onInputChange}
            />
        </form>
    );
}