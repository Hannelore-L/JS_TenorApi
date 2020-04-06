import React, { Component } from 'react';
import axios from 'axios';
import Form from './components/Form';
import Loading from './components/Loading';
import Results from './components/Results';

export default class App extends Component {
     constructor ( props ) {
          super( props );
          this.state = {
               gifs: {
                    loading: false,
                    error: false,
                    data: [],
               },
          };
     } // end of constructor

     summonTheGifs = mood => {
          this.setState( {
               gifs: {
                    ...this.state.gifs,
                    leading: true
               }
          } );
          axios
               .get( `https://api.tenor.com/v1/search?key=WDPYDKUBMATL&q=${ mood }` )
               .then( ( results ) => {
                    // console.log(results.data.results);
                    this.setState( {
                         gifs: {
                              ...this.state.gifs,
                              data: [ ...results.data.results ],
                              loading: false
                         },
                    } );
               } )
               .catch( ( error ) => {
                    console.log( error );
               } );
     }; // end of summonTheGifs

     render () {
          return (
               <div className="App">
                    <Form summonGifs={ this.summonTheGifs } />
                    { this.state.gifs.loading && <Loading /> }
                    { this.state.gifs.data.length !== 0 && (
                         <Results gifs={ this.state.gifs.data } />
                    ) }
               </div>
          );
     }; // end of render
} // end of App class