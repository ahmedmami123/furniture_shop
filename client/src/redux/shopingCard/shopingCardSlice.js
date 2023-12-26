import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from "axios";
export const getshopCard=createAsyncThunk("shoping/get",async()=>{
  try {
    let result=axios.get("http://localhost:5000/shoping/");
    return result;
  } catch (error) {
    console.log(error)
  }
})
export const addshopCard=createAsyncThunk("shop/add",async(shoping)=>{
  try {
    let result=axios.post("http://localhost:5000/shoping/add",shoping);
    return result;
  } catch (error) {
    console.log(error)
  }
})
export const deleteshopCard=createAsyncThunk("shoping/delete",async(id)=>{
  try {
    let result=axios.delete(`http://localhost:5000/shoping/${id}`);
    return result;
  } catch (error) {
    console.log(error)
  }
})




export const updateshopCard=createAsyncThunk("shop/update",async({id,shoping})=>{
  try {
    
    let result=axios.put(`http://localhost:5000/shoping/${id}`,shoping);
    return result;
  } catch (error) {
    console.log(error)
  }
})
export const updatevalidateCard=createAsyncThunk("shoping/update",async({id})=>{
  try {
    let result=axios.put(`http://localhost:5000/shoping/validat/${id}`);
    return result;
  } catch (error) {
    console.log(error)
  }
})

export const updataddcard=createAsyncThunk("shoping/update",async({id,shops})=>{
  try {
    let result=axios.put(`http://localhost:5000/shoping/addcar/${id}`,shops);
    return result;
  } catch (error) {
    console.log(error)
  }
})
const initialState = {
shoping:null,
 status:null,
}




export const IdeaSlice = createSlice({
  name: 'shop',
  initialState,
  reducers: {},
  extraReducers:{
    [getshopCard.pending]:(state)=>{
      state.status="pending";
    },
    [getshopCard.fulfilled]:(state,action)=>{
      state.status="fullfilled";
      state.shopp=action.payload.data.shop;
    },
    [getshopCard.rejected]:(state)=>{
      state.status="rejected";
    },
    [addshopCard.pending]:(state)=>{
      state.status="pending";
    },
    [addshopCard.fulfilled]:(state)=>{
      state.status="fullfilled";
     
    },
    [addshopCard.rejected]:(state)=>{
      state.status="rejected";
    },
    [deleteshopCard.pending]:(state)=>{
      state.status="pending";
    },
    [deleteshopCard.fulfilled]:(state)=>{
      state.status="fullfilled";
     
    },
    [deleteshopCard.rejected]:(state)=>{
      state.status="rejected";
    },
    [updateshopCard.pending]:(state)=>{
      state.status="pending";
    },
    [updateshopCard.fulfilled]:(state)=>{
      state.status="fullfilled";
     
    },
    [updateshopCard.rejected]:(state)=>{
      state.status="rejected";
    },
   
    
    [updatevalidateCard.pending]:(state)=>{
      state.status="pending";
    },
    [updatevalidateCard.fulfilled]:(state)=>{
      state.status="fullfilled";
     
    },
    [updatevalidateCard.rejected]:(state)=>{
      state.status="rejected";
    },
     },
})

// Action creators are generated for each case reducer function

export default IdeaSlice.reducer