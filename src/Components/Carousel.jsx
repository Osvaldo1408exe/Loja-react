import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';
 
export default function CarouselHome() {
    return (
        <>
            <div>
                <div style={{width: '100vw', marginTop: 10}}>
                <Carousel fade>
                    <Carousel.Item interval={3000}>
                    <img className='carousel-image'
                    
                    
                        src="https://wallpapercave.com/wp/wp4634141.jpg"
                        alt="Verão"
                    />
                    <div className="card-img-overlay d-flex align-items-center">
                        <div className="container">
                        <h5 className="card-title fs-1 text text-white ">Nova linha de outono</h5>
                        <p className="card-text fs-5 d-none d-sm-block text-white ">
                            Roupas da nova linha de Outono.
                        </p>
                        </div>
                    </div>
                    </Carousel.Item>
                    <Carousel.Item interval={3000}>
                    <img className='carousel-image'
                        
                      
                        src="https://wallpapercave.com/wp/wp4680551.jpg"
                        alt="Verão"
                    />
                     <div className="card-img-overlay d-flex align-items-center">
                        <div className="container">
                        <h5 className="card-title fs-1 text text-white ">Nova linha de outono</h5>
                        <p className="card-text fs-5 d-none d-sm-block text-white">
                            Roupas da nova linha de Outono.
                        </p>
                        </div>
                    </div>
                    </Carousel.Item>
                </Carousel>
                </div>
            </div>
            </>
    );
}

 