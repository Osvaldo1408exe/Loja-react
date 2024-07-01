import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
 
 

export default function Card({ id, src, title, price,carrinho }) {
 
    return (
        <div className="cards" style={{width: '18rem'}}>
            <img className="cards-img-top" src={src} alt="Card" />
            <div className="cards-body">
                <h5 className="cards-title" style={{fontSize: '14px'}}>{title}</h5>
                <p>R${price}</p>
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