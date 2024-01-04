import React from 'react'
import { useEffect } from 'react';
import "./blogdetails.css"
import Footer from './Footer';
const BlogDetails = ({setnav,setpp}) => {
    useEffect(() => {
        setnav("");
        setpp("");
      }, []);
  return (
    <>
    <div className="blog-detail">
      <div className="b-d-sousblog1">
        {/* <img src="cov.jpg" /> */}
        <img src="https://images8.alphacoders.com/126/1262109.jpg" />
        <div className="b-d-trablack">
          <div className="b-d-soustiltle">
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
              <span style={{color:"white"}}>/ Blog Category / </span>
              <span style={{color:"#eb9d0c"}}>Decoration When You're</span>             
            </p>
          </div>
        </div>
      </div>    
      <div className="b-d-content">
      <img src="blog-details-img.PNG" alt="gg" />
      <div className="d-b-con-det">
      <h1>Decorating When You're Starting out or Starting Over</h1>
    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. A, perspiciatis architecto. Culpa ipsum veritatis debitis, repellendus libero fuga. Quasi vel fuga repellendus porro, maiores ad placeat inventore itaque reprehenderit officiis.</p>
     <div className='blog-details-hr' ></div>
     <div className="b-d-name-date-comment">
      <div className="b-d-name">
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16">
  <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6"/>
</svg>
<h4>Jhone Doe</h4>
      </div>

      <div className="b-d-name">
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-calendar2-month" viewBox="0 0 16 16">
  <path d="m2.56 12.332.54-1.602h1.984l.54 1.602h.718L4.444 7h-.696L1.85 12.332zm1.544-4.527L4.9 10.18H3.284l.8-2.375h.02zm5.746.422h-.676v2.543c0 .652-.414 1.023-1.004 1.023-.539 0-.98-.246-.98-1.012V8.227h-.676v2.746c0 .941.606 1.425 1.453 1.425.656 0 1.043-.28 1.188-.605h.027v.539h.668zm2.258 5.046c-.563 0-.91-.304-.985-.636h-.687c.094.683.625 1.199 1.668 1.199.93 0 1.746-.527 1.746-1.578V8.227h-.649v.578h-.019c-.191-.348-.637-.64-1.195-.64-.965 0-1.64.679-1.64 1.886v.34c0 1.23.683 1.902 1.64 1.902.558 0 1.008-.293 1.172-.648h.02v.605c0 .645-.423 1.023-1.071 1.023zm.008-4.53c.648 0 1.062.527 1.062 1.359v.253c0 .848-.39 1.364-1.062 1.364-.692 0-1.098-.512-1.098-1.364v-.253c0-.868.406-1.36 1.098-1.36z"/>
  <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5M2 2a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1z"/>
  <path d="M2.5 4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H3a.5.5 0 0 1-.5-.5z"/>
</svg>
<h4>3.3.2017</h4>
      </div>

      <div className="b-d-name">
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chat-text-fill" viewBox="0 0 16 16">
  <path d="M16 8c0 3.866-3.582 7-8 7a9.06 9.06 0 0 1-2.347-.306c-.584.296-1.925.864-4.181 1.234-.2.032-.352-.176-.273-.362.354-.836.674-1.95.77-2.966C.744 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7M4.5 5a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1zm0 2.5a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1zm0 2.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1z"/>
</svg>
<h4>4 comments</h4>
      </div>
     </div>
     <div className='blog-details-hr' ></div>

      </div>
      <div className="b-d-like">
        <h3>What do you like?</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, ullam culpa. Repellat laboriosam iste veniam autem! Ad vel commodi maxime aliquid, obcaecati alias enim nulla veritatis accusamus! Ea, animi recusandae!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit mollitia incidunt culpa consequuntur numquam quidem distinctio, id itaque tenetur eligendi eos dignissimos sed aperiam labore esse rem corrupti libero dolores.
        </p>
      <img src="like.PNG" alt="gg" />
      <p className='bd-image-title'>this is an alternative image description. it will generate auto caption.</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus minima voluptate, saepe et eaque esse eius pariatur in tenetur quod aut ullam praesentium maiores? Explicabo eaque fugiat eius magni consequatur!</p>
      <h3>Sketch out your floor plan</h3>
     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, dolor hic! Nesciunt quibusdam quasi harum repellendus accusantium impedit est dignissimos, sequi sit enim vero, ex suscipit, adipisci nam eveniet qui.</p>
     <img src="sketch.PNG" alt="gg" />
     <p className='bd-image-title'>this is an alternative image description. it will generate auto caption.</p>
     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore aut, dolor asperiores neque pariatur magnam sit repellat ut et aliquam laborum? Corporis voluptate officia modi molestias, eveniet soluta tenetur voluptatibus?</p>
     <h3>Choose you color palette</h3>
     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad aliquid repellat numquam placeat, ab deserunt reprehenderit aliquam sequi fuga molestiae quidem tenetur et deleniti corrupti. Quaerat tenetur harum modi vel?
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem eligendi non maxime soluta ipsam quibusdam praesentium quidem deserunt reiciendis fuga, nihil cum, esse neque repellat porro placeat, ratione eos recusandae!
     </p>
     <div className='blog-details-hr' ></div>
     <div className="b-d-social-media">
     <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-facebook" viewBox="0 0 16 16">
  <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951"/>
</svg>
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-twitter-x" viewBox="0 0 16 16">
  <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865l8.875 11.633Z"/>
</svg>
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-google" viewBox="0 0 16 16">
  <path d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z"/>
</svg>
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-linkedin" viewBox="0 0 16 16">
  <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401m-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4"/>
</svg>
     </div>
     <div className='blog-details-hr' ></div>

      </div>
      <div className="b-d-comment">
        <img src="haz.jpg" alt="" />
        <div className="name-date">
          <h3>jhon doe</h3>
          <p>03.03.2017</p>
        </div>
      </div>
      <p className='b-d-comment-content'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod aperiam eos quis ipsam. Aperiam labore animi, neque ad quos doloremque! Consequuntur harum reiciendis accusantium eos totam incidunt blanditiis aliquam culpa? Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum inventore, id dolorem rem pariatur voluptas blanditiis minima asperiores ipsum et in reiciendis ullam aliquam modi. Saepe dolorem atque pariatur alias!</p>
      <div className='blog-details-hr-comment' ></div>

      <div className="b-d-comment">
        <img src="haz.jpg" alt="" />
        <div className="name-date">
          <h3>jhon doe</h3>
          <p>03.03.2017</p>
        </div>
      </div>
      <p className='b-d-comment-content'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod aperiam eos quis ipsam. Aperiam labore animi, neque ad quos doloremque! Consequuntur harum reiciendis accusantium eos totam incidunt blanditiis aliquam culpa? Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum inventore, id dolorem rem pariatur voluptas blanditiis minima asperiores ipsum et in reiciendis ullam aliquam modi. Saepe dolorem atque pariatur alias!</p>
      <div className='blog-details-hr-comment' ></div>
      <div className="b-d-other-comment">
        <button>12 comments</button>
      </div>
      <div className='blog-details-hr-comment' ></div>
      <div className='b-d-add-comment-all'>
      <div className="b-d-add-comment-container">
    <div className="b-d-add-comment">
      <h2>leave a reply</h2>
      <p>Your email address will not be pulished</p>
      <input type="text" placeholder='Your Name' />
      <input type="text" placeholder='Your Email' />
      <textarea name="" id="" placeholder='Your comment'></textarea>
      <div className="b-d-add-comment-button">
              <button>Add Comment</button>
            </div>
    </div>
    </div>
    </div>
   
      </div>
      <Footer />

</div>
    </>
  )
}

export default BlogDetails