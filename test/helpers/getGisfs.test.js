import { getGifs } from '../../src/helpers/getGisfs';


describe('Pruebas en getGifs', () => {
    test('Debería retornar un arreglo de gifs', async () => { 
        const gifs = await getGifs();
        //console.log(gifs);

        expect(gifs.length).toBeGreaterThan(0);
        
        //Evalua que venga el primer elemento con la estructura indicada:
        expect(gifs[0]).toEqual(
            {
                id: expect.any(String),
                url: expect.any(String),
                title: expect.any(String),
            }
        );
     })
});