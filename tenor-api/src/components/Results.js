import React from 'react';
export default ( { gifs } ) => (
     <>
          <p>resultaat van opzoeking</p>
          <ul>
               { gifs.map( ( gif ) => (
                    <>
                         <p>{ gif }</p>
                         <img src={ gif.media.tinygif.url } key={ gif.id } />
                    </>
               ) ) }
          </ul>
     </>
);