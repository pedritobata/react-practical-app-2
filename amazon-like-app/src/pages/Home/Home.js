import React, { useState, useEffect } from "react";
import "./Home.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import CategoryCard from "../../components/CategoryCard/CategoryCard";
import ButtonGeneric from "../../components/UI/ButtonGeneric";
import { categoriesImages, servicesItemsData } from "./homeData";
import ScrollbarCarousel from "../../components/UI/FastCarouselCustomized/FastCarouselCustomized";
import SimpleLink from "../../components/UI/SimpleLink";
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { authEbay } from '../../store/redux/actions/ebayActions';

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
      key={item.title + Math.random()}
      src={item.image}
      className="serviceItem"
      alt={item.title}
    />
  );
});

const Home = (props) => {
  const [slideWidth, setSlideWidth] = useState(200);
  const [slideHeight, setSlideHeight] = useState(200);
  const [carouselWidth, setCarouselWidth] = useState();
  const {consentUrl, redirectId} = useSelector(state => state.authEbay);

  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    window.addEventListener("load", (event) => {
      const carousel = document.querySelector(".carouselFast");
      setCarouselWidth(carousel.children[0].firstChild.clientWidth);
      //console.log("carouselWidth",carousel.children[0].firstChild.clientWidth);
    });
  }, []);

  useEffect(() => {
    window.addEventListener("resize", (event) => {
      const carousel = document.querySelector(".carouselFast");
      setCarouselWidth(carousel.children[0].firstChild.clientWidth);
      //console.log("carouselWidth",carousel.children[0].firstChild.clientWidth);
    });
  }, []);

  useEffect(() => {
    
    const authEbayCode = new URLSearchParams(history.location.search).get("code");
    console.log("CODE:",authEbayCode);
    console.log("redirectId:",redirectId);
    dispatch(authEbay(authEbayCode));

  }, [history.location.search]);

  return (
    <main className="home">
      <div className="home__preBanner">
        <a href={consentUrl} className="home__ebayLink">Load Ebay Products</a>
      </div>
      <div className="home__banner">
        <Carousel {...getConfigurableProps()}>
          {categoriesImages.map((image) => (
            <div key={image}>
              <img src={image} className="banner__slideImage" alt={image}/>
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

        {/* <CarouselHorizontal
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
        />  */}
        {/* 
        <CarouselFast 
          slides={ServicesItems}
          slidesShown={Math.floor(carouselWidth / slideWidth)}
        />

        <CarouselFast 
          slides={ServicesItems}
          slidesShown={Math.floor(carouselWidth / slideWidth)}
        />  */}
        <div className="carouselFast__titleContainer">
          <h2 className="carouselFast__title">Discover Amazon</h2>
          <SimpleLink target="#">Click para conocer más</SimpleLink>
        </div>
        <div className="carouselFast">
          <ScrollbarCarousel
            slides={ServicesItems}
            slidesShown={Math.floor(carouselWidth / slideWidth)}
            navSize={1}
            externalPadding="1rem"
            style={{
              backgroundColor: "white",
              padding: "0 1rem 10px",
            }}
          />
        </div>

        <div className="carouselFast__titleContainer">
          <h2 className="carouselFast__title">Discover Amazon</h2>
          <SimpleLink target="#">Click para conocer más</SimpleLink>
        </div>
        <div className="carouselFast">
          <ScrollbarCarousel
            slides={ServicesItems}
            slidesShown={Math.floor(carouselWidth / slideWidth)}
            navSize={1}
            externalPadding="1rem"
            style={{
              backgroundColor: "white",
              padding: "0 1rem 10px",
            }}
          />
        </div>

        <div className="home__sugestedProducts"></div>
      </div>
    </main>
  );
};

//styles customizados para el componente Horizontal Carousel según docs
// const serviceItemWidth = '200px';
// const serviceItemHeight = '200px';

// const itemStyle = {
//   width: serviceItemWidth,
//   height: serviceItemHeight,
//   marginRight: '10px',
//   outline: 'none'
// }

// const innerWrapperStyle = {
//   padding: "0 1rem",
//   width: `calc((${serviceItemWidth} + 10px) * ${ServicesItems.length})`
// }

export default Home;
