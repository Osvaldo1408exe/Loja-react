export default function About(){
    return(
      <>
        <div className="container my-3 py-3">
        <h1 className="text-center">Sobre</h1>
        <hr />
        <p className="lead text-center">
            Este site foi criado como parte do meu estudo pessoal. Atualmente, não possui sistema de login nem de compras. Desenvolvi este projeto para aprofundar meu conhecimento em React, já que, apesar de ser desenvolvedor Fullstack com foco em backend, queria melhorar minhas habilidades em front-end.
        </p>

        <h2 className="text-center py-4">Nossos Produtos</h2>
        <div className="row">
          <div className="col-md-3 col-sm-6 mb-3 px-3">
            <div className="card h-100">
              <img src="https://images.pexels.com/photos/1639729/pexels-photo-1639729.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" height={160} />
              <div className="card-body">
                <h5 className="card-title text-center">Roupas Masculinas</h5>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 mb-3 px-3">
            <div className="card h-100">
              <img src="https://images.pexels.com/photos/3682293/pexels-photo-3682293.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" height={160} />
              <div className="card-body">
                <h5 className="card-title text-center">Roupas femininas</h5>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 mb-3 px-3">
            <div className="card h-100">
              <img src="https://images.pexels.com/photos/94843/pexels-photo-94843.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" height={160} />
              <div className="card-body">
                <h5 className="card-title text-center">Joalheria</h5>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 mb-3 px-3">
            <div className="card h-100">
              <img src="https://images.pexels.com/photos/21705974/pexels-photo-21705974/free-photo-of-tecnologia-teclado-chaves-teclas.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" height={160} />
              <div className="card-body">
                <h5 className="card-title text-center">Eletronicos</h5>
              </div>
            </div>
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