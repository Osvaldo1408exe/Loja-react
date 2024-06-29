import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, Outlet } from "react-router-dom";
import { faShoppingCart, faSignInAlt, faUserPlus } from '@fortawesome/free-solid-svg-icons'

 
export default function RouteLayout(){
    return (
        <>
          <header>

            <Link to="/" className="logo"><img src='https://github.com/Osvaldo1408exe/Loja-react/blob/main/public/icon.png?raw=true' style={{width: 50}}></img> </Link>
            <nav className='navCenter'>
              <Link to="/">Início</Link>
              <Link to="/items">Items</Link>
              <Link to="">Sobre</Link>
              <Link to="">Contato</Link>

            </nav>
            <nav>
              <Link  className="btn btn-outline-dark m-2"><FontAwesomeIcon icon={faSignInAlt} /> Entrar</Link>
              <Link   className="btn btn-outline-dark m-2"><FontAwesomeIcon icon={faUserPlus} /> Registra</Link>
              <Link  className="btn btn-outline-dark m-2"><FontAwesomeIcon icon={faShoppingCart} /> Carrinho </Link>       
             </nav>
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