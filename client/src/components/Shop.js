import React, { useEffect, useState } from "react";
import "./Shop.css";
import Carousel from "react-simply-carousel";
import MultiRangeSlider from "react-js-multi-range-sliders";
import Cardproduct from "./Cardproduct";
import Footer from "./Footer";
import { useSelector } from "react-redux";
import { useLocation, useNavigationType } from "react-router-dom";

function Shop({ setnav, setpp, ping, setPing }) {
  const [furniture, setfurniture] = useState([
    {
      posterurl: "sofa11.png",
      name: "SOFA",
    },
    {
      posterurl: "armchair1.png",
      name: "AEMCHAIR",
    },
    {
      posterurl: "chairs1.png",
      name: "CHAIRS",
    },
    {
      posterurl: "diningtable1.png",
      name: "DINING TABLE",
    },
    {
      posterurl: "tvtable1.png",
      name: "TABLES",
    },
    {
      posterurl: "bookcase1.png",
      name: "BOOKCASE",
    },
    {
      posterurl: "bedroom1.png",
      name: "BEDROOM",
    },
    {
      posterurl: "kitchen1.png",
      name: "KITCHEN",
    },
    {
      posterurl: "wardrobe1.png",
      name: "WARDROBE",
    },
    {
      posterurl: "baby-room1.png",
      name: "CHILDREN ROOM",
    },
  ]);
  const [activeSlide, setActiveSlide] = useState(0);
  const [showprice, setshowprice] = useState(true);
  const [showtype, setshowtype] = useState(true);
  const shop = useSelector((state) => state?.shop?.shopp);
  useEffect(() => {
    setnav("");
    setpp("");
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
  return (
    <div className="shop">
      <div className="sousshop1">
        <img src="https://images.herzindagi.info/image/2022/Nov/ideas-for-new-year-decoration-in-hindi.jpg" />
        <div className="trablack">
          <h1>SHOP</h1>
          <p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-house"
              viewBox="0 0 16 16"
            >
              <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.707 1.5ZM13 7.207V13.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V7.207l5-5 5 5Z" />
            </svg>{" "}
            / Product Category / <span>Product Sub-category</span>{" "}
          </p>
        </div>
      </div>
      <div className="category">
        <Carousel
          autoplay={true}
          autoplayDelay={3000}
          disableNavIfAllVisible
          containerProps={{
            style: {
              width: "100%",
              marginTop: "0px",
              userSelect: "text",
            },
          }}
          activeSlideIndex={activeSlide}
          activeSlideProps={{}}
          onRequestChange={setActiveSlide}
          forwardBtnProps={{
            children: (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="45"
                height="45"
                fill="currentColor"
                class="bi bi-chevron-right"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                />
              </svg>
            ),
            style: {
              position: "absolute",
              borderRadius: "50%",
              backgroundColor: "transparent",
              border: "none",
              right: "30px",
              height: 60,
              minWidth: 60,

              alignSelf: "center",
            },
          }}
          backwardBtnProps={{
            children: (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="45"
                height="45"
                fill="currentColor"
                class="bi bi-chevron-left"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
                />
              </svg>
            ),
            style: {
              width: 60,
              height: 60,

              borderRadius: "50%",
              border: "none",
              left: "30px",
              position: "absolute",
              backgroundColor: "transparent",

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
                display: "none",
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
                display: "none",
                marginLeft: "5px",
              },
            },
          }}
          itemsToShow={8}
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
              <img
                className="imgc"
                src={el.posterurl}
                style={{ marginTop: "60px" }}
              />
              <p>{el.name}</p>
            </div>
          ))}
        </Carousel>
      </div>
      <div className="product_list">
        <div className="sous_product">
          <div className="d1">
            <div className="white"></div>
            <div className="sousd1">
              <div className="price">
                <div className="sousprice1">
                  <p>Price</p>
                  <main>
                    <svg
                      className={showprice ? "svg" : "svg1"}
                      onClick={() => setshowprice(!showprice)}
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="currentColor"
                      class="bi bi-chevron-up"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"
                      />
                    </svg>
                  </main>
                </div>
                <div className={showprice ? "sousprice2" : "sousprice22"}></div>
              </div>
              <div className="type">
                <div className="soustype1">
                  <p>Type</p>
                  <main>
                    <svg
                      className={showtype ? "svg" : "svg1"}
                      onClick={() => setshowtype(!showtype)}
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="currentColor"
                      class="bi bi-chevron-up"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"
                      />
                    </svg>
                  </main>
                </div>
                <div className={showtype ? "soustype2" : "soustype22"}>
                  <div className="dd">
                    <label class="rad-label">
                      <input type="radio" class="rad-input" name="rad" />
                      <div class="rad-design"></div>
                      <div class="rad-text">All</div>
                    </label>
                    <label className="qt">(1200)</label>
                  </div>
                  {furniture.map((el, index) => (
                    <div className="dd">
                      <label class="rad-label">
                        <input type="radio" class="rad-input" name="rad" />
                        <div class="rad-design"></div>
                        <div class="rad-text">{el.name}</div>
                      </label>
                      <label className="qt">(1200)</label>
                    </div>
                  ))}
                </div>
              </div>
              <button>Update search</button>
            </div>
          </div>
          <div className="d2">
            <div className="sousd2">
              <main className="main">
                <p>Sort By</p>
                <select name="pets" id="pet-select">
                  <option value="">Name</option>
                  <option value="">Popular items</option>
                  <option value="">price: lowest</option>
                  <option value="">price: highest</option>
                </select>
              </main>
              <main className="main1">
                <div className="m1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="25"
                    fill="gray"
                    class="bi bi-grid-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M1 2.5A1.5 1.5 0 0 1 2.5 1h3A1.5 1.5 0 0 1 7 2.5v3A1.5 1.5 0 0 1 5.5 7h-3A1.5 1.5 0 0 1 1 5.5v-3zm8 0A1.5 1.5 0 0 1 10.5 1h3A1.5 1.5 0 0 1 15 2.5v3A1.5 1.5 0 0 1 13.5 7h-3A1.5 1.5 0 0 1 9 5.5v-3zm-8 8A1.5 1.5 0 0 1 2.5 9h3A1.5 1.5 0 0 1 7 10.5v3A1.5 1.5 0 0 1 5.5 15h-3A1.5 1.5 0 0 1 1 13.5v-3zm8 0A1.5 1.5 0 0 1 10.5 9h3a1.5 1.5 0 0 1 1.5 1.5v3a1.5 1.5 0 0 1-1.5 1.5h-3A1.5 1.5 0 0 1 9 13.5v-3z" />
                  </svg>
                </div>
                <div className="m2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    fill="gray"
                    class="bi bi-justify"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M2 12.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z"
                    />
                  </svg>
                </div>
              </main>
            </div>
            <div className="sousd22">
              {/* <Cardproduct/>
            <Cardproduct/>
            <Cardproduct/>
            <Cardproduct/>
            <Cardproduct/>
            <Cardproduct/>
            <Cardproduct/>
            <Cardproduct/> */}
              {shop?.map((el, i) => (
                <Cardproduct
                  name={el.Product_name}
                  Descri={el.Description}
                  Product_img={el.Product_img}
                  price={el.Price}
                  setPing={setPing}
                  ping={ping}
                  el={el}
                />
              ))}
            </div>
            <div className="sousd222">
              <div className="div1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="white"
                  class="bi bi-chevron-double-left"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M8.354 1.646a.5.5 0 0 1 0 .708L2.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
                  />
                  <path
                    fill-rule="evenodd"
                    d="M12.354 1.646a.5.5 0 0 1 0 .708L6.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
                  />
                </svg>
              </div>
              <div className="div2">
                <div className="cir c1">1</div>
                <div className="cir">2</div>
                <div className="cir">3</div>
                <div className="cir">4</div>
                <div className="cir">5</div>
              </div>
              <div className="div1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="white"
                  class="bi bi-chevron-double-right"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M3.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L9.293 8 3.646 2.354a.5.5 0 0 1 0-.708z"
                  />
                  <path
                    fill-rule="evenodd"
                    d="M7.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L13.293 8 7.646 2.354a.5.5 0 0 1 0-.708z"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Shop;
