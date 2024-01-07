const express = require("express");
const Commande_Admin = require("../models/Commande_Admin");

const commande_AdminRouter=express.Router();


//post commande_Admin
commande_AdminRouter.post("/add",async(req,res)=>{
    try {
        let newCommande_Admin= new Commande_Admin(req.body);
        let result=await newCommande_Admin.save();
        res.send({commande_Admin:result,msg:"commande_Admin is added"})
    } catch (error) {
      console.log(error)  
    }
});




//get all commande_Admins
commande_AdminRouter.get("/",async(req,res)=>{
  try {
    let result=await Commande_Admin.find().sort(
      {
        vote:-1,
      }
    );
    res.send({commande_Admin:result,msg:"all commande_Admins"})
  } catch (error) {
    console.log(error)
  }
 });


// delete commande_Admin*
commande_AdminRouter.delete("/:id",async(req,res)=>{
  try {
    let result=await Commande_Admin.findByIdAndDelete(req.params.id);
    res.send({msg:"commande_Admin is delete"})
  } catch (error) {
    console.log(error)
  }
 });
 //update commande_Admin
 commande_AdminRouter.put("/:id",async(req,res)=>{
  try {
    let result=await Commande_Admin.findByIdAndUpdate({_id:req.params.id},{$set:{...req.body}},{new:true});
    res.send({msg:"commande_Admin is updated "})
  } catch (error) {
    console.log(error)
  }
 });

 commande_AdminRouter.put("/validat/:id",async(req,res)=>{
  
  try {
    let result=await Commande_Admin.findByIdAndUpdate({_id:req.params.id},{$set:{validat:true}},{new:true});
    res.send({msg:"commande_Admin is updated ",result:result})
  } catch (error) {
    console.log(error)
  }
 });
 commande_AdminRouter.put("/validat1/:id",async(req,res)=>{
  
  try {
    let result=await Commande_Admin.findByIdAndUpdate({_id:req.params.id},{$set:{validat:false}},{new:true});
    res.send({msg:"commande_Admin is updated ",result:result})
  } catch (error) {
    console.log(error)
  }
 });
 //update favories
  commande_AdminRouter.put("/fav/:id",async(req,res)=>{
    try {
      let result=await Commande_Admin.findByIdAndUpdate({_id:req.params.id},{$set:{favoris:req.body}},{new:true});
      res.send({msg:"idea is updated "})
    } catch (error) {
      console.log(error)
    }
   });
//update commande_Admining card

commande_AdminRouter.put("/commande_Admining/:id",async(req,res)=>{
  try {
    let result=await Commande_Admin.findByIdAndUpdate({_id:req.params.id},{$set:{commande_Admining:req.body}},{new:true});
    res.send({msg:"idea is updated "})
  } catch (error) {
    console.log(error)
  }
 });

module.exports=commande_AdminRouter;