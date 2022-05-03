import React from "react";

const initialState={
    comingSoon :[],
    everyoneWatching:[],
    top10:[]

}

const reducer = (state=initialState, action)=>{

    const {type,payload} = action

    switch(type){
        case 'comingSoon':
            return {...state,comingSoon:payload}
         case 'everyoneWatching':
            return {...state,everyoneWatching:payload}
        case 'top10':
            return {...state,top10:payload}
        default:
            return {...state}
    }


}
export default reducer