import { Add_Product, Get_Product } from "../action/types"

const initialState ={
    value:{},
    values:[]
}

export default function (state = initialState, action){

    switch(action.type){
        case Add_Product:
            return{
                ...state,
                value: action.payload
            }
        case Get_Product:
            return{
                ...state,
                values: action.payload
            }
            default:
                return state
    }
}