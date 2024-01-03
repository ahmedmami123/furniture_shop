import React, { useEffect, useState } from "react";
import "./About.css";
import Footer from "./Footer";
import { useSelector } from "react-redux";
import { useLocation, useNavigationType } from "react-router-dom";
import BlogCard from "../cards/BlogCard";
import BlogNewsCard from "../cards/BlogNewsCard";

function About({ setnav, setpp, ping, setPing }) {
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
    <div className="about">
      <div className="souabout">
        <img src="https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
      </div>
      <div className="souabout1">
        {/* <img src="cov.jpg" /> */}
        <img src="https://images.unsplash.com/photo-1432249339392-2f754cb22105?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
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
      <div className="team">
        <div className="content">
          <h1>MEET OUR TEAM</h1>
          <p>
            Our architects and designers constantly and carefully monitor the
            environment, they accept and develop changes, research fashion and
            architectural, as well as sociological, changes and transform them
            into unique design.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default About;
