import { Link } from "react-router-dom";

export default function Register(){
    return(
        <>
            <div className="container my-3 py-3">
                <h1 className="text-center">Registrar</h1>
                <hr />
                <div class="row my-4 h-100">
                    <div className="col-md-4 col-lg-4 col-sm-8 mx-auto">
                        <form>
                            <div class="form my-3">
                                <label for="Name">Nome completo</label>
                                <input
                                    type="email"
                                    class="form-control"
                                    id="Name"
                                    placeholder=" "
                                />
                            </div>
                            <div class="form my-3">
                                <label for="Email">Email</label>
                                <input
                                    type="email"
                                    class="form-control"
                                    id="Email"
                                    placeholder="nome@exemplo.com"
                                />
                            </div>
                            <div class="form  my-3">
                                <label for="Password">Senha</label>
                                <input
                                    type="password"
                                    class="form-control"
                                    id="Password"
                                    placeholder="*********"
                                />
                            </div>
                            <div className="my-3">
                                <p>Já possui uma conta? <Link to="/entrar" className="text-decoration-underline text-info">Entrar</Link> </p>
                            </div>
                            <div className="text-center">
                                <button class="my-2 mx-auto btn btn-dark" type="submit" disabled>
                                    Registrar
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}