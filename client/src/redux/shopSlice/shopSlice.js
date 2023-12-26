import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from "axios";
export const getshop=createAsyncThunk("shop/get",async()=>{
  try {
    let result=axios.get("http://localhost:5000/shop/");
    return result;
  } catch (error) {
    console.log(error)
  }
})
export const addshop=createAsyncThunk("shop/add",async(shopp)=>{
  try {
    let result=axios.post("http://localhost:5000/shop/add",shopp);
    return result;
  } catch (error) {
    console.log(error)
  }
})
export const deleteshop=createAsyncThunk("shop/delete",async(id)=>{
  try {
    let result=axios.delete(`http://localhost:5000/shop/${id}`);
    return result;
  } catch (error) {
    console.log(error)
  }
})




export const updateshop=createAsyncThunk("shop/update",async({id,shopp})=>{
  try {
    
    let result=axios.put(`http://localhost:5000/shop/${id}`,shopp);
    return result;
  } catch (error) {
    console.log(error)
  }
})
export const updatevalidate=createAsyncThunk("shop/update",async({id})=>{
  try {
    let result=axios.put(`http://localhost:5000/shop/validat/${id}`);
    return result;
  } catch (error) {
    console.log(error)
  }
})
export const updatevalidate1=createAsyncThunk("shop/update",async({id})=>{
  try {
    let result=axios.put(`http://localhost:5000/shop/validat1/${id}`);
    return result;
  } catch (error) {
    console.log(error)
  }
})

const initialState = {
 shopp:null,
 status:null,
}

export const updatfav=createAsyncThunk("fav/update",async({id,shops})=>{
  try {
    let result=axios.put(`http://localhost:5000/shop/fav/${id}`,shops);
    return result;
  } catch (error) {
    console.log(error)
  }
})

export const updatecard=createAsyncThunk("card/update",async({id,shops})=>{
  try {
    let result=axios.put(`http://localhost:5000/shop/shoping/${id}`,shops);
    return result;
  } catch (error) {
    console.log(error)
  }
})

export const IdeaSlice = createSlice({
  name: 'shop',
  initialState,
  reducers: {},
  extraReducers:{
    [getshop.pending]:(state)=>{
      state.status="pending";
    },
    [getshop.fulfilled]:(state,action)=>{
      state.status="fullfilled";
      state.shopp=action.payload.data.shop;
    },
    [getshop.rejected]:(state)=>{
      state.status="rejected";
    },
    [addshop.pending]:(state)=>{
      state.status="pending";
    },
    [addshop.fulfilled]:(state)=>{
      state.status="fullfilled";
     
    },
    [addshop.rejected]:(state)=>{
      state.status="rejected";
    },
    [deleteshop.pending]:(state)=>{
      state.status="pending";
    },
    [deleteshop.fulfilled]:(state)=>{
      state.status="fullfilled";
     
    },
    [deleteshop.rejected]:(state)=>{
      state.status="rejected";
    },
    [updateshop.pending]:(state)=>{
      state.status="pending";
    },
    [updateshop.fulfilled]:(state)=>{
      state.status="fullfilled";
     
    },
    [updateshop.rejected]:(state)=>{
      state.status="rejected";
    },
   
    
    [updatevalidate.pending]:(state)=>{
      state.status="pending";
    },
    [updatevalidate.fulfilled]:(state)=>{
      state.status="fullfilled";
     
    },
    [updatevalidate.rejected]:(state)=>{
      state.status="rejected";
    },
    [updatevalidate1.pending]:(state)=>{
      state.status="pending";
    },
    [updatevalidate1.fulfilled]:(state)=>{
      state.status="fullfilled";
     
    },
    [updatevalidate1.rejected]:(state)=>{
      state.status="rejected";
    },
    [updatfav.pending]:(state)=>{
      state.status="pending";
    },
    [updatfav.fulfilled]:(state)=>{
      state.status="fullfilled";
     
    },
    [updatfav.rejected]:(state)=>{
      state.status="rejected";
    },
    [updatecard.pending]:(state)=>{
      state.status="pending";
    },
    [updatecard.fulfilled]:(state)=>{
      state.status="fullfilled";
     
    },
    [updatecard.rejected]:(state)=>{
      state.status="rejected";
    },
  },
})

// Action creators are generated for each case reducer function

export default IdeaSlice.reducer