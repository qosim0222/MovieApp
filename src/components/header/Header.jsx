import React from 'react'
import { NavLink } from 'react-router-dom'
import { IoHomeOutline, IoBookmarkOutline, IoSearchOutline } from "react-icons/io5";
import { MdOutlineMovie } from "react-icons/md";
import "./style.css"
import header_logo from "../../assets/movie_logo.svg"

const Header = () => {
  return (
    <header className="py-4 bg-black text-white flex justify-around">
      <div><img src={header_logo} alt="" /></div>

      <ul className="flex gap-6">
        <li>
          <NavLink className="flex flex-col items-center header-link" to="/">
            <IoHomeOutline className="text-2xl" />
            <span>Home</span>
          </NavLink>
        </li>
        <li>
          <NavLink className="flex flex-col items-center header-link" to="/movies">
            <MdOutlineMovie className="text-2xl" />
            <span>Movies</span>
          </NavLink>
        </li>
        <li>
          <NavLink className="flex flex-col items-center header-link" to="/saved">
            <IoBookmarkOutline className="text-2xl" />
            <span>Saved</span>
          </NavLink>
        </li>
        <li>
          <NavLink className="flex flex-col items-center header-link" to="/search">
            <IoSearchOutline className="text-2xl" />
            <span>Search</span>
          </NavLink>
        </li>
      </ul>

      <div className='flex items-center gap-4'>
        <select className='bg-black text-white outline-none cursor-pointer '>
          <option >O'z</option>
          <option >Rus</option>
        </select>
        <button className="bg-red-600 px-4 py-1 rounded text-sm h-12 w-28 cursor-pointer">Войти</button>
      </div>
    </header>

  )
}

export default Header

