import React from 'react';
import './ProductsScreen.css';
import Product from '../../components/Product/Product';

const ProductsScreen = () => {

    return <div className="products">
         <img src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
           alt="banner"
           className="products__image" />

           <div className="products__row">
             <Product 
                id={Math.random()}
                title="Roland TD-50K Electronic Drum Kit"
                image="https://images-na.ssl-images-amazon.com/images/I/71efdmSX6tL._AC_SL1500_.jpg"
                price={3000}
                rating={5}
             />
             <Product 
                id={Math.random()}
                title="Roland TD-50K Electronic Drum Kit"
                image="https://images-na.ssl-images-amazon.com/images/I/71efdmSX6tL._AC_SL1500_.jpg"
                price={3000}
                rating={5}
             />
           </div>
           <div className="products__row">
             <Product 
                id={Math.random()}
                title="Roland TD-50K Electronic Drum Kit"
                image="https://images-na.ssl-images-amazon.com/images/I/71efdmSX6tL._AC_SL1500_.jpg"
                price={3000}
                rating={5}
             />
             <Product
                id={Math.random()} 
                title="Roland TD-50K Electronic Drum Kit"
                image="https://images-na.ssl-images-amazon.com/images/I/71efdmSX6tL._AC_SL1500_.jpg"
                price={3000}
                rating={5}
             />
              <Product 
                id={Math.random()}
                title="Roland TD-50K Electronic Drum Kit"
                image="https://images-na.ssl-images-amazon.com/images/I/71efdmSX6tL._AC_SL1500_.jpg"
                price={3000}
                rating={5}
             />
           </div>
           <div className="products__row">
             <Product 
                id={Math.random()}
                title="Roland TD-50K Electronic Drum Kit"
                image="https://images-na.ssl-images-amazon.com/images/I/71efdmSX6tL._AC_SL1500_.jpg"
                price={3000}
                rating={5}
             />
           </div>
    </div>;
}

export default ProductsScreen;