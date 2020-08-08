import React, { Component } from 'react';
import axios from 'axios';
import { Switch, Route } from 'react-router-dom';
import logo from './images/logo.PNG';
import './card.css';

export default class App extends Component {
  state = {
    search: '',
    characters: []
  }

  async componentDidMount () {
    this.getCharactersMavel();
  }

  getCharactersMavel = async () => {
    const res = await axios.get('https://gateway.marvel.com:443/v1/public/characters?apikey=1038b8d6ec7dbf27ec813944c8023739');
    console.log(res.data.data.results);
    this.setState({
      characters: res.data.data.results,
    });
  }

  filterCharacters = () => {
    const res = 'https://gateway.marvel.com:443/v1/public/characters?apikey=1038b8d6ec7dbf27ec813944c8023739'.filter(item => {
      if (item.res.data.data.results.name.toLowerCase().includes(this.state.search)) {
        return item;
      }
    });
    this.setState({
      characters: res.data.data.results,
    });
  }

  onChange = e => {
    this.setState({ search: e.target.value });
    console.log(this.state.search);
    this.filterCharacters();
  };

  render () {
    return (
      <div>
        <nav className='navbar navbar-expand-lg navbar-light bg-light'>
          <div className='container-fluid'>
            <img src={logo} className='navbar-brand' />
            <button
                className='navbar-toggler'
                type='button'
                data-toggle='collapse'
                data-target='#navbarSupportedContent'
                aria-controls='navbarSupportedContent'
                aria-expanded='false'
                aria-label='Toggle navigation'
              >
                <span className='navbar-toggler-icon'></span>
              </button>
            <div className='collapse navbar-collapse' id='navbarSupportedContent'>

              <div className='input-group ml-2 w-50'>
                <span className='input-group-text' id='basic-addon1'>
                  <i className='fas fa-search'></i>
                </span>

                <input
                  type='search'
                  className='form-control'
                  placeholder='Search character...'
                  aria-label='Search'
                  aria-describedby="basic-addon1"
                  onChange={this.props.onSearch}
                  value={this.props.search}
                />
              </div>
            </div>
            {/* <div className='float-right mr-5'>
              <i className='far fa-star'></i>
            </div> */}
          </div>
        </nav>

        <div className='container mt-5 mb-5'>
          <div className='row'>
            {this.state.characters.map(character =>
              <div className='col-lg-3 col-md-4 col-sm-12 mt-4' key={character.id}>
                <div className='card custom_card' style={{backgroundImage: `url(${character.thumbnail.path}.${character.thumbnail.extension})`}}>
                  <div className='card-body'>
                    <header className='custom_header'>
                      <i className='far fa-star'></i>
                    </header>
                    <footer className='custom_footer'>{character.name}</footer>
                  </div>
                </div>
              </div>
            )}
          </div>
          <Switch>
            {/* <Route path='/' component={DetailsCharacter} /> */}
          </Switch>
        </div>
      </div>
    );
  }
}
