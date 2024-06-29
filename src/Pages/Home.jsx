import React from 'react';
import { useDispatch } from 'react-redux';
import CarouselHome from '../Components/Carousel';
import Card from '../Components/Card';
import useFetchData from "../hooks/useFatchData"
import { addCart } from '../../redux/action/index';  

export default function Home() {

    const { data, loading, error } = useFetchData('https://fakestoreapi.com/products');
    const dispatch = useDispatch();

  
    const addProduct = (item) => {
        dispatch(addCart(item));
    }

 
    const filteredData = data.filter(item => item.category !== 'electronics' && item.category !== 'jewelery');

    if (loading) {
        return (
            <div className="spinner-container">
                <div className="spinner-border" role="status"></div>
            </div>
        );
    }

    if (error) {
        return <p>Erro ao carregar produtos: {error.message}</p>;
    }

    return (
        <>
            <CarouselHome />
            <hr />
            <h1 className="text-center">Lançamentos</h1>
            <hr />
            <div className="fade-in card-container">
                {filteredData.map((item) => (
                    <Card
                        key={item.id}
                        id={item.id}
                        src={item.image}
                        title={item.title}
                        carrinho={() => addProduct(item)}  
                    />
                ))}
            </div>
        </>
    );
}
