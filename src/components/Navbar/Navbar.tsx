import { BiCameraMovie } from 'react-icons/bi';
import { BsEye, BsArrowRightShort } from 'react-icons/bs';
import { MdDarkMode } from 'react-icons/md';
import { useSelector, useDispatch } from 'react-redux';
import { showsidebar } from '../../redux/Sidebar_reducer/Sidebar_Actions';
import Sidebar from '../Sidebar/Sidebar';
import './Navbar.css';
import { RootState } from '../../redux/Store';

const Navbar = ({ SetDarkMode }: { SetDarkMode: React.Dispatch<React.SetStateAction<string | null>> }) => {
  const sidebarState = useSelector((state:RootState) => state.SidebarReducer);
  const dispatch = useDispatch();

  const ShowSideBar = () => {
    dispatch(showsidebar());
  }
  const mode = localStorage.getItem('moviemanagerDarkMode');
  const DarkModeSwitchClicked = () => {
    if (mode === 'dark') {
      SetDarkMode('light');
      localStorage.setItem('moviemanagerDarkMode', 'light');
    } else {
      SetDarkMode('dark');
      localStorage.setItem('moviemanagerDarkMode', 'dark');
    }
  };


  return (
    <>
      <div className='shadow-md px-10 py-2 flex justify-between items-center bg-white dark:bg-gray-800'>
        <div>
          <span className='font-bold text-2xl text-gray-800 dark:text-gray-200 font-mono flex items-center'><span className='pr-3'><BiCameraMovie /></span><span className='hidden md:block'> Movie Manager</span></span>
        </div>
        <div className='flex'>
          <button className={`px-5 text-2xl cursor-pointer ${mode === 'dark' ? 'text-gray-100' : 'text-gray-900'}`} onClick={DarkModeSwitchClicked}>
            <MdDarkMode />
          </button>

          <span onClick={ShowSideBar} className="font-semibold cursor-pointer flex items-center dark:text-gray-200"><span className='pr-3 text-2xl'><BsEye /></span><span className='hidden md:block'> My Watch List </span> <BsArrowRightShort /></span>
        </div>
      </div>
      {
        sidebarState.sidebar && <Sidebar />
      }
    </>
  )
}

export default Navbar;