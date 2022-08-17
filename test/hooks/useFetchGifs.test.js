import { renderHook, waitFor } from '@testing-library/react';
import { useFetchGifs } from '../../src/hooks/useFetchGifs';

describe('Pruebas en el hook useFetchGifs', () => { 
    test('debería regresar el estado inicial', () => { 
        //PARA PROBAR UN HOOK DEBEMOS INVOCAR renderHook YA QUE UN HOOK SOLO PUEDE SER LLAMADO EN UN FUNCTIONAL COMPONENT
        const {result} = renderHook(() => useFetchGifs('Amor'));
        const {images, isLoading} = result.current;

        expect(images.length).toBe(0);
        expect(isLoading).toBeTruthy();
     });


     test('debería retorna un arreglo de imagenes y isLoading en false', async () => { 
        const {result} = renderHook(() => useFetchGifs('Punch'));
        const { images, isLoading} = result.current;

        //ESTA FUNCION ESPERA A QUE EL HOOK SE EJECUTE
        //Y LA MANERA DE SABER SI YA SE EJECUTO ES QUE EL EXPECT INTERNO
        //SE CUMPLA
        await waitFor(() => {
            expect(result.current.images.length).toBeGreaterThan(0)
        });

        expect(images.length).toBeGreaterThan(0);
        expect(isLoading).toBeFalsy();
      });
 })