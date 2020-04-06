import React, { Component } from 'react';
import axios from 'axios';

export default class App extends Component {
     constructor(props) {
          super(props);
          this.state = {};
     } // end of constructor
     summonTheGifs = (mood) => {
          axios.get(
               'https://api.tenor.com/v1/registershare?id=8776030&key=WDPYDKUBMATL&q=excited'
          ).then((results) => {
               console.log(results.data);
          });
     };
     render() {
          return <p onClick={this.summonTheGifs}>Hello</p>;
     }
} // end of App class
