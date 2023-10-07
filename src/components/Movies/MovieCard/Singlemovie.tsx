import { BsBookmarkStar } from 'react-icons/bs';
import { AiOutlineEye } from 'react-icons/ai';
import { Episode } from '../../../__generated__/graphql';
import { useDispatch, useSelector } from 'react-redux';
import { addwatchlist } from '../../../redux/WatchList_reducer/Watchlist_Actions';
import { addtobookmarks } from '../../../redux/Bookmark_reducer/Bookmark_Actions';

interface proptype {
  showstate: boolean,
  setDetails: React.Dispatch<React.SetStateAction<boolean>>,
  movie: Episode | null,
  Image: string,
  setDetailsPageData: React.Dispatch<React.SetStateAction<{}>>
}

const Singlemovie = (props: proptype) => {
  const watchlist = useSelector((state) => state.WatchlistReducer.watchlist);
  const Alreadywatchlist = useSelector((state) => state.AlreadyWatchlistReducer);
  const Bookmarks = useSelector((state) => state.BookmarkReducer); 

  const dispatch = useDispatch();

  const { showstate, setDetails, movie, Image, setDetailsPageData } = props;
  let newItem = {
    id: movie!.id,
    episode: movie!.episode,
    name: movie!.name,
    time: ""
  }
  const HideBackDrop = () => {
    setDetails(false)
  }
  const SetMovieDetails = () => {
    setDetails(true);

    setDetailsPageData({
      movie,
      Image
    })

  };
  const AddtoBookmarks = () => {
    dispatch(addtobookmarks(newItem))
  }

  // getting date time;
  const date = new Date().getDate();
  const month = new Date().getMonth() + 1; // Adding 1 to month because getMonth() returns 0-based months
  const year = new Date().getFullYear();
  const hours = new Date().getHours();
  const minutes = new Date().getMinutes();

  // Function to add leading zeros
  function addLeadingZero(value: number) {
    return value < 10 ? `0${value}` : value;
  }

  const finalDateTime = `${addLeadingZero(date)}.${addLeadingZero(month)}.${year} -- ${addLeadingZero(hours)}:${addLeadingZero(minutes)}`;
  newItem.time = finalDateTime;

  const AddtoWatchList = () => {
    dispatch(addwatchlist(newItem))
  }

  const alreadyinWatchList = watchlist.some(item => item.id === movie?.id);
  const alreadyinCompletedWatchList = Alreadywatchlist.Alreadywatchlist.some(item => item.id === movie?.id);
  const alreadyinBookmarks = Bookmarks.bookmark.some(item => item.id === movie?.id);


  return (
    <div className='shadow-md cursor-pointer relative overflow-hidden grid grid-rows-[1fr,auto] p-3'>
      {showstate && (
        <div onClick={HideBackDrop} className="fixed w-screen left-0 h-screen top-0 bg-gray-400 bg-opacity-25 opacity-25 z-10"></div>
      )}
      {
        alreadyinCompletedWatchList &&
        <div className='absolute -right-8 top-5 w-32 text-center rotate-45 bg-yellow-300'>
          <span className='text-sm font-semibold'>Watched</span>
        </div>
      }
      <div onClick={SetMovieDetails}>
        <div>
          <img src={Image} alt="movie image" className='h-48 w-full' />
        </div>
        <div>
          <span className='font-semibold block text-sm'>ID: {movie?.id}</span>
          <span className='font-semibold block text-sm'>Episode No: {movie?.episode}</span>
          <span className='font-bold block text-lg'>{movie?.name}</span>
        </div>
      </div>
      <div className='flex justify-between items-end'>
        <button onClick={AddtoBookmarks} className={`border px-5 py-1 text-md border-gray-400 rounded-sm hover:bg-gray-200 ${alreadyinBookmarks ? 'bg-yellow-300 hover:bg-yellow-400' : 'hover:bg-gray-200'}`}><BsBookmarkStar /></button>
        <button onClick={AddtoWatchList} className={`border px-5 py-1 text-md border-gray-400 rounded-sm ${alreadyinWatchList ? 'bg-green-500 hover:bg-green-400' : 'hover:bg-gray-200'}`}><AiOutlineEye /></button>
      </div>
    </div>
  )
}

export default Singlemovie
