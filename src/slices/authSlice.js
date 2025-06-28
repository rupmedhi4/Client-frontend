
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { apiAgent } from '../apiAgent';
import { toast } from 'react-toastify';
import Cookies from 'js-cookie';



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
      // Cookies.set('jwt', response.data.token, {
      //   path: '/',
      //   secure: true,
      //   sameSite: 'None',
      //   expires: 14,
      // });
      console.log("res in signup success", response);
      return response.data
    } catch (error) {
      console.log("err in signup ", error);
      return rejectWithValue(error);
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

      // Cookies.set('jwt', res.data.token, {
      //   path: '/',
      //   secure: true,
      //   sameSite: 'None',
      //   expires: 14,
      // });

      console.log(res);
      return res.data
    } catch (err) {
      console.log(err);
      return rejectWithValue(err)
    }
  }
)


export const logout = createAsyncThunk(
  'auth/logout',
  async (_, { rejectWithValue }) => {
    try {
      const res = await axios.post(apiAgent.logOut, {}, {
        withCredentials: true
      }
      );
     // Cookies.remove('jwt')
      console.log("from logout func", res)
      return res.data;
    } catch (error) {
      console.error("from logout error func", error);
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

export const fetchUserData = createAsyncThunk(
  'auth/fetchUserData',
  async (_, { rejectWithValue }) => {
    try {
      const res = await axios.get(`${apiAgent.getUser}`, {
        withCredentials: true
      });
      console.log(res.data.user)
      return res.data.user;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error.response?.data?.message || error.message);
    }
  }
);

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
        state.loading = false;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      //fetchUserData
      .addCase(fetchUserData.pending, (state) => {
        state.loading = true
      })
      .addCase(fetchUserData.fulfilled, (state, action) => {
        state.user = action.payload;

      })
      .addCase(fetchUserData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      //logout
      .addCase(logout.pending, (state) => {
        state.loading = true
      })
      .addCase(logout.fulfilled, (state, action) => {
        state.loading = false
        state.isLogin = false;

        toast.success("Logout successful")
      })
      .addCase(logout.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        toast.error("'Logout failed:'")

      })

  }

});

export const { setUser } = authSlice.actions;
export default authSlice.reducer;
