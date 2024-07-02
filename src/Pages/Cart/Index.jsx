import { useSelector, useDispatch } from "react-redux";
import { addCart, delCart } from "../../../redux/action/index";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowCircleLeft } from "@fortawesome/free-solid-svg-icons/faArrowCircleLeft";
import useFetchData from "../../hooks/useFatchData";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import { faMinusCircle } from "@fortawesome/free-solid-svg-icons/faMinusCircle";

export default function Cart() {
  const { data, loading, error } = useFetchData('https://fakestoreapi.com/products');
  const cartItems = useSelector(state => state.cart);  
  const dispatch = useDispatch();

  const EmptyCart = () => {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12 py-5 bg-light text-center">
            <h4 className="p-3 display-5">Carrinho vazio</h4>
            <Link to="/" className="btn btn-outline-dark mx-4">
              <FontAwesomeIcon icon={faArrowCircleLeft} /> Continuar comprando
            </Link>
          </div>
        </div>
      </div>
    );
  };

  const addItem = (item) => {
    dispatch(addCart(item));
  };

  const removeItem = (item) => {
    dispatch(delCart(item));
  };

  const ShowCart = () => {
   
    const { subtotal, totalItems } = cartItems.reduce((acc, item) => {
      acc.subtotal += item.price * item.qty;
      acc.totalItems += item.qty;
      return acc;
    }, { subtotal: 0, totalItems: 0 });

    const shipping = 30.0;
    const totalAmount = subtotal + shipping;

    return (
      <>
        <section className="h-100 gradient-custom">
          <div className="container py-5">
            <div className="row d-flex justify-content-center my-4">
              <div className="col-md-8">
                <div className="card mb-4">
                  <div className="card-header py-3">
                    <h5 className="mb-0">Lista de Items</h5>
                  </div>
                  <div className="card-body">
                    {cartItems.map((item) => (
                      <div key={item.id}>
                        <div className="row d-flex align-items-center">
                          <div className="col-lg-3 col-md-12">
                            <div className="bg-image rounded text-center" data-mdb-ripple-color="light">
                              <img
                                src={item.image}
                                alt={item.title}
                                width={95}
                                height={85}
                              />
                            </div>
                          </div>

                          <div className="col-lg-5 col-md-6">
                            <p>
                              <strong>{item.title}</strong>
                            </p>
                          </div>

                          <div className="col-lg-4 col-md-6">
                            <div className="d-flex mb-4" style={{ maxWidth: "300px" }}>
                              <button
                                className="btn px-3"
                                onClick={() => removeItem(item)}
                              >

                                <FontAwesomeIcon icon={faMinusCircle} style={{width: '50px'}} />
                              </button>

                              <p className="mx-5">{item.qty}</p>

                              <button
                                className="btn px-3"
                                onClick={() => addItem(item)}
                              >
                                <FontAwesomeIcon icon={faPlusCircle} style={{width: '50px'}} />
                                
                              </button>
                            </div>

                            <p className="text-start text-md-center">
                              <strong>
                                <span className="text-muted">{item.qty}</span> x R${item.price.toFixed(2)}
                              </strong>
                            </p>
                          </div>
                        </div>
                        <hr className="my-4" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="col-md-4">
                <div className="card mb-4">
                  <div className="card-header py-3 bg-light">
                    <h5 className="mb-0">Resumo do Pedido</h5>
                  </div>
                  <div className="card-body">
                    <ul className="list-group list-group-flush">
                      <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                        Produtos ({totalItems})<span>R${subtotal.toFixed(2)}</span>
                      </li>
                      <li className="list-group-item d-flex justify-content-between align-items-center px-0">
                        Frete<span>R${shipping.toFixed(2)}</span>
                      </li>
                      <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                        <div>
                          <strong>Total</strong>
                        </div>
                        <span><strong>R${totalAmount.toFixed(2)}</strong></span>
                      </li>
                    </ul>
                    <Link to="/pagamento" className="btn btn-dark btn-lg btn-block">
                      Finalizar
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  };

  return (
    <>
      <div className="container my-3 py-3">
        <h1 className="text-center">Carrinho</h1>
        <hr />
        {loading && <p>Carregando...</p>}
        {error && <p>Erro ao carregar os dados: {error.message}</p>}
        {cartItems.length > 0 ? <ShowCart /> : <EmptyCart />}
      </div>
    </>
  );
};
