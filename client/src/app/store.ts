import { configureStore } from '@reduxjs/toolkit';
import getStaffReducer from '../common/features/getStaffSlice';

export const store = configureStore({
  reducer: {
    getStaff: getStaffReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch