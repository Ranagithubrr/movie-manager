import { useState } from 'react'
import MovieDetails from './MovieCard/MovieDetails'
import Singlemovie from './MovieCard/Singlemovie'

const Movies = () => {
  const [showMovieDetails,setShowMovieDetails] = useState<boolean>(false);
  return (
    <div className='p-3 grid grid-cols-6 gap-10 pt-5'>  
    {
      showMovieDetails &&  <MovieDetails setShowMovieDetails={setShowMovieDetails}/>
    }

      <Singlemovie showstate={showMovieDetails} setDetails={setShowMovieDetails}/>    
    </div>
  )
}

export default Movies