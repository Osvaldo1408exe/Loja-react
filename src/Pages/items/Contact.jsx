export default function Contact(){
    return(
        <>
            <div className="container my-3 py-3">
                <h1 className="text-center">Entre em Contato</h1>
                <hr />
                <div class="row my-4 h-100">
                <div className="col-md-4 col-lg-4 col-sm-8 mx-auto">
                    <form>
                    <div class="form my-3">
                        <label for="Nome">Nome</label>
                        <input
                        type="email"
                        class="form-control"
                        id="Nome"
                        placeholder="Nome completo"
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
                        <label for="Senha">Mensagem</label>
                        <textarea
                        rows={5}
                        class="form-control"
                        id="Senha"
                        placeholder="Sobre o que deseja falar?"
                        />
                    </div>
                    <div className="text-center">
                        <button
                        class="my-2 px-4 mx-auto btn btn-dark"
                        type="submit"
                        disabled
                        >
                        Enviar
                        </button>
                    </div>
                    </form>
                </div>
                </div>
            </div>
            <footer className="text-center mt-2 fixed-bottom">
                <div className="text-center" style={{backgroundColor: "rgba(0, 0, 0, 0.05)"}}>
                    <p className="mb-md-0 pb-0">
                    © 2024 Feito por Osvaldo Protazio
                    <a href="https://github.com/Osvaldo1408exe" className="text-decoration-underline text-dark fs-5" target="_blank" rel="noreferrer">
                        Github
                    </a>
                    <a href="https://www.linkedin.com/in/osvaldo-protazio/" className="text-decoration-underline text-dark fs-5" target="_blank" rel="noreferrer">
                        Linkedin
                    </a>
                    </p>
                </div>
            </footer>
        </>
    )
}