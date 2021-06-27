import React from 'react';
import {NavLink, Link} from 'react-router-dom';
import {connect} from 'react-redux';

import {auth} from '../../firebase/firebase.utils';
import logo from '../../images/botani_logo.png';
import CartIcon from '../cart/CartIcon';
import CartDropdown from '../cartDropdown/CartDropdown';
import './Navbar.css';


const Navbar = ({currentUser, hidden}) => {
        return (
            <>
            <div className="navbar navbar-expand-lg navbar-light bg-light">
                <img className="navbar-brand" src={logo} alt="logo"/>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarNav"
                    aria-controls="navebarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink to="/botani/home" className="nav-link">
                                Home
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/botani/about" className="nav-link">
                                About
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/botani/products" className="nav-link">
                                Products
                            </NavLink>
                        </li>
                        
                    </ul>
                </div>
                <div className="navbar logCart">
                {
                    currentUser ?
                    <div class="btn btn-lg nav-link" onClick={() => auth.signOut()}>
                    SignOut
                    </div>
                    :
                    <div class="btn btn-lg pr-0 pt-0" >
                    <Link to="/botani/signin" className="nav-link">SignIn</Link>
                    </div>
                    
                }
                <CartIcon />
                
                </div>
                {
                    hidden ? null : <CartDropdown />
                }
                
            </div>
                
            
            </>
        )
    
}
const mapStateToProps = ({user: {currentUser}, cart: {hidden}}) => ({
    currentUser,
    hidden
});
export default connect(mapStateToProps)(Navbar);

/*
<form class="d-flex">
                    <input class="form-control mx-2" type="search" placeholder="Search" aria-label="Search"/>
                    <i class="fas fa-search fa-2x" type="submit"></i>
                </form>

<li className="nav-item">
                            <NavLink to="/botani/contact" className="nav-link">
                                Contact
                            </NavLink>
                        </li>
               */