import { render, screen } from '@testing-library/react';
import { GifGrid } from '../../src/components/GifGrid';

import { useFetchGifs } from '../../src/hooks/useFetchGifs';

/*PARA HACER UN MOCK DE UN CUSTOMHOOK SE DEBE IMPORTAR EL HOOK 
Y HACER LO SIGUIENTE: jest.mock('../../src/hooks/useFetchGifs');

LUEGO, SI SE PRUEBA, SACARÁ ERROR PORQUE YA EL HOOK NO ESTA DEFINIDO,
ENTONCES DEBEMOS SIMULAR EL RETORNO DEL HOOK CON LA SIGUIENTE FUNCION:

useFetchGifs.mockReturnValue({
    images: [],
    isLoading: true,
});

*/
jest.mock('../../src/hooks/useFetchGifs');

describe('Pruebas en <GifGrid />', () => {
    
    const category = 'Corazon';

    test('debería mostrar el loading inicialmente', () => {
        useFetchGifs.mockReturnValue({
            images: [],
            isLoading: true,
        });
        render(<GifGrid category={category}/>);
        expect(screen.getByText('Cargando...'));
        expect(screen.getByText(category));
    });

    test('debería mostrar items cuando se cargan las imágenes useFetchGifs', () => { 
        //Simular que las imagene vienen del hook:
        const images = [
            {
                id: 'ABC',
                title: 'Corazon',
                url: 'https://local/corazon.jpg'
            },
            {
                id: 'DEF',
                title: 'Ana',
                url: 'https://local/ana.jpg'
            }
        ];
        useFetchGifs.mockReturnValue({
            images: images,
            isLoading: false,
        });

        render(<GifGrid category={category}/>);

        //screen.debug();
        expect(screen.getAllByRole('img').length).toBe(2);
    });
});