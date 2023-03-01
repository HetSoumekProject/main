/* eslint-disable jsx-a11y/role-has-required-aria-props */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import './NavBar.css';
const NavBar =()=>{
    return(
        <div id=" autos-nav" className="lo  navbar navbar-expand-md navbar-light fixed top">
        <div className="container-fluid">
          <a  aria-current="page" className="navbar-brand active" href="/">
            <span className="sr-only"> HetSoumek</span>
          </a>
          <a className="btn btn-primary btn-lg btn-signin " href="/signup/">
            Sign Up
          </a>
          <button type="button" className="navbar-toggler closed">
            <span className="navbar-toggler-icon">
              <span className="dr-only"> Nav
              </span>
            </span>
            <span className="x-icon">
              <span className="sr-only"> Close </span>
            </span>
          </button>
          <div className="collapse navbar-collapse">
            <div className="d-flex flex column flex-md-row flex-grow-1">
              <ul className="navbar-nav">
                <li className="nav-item Auctions profile-item dropdown nav-item">
                  <a aria-haspopup="true" href='#' className='auction-toggle nav-link' aria-expanded='false'> Auctions
                  </a>
                  <ul tabIndex='-1' role='menu' aria-hidden='true' className='dropdownmenu'>
                    <li tabIndex='0' role='menuitem' className='dropdown-item'>
                      <a className='nav-link' title='Past Results' href='/past-auctions/' >Past Results</a>
                    </li>
                  </ul>
                </li>
             
                  <a className='nav-link' href='/sell-car/' title='Sell a Car'>Sell a Car</a>
               
                
                  <a className='nav-link active' title='What is HetSoumek ?' href='/what-is/' aria-current='page'> what's HetSoumek ?</a>
                
                    </ul>
                    <form method='post' className='search-form form-inline' autoComplete='off' noValidate>
                      <fieldset className='form-group' >
                        <div role='combobox' aria-haspopup='listbox' aria-owns='react-autowhatever-1' aria-expanded='false' className='react-autosuggest__container'>
                          <input 
                           type='text' 
                           autoComplete='on'
                            aria-autocomplete='list'
                             aria-controls='react-autowhatever-1' 
                             className='form-control' 
                             placeholder='Search for cars (ex.BMW, Audi,Ford)'
                             name='search'
                        />
                        <div id ="react-autowhatever-1" role="listbox" className='react-autosuggest__suggestions-container'>

                        </div>
                        </div>
                      </fieldset>
                    </form>
            </div>
          </div>
          <div className='header-border'></div>
        </div>
        </div>
    )
}
export default NavBar;