import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
export const getcommande_Admin = createAsyncThunk(
  "commande_Admin/get",
  async () => {
    try {
      let result = axios.get("http://localhost:5000/commande_Admin/");
      return result;
    } catch (error) {
      console.log(error);
    }
  }
);
export const addcommande_Admin = createAsyncThunk(
  "commande_Admin/add",
  async (commande_Admin) => {
    try {
      let result = axios.post(
        "http://localhost:5000/commande_Admin/add",
        commande_Admin
      );
      return result;
    } catch (error) {
      console.log(error);
    }
  }
);
export const deletecommande_Admin = createAsyncThunk(
  "commande_Admin/delete",
  async (id) => {
    try {
      let result = axios.delete(`http://localhost:5000/commande_Admin/${id}`);
      return result;
    } catch (error) {
      console.log(error);
    }
  }
);

export const updatecommande_Admin = createAsyncThunk(
  "commande_Admin/update",
  async ({ id, commande_Admin }) => {
    try {
      let result = axios.put(
        `http://localhost:5000/commande_Admin/${id}`,
        commande_Admin
      );
      return result;
    } catch (error) {
      console.log(error);
    }
  }
);
export const updatevalidate = createAsyncThunk(
  "commande_Admin/update",
  async ({ id }) => {
    try {
      let result = axios.put(
        `http://localhost:5000/commande_Admin/validat/${id}`
      );
      return result;
    } catch (error) {
      console.log(error);
    }
  }
);
export const updatevalidate1 = createAsyncThunk(
  "commande_Admin/update",
  async ({ id }) => {
    try {
      let result = axios.put(
        `http://localhost:5000/commande_Admin/validat1/${id}`
      );
      return result;
    } catch (error) {
      console.log(error);
    }
  }
);

const initialState = {
  commande_Admin: null,
  status: null,
};

export const updatfav = createAsyncThunk(
  "fav/update",
  async ({ id, commande_Admins }) => {
    try {
      let result = axios.put(
        `http://localhost:5000/commande_Admin/fav/${id}`,
        commande_Admins
      );
      return result;
    } catch (error) {
      console.log(error);
    }
  }
);

export const updatecard = createAsyncThunk(
  "card/update",
  async ({ id, commande_Admins }) => {
    try {
      let result = axios.put(
        `http://localhost:5000/commande_Admin/commande_Admining/${id}`,
        commande_Admins
      );
      return result;
    } catch (error) {
      console.log(error);
    }
  }
);

export const IdeaSlice = createSlice({
  name: "commande_Admin",
  initialState,
  reducers: {},
  extraReducers: {
    [getcommande_Admin.pending]: (state) => {
      state.status = "pending";
    },
    [getcommande_Admin.fulfilled]: (state, action) => {
      state.status = "fullfilled";
      state.commande_Admin = action.payload.data.commande_Admin;
    },
    [getcommande_Admin.rejected]: (state) => {
      state.status = "rejected";
    },
    [addcommande_Admin.pending]: (state) => {
      state.status = "pending";
    },
    [addcommande_Admin.fulfilled]: (state, action) => {
      state.status = "fullfilled";
      state.commande_Admin = [
        action.payload.commande_Admin,
        ...state.commande_Admin,
      ];
      return state;
    },
    [addcommande_Admin.rejected]: (state) => {
      state.status = "rejected";
    },
    [deletecommande_Admin.pending]: (state) => {
      state.status = "pending";
    },
    [deletecommande_Admin.fulfilled]: (state) => {
      state.status = "fullfilled";
    },
    [deletecommande_Admin.rejected]: (state) => {
      state.status = "rejected";
    },
    [updatecommande_Admin.pending]: (state) => {
      state.status = "pending";
    },
    [updatecommande_Admin.fulfilled]: (state) => {
      state.status = "fullfilled";
    },
    [updatecommande_Admin.rejected]: (state) => {
      state.status = "rejected";
    },

    [updatevalidate.pending]: (state) => {
      state.status = "pending";
    },
    [updatevalidate.fulfilled]: (state) => {
      state.status = "fullfilled";
    },
    [updatevalidate.rejected]: (state) => {
      state.status = "rejected";
    },
    [updatevalidate1.pending]: (state) => {
      state.status = "pending";
    },
    [updatevalidate1.fulfilled]: (state) => {
      state.status = "fullfilled";
    },
    [updatevalidate1.rejected]: (state) => {
      state.status = "rejected";
    },
    [updatfav.pending]: (state) => {
      state.status = "pending";
    },
    [updatfav.fulfilled]: (state) => {
      state.status = "fullfilled";
    },
    [updatfav.rejected]: (state) => {
      state.status = "rejected";
    },
    [updatecard.pending]: (state) => {
      state.status = "pending";
    },
    [updatecard.fulfilled]: (state) => {
      state.status = "fullfilled";
    },
    [updatecard.rejected]: (state) => {
      state.status = "rejected";
    },
  },
});

// Action creators are generated for each case reducer function

export default IdeaSlice.reducer;
