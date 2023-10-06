import { useState } from 'react'
import MovieDetails from './MovieCard/MovieDetails'
import Singlemovie from './MovieCard/Singlemovie'
import { useQuery } from '@apollo/client';
import { GET_EPISODS } from '../../Apollo/Queries/Queries';
const Movies = () => {
  const [showMovieDetails, setShowMovieDetails] = useState<boolean>(false);
  const { loading, data, error } = useQuery(GET_EPISODS);
  console.log(loading);
  console.log(data);
  return (
    <div className='p-3 grid grid-cols-6 gap-10 pt-5'>
      {
        showMovieDetails && <MovieDetails setShowMovieDetails={setShowMovieDetails} />
      }
      {
        error &&
        <div className='h-screen w-screen flex items-center justify-center'>
          <span>OOPS there is an error . . .</span>
        </div>
      }
      {
        loading &&
        <div className='h-screen w-screen flex items-center justify-center'>
          <img className='w-1/5 -mt-16' src="https://www.icegif.com/wp-content/uploads/2023/07/icegif-1262.gif" alt="" />
        </div>
      }
      {
        data && data.episodes?.results?.map((ele) => {
          return (
            <Singlemovie  showstate={showMovieDetails} setDetails={setShowMovieDetails} movie={ele} key={ele?.id}/>
          )
        })
      }

    </div>
  )
}

export default Movies