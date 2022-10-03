import React from 'react'
import Product from "./Product"
import "./Home.css";

function Home() {
  return(
    <div className="home">

        <img className="home__image"
        src="https://m.media-amazon.com/images/G/01/primevideo/seo/primevideo-seo-logo.png " alt="" />

            
            {/* product id, title,price, rating, image */}
            <div className='home__row'>
            <Product 
            id="123456"
            title=""
            price={9}
            rating={5}
            image=""
            />

            <Product 
            id="1234561"
            title=""
            price={875}
            rating={4}
            image=""
            />
            <Product 
            id="1234562"
            title="Dell laptop"
            price={637}
            rating={4}
            image=""
            />


            </div>

            <div className='home__row'>
            <Product 
            id="1234563"
            title="Mens Blue Shirt"
            price={12}
            rating={4}
            image=""
            />

            <Product 
            id="1234564"
            title=" Women dress"
            price={300}
            rating={4}
            image=""
            />


           <Product 
            id="1234565"
            title="Sari"
            price={150}
            rating={3}
            image=""
            />
           <Product 
            id="1234565"
            title="Girls Dress"
            price={100}
            rating={3}
            image=""
            />

            </div>
            {/* product */}
             {/* product id, title,price, rating, image */}
             <div className='home__row'>
            
            <Product 
            id="1234564"
            title="Godrej Frige"
            price={300}
            rating={4}
            />

<Product 
            id="1234566"
            title="Almira"
            price={200}
            rating={3}
            image=""
            />

            </div>

            <div className='home__row'>
            <Product 
            id="1234566"
            title=""
            price={600}
            rating={4}
            image=""
            />

            </div>

    </div>
  );
}

export default Home