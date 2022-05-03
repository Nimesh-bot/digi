import { configureStore } from '@reduxjs/toolkit';
import integrateReducer from './integrateSlice';
import eventReducer from './eventSlice';

export default configureStore({
    reducer: {
        integrate: integrateReducer,
        event: eventReducer
    }
})