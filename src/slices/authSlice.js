
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { apiAgent } from '../apiAgent';



export const signupUser = createAsyncThunk(
  'auth-client/signupUser',
  async (userData, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        apiAgent.signup,
        userData,
        { withCredentials: true },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
      console.log(response);
      return response.data
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);


export const loginUser = createAsyncThunk(
  'auth/loginUser',
  async (userData, { rejectWithValue }) => {
    try {
      const res = await axios.post(`${apiAgent.login}`, userData, {
        withCredentials: true
      }, {
        headers: {
          'Content-Type': 'application/json'
        }
      }
      )
      console.log(res);
      return res.data
    } catch (error) {
      console.log(error);
      return rejectWithValue(err)
    }
  }
)

const authSlice = createSlice({
  name: 'authentication',
  initialState: {
    user: {},
    isLogin: false,
    loading: false,
    error: null
  },
  reducers: {

  },

  extraReducers: (builder) => {
    builder
      //SIGN UP
      .addCase(signupUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(signupUser.fulfilled, (state, action) => {
        state.loading = false;
        state.isLogin = true;
        state.user = {
          name: action.payload.user.name,
          email: action.payload.user.email,
          userId: action.payload.user._id
        }
      })
      .addCase(signupUser.rejected, (state, action) => {
        state.loading = false;
        state.isLogin = true;
        state.error = action.payload;
      })

      //Login
      .addCase(loginUser.pending, (state) => {
        state.loading = true
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.isLogin = true;
        state.loading = false,
          state.user = {
            name: action.payload.user.name,
            email: action.payload.user.email,
          }
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

  }

});

export const { } = authSlice.actions;
export default authSlice.reducer;
