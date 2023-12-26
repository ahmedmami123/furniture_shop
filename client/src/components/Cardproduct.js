import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { deleteshop, updatecard, updateshop, updatevalidate, updatevalidate1, updatfav } from '../redux/shopSlice/shopSlice';
import "./Cardproduct.css"

function Cardproduct({name,Descri,price,Product_img,setPing,ping,el}) {
  const user=useSelector((state)=>state.user?.user);
  const users = useSelector((state) => state?.user?.users);
  const isAuth = localStorage.getItem("token");
  var shopcard=el.shoping.findIndex(el=>el===user?._id);
  
  var fav = el.favoris.findIndex(el=>el===user?._id);
console.log("shop",shopcard);
console.log("fav",fav)  


const [show, setshow] = useState(false);
const [show1, setshow1] = useState(false);

const dispatch=useDispatch();
const [shopp, setshopp] = useState({
 
})
console.log(shopp.Product_img,12)
const [file, setfile] = useState()

const uploadimg=()=>{
  const data =new FormData()
  data.append("file",file)
  data.append("upload_preset","ahmedmami")
  data.append("cloud_name","dwikjrexb")
  fetch("https://api.cloudinary.com/v1_1/dwikjrexb/image/upload",{
    method:"post",
    body:data
  })
  .then(res=>res.json())
  .then(data=>{
    
    // seturl1(data.secure_url)
   var url1=data.secure_url
    console.log("url",url1)
  
    setTimeout(() => {
      setshopp({...shopp,Product_img:url1})
      setPing(!ping)
      setshow(!show)
    }, 2000);
  })
  .catch(err=>{
    console.log("err",err)
  })
}
  return (
    <div className="card1c">
      {show1?<div className='modal'>
        <div className='div'>
          <div className='cir' onClick={()=>{


 
setshow1(!show1);

 setPing(!ping);

       }}><svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" fill="white" class="bi bi-x" viewBox="0 0 16 16">
  <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
</svg></div>
<div className="addp">
             

           
             <input placeholder='Product name' defaultValue={el.Product_name} type="text" onChange={(e)=>setshopp({...shopp,Product_name:e.target.value})}></input>
             <input multiple placeholder='Image'  type="file" onChange={(e)=>setfile(e.target.files[0])}></input>
             
             <select name="category" id="pet-select" onChange={(e)=>setshopp({...shopp,Category:e.target.value})}>
               <option value="">--Please choose an category--</option>
               <option value="SOFA">SOFA</option>
               <option value="AEMCHAIR">AEMCHAIR</option>
               <option value="CHAIRS">CHAIRS</option>
               <option value="DINING TABLE">DINING TABLE</option>
               <option value="TABLES">TABLES</option>
               <option value="BOOKCASE">BOOKCASE</option>
               <option value="BEDROOM">BEDROOM</option>
               <option value="KITCHEN">KITCHEN</option>
               <option value="WARDROBE">WARDROBE</option>
               <option value="CHILDREN ROOM">CHILDREN ROOM</option>
           
           
           
           </select>
           
           
            
             <input placeholder='Description' type="text" onChange={(e)=>setshopp({...shopp,Description:e.target.value})}></input>
            
             <input placeholder='Price' type="text" onChange={(e)=>setshopp({...shopp,Price:e.target.value})}></input>
           
           
           <button onClick={()=>{
              uploadimg();
             
              setPing(!ping);
           
                      
           
                }}>Update Products</button>
           {show? <div className="modal1">
            <div className="dm">
            <img onClick={()=>{
             
           
             setTimeout(() => {
              
 dispatch(updateshop({id:el._id,shopp}));

              setPing(!ping);
              setshow(!show)
           
            }, 2000);
                     
           
               }} src="check.gif"/>
             <button onClick={()=>{
               setshow(!show);}
             }>
            <svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" fill="white" class="bi bi-x" viewBox="0 0 16 16">
             <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
           </svg> 
             </button>
             
             </div>
           </div>:null}
           </div>
        </div>
      </div>:null}
    {user?.option=="Admin"?  <div className='up'>
      <div className='bt1' onClick={()=>{


 
setTimeout(() => {
  dispatch(deleteshop(el._id));


 setPing(!ping);
}, 2000);

       }}>
      <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="white" class="bi bi-x" viewBox="0 0 16 16">
  <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
</svg>
      </div>
   
  {  el.validat?
   <div className='bt2'onClick={()=>{


 
setTimeout(() => {
 dispatch(updatevalidate1({id:el._id}));

 setPing(!ping);
}, 1000);

       }}>
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="white" class="bi bi-star-fill" viewBox="0 0 16 16">
  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
</svg>
      </div>
      :<div className='bt1'onClick={()=>{


 
        setTimeout(() => {
         dispatch(updatevalidate({id:el._id}));
        
         setPing(!ping);
        }, 2000);
        
               }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="white" class="bi bi-star-fill" viewBox="0 0 16 16">
          <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
        </svg>
              </div>} 
      <div className='bt1' onClick={()=>{


 
setshow1(!show1);

 setPing(!ping);

       }}>
      <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="white" class="bi bi-arrow-repeat" viewBox="0 0 16 16">
  <path d="M11.534 7h3.932a.25.25 0 0 1 .192.41l-1.966 2.36a.25.25 0 0 1-.384 0l-1.966-2.36a.25.25 0 0 1 .192-.41zm-11 2h3.932a.25.25 0 0 0 .192-.41L2.692 6.23a.25.25 0 0 0-.384 0L.342 8.59A.25.25 0 0 0 .534 9z"/>
  <path fill-rule="evenodd" d="M8 3c-1.552 0-2.94.707-3.857 1.818a.5.5 0 1 1-.771-.636A6.002 6.002 0 0 1 13.917 7H12.9A5.002 5.002 0 0 0 8 3zM3.1 9a5.002 5.002 0 0 0 8.757 2.182.5.5 0 1 1 .771.636A6.002 6.002 0 0 1 2.083 9H3.1z"/>
</svg>
      </div>
 
    
   


    </div>:null}
            <h2>{name}</h2>
            <p> $ {price}</p>
            <div className="img">
<img src={Product_img}/></div>
{user?.option !="Admin"?       
<div className="cub">
         {fav <0 ?  
          <div className="circl" onClick={() => {
            
              dispatch(updatfav({id:el._id,shops:[...el.favoris,user._id]}))

              

      setTimeout(() => {
        setPing(!ping);

      }, 2000);
              // setshowvote(!showvote)
              }}> 
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" class="bi bi-heart-fill" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>
</svg>
              </div>: 
              <div className="circl1" onClick={() => {
            
            // handleInvote();
            dispatch(updatfav({id:el._id,shops:el.favoris.filter(el=>el!=user._id)}))
            setTimeout(() => {
              setPing(!ping)
      
            }, 1000);

            // setshowvote(!showvote)
            }} >
           <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" class="bi bi-heart-fill" viewBox="0 0 16 16">
<path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>
</svg>
           </div>}
            </div>:null}
          
            {user?.option !="Admin"?        <div className="cub1">
              <div className="circl">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" class="bi bi-eye" viewBox="0 0 16 16">
  <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"/>
  <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"/>
</svg>
              </div>
            </div>:null}
            {user?.option !="Admin" && shopcard <0?     <div className="addtocard" onClick={() => {
            
            dispatch(updatecard({id:el._id,shops:[...el.shoping,user._id]}))
          
            
            setTimeout(() => {
              setPing(!ping)
      
            }, 1000);

          
            }}>
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="white" class="bi bi-cart4" viewBox="0 0 16 16">
  <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l.5 2H5V5H3.14zM6 5v2h2V5H6zm3 0v2h2V5H9zm3 0v2h1.36l.5-2H12zm1.11 3H12v2h.61l.5-2zM11 8H9v2h2V8zM8 8H6v2h2V8zM5 8H3.89l.5 2H5V8zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z"/>
</svg>
            </div>:null}
            {user?.option !="Admin" && shopcard >=0?
            <div className="addtocard1" onClick={() => {
            
          
            dispatch(updatecard({id:el._id,shops:el.shoping.filter(el=>el!=user._id)}))
            
            setTimeout(() => {
              setPing(!ping)
      
            }, 1000);

          
            }}>
   <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="red" class="bi bi-cart-x-fill" viewBox="0 0 16 16">
  <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM7.354 5.646 8.5 6.793l1.146-1.147a.5.5 0 0 1 .708.708L9.207 7.5l1.147 1.146a.5.5 0 0 1-.708.708L8.5 8.207 7.354 9.354a.5.5 0 1 1-.708-.708L7.793 7.5 6.646 6.354a.5.5 0 1 1 .708-.708z"/>
</svg>
            </div>:null}
          </div>
  )
}

export default Cardproduct