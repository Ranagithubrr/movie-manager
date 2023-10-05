import { BiCameraMovie } from 'react-icons/bi';
import { BsEye, BsArrowRightShort } from 'react-icons/bs';
import { useSelector, useDispatch } from 'react-redux';
import { showsidebar } from '../../redux/Sidebar_reducer/Sidebar_Actions';
import Sidebar from '../Sidebar/Sidebar';

const Navbar = () => {
  const sidebarState = useSelector((state) => state.SidebarReducer);
  console.log('state is', sidebarState);
  const dispatch = useDispatch();

  const ShowSideBar = () => {
    dispatch(showsidebar());
  }

  return (
    <>
      <div className='shadow-md px-10 py-2 flex justify-between items-center'>
        <div>
          <span className='font-bold text-2xl text-gray-800 font-mono flex items-center'><span className='pr-3'><BiCameraMovie /></span> Movie Manager</span>
        </div>
        <div>
          <span onClick={ShowSideBar} className="font-semibold cursor-pointer flex items-center"><span className='pr-3 text-2xl'><BsEye /></span> My Watch List <BsArrowRightShort /></span>
        </div>
      </div>
      {
        sidebarState.sidebar && <Sidebar />
      }
    </>
  )
}

export default Navbar;