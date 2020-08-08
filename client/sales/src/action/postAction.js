import { Add_Customer, Get_Customer, Edit_Customer} from "./types";
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

//Get Customer

export const getCustomer = () => dispatch =>{
    console.log("customerView");
    axios
        .get('/api/view')
        .then(customerView =>{
            if(customerView){
                dispatch({
                    type: Get_Customer,
                    payload: customerView.data
                })
                console.log("action dispatcher",customerView);

            }else{
                console.log("failed to fetch balue");
            }

          }
            
            )
        
}

//Edit Customer
export const editCustomer = (id) => dispatch =>{

    axios
        .put(`/api/edit/${id}`)
        .then((editCustomer) =>{
            if(editCustomer){
                dispatch({
                    type: Edit_Customer,
                    payload: editCustomer,
                    id
                })
            }
        })
}