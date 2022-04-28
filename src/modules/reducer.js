
const initialState={
    backToBack:[],
    trendingNow:[],
    newRelease:[],
    crimeTV:[],
    anime:[],
    top10India:[],
    bollywood:[],
    onlyOnNetflix:[],
    popularOnNetflix:[],
    tvSciFi:[],
    internationalTV:[],
    periodPieces:[],
    youndAdult:[],
    madeInIndia:[],
    hollywood:[],
    releasedPastYear:[],
    moreLikeThis:[],
    listData:[],
    modalVisible:false,
    modalData:{}


}
const reducer =(state=initialState, action)=>{
    const {type, payload} = action
    switch(type){
        case 'back_to_back':
            return{...state,backToBack:[...state.backToBack,...payload]}
        case 'trendingNow':
            return{...state,trendingNow:[...state.trendingNow,...payload]}
        case 'newRelease':
            return{...state,newRelease:[...state.newRelease,...payload]}
        case 'crimeTV':
            return{...state,crimeTV:[...state.crimeTV,...payload]}
        case 'Anime':
            return{...state,anime:[...state.anime,...payload]}
        case 'Anime':
            return{...state,anime:[...state.anime,...payload]}
        case 'Bollywood Movies':
            return{...state,bollywood:[...state.bollywood,...payload]}
        case 'Hollywood Movies':
            return{...state,hollywood:[...state.hollywood,...payload]}
         case 'International TV':
            return{...state,internationalTV:[...state.internationalTV,...payload]}
        case 'Made In India':
            return{...state,madeInIndia:[...state.madeInIndia,...payload]}
        case 'Only On Netflix':
            return{...state,onlyOnNetflix:[...state.onlyOnNetflix,...payload]}
        case 'Period Pieces':
            return{...state,periodPieces:[...state.periodPieces,...payload]}
        case 'Popular on Netflix':
            return{...state,popularOnNetflix:[...state.popularOnNetflix,...payload]}
        case 'Released Past Year':
            return{...state,releasedPastYear:[...state.releasedPastYear,...payload]}
        case 'Top 10 India':
            return{...state,top10India:[...state.top10India,...payload]}
        case 'TV SciFi':
            return{...state,tvSciFi:[...state.tvSciFi,...payload]}
        case 'Young Adult':
            return{...state,youndAdult:[...state.youndAdult,...payload]}
        case 'MoreLikeThis':
            return{...state,moreLikeThis:[...state.moreLikeThis,...payload]}
        case 'Add_List':
            return{
                ...state,listData:[...state.listData,payload]
            }
        case 'Remove_List':
            return{
                ...state,listData:payload
            }
        
        case 'Modal Visible':
            return{...state,modalVisible:payload}
         case 'Modal Data':
            return{...state,modalData:payload}
        default:
            return{...state}
    }

}
export default reducer