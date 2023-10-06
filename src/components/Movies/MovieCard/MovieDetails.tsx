import {FaTimes} from 'react-icons/fa';

const MovieDetails = ({setShowMovieDetails} : {setShowMovieDetails: React.Dispatch<React.SetStateAction<boolean>>}) => {


    const CloseClicked = () =>{
        setShowMovieDetails(false);
    }


    return (
        <div className='fixed w-5/6 m-auto top-10 left-0 right-0 h-5/6 overflow-scroll bg-white z-20 p-5'>
            <span className='cursor-pointer float-right' onClick={CloseClicked}><FaTimes /></span>
            <span className='text-xl font-bold block text-center'>A Rickle in Time</span>
            <img className='m-auto py-4 h-auto rounded' src="https://assets.mycast.io/posters/world-war-hulk-2023-miniseries-fan-casting-poster-219057-medium.jpg?1658634732" alt="" />
            <span className='text-sm font-semibold block text-center py-4'>Description</span>
            <div className='flex w-1/3 m-auto border p-2'>
                <div className='w-1/2 m-auto'>
                    <span className='block text-sm font-semibold'>ID </span>
                    <span className='block text-sm font-semibold'>Name </span>
                    <span className='block text-sm font-semibold'>Created </span>
                    <span className='block text-sm font-semibold'>Episode</span>
                </div>
                <div className='w-1/2 m-auto'>
                    <span className='block text-sm font-semibold'>: dfsfdf</span>
                    <span className='block text-sm font-semibold'>: Nadfsfdf</span>
                    <span className='block text-sm font-semibold'>: Creatdfsfdf</span>
                    <span className='block text-sm font-semibold'>: Episodfsfdf</span>
                </div>
            </div>
            <div className='w-1/2 m-auto text-center py-4'>
                <button className='border px-4 py-2 mx-2 bg-teal-600 text-gray-100 text-sm font-semibold rounded-md'>Add to Watch List</button>
                <button className='border px-4 py-2 mx-2 bg-teal-600 text-gray-100 text-sm font-semibold rounded-md'>Add to Bookmark</button>

            </div>
        </div>
    )
}

export default MovieDetails