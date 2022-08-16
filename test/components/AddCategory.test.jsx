import { render, screen, fireEvent } from '@testing-library/react';
import { AddCategory } from '../../src/components/AddCategory';

describe('Prueba en <AddCategory />', () => { 
    test('debería cambiar el valor de la caja de texto', () => { 
        //1. Arrange
        render(<AddCategory onNewCategory={() => {}}/>);
        const input = screen.getByRole('textbox');

        //2. Act: En el segundo parámetro del evento input() se le pasa el evento: {target: {value: 'Hola'}}
        fireEvent.input(input, {target: {value: 'Hola'}});

        //3. Assert
        expect(input.value).toBe('Hola');
     });

     test('debería llamar onNewCategory si el input tiene un valor', () => { 
        const inputValue = 'Corazon';
        
        render(<AddCategory onNewCategory={() => {}} />);
        
        const input = screen.getByRole('textbox');
        fireEvent.input(input, {target: {value: inputValue}});
        
        screen.debug();//El value del input es 'Corazon'

        const form = screen.getByRole('form');
        fireEvent.submit(form);

        screen.debug();//El value del input es ''

        expect(input.value).toBe('');
      });

      test('debería llamar onNewCategory si el input tiene un valor (con llamado a funcion Mock)', () => { 
        const inputValue = 'Corazon';

        /*
         LAS JEST.FN() AYUDAN A QUE PODAMOS EVALUAR QUE HEMOS LLAMADO LA FUNCION,
         TANTAS VECES, CON EL VALOR QUE ESTABA ESPERANDO QUE SE LLAMARA O INVOCARA:
         expect(onNewCategory).toHaveBeenCalledWith(inputValue);
         */
        const onNewCategory = jest.fn();
        
        render(<AddCategory onNewCategory={ onNewCategory } />);
        
        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        fireEvent.input(input, {target: {value: inputValue}});
        fireEvent.submit(form);

        expect(input.value).toBe('');
        
        expect(onNewCategory).toHaveBeenCalled();//Evalua que la función mock que se le pasa haya sido llamada
        expect(onNewCategory).toHaveBeenCalledTimes(1);//Evalua que la función mock que se le pasa haya sido llamada 1 sola vez
        expect(onNewCategory).toHaveBeenCalledWith(inputValue);//Evalua que la función mock que se le pasa haya sido llamada con el argumento que se le paso
      });

    test('no debería llamar onNewCategory si el input tiene menos de un caracter', () => { 
        const inputValue = 'A';
        const onNewCategory = jest.fn();
        render(<AddCategory onNewCategory={onNewCategory} />);

        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');
        fireEvent.input(input, {target: {value: inputValue}});
        fireEvent.submit(form);

        expect(onNewCategory).toHaveBeenCalledTimes(0);
        expect(onNewCategory).not.toHaveBeenCalled();//Tambien se puede llamar de esta forma
    })
 });