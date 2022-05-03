import { integrateStart, integrateSuccess, integrateFailure } from "./integrateSlice";
import axios from 'axios';
import { setEventFailure, setEventStart, setEventSuccess } from "./eventSlice";

export const integrateNow = async (data, dispatch, setMessage, setOpen, setSeverity) => {
    dispatch(integrateStart());
    try{
        const res = await axios.post("https://digischool01.herokuapp.com/inquiry", data, { header: {"Content-Type": "application/json"} });
        dispatch(integrateSuccess(res.data)) 
        setOpen(true);
        setSeverity("success");
        setMessage("Thank you for your interest. We will get back to you soon.");
    }
    catch(err) {
        dispatch(integrateFailure());
        setSeverity("error");
        setMessage(err.response.data.Error);
        setOpen(true);
    }
}

export const getEvent = async (dispatch, setEventData) => {
    dispatch(setEventStart());
    try{
        const res = await axios.get("https://digischool01.herokuapp.com/allevent");
        dispatch(setEventSuccess(res.data)) 
        console.log(res.data)
        setEventData(res.data);
    }
    catch(err){
        dispatch(setEventFailure());
    }
}