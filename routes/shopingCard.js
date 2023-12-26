const express = require("express");
const ShopCard = require("../models/shopingCard");

const shopCardRouter=express.Router();


//post shop
shopCardRouter.post("/add",async(req,res)=>{
    try {
        let newShop= new ShopCard(req.body);
        let result=await newShop.save();
        res.send({shoping:result,msg:"shop is added"})
    } catch (error) {
      console.log(error)  
    }
});




//get all shops
shopCardRouter.get("/",async(req,res)=>{
  try {
    let result=await ShopCard.find()
    res.send({shoping:result,msg:"all shops"})
  } catch (error) {
    console.log(error)
  }
 });


// delete shop*
shopCardRouter.delete("/:id",async(req,res)=>{
  try {
    let result=await ShopCard.findByIdAndDelete(req.params.id);
    res.send({msg:"shop is delete"})
  } catch (error) {
    console.log(error)
  }
 });


 shopCardRouter.put("/validat/:id",async(req,res)=>{
  
  try {
    let result=await Shop.findByIdAndUpdate({_id:req.params.id},{$set:{validat:true}},{new:true});
    res.send({msg:"shop is updated ",result:result})
  } catch (error) {
    console.log(error)
  }
 });
 
 


 //update favories
 shopCardRouter.put("/addcar/:id",async(req,res)=>{
    try {
      let result=await ShopCard.findByIdAndUpdate({_id:req.params.id},{$set:{shoping:req.body}},{new:true});
      res.send({msg:"shop is updated "})
    } catch (error) {
      console.log(error)
    }
   });

module.exports=shopCardRouter;