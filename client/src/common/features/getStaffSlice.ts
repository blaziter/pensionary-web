import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../../app/store'
import axios from 'axios';

interface StaffState {
    firstName: string,
    lastName: string,
    role: string,
    availability: boolean,
}

const initialState: StaffState = {
    firstName: '',
    lastName: '',
    role: '',
    availability: false,
}

export const StaffSlice = createSlice({
    name: 'staff',
    initialState,
    reducers: {
        getStaff: (state) => {
            axios.get(`${process.env.REACT_APP_API_URL}/staff`)
                .then((res) => {
                    state.firstName = res.data.firstName;
                    state.lastName = res.data.lastName;
                    state.role = res.data.role;
                    state.availability = res.data.availability;
                });
        }
    }
})

export const { getStaff } = StaffSlice.actions

export const selectStaff = (state: RootState) => state.getStaff

export default StaffSlice.reducer