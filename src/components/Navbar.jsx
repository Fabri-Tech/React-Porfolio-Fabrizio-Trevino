// Import necessary packages and components
import { useState } from 'react'
import { FaBars, FaTimes, FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import Logo from '../assets/logo.png';
import { Link } from 'react-scroll';

// Define Navbar component
const Navbar = () => {
  // State for managing mobile menu open/close status
  const [nav, setNav] = useState(false);

  // Function to toggle mobile menu
  const handleClick = () => setNav(!nav);

  // Define common link component for reusability
  const NavLink = ({ to, children }) => (
    <li>
      <Link onClick={handleClick} to={to} smooth={true} duration={500}>
        {children}
      </Link>
    </li>
  );

  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#000000] text-gray-300'>
      <div>
        <img src={Logo} alt='Logo Image' style={{ width: '200px' }} />
      </div>

      {/* Desktop Menu */}
      <ul className='hidden md:flex'>
        <NavLink to='home'>Home</NavLink>
        <NavLink to='about'>About</NavLink>
        <NavLink to='skills'>Skills</NavLink>
        <NavLink to='work'>Work</NavLink>
        <NavLink to='contact'>Contact</NavLink>
      </ul>

      {/* Mobile menu toggle button */}
      <div onClick={handleClick} className='md:hidden z-10'>
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* Mobile menu */}
      <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#000000] flex flex-col justify-center items-center'}>
        <NavLink to='home'>Home</NavLink>
        <NavLink to='about'>About</NavLink>
        <NavLink to='skills'>Skills</NavLink>
        <NavLink to='work'>Work</NavLink>
        <NavLink to='contact'>Contact</NavLink>
      </ul>

      {/* Social icons */}
      <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
        <ul>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
            <a className='flex justify-between items-center w-full text-gray-300' href='https://www.linkedin.com/in/fabrizio-trevi%C3%B1o/'>
              Linkedin <FaLinkedin size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'>
            <a className='flex justify-between items-center w-full text-gray-300' href='https://github.com/Fabri-Tech'>
              Github <FaGithub size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]'>
            <a className='flex justify-between items-center w-full text-gray-300' href='mailto:fabriziotrevino@gmail.com'>
              Email <HiOutlineMail size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]'>
            <a className='flex justify-between items-center w-full text-gray-300' href='https://docs.google.com/document/d/15RaxBEPKH8EpMISYcWoQTrOgUGkfA4r0UntxePxAxzE/edit?usp=sharing'>
              Resume <BsFillPersonLinesFill size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

// Export Navbar component
export default Navbar;
