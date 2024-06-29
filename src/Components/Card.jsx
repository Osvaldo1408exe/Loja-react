import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';

export default function Card({ id, src, alt, title, description, route, price, carrinho }) {
    return (
        <div className="card" style={{width: '18rem'}}>
        <img className="card-img-top" src={src} alt="Card" />
        <div className="card-body">
            <h5 className="card-title" style={{fontSize: '14px'}}>{title}</h5>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Link to={"/" + id} className="btn btn-primary m-1">
                        Comprar
                    </Link>
                    <button className="btn btn-primary m-1" onClick={carrinho}>
                        Carrinho
                    </button>
                </div>
        </div>
        </div>
    );
}