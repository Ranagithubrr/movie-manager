import { FaTimes } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { addtobookmarks } from '../../../redux/Bookmark_reducer/Bookmark_Actions';
import { addwatchlist } from '../../../redux/WatchList_reducer/Watchlist_Actions';

interface proptyps {
    setShowMovieDetails: React.Dispatch<React.SetStateAction<boolean>>,
    detailsPageData: {
        Image: string,
        movie: {
            created: string,
            episode: string,
            id: string,
            name: string
        }
    }
}

const MovieDetails = (props: proptyps) => {

    const dispatch = useDispatch();
    const watchlist = useSelector((state) => state.WatchlistReducer.watchlist);
    const Bookmarks = useSelector((state) => state.BookmarkReducer);

    const { setShowMovieDetails, detailsPageData } = props;

    const CloseClicked = () => {
        setShowMovieDetails(false);
    }
    let newItem = {
        id: detailsPageData.movie!.id,
        episode: detailsPageData.movie!.episode,
        name: detailsPageData.movie!.name,
        time: ""
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

    const AddtoBookmark = () => {
        dispatch(addtobookmarks(newItem))
    }
    const AddtoWatchlist = () => {
        dispatch(addwatchlist(newItem))
    }

    const alreadyinWatchList = watchlist.some(item => item.id === detailsPageData.movie?.id);
    const alreadyinBookmarks = Bookmarks.bookmark.some(item => item.id === detailsPageData.movie?.id);


    return (
        <div className='fixed w-5/6 m-auto top-10 left-0 right-0 h-5/6 overflow-scroll bg-white z-20 p-5'>
            <span className='cursor-pointer float-right' onClick={CloseClicked}><FaTimes /></span>
            <span className='text-xl font-bold block text-center'>{detailsPageData.movie.name}</span>
            <img className='m-auto py-4 h-auto rounded' src={detailsPageData.Image} alt="" />
            <span className='text-sm font-semibold block text-center py-4'>Description</span>
            <div className='flex w-1/3 m-auto border p-2'>
                <div className='w-1/2 m-auto'>
                    <span className='block text-sm font-semibold'>ID </span>
                    <span className='block text-sm font-semibold'>Name </span>
                    <span className='block text-sm font-semibold'>Created </span>
                    <span className='block text-sm font-semibold'>Episode</span>
                </div>
                <div className='w-1/2 m-auto'>
                    <span className='block text-sm font-semibold'>: {detailsPageData.movie.id}</span>
                    <span className='block text-sm font-semibold'>: {detailsPageData.movie.name}</span>
                    <span className='block text-sm font-semibold'>: {detailsPageData.movie.created}</span>
                    <span className='block text-sm font-semibold'>: {detailsPageData.movie.episode}</span>
                </div>
            </div>
            <div className='w-1/2 m-auto text-center py-4'>
                <button onClick={AddtoWatchlist} className={`border px-4 py-2 mx-2 bg-teal-600 text-gray-100 text-sm font-semibold rounded-md ${alreadyinWatchList && 'bg-red-600'}`}>{!alreadyinWatchList ? 'Add to Watch List' : 'Remove from Watch List'} </button>
                <button onClick={AddtoBookmark} className={`border px-4 py-2 mx-2 bg-teal-600 text-gray-100 text-sm font-semibold rounded-md ${alreadyinBookmarks && 'bg-red-600'}`}>{!alreadyinBookmarks ? 'Add to Bookmark' : 'Remove from Bookmark'} </button>                
            </div>
        </div>
    )
}

export default MovieDetails