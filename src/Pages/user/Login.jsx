import { Link } from "react-router-dom";

export default function Login(){
    return(
    <>
    <div className="container my-3 py-3">
    <h1 className="text-center">Entrar</h1>
    <hr />
        <div class="row my-4 h-100">
            <div className="col-md-4 col-lg-4 col-sm-8 mx-auto">
            <form>
                <div class="my-3">
                <label for="display-4">Email</label>
                <input
                    type="email"
                    class="form-control"
                    id="floatingInput"
                    placeholder="nome@exemplo.com"
                />
                </div>
                <div class="my-3">
                <label for="floatingPassword display-4">Senha</label>
                <input
                    type="Password"
                    class="form-control"
                    id="floatingSenha"
                    placeholder="Senha"
                />
                </div>
                <div className="my-3">
                <p>Não possui uma conta? <Link to="/registrar" className="text-decoration-underline text-info">Registrar</Link></p>
                </div>
                <div className="text-center">
                <button class="my-2 mx-auto btn btn-dark" type="submit" disabled>
                    Entrar
                </button>
                </div>
            </form>
        </div>
    </div>
    </div>
    </>
    )
}