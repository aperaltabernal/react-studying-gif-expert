
export const getGifs = async (category) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=9qU3HMyXcU2GBE3H6MHJ5FmV9AufBtI5&q=${category}&limit=20`;
    const respuesta = await fetch( url );
    const {data = []} = await respuesta.json();
    const gifs = data.map( img => ({
            id: img.id,
            title: img.title,
            url: img.images.downsized_medium.url
        })
    );
    return gifs;
}