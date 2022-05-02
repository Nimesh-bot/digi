import { integrateStart, integrateSuccess, integrateFailure } from "./integrateSlice";
import axios from 'axios';

export const integrateNow = async (data, dispatch, setMessage, setOpen, setSeverity) => {
    dispatch(integrateStart());
    try{
        const res = await axios.post("http://127.0.0.1:5000/inquiry", data, { header: {"Content-Type": "application/json"} });
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