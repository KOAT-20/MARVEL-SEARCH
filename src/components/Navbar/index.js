import React, { Component } from 'react';
/* Logo */
import logo from '../../images/logo.PNG';

export default class Navbar extends Component {
  render () {
    return (
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
            <i className='fas fa-search'></i>
            <form className='ml-2 w-50'>
              <input
                type='search'
                className='form-control'
                placeholder='Search character...'
                aria-label='Search'
              />
            </form>
          </div>
          <div className='float-right mr-5'>
            <i className='far fa-star'></i>
          </div>
          </div>
      </nav>
    );
  }
}
