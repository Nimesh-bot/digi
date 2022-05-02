import { configureStore } from '@reduxjs/toolkit';
import integrateReducer from './integrateSlice';

export default configureStore({
    reducer: {
        integrate: integrateReducer,
    }
})