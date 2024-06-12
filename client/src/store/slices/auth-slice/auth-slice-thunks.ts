import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
import {ApiError} from "../../../shared/types/api";

interface RegisterUserArgs {
  username: string;
  email: string;
  password: string;
}
export const registerUser = createAsyncThunk<void, RegisterUserArgs, {rejectValue: ApiError}>(
  'registerUser',
  async (args: RegisterUserArgs , {rejectWithValue}) => {
    try {
      const response = await axios.post(
        '/auth/register',
        {...args},
        {
          headers: {
            "Content-Type": "multipart/form-data",
          }
        }
      );

      if (response.status !== 200) {
        return rejectWithValue(response.data);
      }

      return response.data;
    } catch(error) {
      return rejectWithValue(error?.response?.data);
    }
  }
)