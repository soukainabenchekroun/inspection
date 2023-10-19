import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { IInspection } from '../../../types/inspection';

export const fetchInspections = createAsyncThunk(
  'inspection/fetch',
  async () => {
    const response = await axios.get('http://localhost:3030/inspections');
    return response.data;
  },
);

export const createInspection = createAsyncThunk(
  'inspection/create',
  async (inspection: IInspection) => {
    const response = await axios.post('/api/inspections', inspection);
    return response.data;
  },
);

const inspectionSlice = createSlice({
  name: 'inspection',
  initialState: { inspections: [], status: 'idle', error: null } as {
    inspections: IInspection[];
    status: 'idle' | 'loading' | 'succeeded' | 'failed';
    error: string | null;
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchInspections.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchInspections.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.inspections = action.payload;
      })
      .addCase(fetchInspections.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || null;
      });
  },
});

export default inspectionSlice.reducer;
