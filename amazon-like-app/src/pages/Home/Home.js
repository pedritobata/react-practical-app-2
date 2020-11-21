import React, { useState, useEffect, useCallback } from "react";
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
import { useHistory, Link } from 'react-router-dom';
import { authEbay, loadEbaySuperCategories } from '../../store/redux/actions/ebayActions';

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
  const {authToken} = useSelector(state => state.authEbayAccess);

  const { categoriesCards } = useSelector(state => state.ebaySuperCategories);
  

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
    if(authEbayCode)  dispatch(authEbay(authEbayCode));

  }, [history.location.search]);

  const loadEbayProductsHandler = useCallback((e) => {
    if(authToken){
      console.log("TOKEN FOUND");
      dispatch(loadEbaySuperCategories(authToken));
    }else{
      console.log("Redirecting to consent page...");
      window.location.href = consentUrl;
      // history.push(consentUrl);
    }
  },[]);

  return (
    <main className="home">
      <div className="home__preBanner">
        <p onClick={loadEbayProductsHandler} className="home__ebayLink">Load Ebay Products</p>
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
          {
            categoriesCards?.length > 0 ? categoriesCards.map(item => {
              const randomLinkText = Math.random() > 0.5 ? "Comprar ahora" : "Ver más";
              return  <CategoryCard
                        title={item.name}
                        image={item.image}
                        description=""
                        target="/products"
                        linkText={randomLinkText}
                      />
            }) : 
            (<>
            <CategoryCard
              title="Computers and Accesories"
              image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_PC_2x._SY608_CB431800964_.jpg"
              description=""
              target="/products"
              linkText="Buy now"
            />
            <CategoryCard
              title="Find your ideal TV"
              image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_TV_2X._SY608_CB432517900_.jpg"
              description=""
              target="/products"
              linkText="See more"
            />
            <CategoryCard
              title="AmazonBasics"
              image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/July/amazonbasics_260x260._SY608_CB442725065_.jpg"
              description=""
              target="/products"
              linkText="See more"
            />
            </>
            )
          }
          
          <CategoryCard title="Sign in for the best experience">
            <Link to="/login">
              <ButtonGeneric title="Sign in securely" styles="light" />
            </Link>
          </CategoryCard>
        </div>

        <div className="carouselFast__titleContainer">
          <h2 className="carouselFast__title">Discover Amazon</h2>
          <SimpleLink target="#">See more</SimpleLink>
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
          <SimpleLink target="#">See more</SimpleLink>
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


export default Home;
