import { createSlice } from '@reduxjs/toolkit';

export const integrateSlice = createSlice({
    name: 'integrate',
    initialState: {
        integrateInfo: {
            fullname: "",
            email: "",
            phone: "",
            school_type: "government",
            school_name: "",
            user_type: "school",
            date: Date.now(),
        },
        pending: false,
        error: false,
    },
    reducers: {
        integrateStart: (state) => {
            state.pending = true;
        },
        integrateSuccess: (state, action) => {
            state.pending = false;
            state.integrateInfo = action.payload;
        },
        integrateFailure: (state) => {
            state.pending = false;
            state.error = true;
        },
    }
})

export const { integrateStart, integrateSuccess, integrateFailure } = integrateSlice.actions;
export default integrateSlice.reducer;