import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { LogIn } from 'lucide-react'
import {Link} from 'react-router-dom'
import axiosInstance from '../instant/axios'
import { FaUser } from 'react-icons/fa'
import Magnetic from './Magnetic'

const Header = () => {
  const [showHeader, setShowHeader] = useState(true)
  const [isTop, setIsTop] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  const [menuOpen, setMenuOpen] = useState(false)
  const [isLoggedIn, setIsLoggedIn] = useState(false);
 const isAtTop = isTop;


  // Check login status from cookie session
  useEffect(() => {
    axiosInstance
      .get('/user/validate', { withCredentials: true })
      .then((res) => {
        if (res.data.isLoggedIn) {
          setIsLoggedIn(true);
        } else {
          setIsLoggedIn(false);
        }
      })
      .catch((err) => {
        setIsLoggedIn(false)
      });
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY

      setIsTop(currentScrollY <= 10)

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setShowHeader(false)
      } else {
        setShowHeader(true)
      }

      setLastScrollY(currentScrollY)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY])

  const toggleMenu = () => setMenuOpen(!menuOpen)

  const linkClasses = ({ isActive }) =>
    `relative text-lg transition-all duration-300
     ${isActive ? 'text-black font-semibold' : 'text-[#124E66]'}
     `

  return (
    <div
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500
      ${showHeader ? 'translate-y-0' : '-translate-y-full'}
      ${isTop ? 'bg-transparent' : 'bg-white shadow-md'}`}
    >
      <div className='h-[12vh] flex justify-between items-center px-6 md:px-12 py-2'>
        {/* Mobile Menu Icon */}
        <div className='md:hidden'>
          <button onClick={toggleMenu}>
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Logo */}
          <h1 className='text-2xl font-bold font-serif text-[#124E66]'>AVN <span className='text-zinc-500 font-light'>agency</span></h1>
      

        {/* Desktop Nav */}
        <nav className='hidden md:flex gap-10 rounded-full bg-white/70 px-12 py-3'>
          <NavLink to="/" className={linkClasses}>Launch</NavLink>
          <NavLink to="/about" className={linkClasses}>Insights</NavLink>
          <NavLink to="/services" className={linkClasses}>Projects</NavLink>
          <NavLink to="/contact" className={linkClasses}>Network</NavLink>
        </nav>

        <Magnetic strength={1}>
           {/* Login / Profile (Desktop) */}
        <div className="hidden md:block">
          <div className="flex justify-center items-center rounded-full">
            {isLoggedIn ? (
              <Link to="/profile">
                <div className='px-3.5 flex justify-center items-center gap-2 py-2 border-1 border-white rounded-full hover:bg-white hover:text-black transition duration-300'>
                <FaUser className=" border-white" />
                <p>Profile</p>
                </div>
              </Link>
            ) : (
              <Link
                to="/login"
                className={`relative overflow-hidden px-6 py-1.5 rounded-full transition duration-300
                ${isAtTop ? 'bg-transparent text-white border border-white hover:bg-white hover:text-black' : 'bg-white text-black border border-white hover:bg-transparent hover:text-white'}`}
              >
                <span className="relative z-10 text-lg">Login</span>
              </Link>
            )}
          </div>
        </div>

        </Magnetic>
      </div>


{/* <button className="text-[#124E66] text-lg hidden md:flex items-center gap-2 px-3 py-1 border-1 rounded-full transition-all duration-300 hover:text-black cursor-pointer hover:shadow-md">
            <LogIn size={20} />
            Login
          </button> */}

        



      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className='md:hidden flex flex-col items-start gap-4  bg-white px-6 py-4 shadow-md'>
          <NavLink to="/" onClick={() => setMenuOpen(false)} className={linkClasses}>Home</NavLink>
          <NavLink to="/about" onClick={() => setMenuOpen(false)} className={linkClasses}>About</NavLink>
          <NavLink to="/services" onClick={() => setMenuOpen(false)} className={linkClasses}>Services</NavLink>
          <NavLink to="/contact" onClick={() => setMenuOpen(false)} className={linkClasses}>Contact</NavLink>
          <button onClick={() => setMenuOpen(false)} className="hover:text-orange-600 text-lg">Login</button>
        </div>
      )}
    </div>
  )
}

export default Header
