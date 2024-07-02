import { faArrowCircleLeft, faArrowCircleUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import useFetchData from "../../hooks/useFatchData";
 
export default function Checkout() {
  const cartItems = useSelector(state => state.cart);
  const [selectedUF, setSelectedUF] = useState('');
  const [url, setUrl] = useState('');
  const [cidades, setCidades] = useState([]);

  // Atualize a URL baseada na UF selecionada
  useEffect(() => {
    if (selectedUF) {
      setUrl(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${selectedUF}/distritos`);
    }
  }, [selectedUF]);

  // Use o hook customizado para buscar dados das cidades
  const { data: fetchedCidades, loading, error } = useFetchData(url);

  // Atualize o estado das cidades quando os dados forem buscados
  useEffect(() => {
    if (fetchedCidades) {
      setCidades(fetchedCidades);
    }
  }, [fetchedCidades]);

  // Função para lidar com a mudança de seleção da UF
  const handleChange = (event) => {
    setSelectedUF(event.target.value);
  };

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

  const ShowCheckout = () => {
    let subtotal = 0;
    let shipping = 30.0;
    let totalItems = 0;

    cartItems.forEach(item => {
      subtotal += item.price * item.qty;
      totalItems += item.qty;
    });

    return (
      <>
        <div className="container py-5">
          <div className="row my-4">
            <div className="col-md-5 col-lg-4 order-md-last">
              <div className="card mb-4">
                <div className="card-header py-3 bg-light">
                  <h5 className="mb-0">Resumo do Pedido</h5>
                </div>
                <div className="card-body">
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                      Produtos ({totalItems})<span>R${Math.round(subtotal)}</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center px-0">
                      Frete <span>R${shipping}</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                      <div><strong>Total</strong></div>
                      <span><strong>R${Math.round(subtotal + shipping)}</strong></span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-7 col-lg-8">
              <div className="card mb-4">
                <div className="card-header py-3">
                  <h4 className="mb-0">Endereço de cobrança</h4>
                </div>
                <div className="card-body">
                  <form className="needs-validation" noValidate>
                    <div className="row g-3">
                      <div className="col-sm-6 my-1">
                        <label htmlFor="firstName" className="form-label">Primeiro nome</label>
                        <input type="text" className="form-control" id="firstName" required />
                        <div className="invalid-feedback">O primeiro nome preenchido não é válido</div>
                      </div>

                      <div className="col-sm-6 my-1">
                        <label htmlFor="lastName" className="form-label">Último nome</label>
                        <input type="text" className="form-control" id="lastName" required />
                        <div className="invalid-feedback">O último nome preenchido não é válido</div>
                      </div>

                      <div className="col-12 my-1">
                        <label htmlFor="email" className="form-label">Email</label>
                        <input type="email" className="form-control" id="email" placeholder="nome@exemplo.com" required />
                        <div className="invalid-feedback">Por favor, entre com um email válido para receber as atualizações do pedido.</div>
                      </div>

                      <div className="col-12 my-1">
                        <label htmlFor="address" className="form-label">Endereço</label>
                        <input type="text" className="form-control" id="address" placeholder="Rua exemplo 123" required />
                        <div className="invalid-feedback">Por favor, adicione o endereço da entrega.</div>
                      </div>

                      <div className="col-12">
                        <label htmlFor="address2" className="form-label">
                          Complemento <span className="text-muted">(Opcional)</span>
                        </label>
                        <input type="text" className="form-control" id="address2" placeholder="Apartamento ou casa" />
                      </div>

                      <div className="col-md-4 my-1">
                        <label htmlFor="state" className="form-label">Estado</label>
                        <br />
                        <select className="form-select" id="state" onChange={handleChange} required>
                          <option value="">Selecione o Estado</option>
                          <option value="AC">Acre</option>
                          <option value="AL">Alagoas</option>
                          <option value="AP">Amapá</option>
                          <option value="AM">Amazonas</option>
                          <option value="BA">Bahia</option>
                          <option value="CE">Ceará</option>
                          <option value="DF">Distrito Federal</option>
                          <option value="ES">Espírito Santo</option>
                          <option value="GO">Goiás</option>
                          <option value="MA">Maranhão</option>
                          <option value="MT">Mato Grosso</option>
                          <option value="MS">Mato Grosso do Sul</option>
                          <option value="MG">Minas Gerais</option>
                          <option value="PA">Pará</option>
                          <option value="PB">Paraíba</option>
                          <option value="PR">Paraná</option>
                          <option value="PE">Pernambuco</option>
                          <option value="PI">Piauí</option>
                          <option value="RJ">Rio de Janeiro</option>
                          <option value="RN">Rio Grande do Norte</option>
                          <option value="RS">Rio Grande do Sul</option>
                          <option value="RO">Rondônia</option>
                          <option value="RR">Roraima</option>
                          <option value="SC">Santa Catarina</option>
                          <option value="SP">São Paulo</option>
                          <option value="SE">Sergipe</option>
                          <option value="TO">Tocantins</option>
                        </select>
                        <div className="invalid-feedback">É necessário adicionar o estado.</div>
                      </div>

                      <div className="col-md-3 my-1">
                        <label htmlFor="cidade" className="form-label">Cidade</label>
                        <select className="form-control" id="cidade" required>
                          <option value="">Selecione a Cidade<FontAwesomeIcon icon={faArrowCircleUp} /></option>
                          {loading && <option>Carregando...</option>}
                          
                          {cidades.map(cidade => (
                            <option key={cidade.id} value={cidade.nome}>{cidade.nome}</option>
                          ))}
                        </select>
                        <div className="invalid-feedback">É necessário adicionar a cidade. </div>
                      </div>
                    </div>

                    <hr className="my-4" />

                    <h4 className="mb-3">Pagamento</h4>

                    <div className="row gy-3">
                      <div className="col-md-6">
                        <label htmlFor="cc-name" className="form-label">Nome no cartão</label>
                        <input type="text" className="form-control" id="cc-name" required />
                        <div className="invalid-feedback">Nome no cartão é obrigatório</div>
                      </div>

                      <div className="col-md-6">
                        <label htmlFor="cc-number" className="form-label">Número do cartão de crédito</label>
                        <input type="text" className="form-control" id="cc-number" required />
                        <div className="invalid-feedback">Número do cartão de crédito é obrigatório</div>
                      </div>

                      <div className="col-md-3">
                        <label htmlFor="cc-expiration" className="form-label">Data de expiração</label>
                        <input type="text" className="form-control" id="cc-expiration" required />
                        <div className="invalid-feedback">Data de expiração é obrigatória</div>
                      </div>

                      <div className="col-md-3">
                        <label htmlFor="cc-cvv" className="form-label">CVV</label>
                        <input type="text" className="form-control" id="cc-cvv" required />
                        <div className="invalid-feedback">CVV é obrigatório</div>
                      </div>
                    </div>

                    <hr className="my-4" />

                    <button className="w-100 btn btn-primary" type="submit" disabled>
                      Finalizar pagamento
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  };

  return (
    <>
      <div className="container my-3 py-3">
        <h1 className="text-center">Pagamento</h1>
        <hr />
        {cartItems.length ? <ShowCheckout /> : <EmptyCart />}
      </div>
    </>
  );
}
