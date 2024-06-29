import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, Outlet } from "react-router-dom";
import { faShoppingCart, faSignInAlt, faUserPlus } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react';

 
export default function RouteLayout(){
  const [isOpen, setIsOpen] = useState(false);

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
                        <Link to="/login" className="btn btn-outline-dark m-2"><FontAwesomeIcon icon={faSignInAlt} /> Entrar</Link>
                        <Link to="/register" className="btn btn-outline-dark m-2"><FontAwesomeIcon icon={faUserPlus} /> Registrar</Link>
                        <Link to="/cart" className="btn btn-outline-dark m-2"><FontAwesomeIcon icon={faShoppingCart} /> Carrinho</Link>
                    </div>
                </div>
            </div>
          </header>
          <div>
            <Outlet />
          </div>

          <footer className="mb-0 text-center">
            <div className="d-flex align-items-center justify-content-center pb-5">
              <div className="col-md-6">
                <p className="mb-3 mb-md-0">Feito por  {" "}
                  <a  href="https://osvaldo1408exe.github.io/" className="text-decoration-underline text-dark fs-5" target="_blank" rel="noreferrer">Osvaldo Protazio</a>
                </p>
                <a className="text-dark fs-4" href="https://github.com/Osvaldo1408exe" target="_blank" rel="noreferrer" />
               </div>
            </div>
          </footer>
        </>
      )
}

 