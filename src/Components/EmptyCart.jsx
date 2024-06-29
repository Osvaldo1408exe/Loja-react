export default function EmpetyCart(){
    return (
        <div className="container">
        <div className="row">
            <div className="col-md-12 py-5 bg-light text-center">
            <h4 className="p-3 display-5">Seu carrinho está vazio</h4>
            <Link to="/" className="btn  btn-outline-dark mx-4">
                <i className="fa fa-arrow-left"></i> Continuar comprando
            </Link>
            </div>
        </div>
        </div>
    );
     
}