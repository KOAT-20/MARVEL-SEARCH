import React from 'react';
/* Logo */
import logo from '../../images/logo.PNG';

export default function Navbar (props) {
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

          <form className='form w-75' onSubmit={props.onSearchHeroe}>
            <div className='input-group ml-2'>
              <span className='input-group-text' id='basic-addon1'>
                <i className='fas fa-search'></i>
              </span>
                <input
                  type='search'
                  className='form-control'
                  placeholder='Search character...'
                  aria-label='Search'
                  aria-describedby="basic-addon1"
                  onChange={props.onHandlerChange}
                  value={props.query}
                />
            </div>
          </form>
        </div>
      </div>
    </nav>
  );
}
