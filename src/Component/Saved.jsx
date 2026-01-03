import React, { useEffect, useState } from 'react'
import { getSavedItems, removeItem } from '../utils/saveUtils'
import { FaDeleteLeft } from "react-icons/fa6";

const Saved = () => {
  const [savedItems, setSavedItems] = useState([])

  useEffect(() => {
    setSavedItems(getSavedItems())
  }, [])

  const handleRemove = (id) => {
    removeItem(id)
    setSavedItems(getSavedItems())
  }

  if (!savedItems.length) {
    return (
      <div className="flex justify-center items-center h-[60vh]">
        <p className="text-gray-500 text-lg">No saved items yet 💔</p>
      </div>
    )
  }

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6 text-center">Saved Items ❤️</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {savedItems.map(item => (
          <div
            key={item.id}
            className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition"
          >
            {/* MEDIA */}
            {item.type === 'video' ? (
              <video
                src={item.src}
                controls
                className="w-full h-56 object-cover"
              />
            ) : (
              <img
                src={item.src}
                alt={item.title}
                className="w-full h-80 object-cover"
              />
            )}

            {/* CONTENT */}
            <div className="p-4 flex justify-between">
              <h4 className="font-semibold text-gray-800 truncate text-2xl">
                {item.title}
              </h4>

              <button
                onClick={() => handleRemove(item.id)}
                className="text-2xl cursor-pointer"
              >
              <FaDeleteLeft />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Saved
