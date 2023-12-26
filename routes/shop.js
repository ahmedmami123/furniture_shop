const express = require("express");
const Shop = require("../models/shop");

const shopRouter=express.Router();


//post shop
shopRouter.post("/add",async(req,res)=>{
    try {
        let newShop= new Shop(req.body);
        let result=await newShop.save();
        res.send({shop:result,msg:"shop is added"})
    } catch (error) {
      console.log(error)  
    }
});




//get all shops
shopRouter.get("/",async(req,res)=>{
  try {
    let result=await Shop.find().sort(
      {
        vote:-1,
      }
    );
    res.send({shop:result,msg:"all shops"})
  } catch (error) {
    console.log(error)
  }
 });


// delete shop*
shopRouter.delete("/:id",async(req,res)=>{
  try {
    let result=await Shop.findByIdAndDelete(req.params.id);
    res.send({msg:"shop is delete"})
  } catch (error) {
    console.log(error)
  }
 });
 //update shop
 shopRouter.put("/:id",async(req,res)=>{
  try {
    let result=await Shop.findByIdAndUpdate({_id:req.params.id},{$set:{...req.body}},{new:true});
    res.send({msg:"shop is updated "})
  } catch (error) {
    console.log(error)
  }
 });

 shopRouter.put("/validat/:id",async(req,res)=>{
  
  try {
    let result=await Shop.findByIdAndUpdate({_id:req.params.id},{$set:{validat:true}},{new:true});
    res.send({msg:"shop is updated ",result:result})
  } catch (error) {
    console.log(error)
  }
 });
 shopRouter.put("/validat1/:id",async(req,res)=>{
  
  try {
    let result=await Shop.findByIdAndUpdate({_id:req.params.id},{$set:{validat:false}},{new:true});
    res.send({msg:"shop is updated ",result:result})
  } catch (error) {
    console.log(error)
  }
 });
 //update favories
  shopRouter.put("/fav/:id",async(req,res)=>{
    try {
      let result=await Shop.findByIdAndUpdate({_id:req.params.id},{$set:{favoris:req.body}},{new:true});
      res.send({msg:"idea is updated "})
    } catch (error) {
      console.log(error)
    }
   });
//update shoping card

shopRouter.put("/shoping/:id",async(req,res)=>{
  try {
    let result=await Shop.findByIdAndUpdate({_id:req.params.id},{$set:{shoping:req.body}},{new:true});
    res.send({msg:"idea is updated "})
  } catch (error) {
    console.log(error)
  }
 });

module.exports=shopRouter;