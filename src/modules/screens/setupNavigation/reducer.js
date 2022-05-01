import React from "react";
const initialState = {
    data:[],
    isSignedIn:false,
    listData:[]
}

const reducer =(state=initialState,action)=>{
    const {type,payload} =action
    switch(type)
    {
        case 'addData':
            state.data.push(payload)
            return {...state,data:[...state.data,payload]}
            // return{...state,data:[...state.data,payload]}
        case 'Sign_In':
            return{...state,isSignedIn:payload}
        
        case 'Add_List':
                return{
                    ...state,listData:[...state.listData,payload]
                }
        case 'Remove_List':
                return{
                    ...state,listData:payload
                }
        default:
            return state
    }

}
export default reducer
