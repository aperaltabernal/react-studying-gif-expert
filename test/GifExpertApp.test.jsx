import { render, screen, fireEvent } from '@testing-library/react';
import { GifExpertApp } from '../src/GifExpertApp';

describe('Pruebas en <GifExpertApp />' , () => { 
    const inputValue = 'Books';

    test('debería permitir agregar una categoría nueva', () => { 
        
        render(<GifExpertApp />);

        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');
        
        fireEvent.input(input, {target: {value: inputValue}});
        fireEvent.submit(form);

        expect(screen.getByText(inputValue));
     });

     test('no debería permitir agregar dos categorías iguales', () => { 
        render(<GifExpertApp />);

        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        fireEvent.input(input, {target: {value: inputValue}});
        fireEvent.submit(form);
        
        fireEvent.input(input, {target: {value: inputValue}});
        fireEvent.submit(form);
        
        screen.debug();
        expect(screen.getAllByText(inputValue).length).toBe(1);
      });

 })