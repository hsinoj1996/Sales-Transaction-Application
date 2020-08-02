import {Get_Customer, Add_Customer} from "../action/types"

const initialState = {
    value: []
}
export default function (state = initialState, action){
    switch(action.type){
        case Add_Customer:
            return{
                ...state,
                value: action.payload
            }
            default:
                return state
    }
}