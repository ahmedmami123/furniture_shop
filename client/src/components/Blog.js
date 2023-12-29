import React, { useEffect, useState } from "react";
import "./Blog.css";
import Footer from "./Footer";
import { useSelector } from "react-redux";
import { useLocation, useNavigationType } from "react-router-dom";
import BlogCard from "../cards/BlogCard";
import BlogNewsCard from "../cards/BlogNewsCard";

function Blog({ setnav, setpp, ping, setPing }) {
  //   const [activeSlide, setActiveSlide] = useState(0);
  //   const [showprice, setshowprice] = useState(true);
  //   const [showtype, setshowtype] = useState(true);
  const blog = useSelector((state) => state?.blog?.blogp);
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
    <div className="blog">
      <div className="souhome">
        <img src="cov.jpg" />
      </div>
      <div className="sousblog1"> 
          {/* <img src="cov.jpg" /> */}
        {/* <img src="https://c4.wallpaperflare.com/wallpaper/975/377/178/the-white-room-wallpaper-preview.jpg" /> */}
        <div className="trablack">
          <div className="blog-soustiltle">
            <h1>blog</h1>
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
              / Blog
            </p>
          </div>
        </div>
      </div>

      <div className="blog-alldiv">
        <div className="blog-title">
          <h2>INTERIOR TIPS & IDEAS</h2>
          <p>First Things First, Find Out What You Like</p>
        </div>
        <BlogCard />
      </div>
      <div className="divtr">
        <h1>Our Story</h1>
        <p>
          we believe in creativity as one of the major forces of progress. with
          we traveled throughout tunisia to find exceptional artisans and bring
          their unique handcrafted objects to connoisseurs everywhere
        </p>
        <button className="btn">Read Full Story</button>
      </div>
      <div className="blog-alldiv">
        <div className="blog-title">
          <h2>CREATING THE PERFECT GALLERY WALL</h2>
          <p>Your Color Pallete Can Come From A Variety Of Inspiration</p>
        </div>
        <BlogNewsCard />
      </div>
      <Footer />
    </div>
  );
}

export default Blog;
