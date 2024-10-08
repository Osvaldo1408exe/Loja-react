// No seu componente RouteLayout

import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, Outlet } from "react-router-dom";
import { faShoppingCart, faSignInAlt, faUserPlus } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react';
import { useSelector } from 'react-redux';
 
export default function RouteLayout() {
  const [isOpen, setIsOpen] = useState(false);
  
   
  const cartItems = useSelector(state => state.cart);  

  const toggleMenu = () => {
      setIsOpen(!isOpen);
  }

  return (
      <>
        <header className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container">
              <Link to="/" className="navbar-brand">
                  <img src='https://github.com/Osvaldo1408exe/Loja-react/blob/main/public/icon.png?raw=true' style={{ width: 50 }} alt="Logo" />
              </Link>
              <button className="navbar-toggler" type="button" onClick={toggleMenu}>
                  <span className="navbar-toggler-icon"></span>
              </button>
              <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`}>
                  <nav className="navbar-nav ms-auto mb-2 mb-lg-0">
                      <Link to="/" className="nav-link">Início</Link>
                      <Link to="/items" className="nav-link">Items</Link>
                      <Link to="/sobre" className="nav-link">Sobre</Link>
                      <Link to="/contato" className="nav-link">Contato</Link>
                  </nav>
                  <div className="navbar-nav ms-auto mb-2 mb-lg-0">
                      <Link to="/entrar" className="btn btn-outline-dark m-2"><FontAwesomeIcon icon={faSignInAlt} /> Entrar</Link>
                      <Link to="/registrar" className="btn btn-outline-dark m-2"><FontAwesomeIcon icon={faUserPlus} /> Registrar</Link>
                      <Link to="/carrinho"  className="btn btn-outline-dark m-2">
                          <FontAwesomeIcon icon={faShoppingCart} /> Carrinho ({cartItems ? cartItems.length : 0})
                      </Link>
                  </div>
              </div>
          </div>
        </header>
        <div>
          <Outlet />
        </div>
      </>
  );
}
