import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifItem } from './GifItem';

export const GifGrid = ({category}) => {
    
    const {images, isLoading} = useFetchGifs(category);

    console.log(`Rendering ${category}`);
    console.log(isLoading)

    return (
        <>
            <h3>{category}</h3>
            {
                isLoading && (<h2>Cargando...</h2>)
            }
            <div className='card-grid'>
                {/*imagenes.map(({id, title}) => <li key={id}>{title}</li>)*/}
                {   
                    images.map((image) => (
                            <GifItem 
                                key={image.id}
                                { ...image }//Tecnica=Esparsir las propiedades, con esto el componente recibirá en las props los elementos hijos del objeto que se está pasando.
                            />
                        )
                    )
                }
            </div>
        </>
    );
}