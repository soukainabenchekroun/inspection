import { combineReducers } from '@reduxjs/toolkit';
import inspectionReducer from './slices/inspectionSlice';

const rootReducer = combineReducers({
  inspection: inspectionReducer,
});

export default rootReducer;
