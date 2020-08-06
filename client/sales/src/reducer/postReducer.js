import {Add_Customer,Get_Customer, Edit_Customer } from "../action/types"

const initialState = {
    value: {},
    values:[]
}
export default function (state = initialState, action){

   
    switch(action.type){
        case Add_Customer:
            return{
                ...state,
                value: action.payload
            }
        case Get_Customer:
            return{
                ...state,
                values: action.payload
            }
        case Edit_Customer:
            return{
                ...state,
                value:action.payload
            }
            default:
                return state
    }
}