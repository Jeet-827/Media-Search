import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { setQuery } from '../redux/DataSlice'
import { Link } from 'react-router-dom'
import { HiMenu, HiX } from 'react-icons/hi'

const SearchBar = () => {
  const [search, setSearch] = useState('')
  const [menu, setMenu] = useState(false)

  const dispatch = useDispatch()

  const formHandle = (e) => {
    e.preventDefault()
    if (!search.trim()) return
    dispatch(setQuery(search))
    setSearch('')
    setMenu(false)
  }

  return (
    <>
      <form
        onSubmit={formHandle}
        className="w-full bg-blue-600 min-h-[72px] flex items-center px-4 md:px-10"
      >
        {/* LEFT: LOGO / LINKS */}
        <div className="flex items-center justify-between w-full md:w-auto">
          <div className="flex items-center gap-4">
            <Link to="/" className="text-white font-semibold">
              Home
            </Link>
            <Link to="/saved" className="text-white font-semibold hidden md:block">
              Saved
            </Link>
          </div>

          {/* MOBILE MENU BUTTON */}
          <button
            type="button"
            className="md:hidden text-white text-2xl"
            onClick={() => setMenu(!menu)}
          >
            {menu ? <HiX /> : <HiMenu />}
          </button>
        </div>

        {/* RIGHT: SEARCH */}
        <div className="hidden md:flex ml-auto">
          <input
            type="search"
            placeholder="Search here..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="bg-blue-800 text-white px-3 py-2 rounded-l-md outline-none"
          />
          <button className="bg-blue-900 text-white px-4 py-2 rounded-r-md cursor-pointer">
            Search
          </button>
        </div>
      </form>

      {/* MOBILE DROPDOWN */}
      {menu && (
        <div className="md:hidden bg-blue-700 px-4 py-4 space-y-4">
          <Link
            to="/saved"
            className="block text-white font-semibold"
            onClick={() => setMenu(false)}
          >
            Saved
          </Link>

          <form onSubmit={formHandle} className="flex">
            <input
              type="search"
              placeholder="Search here..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="flex-1 bg-blue-800 text-white px-3 py-2 rounded-l-md outline-none"
            />
            <button className="bg-blue-900 text-white px-4 py-2 rounded-r-md cursor-pointer ">
              Search
            </button>
          </form>
        </div>
      )}
    </>
  )
}

export default SearchBar
