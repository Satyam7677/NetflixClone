import axios from 'axios';


const getMoreLikeThis=()=>{
    return(dispatch,getState)=>{
          axios.get(
            'https://api.themoviedb.org/3/movie/popular?api_key=6f606c40dd990a627b2c2506351ab604').then(res=>{
            console.log('GetMore Like This iss', res.data)  
            dispatch({type:'MoreLikeThis', payload:res.data.results})}
          ).catch (err =>{
          console.log('There is an error in get More Like this', err);
        })
    }
}
export default getMoreLikeThis