import React, { Component } from 'react';
import './card.css';

export default class List extends Component {
  state = {
    characters: [0,1,2,3,4,5,6,7]
  }

  render () {
    return (
      <div className='row'>
        {this.state.characters.map(character =>
          <div className='col-lg-3 col-md-4 col-sm-12 mt-4'>
            <div className='card custom_card' key={character.id}>
              <div className='card-body'>
                <header className='custom_header'>
                  <i className='far fa-star'></i>
                </header>
                <footer className='custom_footer'>Name</footer>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}
