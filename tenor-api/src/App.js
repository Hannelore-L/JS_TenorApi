import React, { Component } from 'react';
import axios from 'axios';

export default class App extends Component {
     constructor(props) {
          super(props);
          this.state = {
               gifs: {
                    error: false,
                    data: [],
               },
          };
     } // end of constructor

     summonTheGifs = (mood) => {
          axios.get(
               'https://api.tenor.com/v1/search?key=WDPYDKUBMATL&q=excited'
          )
               .then((results) => {
                    // console.log(results.data.results);
                    this.setState({
                         gifs: {
                              ...this.state.gifs,
                              data: [...results.data.results],
                         },
                    });
               })
               .catch((error) => {
                    console.log(error);
               });
     }; // end of summonTheGifs

     render() {
          return <p onClick={this.summonTheGifs}>Hello</p>;
     }
} // end of App class
