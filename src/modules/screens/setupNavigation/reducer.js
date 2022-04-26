import React from "react";
const initialState = {
    data:[]
}

const reducer =(state=initialState,action)=>{
    const {type,payload} =action
    switch(type)
    {
        case 'addData':
            state.data.push(payload)
            console.log("payloDD",payload)
            console.log('state',payload)
            return {...state,data:[...state.data,payload]}
            // return{...state,data:[...state.data,payload]}
        default:
            return state
    }

}
export default reducer
