import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { hideSidebar } from '../../redux/Sidebar_reducer/Sidebar_Actions';
import { BsTrash, BsCheckLg } from 'react-icons/bs';
import { AiOutlineArrowLeft, AiOutlineClose } from 'react-icons/ai';
import { addwatchlist, removewatchlist } from '../../redux/WatchList_reducer/Watchlist_Actions';
import { addAlreadywatchlist, removeAlreadywatchlist } from '../../redux/Already_watched_reducer/Already_watched_list_Actions';
import { removefrombookmarks } from '../../redux/Bookmark_reducer/Bookmark_Actions';

export interface elementtype {
    id: string,
    episode: string,
    name: string,
    time: string
}

const Sidebar = () => {
    const watchlist = useSelector((state) => state.WatchlistReducer.watchlist);
    const bookmark = useSelector((state) => state.BookmarkReducer.bookmark);
    const AlreadyWatchlist = useSelector((state) => state.AlreadyWatchlistReducer.Alreadywatchlist);    
    const dispatch = useDispatch();
    const HideSideBar = () => {
        dispatch(hideSidebar());
    }
    const [SidebarStatus, setSidebarStatus] = useState({
        watchlist: false,
        bookmark: false,
        watched: false,
        buttons: true,
    });
    const GoBackClicked = () => {
        setSidebarStatus({
            watchlist: false,
            bookmark: false,
            watched: false,
            buttons: true,
        })
    }
    const TriggersClicked = (id: number) => {
        if (id === 1) {
            setSidebarStatus({
                ...SidebarStatus,
                watchlist: true,
                buttons: false
            })
        } else if (id === 2) {
            setSidebarStatus({
                ...SidebarStatus,
                bookmark: true,
                buttons: false
            })
        } else if (id === 3) {
            setSidebarStatus({
                ...SidebarStatus,
                watched: true,
                buttons: false
            })
        } else {
            setSidebarStatus({
                ...SidebarStatus,
                buttons: true
            })
        }
    }
    // deleting watchlist
    const DeleteItem = (id: string) => {
        dispatch(removewatchlist(id))
    }
    // deleting bookmark
    const DeleteBookmark = (id: string) => {
        dispatch(removefrombookmarks(id))
    }
    // move to already watched list
    const AddtoAlreadyWatchedList = (ele: elementtype) => {
        let newItem = {
            id: ele.id,
            episode: ele.episode,
            name: ele.name,
            time: "12 AM"
        }
        const date = new Date().getDate();
        const month = new Date().getMonth() + 1;
        const year = new Date().getFullYear();
        const hours = new Date().getHours();
        const minutes = new Date().getMinutes();

        function addLeadingZero(value: number) {
            return value < 10 ? `0${value}` : value;
        }
        const finalDateTime = `${addLeadingZero(date)}.${addLeadingZero(month)}.${year} -- ${addLeadingZero(hours)}:${addLeadingZero(minutes)}`;
        newItem.time = finalDateTime;
        dispatch(addAlreadywatchlist(newItem));
        dispatch(removewatchlist(ele.id));
    }
    // move to already watched list
    const AddtoWatchList = (ele: elementtype) => {
        let newItem = {
            id: ele.id,
            episode: ele.episode,
            name: ele.name,
            time: "12 AM"
        }
        const date = new Date().getDate();
        const month = new Date().getMonth() + 1; 
        const year = new Date().getFullYear();
        const hours = new Date().getHours();
        const minutes = new Date().getMinutes();

        function addLeadingZero(value: number) {
            return value < 10 ? `0${value}` : value;
        }
        const finalDateTime = `${addLeadingZero(date)}.${addLeadingZero(month)}.${year} -- ${addLeadingZero(hours)}:${addLeadingZero(minutes)}`;
        newItem.time = finalDateTime;
        dispatch(addwatchlist(newItem));
        dispatch(removefrombookmarks(ele.id));
    }

    // delete from already watched 
    const DeleteWatchedItem = (id: string) => {
        dispatch(removeAlreadywatchlist(id))
    }
    return (
        <div>
            <div onClick={HideSideBar} className="fixed w-screen min-h-screen top-0 bg-gray-600 opacity-50 z-10"></div>
            <div className="z-50 fixed bg-white dark:bg-gray-800 right-0 h-screen lg:w-3/12 top-0 overflow-y-scroll">
                {
                    SidebarStatus.watchlist &&

                    <div>
                        <span onClick={GoBackClicked} className='py-3 block px-2 cursor-pointer dark:text-gray-300'><AiOutlineArrowLeft /></span>
                        <span className='font-semibold text-md text-center block pt-5 dark:text-gray-300'>My Watch List ({watchlist.length})</span>
                        <div className='pt-4 px-2'>
                            <span className='text-sm font-semibold text-gray-600 dark:text-gray-400'>Watching</span>
                            {
                                watchlist.length == 0 && <div>
                                    <span className='text-xs font-semibold block text-center py-10 dark:text-gray-300'>No Items in Your Watchlist</span>
                                </div>

                            }
                            {
                                watchlist && watchlist.map((ele: elementtype, index: number) => {
                                    return (
                                        <div className='border dark:border-gray-600 dark:text-gray-300  p-2 my-2' key={index}>
                                            <span className='text-sm font-semibold block'>{index + 1}. {ele.name}</span>
                                            <div className='pl-3'>
                                                <span className='text-xs font-semibold block'>ID NO: {ele.id}</span>
                                                <span className='text-xs font-semibold block'>Added On: {ele.time}</span>
                                                <div className='bg-red-200 px-3 py-1 inline-block rounded-sm my-1 cursor-pointer' onClick={() => DeleteItem(ele.id)}>
                                                    <span className='text-red-700 font-extrabold text-md '><BsTrash /></span>
                                                </div>
                                                <div className='bg-green-200 px-3 py-1 inline-block rounded-sm my-1 ml-3 cursor-pointer' onClick={() => AddtoAlreadyWatchedList(ele)}>
                                                    <span className='text-green-700 font-extrabold text-md '><BsCheckLg /></span>
                                                </div>
                                            </div>
                                        </div>

                                    )
                                })
                            }


                        </div>
                    </div>
                }
                {
                    SidebarStatus.bookmark &&

                    <div>
                        <span onClick={GoBackClicked} className='py-3 block px-2 cursor-pointer dark:text-gray-300'><AiOutlineArrowLeft /></span>
                        <span className='font-semibold text-md text-center block pt-5 dark:text-gray-300'>My Bookmarks List ({bookmark.length})</span>
                        <div className='pt-4 px-2'>
                            <span className='text-sm font-semibold text-gray-600 dark:text-gray-400'>Bookmarks</span>
                            {
                                bookmark && bookmark.map((ele: elementtype, index: number) => {
                                    return (
                                        <div className='border dark:border-gray-600 dark:text-gray-300 p-2 my-2' key={index}>
                                            <span className='text-sm font-semibold block'>{index + 1}. {ele.name}</span>
                                            <div className='pl-3'>
                                                <span className='text-xs font-semibold block'>ID NO: {ele.id}</span>
                                                <span className='text-xs font-semibold block'>Added On: {ele.time}</span>
                                                <div className='bg-red-200 px-3 py-1 inline-block rounded-sm my-1 cursor-pointer' onClick={() => DeleteBookmark(ele.id)}>
                                                    <span className='text-red-700 font-extrabold text-md '><BsTrash /></span>
                                                </div>
                                                <div className='bg-green-200 px-3 py-1 inline-block rounded-sm my-1 ml-3 cursor-pointer' onClick={() => AddtoWatchList(ele)}>
                                                    <span className='text-green-700 font-extrabold text-md '><BsCheckLg /></span>
                                                </div>
                                            </div>
                                        </div>

                                    )
                                })
                            }
                            {
                                bookmark.length == 0 && <div>
                                    <span className='text-xs font-semibold block text-center py-10'>No Items in Your Bookmark</span>
                                </div>

                            }
                        </div>
                    </div>
                }
                {
                    SidebarStatus.watched &&

                    <div>
                        <span onClick={GoBackClicked} className='py-3 block px-2 cursor-pointer dark:text-gray-300'><AiOutlineArrowLeft /></span>
                        <span className='font-semibold text-md text-center block pt-5 dark:text-gray-300'>My Watched List ({AlreadyWatchlist.length})</span>
                        <div className='pt-4 px-2'>
                            <span className='text-sm font-semibold text-gray-600 dark:text-gray-400'>Watched</span>
                            {
                                AlreadyWatchlist.length == 0 && <div>
                                    <span className='text-xs font-semibold block text-center py-10'>You haven't watched anything yet</span>
                                </div>
                            }
                            {
                                AlreadyWatchlist && AlreadyWatchlist.map((ele: elementtype, index: number) => {
                                    return (
                                        <div className='border dark:border-gray-600 dark:text-gray-300 p-2 my-2' key={index}>
                                            <span className='text-sm font-semibold block'>{index + 1}. {ele.name}</span>
                                            <div className='pl-3'>
                                                <span className='text-xs font-semibold block'>ID NO: {ele.id}</span>
                                                <span className='text-xs font-semibold block'>Completed Watching on: {ele.time}</span>
                                                <div className='bg-red-200 px-3 py-1 inline-block rounded-sm my-1 cursor-pointer' onClick={() => DeleteWatchedItem(ele.id)}>
                                                    <span className='text-red-700 font-extrabold text-md '><BsTrash /></span>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }

                        </div>
                    </div>
                }
                {
                    SidebarStatus.buttons &&
                    <div className='mt-5 p-2 border mx-2 dark:border-none'>
                        <span className='dark:text-gray-200 cursor-pointer' onClick={HideSideBar}><AiOutlineClose /></span>
                        <span className='font-semibold text-center block text-sm py-5 dark:text-gray-200'>Click to Open Items</span>
                        <button onClick={() => TriggersClicked(1)} className='bg-gray-100 dark:bg-gray-700 dark:border-gray-800 dark:text-gray-200 dark:hover:bg-gray-600 w-full border py-2 my-2 rounded-sm hover:bg-gray-200 text-sm font-semibold'>My WatchList</button>
                        <button onClick={() => TriggersClicked(2)} className='bg-gray-100 dark:bg-gray-700 dark:border-gray-800 dark:text-gray-200 dark:hover:bg-gray-600 w-full border py-2 my-2 rounded-sm hover:bg-gray-200 text-sm font-semibold'>My Bookmarks</button>
                        <button onClick={() => TriggersClicked(3)} className='bg-gray-100 dark:bg-gray-700 dark:border-gray-800 dark:text-gray-200 dark:hover:bg-gray-600 w-full border py-2 my-2 rounded-sm hover:bg-gray-200 text-sm font-semibold'>Watched</button>
                    </div>
                }
            </div>
        </div>
    )
}

export default Sidebar