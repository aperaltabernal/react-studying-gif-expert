import { useState } from "react";
import PropTypes from 'prop-types';

export const AddCategory = ({onNewCategory}) => {
    const [inputValue, setInputValue] = useState('');

    const onInputChange = ({target}) => {
        setInputValue(target.value);
    }

    const onSubmit = (event) => {
        console.log("onSubmit ejecutado");
        event.preventDefault();//Evita que la página se refresque por ejecutar el onSubmit del form
        console.log("inputValue: " + inputValue)
        if(inputValue.trim().length <= 1) return;

        //El componenten sólo debe encargarse de emitir el valor, no validar nada mas
        onNewCategory(inputValue);
        setInputValue('');
    }

    return (
        <form onSubmit={onSubmit} aria-label="form">{/* Al presionar enter, el elemento form recarga toda la pagina */}
            <input
                type="text"
                placeholder="Buscar gifs"
                value={inputValue}
                onChange={onInputChange}
            />
        </form>
    );
}

AddCategory.propTypes = {
    onNewCategory: PropTypes.func.isRequired
}