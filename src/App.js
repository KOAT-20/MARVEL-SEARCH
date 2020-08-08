import React, { Component } from 'react';
import axios from 'axios';
import _ from 'lodash';
import { Switch, Route } from 'react-router-dom';
import './card.css';
/* components */
import Navbar from './components/Navbar';
import List from './components/List';

export default class App extends Component {
  constructor (props) {
    super(props);
    this.state = {
      loading: true,
      error: null,
      characters: [],
    }
  }

  async componentDidMount () {
    this.getCharactersMavel();
  }

  getCharactersMavel = async (e) => {
    this.setState({ loading: true, error: null });
    try {
      const res = await axios.get('https://gateway.marvel.com:443/v1/public/characters?apikey=1038b8d6ec7dbf27ec813944c8023739');
      console.log(res.data.data.results);
      this.setState({ characters: res.data.data.results });
    } catch (error) {
      this.setState({ loading: false, error: error });
    }
  }

  render () {
    if (this.state.loading === true && !this.state.characters) {
    return (<div>cargando pagina...</div>)
    }
    if (this.state.error) {
      return (<div>cargando...</div>)
    }
    const getCharactersMavel = _.debounce(() => {this.getCharactersMavel()}, 300);
    return (
      <div>
        <Navbar onSearchHeroeChange={getCharactersMavel} />
        <div className='container mt-5 mb-5'>
          <Switch>
            <Route exact path='/'>
              <List characters={this.state.characters} />
            </Route>
          </Switch>
        </div>
      </div>
    );
  }
}
