import React, { Component } from 'react';
import axios from 'axios';
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
      heroes: [],
      query: '',
    }
  }

  async componentDidMount () {
    this.getCharactersMavel();
  }

  getCharactersMavel = async () => {
    this.setState({ loading: true, error: null });
    try {
      const res = await axios.get('https://gateway.marvel.com:443/v1/public/characters?apikey=1038b8d6ec7dbf27ec813944c8023739');
      console.log(res.data.data.results);
      this.setState({ heroes: res.data.data.results });
    } catch (error) {
      this.setState({ loading: false, error: error });
    }
  }

  onSearch = async (e) => {
    e.preventDefault();
    const { query } = this.state;
    const url = `https://gateway.marvel.com:443/v1/public/characters?name=${query}&apikey=1038b8d6ec7dbf27ec813944c8023739`
    try {
      const res = await fetch(url);
      const data = await res.json();
      console.log('Personaje', data.data.results);
    this.setState({heroes: data.data.results});
    } catch (error) {
      console.log(error);
    }
  };

  handlerChange = (e) => {
    this.setState({
      query: e.target.value
    });
  }

  render () {
    if (this.state.loading === true && !this.state.heroes) {
    return (<div>Cargando pagina...</div>)
    }

    return (
      <div>
        <Navbar onSearchHeroe={this.onSearch} query={this.state.query} onHandlerChange={this.handlerChange} />
        <div className='container mt-5 mb-5'>
          <Switch>
            <Route exact path='/'>
              <List heroes={this.state.heroes} />
            </Route>
          </Switch>
        </div>
      </div>
    );
  }
}
