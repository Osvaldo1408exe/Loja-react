export default function CartItems(id,image,title,RemoverItem,AdicionarItem,qty,price){
     
     
    return (
        <div key={id}>
            <div className="row d-flex align-items-center">
            <div className="col-lg-3 col-md-12">
                <div
                className="bg-image rounded"
                data-mdb-ripple-color="light"
                >
                <img
                    src={image}
                    alt={title}
                    width={100}
                    height={75}
                />
                </div>
            </div>

            <div className="col-lg-5 col-md-6">
                <p>
                <strong>{title}</strong>
                </p>
                 
            </div>

            <div className="col-lg-4 col-md-6">
                <div
                className="d-flex mb-4"
                style={{ maxWidth: "300px" }}
                >
                <button
                    className="btn px-3"
                    onClick={RemoverItem}
                >
                    <i className="fas fa-minus"></i>
                </button>

                <p className="mx-5">{qty}</p>

                <button
                    className="btn px-3"
                    onClick={AdicionarItem}
                >
                    <i className="fas fa-plus"></i>
                </button>
                </div>

                <p className="text-start text-md-center">
                <strong>
                    <span className="text-muted">{qty}</span>{" "}
                    x ${price}
                </strong>
                </p>
            </div>
            </div>

            <hr className="my-4" />
        </div>
        );

 
}