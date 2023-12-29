import React from 'react'
import "./blognewscard.css"

const BlogNewsCard = () => {
  return (
    <>
      <div className="d22">
        <div className="cardblog1">
          <div className="imgblog1">
            <img src="http://cdn.home-designing.com/wp-content/uploads/2016/01/yellow-living-room-accents.jpg" />
          </div>
          <div className="descri">
            <h2>The 3 Tricks that Quickly Became Rules</h2>
          </div>
          <div className="divbtn">Read more</div>
        </div>
        <div className="cardblog1">
          <div className="imgblog1">
            <img src="https://img.freepik.com/premium-photo/living-room-marble-wall-fireplace-stylish-bookcase-chic-expensive-interior-luxury-country-house-with-modern-design-with-wood-led-light-gray-furniture-with-gold-elements_267786-4827.jpg" />
          </div>
          <div className="descri">
            <h2>Decorating When You're Starting Out o Starting Over</h2>
          </div>
          <div className="divbtn">Read more</div>
        </div>
        <div className="cardblog1">
          <div className="imgblog1">
            <img src="https://cdn.eathappyproject.com/wp-content/uploads/2021/03/What-Goes-with-A-Red-Couch-14-ideas.jpg" />
          </div>
          <div className="descri">
            <h2>Decorating When You're Starting Out o Starting Over</h2>
          </div>
          <div className="divbtn">Read more</div>
        </div>
      </div>
    </>
  );
}

export default BlogNewsCard