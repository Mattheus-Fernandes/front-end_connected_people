import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import authService from "../services/authService";


const user = JSON.parse(localStorage.getItem("user"))


const initialState = {

  user: user ? user : null,
  error: false,
  success: false,
  loading: false

}


export const register = createAsyncThunk(
  "auth/register",
  async(user, thunkAPI) => {

    const data = await authService.register(user)

    if(data.errors){

      return thunkAPI.rejectWithValue(data.errors)

    }

    return data
  }
)


export const logout = createAsyncThunk(
  "auth/logout",
  async() => {

    await authService.logout()

  }
)


export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    reset: (state) => {
      state.loading = false
      state.error = false
      state. success = false
    }
  },
  extraReducers: (builder) => {
    builder
    .addCase(register.pending, (state) => {
      state.loading = true
      state.error = false
    })
    .addCase(register.fulfilled, (state, action) => {
      state.loading = false
      state.success = true
      state.user = action.payload
      state.error = null
    })
    .addCase(register.rejected, (state, action) => {
      state.loading = false
      state.error = action.payload
      state.user = null

    })
    .addCase(logout.fulfilled, (state, action) => {
      state.loading = false
      state.success = true
      state.user = null
      state.error = null
    })
  }
  

})

export const {reset} = authSlice.actions
export default authSlice.reducer