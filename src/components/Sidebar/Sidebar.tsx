import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { hideSidebar } from '../../redux/Sidebar_reducer/Sidebar_Actions';
import { BsTrash, BsCheckLg } from 'react-icons/bs';
import { AiOutlineArrowLeft } from 'react-icons/ai';

export interface elementtype {
    id: string,
    episode: string,
    name: string,
    time: string
}

const Sidebar = () => {
    const watchlist = useSelector((state) => state.WatchlistReducer.watchlist);
    console.log('watchlists', watchlist)
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
    return (
        <div>
            <div onClick={HideSideBar} className="fixed w-screen min-h-screen top-0 bg-gray-600 opacity-50 z-10"></div>
            <div className="z-50 fixed bg-white right-0 h-screen w-1/6 top-0 overflow-scroll">
                {
                    SidebarStatus.watchlist &&

                    <div>
                        <span onClick={GoBackClicked} className='py-3 block px-2 cursor-pointer'><AiOutlineArrowLeft /></span>
                        <span className='font-semibold text-md text-center block pt-5'>My Watch List</span>
                        <div className='pt-4 px-2'>
                            <span className='text-sm font-semibold text-gray-600'>Watching</span>

                            {
                                watchlist && watchlist.map((ele:elementtype,index:number) => {
                                    return (
                                        <div className='border p-2 my-2'>
                                            <span className='text-sm font-semibold block'>{index +1}. {ele.name}</span>
                                            <div className='pl-3'>
                                                <span className='text-xs font-semibold block'>ID NO: {ele.id}</span>
                                                <div className='bg-red-200 px-3 py-1 inline-block rounded-sm my-1 cursor-pointer'>
                                                    <span className='text-red-700 font-extrabold text-md '><BsTrash /></span>
                                                </div>
                                                <div className='bg-green-200 px-3 py-1 inline-block rounded-sm my-1 ml-3 cursor-pointer'>
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
                        <span onClick={GoBackClicked} className='py-3 block px-2 cursor-pointer'><AiOutlineArrowLeft /></span>
                        <span className='font-semibold text-md text-center block pt-5'>My Bookmarks List</span>
                        <div className='pt-4 px-2'>
                            <span className='text-sm font-semibold text-gray-600'>Bookmarks</span>
                            <div className='border p-2 my-2'>
                                <span className='text-sm font-semibold block'>1. Lorem, ipsum dolor.</span>
                                <div className='pl-3'>
                                    <span className='text-xs font-semibold block'>ID NO: 1</span>
                                    <div className='bg-red-200 px-3 py-1 inline-block rounded-sm my-1 cursor-pointer'>
                                        <span className='text-red-700 font-extrabold text-md '><BsTrash /></span>
                                    </div>
                                    <div className='bg-green-200 px-3 py-1 inline-block rounded-sm my-1 ml-3 cursor-pointer'>
                                        <span className='text-green-700 font-extrabold text-md '><BsCheckLg /></span>
                                    </div>
                                </div>
                            </div>
                            <div className='border p-2 my-2'>
                                <span className='text-sm font-semibold block'>1. Lorem, ipsum dolor.</span>
                                <div className='pl-3'>
                                    <span className='text-xs font-semibold block'>ID NO: 1</span>
                                    <div className='bg-green-200 px-3 py-1 inline-block rounded-sm my-1'>
                                        <span className='text-green-700 font-extrabold text-md cursor-pointer'><BsCheckLg /></span>
                                    </div>
                                </div>
                            </div>
                            <div className='border p-2 my-2'>
                                <span className='text-sm font-semibold block'>1. Lorem, ipsum dolor.</span>
                                <div className='pl-3'>
                                    <span className='text-xs font-semibold block'>ID NO: 1</span>
                                    <div className='bg-red-200 px-3 py-1 inline-block rounded-sm my-1'>
                                        <span className='text-red-700 font-extrabold text-md cursor-pointer'><BsTrash /></span>
                                    </div>
                                </div>
                            </div>
                            <div className='border p-2 my-2'>
                                <span className='text-sm font-semibold block'>1. Lorem, ipsum dolor.</span>
                                <div className='pl-3'>
                                    <span className='text-xs font-semibold block'>ID NO: 1</span>
                                    <div className='bg-red-200 px-3 py-1 inline-block rounded-sm my-1'>
                                        <span className='text-red-700 font-extrabold text-md cursor-pointer'><BsTrash /></span>
                                    </div>
                                </div>
                            </div>
                            <div className='border p-2 my-2'>
                                <span className='text-sm font-semibold block'>1. Lorem, ipsum dolor.</span>
                                <div className='pl-3'>
                                    <span className='text-xs font-semibold block'>ID NO: 1</span>
                                    <div className='bg-red-200 px-3 py-1 inline-block rounded-sm my-1'>
                                        <span className='text-red-700 font-extrabold text-md cursor-pointer'><BsTrash /></span>
                                    </div>
                                </div>
                            </div>
                            <div className='border p-2 my-2'>
                                <span className='text-sm font-semibold block'>1. Lorem, ipsum dolor.</span>
                                <div className='pl-3'>
                                    <span className='text-xs font-semibold block'>ID NO: 1</span>
                                    <div className='bg-red-200 px-3 py-1 inline-block rounded-sm my-1'>
                                        <span className='text-red-700 font-extrabold text-md cursor-pointer'><BsTrash /></span>
                                    </div>
                                </div>
                            </div>
                            <div className='border p-2 my-2'>
                                <span className='text-sm font-semibold block'>1. Lorem, ipsum dolor.</span>
                                <div className='pl-3'>
                                    <span className='text-xs font-semibold block'>ID NO: 1</span>
                                    <div className='bg-red-200 px-3 py-1 inline-block rounded-sm my-1'>
                                        <span className='text-red-700 font-extrabold text-md cursor-pointer'><BsTrash /></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                }
                {
                    SidebarStatus.watched &&

                    <div>
                        <span onClick={GoBackClicked} className='py-3 block px-2 cursor-pointer'><AiOutlineArrowLeft /></span>
                        <span className='font-semibold text-md text-center block pt-5'>My Watched List</span>
                        <div className='pt-4 px-2'>
                            <span className='text-sm font-semibold text-gray-600'>Watched</span>
                            <div className='border p-2 my-2'>
                                <span className='text-sm font-semibold block'>1. Lorem, ipsum dolor.</span>
                                <div className='pl-3'>
                                    <span className='text-xs font-semibold block'>ID NO: 1</span>
                                    <div className='bg-red-200 px-3 py-1 inline-block rounded-sm my-1 cursor-pointer'>
                                        <span className='text-red-700 font-extrabold text-md '><BsTrash /></span>
                                    </div>
                                </div>
                            </div>
                            <div className='border p-2 my-2'>
                                <span className='text-sm font-semibold block'>1. Lorem, ipsum dolor.</span>
                                <div className='pl-3'>
                                    <span className='text-xs font-semibold block'>ID NO: 1</span>
                                </div>
                            </div>
                            <div className='border p-2 my-2'>
                                <span className='text-sm font-semibold block'>1. Lorem, ipsum dolor.</span>
                                <div className='pl-3'>
                                    <span className='text-xs font-semibold block'>ID NO: 1</span>
                                    <div className='bg-red-200 px-3 py-1 inline-block rounded-sm my-1'>
                                        <span className='text-red-700 font-extrabold text-md cursor-pointer'><BsTrash /></span>
                                    </div>
                                </div>
                            </div>
                            <div className='border p-2 my-2'>
                                <span className='text-sm font-semibold block'>1. Lorem, ipsum dolor.</span>
                                <div className='pl-3'>
                                    <span className='text-xs font-semibold block'>ID NO: 1</span>
                                    <div className='bg-red-200 px-3 py-1 inline-block rounded-sm my-1'>
                                        <span className='text-red-700 font-extrabold text-md cursor-pointer'><BsTrash /></span>
                                    </div>
                                </div>
                            </div>
                            <div className='border p-2 my-2'>
                                <span className='text-sm font-semibold block'>1. Lorem, ipsum dolor.</span>
                                <div className='pl-3'>
                                    <span className='text-xs font-semibold block'>ID NO: 1</span>
                                    <div className='bg-red-200 px-3 py-1 inline-block rounded-sm my-1'>
                                        <span className='text-red-700 font-extrabold text-md cursor-pointer'><BsTrash /></span>
                                    </div>
                                </div>
                            </div>
                            <div className='border p-2 my-2'>
                                <span className='text-sm font-semibold block'>1. Lorem, ipsum dolor.</span>
                                <div className='pl-3'>
                                    <span className='text-xs font-semibold block'>ID NO: 1</span>
                                    <div className='bg-red-200 px-3 py-1 inline-block rounded-sm my-1'>
                                        <span className='text-red-700 font-extrabold text-md cursor-pointer'><BsTrash /></span>
                                    </div>
                                </div>
                            </div>
                            <div className='border p-2 my-2'>
                                <span className='text-sm font-semibold block'>1. Lorem, ipsum dolor.</span>
                                <div className='pl-3'>
                                    <span className='text-xs font-semibold block'>ID NO: 1</span>
                                    <div className='bg-red-200 px-3 py-1 inline-block rounded-sm my-1'>
                                        <span className='text-red-700 font-extrabold text-md cursor-pointer'><BsTrash /></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                }
                {
                    SidebarStatus.buttons &&
                    <div className='mt-5 p-2 border mx-2'>
                        <span className='font-semibold text-center block text-sm py-5'>Click to Open Items</span>
                        <button onClick={() => TriggersClicked(1)} className='bg-gray-100 w-full border py-2 my-2 rounded-sm hover:bg-gray-200 text-sm font-semibold'>My WatchList</button>
                        <button onClick={() => TriggersClicked(2)} className='bg-gray-100 w-full border py-2 my-2 rounded-sm hover:bg-gray-200 text-sm font-semibold'>My Bookmarks</button>
                        <button onClick={() => TriggersClicked(3)} className='bg-gray-100 w-full border py-2 my-2 rounded-sm hover:bg-gray-200 text-sm font-semibold'>Watched</button>
                    </div>
                }
            </div>
        </div>
    )
}

export default Sidebar