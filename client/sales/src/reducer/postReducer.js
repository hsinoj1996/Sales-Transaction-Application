import {Add_Customer,Get_Customer } from "../action/types"

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
            default:
                return state
    }
}