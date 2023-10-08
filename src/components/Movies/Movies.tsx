import { useState } from 'react'
import MovieDetails from './MovieCard/MovieDetails'
import Singlemovie from './MovieCard/Singlemovie'
import { useQuery } from '@apollo/client';
import { GET_EPISODS } from '../../Apollo/Queries/Queries';
import DummyImages from '../../Data/DummyImages.json';
const Movies = () => {
  const [showMovieDetails, setShowMovieDetails] = useState<boolean>(false);
  const { loading, data, error } = useQuery(GET_EPISODS);
  const [detailsPageData, setDetailsPageData] = useState({})
  return (
    <div className='dark:bg-gray-800 p-3 grid grid-cols-1  sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-10 pt-5'>
      {
        showMovieDetails && <MovieDetails setShowMovieDetails={setShowMovieDetails} detailsPageData={detailsPageData} />
      }
      {
        error &&
        <div className='h-screen w-screen flex items-center justify-center'>
          <span>OOPS there is an error . . .</span>
        </div>
      }
      {
        loading &&
        // <div className='h-screen w-screen flex items-center justify-center'>
        //   <img className='md:w-1/5 -mt-16' src="https://www.icegif.com/wp-content/uploads/2023/07/icegif-1262.gif" alt="" />
        //   {/* <img className='md:w-1/5 -mt-16' src="https://media.giphy.com/media/3y0oCOkdKKRi0/giphy.gif" alt="Loading" /> */}
        // </div>
        <div className="loadingring">Loading
          <span className='loadingSpan'></span>
        </div>
      }

      {
        data && data.episodes?.results?.map((ele, index) => {
          return (
            <Singlemovie setDetailsPageData={setDetailsPageData} Image={DummyImages[index].image} showstate={showMovieDetails} setDetails={setShowMovieDetails} movie={ele} key={ele?.id} />
          )
        })
      }


    </div>
  )
}

export default Movies