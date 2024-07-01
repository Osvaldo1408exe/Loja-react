import { useState } from "react";
import Card from "../../Components/Card";
import useFetchData from "../../hooks/useFatchData";
import { addCart } from "../../../redux/action";
import { useDispatch } from "react-redux";



export default function ListItems() {
    const { data, loading, error } = useFetchData('https://fakestoreapi.com/products');
    const [selectFilter, setSelectFilter] = useState(null);

    const dispatch = useDispatch();
    const addProduct = (item) => {
        dispatch(addCart(item));
    }
     
   

    if (loading) {
        return (
            <div className="spinner-container">
                <div className="spinner-border" role="status"></div>
            </div>
        );
    }

    if (error) {
        return <p>Error: {error.message}</p>;
    }

     const filteredData = data.filter(item => {
        if (!selectFilter) {
            return true; 
        } else {
            return item.category === selectFilter;
        }
    });

    return (
        <>
            <hr />
            <h1 className="text-center">Lançamentos</h1>
            <hr />
            <div className="buttons text-center py-5">
                <button className="btn btn-outline-dark btn-sm m-2" onClick={() => setSelectFilter(null)}>Todos</button>
                <button className="btn btn-outline-dark btn-sm m-2" onClick={() => setSelectFilter("men's clothing")}>Masculino</button>
                <button className="btn btn-outline-dark btn-sm m-2" onClick={() => setSelectFilter("women's clothing")}>Feminino</button>
                <button className="btn btn-outline-dark btn-sm m-2" onClick={() => setSelectFilter("jewelery")}>Joalheria</button>
                <button className="btn btn-outline-dark btn-sm m-2" onClick={() => setSelectFilter("electronics")}>Eletrônicos</button>
            </div>
            <div className="fade-in cards-container">
                {filteredData.map((item) => (
                    <Card
                        key={item.id}
                        id={item.id}
                        src={item.image}
                        alt={item.title}
                        price={item.price}
                        title={item.title}
                        carrinho={() => addProduct(item)} 
                        
                    />
                ))}
            </div>
        </>
    );
}