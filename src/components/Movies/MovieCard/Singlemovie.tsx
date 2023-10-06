import { BsBookmarkStar } from 'react-icons/bs';
import { AiOutlineEye } from 'react-icons/ai';
import { Episode } from '../../../__generated__/graphql';
import { useDispatch, useSelector } from 'react-redux';
import { addwatchlist } from '../../../redux/WatchList_reducer/Watchlist_Actions';

interface proptype {
  showstate: boolean,
  setDetails: React.Dispatch<React.SetStateAction<boolean>>,
  movie: Episode | null
}
const Singlemovie = (props: proptype) => {
  const watchlist = useSelector((state) => state.WatchlistReducer.watchlist)
  console.log('my watch', watchlist);
  const dispatch = useDispatch();

  const { showstate, setDetails, movie } = props;
  const newItem = {
    id: movie!.id,
    episode: movie!.episode,
    name: movie!.name,
    time: "12 AM"
  }
  const HideBackDrop = () => {
    setDetails(false)
  }
  const SetMovieDetails = () => {
    setDetails(true);
    console.log(movie)
  };

  const AddtoWatchList = () => {
    dispatch(addwatchlist(newItem))
  }

  const alreadyinWatchList = watchlist.some(item => item.id === movie?.id);
  console.log('found', alreadyinWatchList)

  return (
    <div className='shadow-md cursor-pointer relative overflow-hidden grid grid-rows-[1fr,auto] p-3'>
      {showstate && (
        <div onClick={HideBackDrop} className="fixed w-screen left-0 h-screen top-0 bg-gray-600 opacity-50 z-10"></div>
      )}
      <div className='absolute -right-8 top-5 w-32 text-center rotate-45 bg-yellow-300'>
        <span className='text-sm font-semibold'>Watched</span>
      </div>
      <div onClick={SetMovieDetails}>
        <div>
          <img src="https://assets.mycast.io/posters/world-war-hulk-2023-miniseries-fan-casting-poster-219057-medium.jpg?1658634732" alt="movie image" className='h-48 w-full' />
        </div>
        <div>          
          <span className='font-semibold block text-sm'>ID: {movie?.id}</span>
          <span className='font-semibold block text-sm'>Episode No: {movie?.episode}</span>
          <span className='font-bold block text-lg'>{movie?.name}</span>
        </div>
      </div>
      <div className='flex justify-between items-end'>
        <button className={`border px-5 py-1 text-md border-gray-400 rounded-sm hover:bg-gray-200`}><BsBookmarkStar /></button>
        <button onClick={AddtoWatchList} className={`border px-5 py-1 text-md border-gray-400 rounded-sm hover:bg-gray-200 ${alreadyinWatchList && 'bg-green-500'}`}><AiOutlineEye /></button>
      </div>
    </div>
  )
}

export default Singlemovie
