import React, { useEffect, useState } from "react";
import "./Blog.css";
import Footer from "./Footer";
import { useSelector } from "react-redux";
import { useLocation, useNavigationType } from "react-router-dom";

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
      <div className="sousblog1">
        <img src="https://c4.wallpaperflare.com/wallpaper/975/377/178/the-white-room-wallpaper-preview.jpg" />
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
        <div className="blog-content">
          <div className="content">
            <div className="blog-card">
              <img src="https://w0.peakpx.com/wallpaper/693/11/HD-wallpaper-table-chairs-furniture-interior-thumbnail.jpg"></img>
              <div className="blog-card-text">
                <p className="date">18 May 2023</p>
                <h2 className="titre">Creating the Perfect Gallery Wall</h2>
                <div className="show">
                  <p className="paragraphe">
                    Lorem Ipsum est simplement du faux texte employé dans la
                    composition et la mise en page avant impression. Le Lorem
                    Ipsum est le faux texte standard de l'imprimerie depuis les
                    années 1500
                  </p>
                </div>
              </div>
            </div>
            <div className="show-button">
              <button>Read more</button>
            </div>
          </div>
          <div className="content">
            <div className="blog-card">
              <img src="https://w0.peakpx.com/wallpaper/693/11/HD-wallpaper-table-chairs-furniture-interior-thumbnail.jpg"></img>
              <div className="blog-card-text">
                <p className="date">18 May 2023</p>
                <h2 className="titre">Creating the Perfect Gallery Wall</h2>
                <div className="show">
                  <p className="paragraphe">
                    Lorem Ipsum est simplement du faux texte employé dans la
                    composition et la mise en page avant impression. Le Lorem
                    Ipsum est le faux texte standard de l'imprimerie depuis les
                    années 1500
                  </p>
                </div>
              </div>
            </div>
            <div className="show-button">
              <button>Read more</button>
            </div>
          </div>{" "}
          <div className="content">
            <div className="blog-card">
              <img src="https://w0.peakpx.com/wallpaper/693/11/HD-wallpaper-table-chairs-furniture-interior-thumbnail.jpg"></img>
              <div className="blog-card-text">
                <p className="date">18 May 2023</p>
                <h2 className="titre">Creating the Perfect Gallery Wall</h2>
                <div className="show">
                  <p className="paragraphe">
                    Lorem Ipsum est simplement du faux texte employé dans la
                    composition et la mise en page avant impression. Le Lorem
                    Ipsum est le faux texte standard de l'imprimerie depuis les
                    années 1500
                  </p>
                </div>
              </div>
            </div>
            <div className="show-button">
              <button>Read more</button>
            </div>
          </div>{" "}
          <div className="content">
            <div className="blog-card">
              <img src="https://w0.peakpx.com/wallpaper/693/11/HD-wallpaper-table-chairs-furniture-interior-thumbnail.jpg"></img>
              <div className="blog-card-text">
                <p className="date">18 May 2023</p>
                <h2 className="titre">Creating the Perfect Gallery Wall</h2>
                <div className="show">
                  <p className="paragraphe">
                    Lorem Ipsum est simplement du faux texte employé dans la
                    composition et la mise en page avant impression. Le Lorem
                    Ipsum est le faux texte standard de l'imprimerie depuis les
                    années 1500
                  </p>
                </div>
              </div>
            </div>
            <div className="show-button">
              <button>Read more</button>
            </div>
          </div>{" "}
          <div className="content">
            <div className="blog-card">
              <img src="https://w0.peakpx.com/wallpaper/693/11/HD-wallpaper-table-chairs-furniture-interior-thumbnail.jpg"></img>
              <div className="blog-card-text">
                <p className="date">18 May 2023</p>
                <h2 className="titre">Creating the Perfect Gallery Wall</h2>
                <div className="show">
                  <p className="paragraphe">
                    Lorem Ipsum est simplement du faux texte employé dans la
                    composition et la mise en page avant impression. Le Lorem
                    Ipsum est le faux texte standard de l'imprimerie depuis les
                    années 1500
                  </p>
                </div>
              </div>
            </div>
            <div className="show-button">
              <button>Read more</button>
            </div>
          </div>{" "}
          <div className="content">
            <div className="blog-card">
              <img src="https://w0.peakpx.com/wallpaper/693/11/HD-wallpaper-table-chairs-furniture-interior-thumbnail.jpg"></img>
              <div className="blog-card-text">
                <p className="date">18 May 2023</p>
                <h2 className="titre">Creating the Perfect Gallery Wall</h2>
                <div className="show">
                  <p className="paragraphe">
                    Lorem Ipsum est simplement du faux texte employé dans la
                    composition et la mise en page avant impression. Le Lorem
                    Ipsum est le faux texte standard de l'imprimerie depuis les
                    années 1500
                  </p>
                </div>
              </div>
            </div>
            <div className="show-button">
              <button>Read more</button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Blog;
