import {BiCameraMovie} from 'react-icons/bi';
import {BsEye, BsArrowRightShort} from 'react-icons/bs';

const Navbar = () => {
  return (
    <div className='shadow-md px-10 py-2 flex justify-between items-center'>
        <div>
            <span className='font-bold text-2xl text-gray-800 font-mono flex items-center'><span className='pr-3'><BiCameraMovie /></span> Movie Manager</span>
        </div>
        <div>
            <span className="font-semibold cursor-pointer flex items-center"><span className='pr-3 text-2xl'><BsEye /></span> My Watch List <BsArrowRightShort /></span>
        </div>
    </div>
  )
}

export default Navbar;