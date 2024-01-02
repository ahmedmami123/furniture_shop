import React from "react";
import "./blogCard.css";
const BlogCard = () => {
  return (
    <>
      <div className="content">
        <div className="blog-card">
          <img src="https://w0.peakpx.com/wallpaper/693/11/HD-wallpaper-table-chairs-furniture-interior-thumbnail.jpg"></img>
          <div className="blog-card-text">
            <p className="date">18 May 2023</p>
            <h2 className="blog_titre">Creating the Perfect Gallery Wall</h2>
            <div className="show">
              <p className="paragraphe">
                Lorem Ipsum est simplement du faux texte employé dans la
                composition et la mise en page avant impression. Le Lorem Ipsum
                est le faux texte standard de l'imprimerie depuis les années
                1500
              </p>
            </div>
          </div>
        </div>
        <div className="show-button">
          <button>Read more</button>
        </div>
      </div>
    </>
  );
};

export default BlogCard;
