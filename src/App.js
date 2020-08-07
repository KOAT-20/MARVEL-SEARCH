import React from 'react';
import { Switch, Route } from 'react-router-dom';
/* components */
import Navbar from './components/Navbar';
import List from './components/List';

export default function App () {
  return (
    <div>
      <Navbar />
      <div className='container mt-5 mb-5'>
        <Switch>
          <Route exact path='/' component={List} />
        </Switch>
      </div>
    </div>
  );
}
