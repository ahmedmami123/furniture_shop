import React, { useEffect, useState } from "react";
import "./About.css";
import Footer from "./Footer";
import { useSelector } from "react-redux";
import { useLocation, useNavigationType } from "react-router-dom";
import BlogCard from "../cards/BlogCard";
import BlogNewsCard from "../cards/BlogNewsCard";
import TeamCard from "../cards/TeamCard";

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
        <img src="https://c1.wallpaperflare.com/preview/735/113/159/chairs-contemporary-empty-indoors.jpg" />
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
        <div className="team_content">
          <h1>MEET OUR TEAM</h1>
          <p>
            Our architects and designers constantly and carefully monitor the
            environment, they accept and develop changes, research fashion and
            architectural, as well as sociological, changes and transform them
            into unique design.
          </p>
        </div>
        <div className="team_container">
          <TeamCard
            img={
              "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D"
            }
          />
          <TeamCard
            img={
              "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }
          />
          <TeamCard
            img={
              "https://images.unsplash.com/photo-1605993439219-9d09d2020fa5?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }
          />
          <TeamCard
            img={
              "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEyfHx8ZW58MHx8fHx8"
            }
          />
        </div>
        <div className="team_btn">
          <button>Contact us</button>
        </div>
      </div>
      <div className="covback">
        <h1>WE LOVE OUR WORK</h1>
        <p>
          Lorem ipsum folor sit amet, consenuer adispicing elit mast. Curarbitur
          tristique lacinia mi, vitae consector oido efficitur nec. Phasellus
          velit fe ermentum in enim. Lorem ipsum dolor sit amet, censectur
          adispcing elit curabitur
        </p>
      </div>
      <div className="Interios">
        <div className="titre_int">
          <h1>DESIGN OF INTERIORS</h1>
          <p>Our services team produces interior design solutions</p>
        </div>
        <div className="Interios_grid">
          <div class="box a">
            <div className="box_cover">
              <button>Interior design</button>
            </div>
            <img
              src="https://images.unsplash.com/photo-1631679706909-1844bbd07221?q=80&w=1392&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
          </div>
          {/* <div class="box b">B</div> */}
          <div class="box c">
            <div className="box_cover">
              <button>Interior design</button>
            </div>
            <img
              src="https://images.unsplash.com/photo-1619596662481-085e45d69762?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
          </div>
          <div class="box d">
            {" "}
            <div className="box_cover">
              <button>Interior design</button>
            </div>
            <img
              src="https://images.unsplash.com/photo-1496180727794-817822f65950?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
          </div>
          <div class="box e">
            <div className="box_cover">
              <button>Interior design</button>
            </div>
            <img
              src="https://images.unsplash.com/photo-1596456139864-120856dd9f21?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
          </div>
          <div class="box f">
            <div className="box_cover">
              <button>Interior design</button>
            </div>
            <img
              src="https://images.unsplash.com/photo-1563418536419-3a3ad6ef5efd?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default About;
