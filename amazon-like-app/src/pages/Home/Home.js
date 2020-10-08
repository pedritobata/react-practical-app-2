import React from "react";
import "./Home.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import CategoryCard from "../../components/CategoryCard/CategoryCard";
import ButtonGeneric from "../../components/UI/ButtonGeneric";

const getConfigurableProps = () => ({
    infiniteLoop:  true,
    interval: 5000,
    transitionTime: 200,
    autoPlay: true,
    showStatus: false,
    showIndicators: false,
    showThumbs: false,
    stopOnHover: false,
    renderArrowPrev: function(clickHandler, hasPrev, label){
        return hasPrev && (<FontAwesomeIcon icon={faAngleLeft} 
            onClick={clickHandler} 
            className="arrow arrow--left"/>);
    },
    renderArrowNext: function(clickHandler, hasNext, label){
        return hasNext && (<FontAwesomeIcon icon={faAngleRight} 
            onClick={clickHandler} 
            className="arrow arrow--right"/>);
    }
});


const Home = (props) => {
    const images = ["https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_45M_es_US_2x._CB432534552_.jpg",
"https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Currency_v1_es_US_1x._CB428993289_.jpg",
"https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Toys_es_US_2x._CB431858162_.jpg",
"https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Beauty_v2_es_US_2x._CB429092343_.jpg",
"https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Home_es_US_2x._CB428980068_.jpg",
"https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Sports_es_US_2x._CB431860454_.jpg"];
        
  return (
    <main className="home">
      <div className="home__banner">
        <Carousel {...getConfigurableProps()}>
            {
                images.map(image => (
                    <div><img src={image} /></div>
                ))
            }
        </Carousel>
      </div>
      <div className="home__categoriesCards home__categoriesCards--top">
          <CategoryCard title="Computadoras y Accesorios"
          image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_PC_2x._SY608_CB431800964_.jpg"
          description=""
          target="/products"
          linkText="Comprar ahora" />
          <CategoryCard title="Encuentra tu TV ideal"
          image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_TV_2X._SY608_CB432517900_.jpg"
          description=""
          target="/products"
          linkText="Ver más" />
          <CategoryCard title="AmazonBasics"
          image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/July/amazonbasics_260x260._SY608_CB442725065_.jpg"
          description=""
          target="/products"
          linkText="Ver más" />
          <CategoryCard title="AmazonBasics">
            <ButtonGeneric title="Sign in securely" />
          </CategoryCard>
         
      </div>
      <div className="home__services"></div>
      <div className="home__sugestedProducts"></div>
    </main>
  );
};

export default Home;
