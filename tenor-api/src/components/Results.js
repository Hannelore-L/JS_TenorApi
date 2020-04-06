import React from 'react';
export default ( { gifs } ) => (
     <>
          <p>Serving you your GIFs:</p>
          { gifs.map( ( gif ) => (
               <img src={ gif.media[ 0 ].tinygif.url } key={ gif.id } />
          ) ) }
     </>
);