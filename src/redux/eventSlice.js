import { createSlice } from '@reduxjs/toolkit';

export const eventSlice = createSlice({
    name: 'event',
    initialState: {
        eventInfo: {
            title: '',
            description: '',
            date: '',
            image: '',
        },
        pending: false,
        error: false,
    },
    reducers: {
        setEventStart: (state) => {
            state.pending = true;
        },
        setEventSuccess: (state, action) => {
            state.eventInfo = action.payload;
            state.pending = false;
            state.error = false;
        },
        setEventFailure: (state) => {
            state.pending = false;
            state.error = true;
        },
    }
})

export const { setEventStart, setEventSuccess, setEventFailure } = eventSlice.actions;
export default eventSlice.reducer;