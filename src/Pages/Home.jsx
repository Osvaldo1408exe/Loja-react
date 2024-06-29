import CarouselHome from "../Components/Carousel";
import Card from "../Components/Card";
import useFetchData from "../hooks/useFatchData";
import { useState } from "react";

export default function Home() {
    const { data, loading, error } = useFetchData('https://fakestoreapi.com/products');
    const {filter, setFilter} = useState();

    const filteredData = data.filter(item => item.category !=  "electronics" &&  item.category != "jewelery");  

    if (loading) {
        return (
            <div className="spinner-container">
                <div className="spinner-border" role="status">
                    
                </div>
            </div>
        );
    } 

    return (
        <>
            <CarouselHome />
            <hr/>
            <h1 className="text-center ">Lançamentos</h1>
            <hr/>
            <div className="fade-in card-container">
                {filteredData.map((item) => (
                    <Card
                        key={item.id}
                        id={item.id}
                        src={item.image}
                        alt={item.title}
                        price={item.price}
                        title={item.title}
                    />
                ))}
            </div>
        </>
    );
}
