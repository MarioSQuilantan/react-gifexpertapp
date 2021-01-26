export const getGifs = async( category ) => {

  const URL = `http://api.giphy.com/v1/gifs/search?api_key=7ykNRZseuzD6QtmmfODzTBsJBzcghP4h&q=${ encodeURI(category) }&limit=10`;

  const response = await fetch( URL );
  const { data } = await response.json();

  const gifs =  data.map( img => {
    return {
      id: img.id,
      title: img.title,
      url: img.images?.downsized_medium.url
    }
  });

  return gifs;

}
