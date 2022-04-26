import axios from 'axios';


const getTrendingNow=()=>{
    return(dispatch,getState)=>{
          axios.get(
            'https://api.themoviedb.org/3/movie/popular?api_key=6f606c40dd990a627b2c2506351ab604').then(res=>dispatch({type:'trendingNow', payload:res.data.results})
          ).catch (err =>{
          console.log('There is an error', err);
        })
    }
}
export default getTrendingNow