import React from "react";
import "./Home.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import CategoryCard from "../../components/CategoryCard/CategoryCard";
import ButtonGeneric from "../../components/UI/ButtonGeneric";
import CarouselHorizontal from "../../components/UI/CarouselHorizontal"; 
import { categoriesImages, servicesItemsData } from "./homeData";

const getConfigurableProps = () => ({
  infiniteLoop: true,
  interval: 5000,
  transitionTime: 200,
  autoPlay: true,
  showStatus: false,
  showIndicators: false,
  showThumbs: false,
  stopOnHover: false,
  renderArrowPrev: function (clickHandler, hasPrev, label) {
    return (
      hasPrev && (
        <FontAwesomeIcon
          icon={faAngleLeft}
          onClick={clickHandler}
          className="arrow arrow--left"
        />
      )
    );
  },
  renderArrowNext: function (clickHandler, hasNext, label) {
    return (
      hasNext && (
        <FontAwesomeIcon
          icon={faAngleRight}
          onClick={clickHandler}
          className="arrow arrow--right"
        />
      )
    );
  },
});

const ServicesItems = servicesItemsData.map((item) => {
  return (
    <img
      key={item.title}
      src={item.image}
      className="serviceItem"
      alt={item.title}
    />
  );
});

const Home = (props) => {
  return (
    <main className="home">
      <div className="home__banner">
        <Carousel {...getConfigurableProps()}>
          {categoriesImages.map((image) => (
            <div>
              <img src={image} className="banner__slideImage"/>
            </div>
          ))}
        </Carousel>
      </div>
      <div className="home__container">
        <div className="home__categoriesCards home__categoriesCards--top">
          <CategoryCard
            title="Computadoras y Accesorios"
            image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_PC_2x._SY608_CB431800964_.jpg"
            description=""
            target="/products"
            linkText="Comprar ahora"
          />
          <CategoryCard
            title="Encuentra tu TV ideal"
            image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_TV_2X._SY608_CB432517900_.jpg"
            description=""
            target="/products"
            linkText="Ver más"
          />
          <CategoryCard
            title="AmazonBasics"
            image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/July/amazonbasics_260x260._SY608_CB442725065_.jpg"
            description=""
            target="/products"
            linkText="Ver más"
          />
          <CategoryCard title="Sign in for the best experience">
            <ButtonGeneric title="Sign in securely" styles="light" />
          </CategoryCard>
        </div>
      
       <CarouselHorizontal
          title="Descubre Amazon"
          linkText="Más Información"
          items={ServicesItems}
          itemStyle={itemStyle}
          innerWrapperStyle={innerWrapperStyle}
          scrollBy={2}
          qty={ServicesItems.length}
        />
        <CarouselHorizontal
          title="Descubre Amazon"
          linkText="Más Información"
          items={ServicesItems}
          itemStyle={itemStyle}
          innerWrapperStyle={innerWrapperStyle}
          scrollBy={2}
          qty={ServicesItems.length}
        /> 
        <div className="home__sugestedProducts"></div>
      </div>
    </main>
  );
};

//styles customizados para el componente Carousel según docs
const serviceItemWidth = '200px';
const serviceItemHeight = '200px';

const itemStyle = {
  width: serviceItemWidth,
  height: serviceItemHeight,
  marginRight: '10px',
  outline: 'none'
}

const innerWrapperStyle = {
  padding: "0 1rem",
  width: `calc((${serviceItemWidth} + 10px) * ${ServicesItems.length})`
}

export default Home;
