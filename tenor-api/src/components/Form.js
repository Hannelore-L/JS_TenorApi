import React from "react";

export default class props extends React.Component {
     constructor ( props ) {
          super( props );
          this.state = {
               mood: {
                    value: "",
                    error: false
               }
          };
     }; // end of constructor


     searchField = e => {
          this.setState( {
               mood: {
                    ...this.state.mood,
                    value: e.target.value
               }
          } );
     }; // end of searchField()


     submitField = e => {
          e.preventDefault();
          if ( this.state.mood.value === "" ) {
               this.setState( {
                    mood: {
                         ...this.state.mood,
                         error: true
                    }
               } );
          } else {
               this.setState( {
                    mood: {
                         ...this.state.mood,
                         error: false
                    }
               } );
               this.props.summonTheGifs( this.state.mood.value );
          };
     }; // end of submitField()


     render () {
          return (
               <form onSubmit={ this.submitField }>
                    <input
                         type="text"
                         className={ this.state.mood.error ? "error" : "" }
                         value={ this.state.mood.value }
                         onChange={ this.searchField }
                    />
                    <input type="submit" value="Gimme the GIFs!" />
               </form>
          )
     }
};