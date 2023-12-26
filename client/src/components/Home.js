import React, { useEffect, useState } from "react";
import "./Home.css";



import Idea from "./Idea";
import Footer from "./Footer";
import { useDispatch, useSelector } from "react-redux"
import { Link, useLocation, useNavigationType } from "react-router-dom";

import Carousel from "react-simply-carousel";
import Cardproduct from "./Cardproduct";

function Home({ setnav, setpp, setnavbardash, ping, setPing }) {
  useEffect(() => {
    setnav("");
    setpp("");
    setnavbardash("");
  }, []);
  const location = useLocation();
  const navType = useNavigationType();
  useEffect(() => {
    if (navType !== "POP") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  }, [location]);
  const [furniture, setfurniture] = useState([
    {
      posterurl: "sofa1.png",
      name: "SOFA",
    },
    {
      posterurl: "armchair.png",
      name: "AEMCHAIR",
    },
    {
      posterurl: "chairs.png",
      name: "CHAIRS",
    },
    {
      posterurl: "diningtable.png",
      name: "DINING TABLE",
    },
    {
      posterurl: "tvtable.png",
      name: "TABLES",
    },
    {
      posterurl: "bookcase.png",
      name: "BOOKCASE",
    },
    {
      posterurl: "bedroom.png",
      name: "BEDROOM",
    },
    {
      posterurl: "kitchen.png",
      name: "KITCHEN",
    },
    {
      posterurl: "wardrobe.png",
      name: "WARDROBE",
    },
    {
      posterurl: "baby-room.png",
      name: "CHILDREN ROOM",
    },
  ]);

  const [activeSlide, setActiveSlide] = useState(0);
  const shop = useSelector((state) => state?.shop?.shopp);

  return (
    <div className="home">
      <div className="souhome">
        <img src="cov.jpg" />
      </div>
      <div className="div1">
        <img className="img" src="covv.jpg" />
        <div className="d1">
          <h1>Modern Design Furniture</h1>
          <p>Modern Furniture & Decor</p>
          <p>
            let us help you discover furniture at the lowest prices online. With
            free shipping
          </p>
          <button className="button">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="currentColor"
              class="bi bi-basket-fill"
              viewBox="0 0 16 16"
            >
              <path d="M5.071 1.243a.5.5 0 0 1 .858.514L3.383 6h9.234L10.07 1.757a.5.5 0 1 1 .858-.514L13.783 6H15.5a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5H15v5a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V9H.5a.5.5 0 0 1-.5-.5v-2A.5.5 0 0 1 .5 6h1.717L5.07 1.243zM3.5 10.5a.5.5 0 1 0-1 0v3a.5.5 0 0 0 1 0v-3zm2.5 0a.5.5 0 1 0-1 0v3a.5.5 0 0 0 1 0v-3zm2.5 0a.5.5 0 1 0-1 0v3a.5.5 0 0 0 1 0v-3zm2.5 0a.5.5 0 1 0-1 0v3a.5.5 0 0 0 1 0v-3zm2.5 0a.5.5 0 1 0-1 0v3a.5.5 0 0 0 1 0v-3z" />
            </svg>
            Shop Now
          </button>
        </div>
        <div className="d2">
          <Carousel
            autoplay={true}
            autoplayDelay={3000}
            disableNavIfAllVisible
            containerProps={{
              style: {
                width: "100%",

                userSelect: "text",
              },
            }}
            activeSlideIndex={activeSlide}
            activeSlideProps={{}}
            onRequestChange={setActiveSlide}
            forwardBtnProps={{
              children: ">",
              style: {
                display: "none",
                height: 60,
                minWidth: 60,
                marginLeft: "-10px",
                alignSelf: "center",
              },
            }}
            backwardBtnProps={{
              children: "<",
              style: {
                width: 60,
                height: 60,
                display: "none",

                minWidth: 60,
                alignSelf: "center",
              },
            }}
            dotsNav={{
              show: true,
              itemBtnProps: {
                style: {
                  height: 10,
                  width: 5,
                  borderRadius: "50%",
                  border: 0,
                  marginTop: "10px",
                  marginLeft: "5px",
                },
              },
              activeItemBtnProps: {
                style: {
                  height: 10,
                  width: 5,
                  borderRadius: "50%",
                  border: 0,
                  background: "black",
                  marginTop: "10px",

                  marginLeft: "5px",
                },
              },
            }}
            itemsToShow={9}
            speed={400}
          >
            {furniture.map((el, index) => (
              <div
                className="bb"
                style={{
                  width: 140,
                  height: 80,
                  // backgroundColor:"red",

                  lineHeight: "240px",
                  boxSizing: "border-box",
                }}
                key={index}
              >
                <img className="imgc" src={el.posterurl} />
                <p>{el.name}</p>
              </div>
            ))}
          </Carousel>
        </div>
      </div>
      <div className="div2">
        <h1>POPULAR PRODUCTS</h1>
        <p>Check out our latest collections</p>
        <div className="d1">
        
        
          {
                    shop?.filter((el)=>el.validat==true ).map((el) => <Cardproduct name={el.Product_name} Descri={el.Description} Product_img={el.Product_img} price={el.Price} setPing={setPing} ping={ping} el={el}/>)

          }
    
          
    
        </div>
        <button className="button">View store</button>

      </div>
      <div className="div2">
        <h1>INTERIOR IDEAS</h1>
        <p>keeping things minimal</p>
     <div className="d2">
      <div className="cardblog">
        <img className="blogimg" src="blog1.jpg"/>
        <div className="souscardb">
        <h3>Creating the perfect gallery wall</h3>
<p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour</p>
        </div>

        <div className="btnn1">Read more</div>
      </div>
      <div className="cardblog">
        <img className="blogimg" src="blog.webp"/>
        <div className="souscardb">
        <h3>Making the Most Uut  of you Kids Old Bedroom</h3>
<p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour</p>
        </div>

        <div className="btnn1">Read more</div>
      </div>
      <div className="cardblog">
        <img className="blogimg" src="blog2.jpg"/>
        <div className="souscardb">
        <h3>have a look at aour new porjects</h3>
<p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour</p>
        </div>

        <div className="btnn1">Read more</div>
      </div>
     </div>
<button className="btn">View all posts</button>
      </div>
    <div className="divtr">
      <h1>Our Story</h1>
      <p>we believe in creativity as one of the major forces of progress. with we traveled throughout tunisia to find exceptional artisans and bring their unique handcrafted objects to connoisseurs everywhere</p>
    
    <button className="btn">Read Full Story</button>
    </div>
    
    <div className="div2">
        <h1>BLOG</h1>
        <p>Latest news from the blog</p>
     <div className="d22">
     <div className="cardblog1">
     <div className="imgblog1">
      <img src="http://cdn.home-designing.com/wp-content/uploads/2016/01/yellow-living-room-accents.jpg"/>
     </div>
<div className="descri">
  <h2>The 3 Tricks that Quickly Became Rules</h2>
</div>
<div className="divbtn">Read more</div>
     </div>
     <div className="cardblog1">
     <div className="imgblog1">
      <img src="https://img.freepik.com/premium-photo/living-room-marble-wall-fireplace-stylish-bookcase-chic-expensive-interior-luxury-country-house-with-modern-design-with-wood-led-light-gray-furniture-with-gold-elements_267786-4827.jpg"/>
     </div>
<div className="descri">
  <h2>Decorating When You're Starting Out o Starting Over</h2>
</div>
<div className="divbtn">Read more</div>
     </div>
     <div className="cardblog1">
     <div className="imgblog1">
      <img src="https://cdn.eathappyproject.com/wp-content/uploads/2021/03/What-Goes-with-A-Red-Couch-14-ideas.jpg"/>
     </div>
<div className="descri">
  <h2>Decorating When You're Starting Out o Starting Over</h2>
</div>
<div className="divbtn">Read more</div>
     </div>
     </div>
     
<button className="btn">View all posts</button>
      </div>
 <div className="div5">
  <div className="dr">
  <h1>FOLLOW US</h1>
  <svg xmlns="http://www.w3.org/2000/svg" width="55" height="55" fill="#3a3d45" class="bi bi-instagram" viewBox="0 0 16 16">
  <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"/>
</svg>
<h1>INSTAGRAM</h1>
<p>@Mobel_furniture</p>
  </div>

  <div className="dr1">
  <div className="image">
  <img src="https://i5.walmartimages.com/asr/a0c3a443-ad12-4873-ac1a-60a9e8f33cc9.b2a8cfc09381057c54a4d4df12bdae23.jpeg"/>
</div>
<div className="image">
  <img src="https://media.architecturaldigest.com/photos/560c37dd7da26e3235ad995e/1:1/w_900,h_900,c_limit/gray-living-room-01.jpg"/>
</div>
<div className="image">
  <img src="https://secure.img1-cg.wfcdn.com/im/08046968/compr-r85/1349/134937311/winston-815-wide-reversible-sofa-chaise-with-ottoman.jpg"/>
</div>
<div className="image">
  <img src="https://storage.leafmedia.io/contentlab-data/11/20/e78a97e57db24e79b1dd3abb2a82928c.jpg"/>
</div>
<div className="image">
  <img src="https://m.media-amazon.com/images/I/51fJcP6NulL._AC_.jpg"/>
</div>

<div className="image">
  <img src="https://i.pinimg.com/originals/7c/7f/92/7c7f92fc21e1c5dd2c360939881a3713.jpg"/>
</div>  </div>
 </div>
<Footer/>
    
    </div>
    
    
  );
}

export default Home;
