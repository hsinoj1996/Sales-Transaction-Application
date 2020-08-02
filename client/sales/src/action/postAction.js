import { Add_Customer, Get_Customer} from "./types";
import axios from "axios";


// Add Customer
export const addCustomer = customerData => dispatch =>{
    axios
        .post('/api/register', customerData)
        .then((customerData)=>{
            dispatch({
                type: Add_Customer,
                payload: customerData,

            })
        })
}