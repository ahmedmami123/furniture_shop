import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { updatfav } from '../redux/shopSlice/shopSlice';
import "./Fav.css";

function Favcard({el,ping,setPing}) {
const dispatch=useDispatch();
    
  
  const user=useSelector((state)=>state.user?.user);
  
  var fav = el.favoris.findIndex(el=>el===user?._id);
  return (
fav >=0?
<div className="card">
                    <div className="d0">
                      {" "}
                      <p>{el.Product_name}</p>{" "}
                      <svg onClick={() => {
            
            dispatch(updatfav({id:el._id,shops:el.favoris.filter(el=>el!=user._id)}))
            setTimeout(() => {
              setPing(!ping)
      
            }, 1000);

            }} 
                        xmlns="http://www.w3.org/2000/svg"
                        width="25"
                        height="25"
                        fill="currentColor"
                        class="bi bi-x"
                        viewBox="0 0 16 16"
                      >
                        <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                      </svg>
                    </div>
                    <div className="d1">
                      {" "}
                      <img src={el.Product_img} />
                    </div>
                    <div className="d2">
                      <p className="p">
                        <span>$</span>1000
                      </p>
                      <button>
                        {" "}
                        <svg 
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          fill="white"
                          class="bi bi-cart4"
                          viewBox="0 0 16 16"
                        >
                          <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l.5 2H5V5H3.14zM6 5v2h2V5H6zm3 0v2h2V5H9zm3 0v2h1.36l.5-2H12zm1.11 3H12v2h.61l.5-2zM11 8H9v2h2V8zM8 8H6v2h2V8zM5 8H3.89l.5 2H5V8zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z" />
                        </svg>
                      </button>
                    </div>
                  </div>:null
  )
}

export default Favcard;