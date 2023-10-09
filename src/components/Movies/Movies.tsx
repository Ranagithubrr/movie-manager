import { useState } from 'react'
import MovieDetails from './MovieCard/MovieDetails'
import Singlemovie from './MovieCard/Singlemovie'
import { useQuery } from '@apollo/client';
import { GET_EPISODS } from '../../Apollo/Queries/Queries';
import DummyImages from '../../Data/DummyImages.json';
const Movies = () => {
  const [showMovieDetails, setShowMovieDetails] = useState<boolean>(false);
  const { loading, data, error } = useQuery(GET_EPISODS);
  const [detailsPageData, setDetailsPageData] = useState<{
    Image: string;
    movie: {
      created: string;
      episode: string;
      id: string;
      name: string;
    };
  }>({ Image: '', movie: { created: '', episode: '', id: '', name: '' } });
  return (
    <div className='dark:bg-gray-800 p-3 grid grid-cols-1  sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-10 pt-5'>
      {
        showMovieDetails && <MovieDetails detailsPageData={detailsPageData} setShowMovieDetails={setShowMovieDetails} />
      }
      {
        error &&
        <div className='h-screen w-screen flex items-center justify-center'>
          <span>OOPS there is an error . . .</span>
        </div>
      }
      {
        loading &&
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