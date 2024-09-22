import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../lib/store';

export type LandingPage = {
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: {
    status: boolean;
    message?: string;
  };
};

const initialState: LandingPage = {
  status: 'idle',
  error: {
    status: false,
    message: '',
  },
};

// export const getEmployee = createAsyncThunk(
//   'employee/getEmployee',
//   async ({ id }: { id: string }, { rejectWithValue }) => {
//     return await errorHandler({
//       callback: async () => {
//         const { data } = await axiosInstance.get(`/employee/${id}`);
//         return data;
//       },
//       rejectWithValue,
//     });
//   },
// );

export const employeeSlice = createSlice({
  name: 'employee',
  initialState,
  reducers: {
    removeErrorMessage: (state) => {
      state.error.message = '';
    },
  },
  extraReducers: (builder) => {
    // builder.addCase(getEmployee.pending, (state) => {
    //   state.status = 'loading';
    // });
    // builder.addCase(getEmployee.rejected, (state, action) => {
    //   state.status = 'failed';
    //   state.error.message = action.payload as string;
    // });
    // builder.addCase(getEmployee.fulfilled, (state, action) => {
    //   state.status = 'succeeded';
    //   const data = action.payload;
    //   data.skills = data.skills.map((skill: { name: string; id: string }) => skill.name);
    //   state.employee = data;
    // });
  },
});

export const { removeErrorMessage } = employeeSlice.actions;

export const selectLandingPageState = (state: RootState) => state.landingPage;

export default employeeSlice.reducer;
