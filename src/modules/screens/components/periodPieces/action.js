import axios from 'axios';


const getPeriodPieces=()=>{
    return(dispatch,getState)=>{
          axios.get(
            'https://api.themoviedb.org/3/movie/top_rated?api_key=6f606c40dd990a627b2c2506351ab604').then(res=>dispatch({type:'Period Pieces', payload:res.data.results})
          ).catch (err =>{
          console.log('There is an error', err);
        })
    }
}
export default getPeriodPieces