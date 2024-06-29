 

export default function CartLink(count) {
    

    return (
        <Link to="/carrinho" className="btn btn-outline-dark m-2">
            <FontAwesomeIcon icon={faShoppingCart} /> Carrinho {count}
        </Link>
    );
}