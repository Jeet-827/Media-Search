import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setError, setLoading, setResult } from '../redux/DataSlice'
import { fetchPhotos, fetchVideos, fetchGFI } from '../api'
import { saveItem } from '../utils/saveUtils'
import { FaRegBookmark } from "react-icons/fa";
import Alert from '@mui/material/Alert';
import { MdOutlineFileDownload } from "react-icons/md";

const Result = () => {
  const dispatch = useDispatch()
  const { query, activetab, loading, error, result } =
    useSelector(state => state.search)

    const [showAlert, setShowAlert] = useState(false)
  useEffect(() => {
    const fetchData = async () => {
      dispatch(setLoading())

      try {
        // 📷 PHOTOS
        if (activetab === 'photo') {
          const res = await fetchPhotos(query || 'pair')
          dispatch(setResult(
            res.photos.map(photo => ({
              id: photo.id,
              title: photo.photographer,
              src: photo.src.medium,
              type: 'photo'
            }))
          ))
        }

        // 🎥 VIDEOS
        if (activetab === 'video') {
          const res = await fetchVideos(query || 'animal')
          dispatch(setResult(
            res.videos.map(video => ({
              id: video.id,
              title: video.user.name,
              src: video.video_files.find(v => v.quality === 'sd')?.link,
              type: 'video'
            }))
          ))
        }


      } catch (err) {
        console.error(err)
        dispatch(setError())
      }
    }

    fetchData()
  }, [activetab, query, dispatch])

  /* -------------------- UI STATES -------------------- */
  if (loading)
    return <p className="text-center mt-10 text-lg">Loading...</p>

  if (error)
    return <p className="text-center mt-10 text-red-500">Something went wrong</p>
    const handleSave = item => {
    saveItem(item)
    setShowAlert(true)

    setTimeout(() => setShowAlert(false), 2000)
  }

  /* -------------------- MAIN UI -------------------- */
  return (

    <>
    
      <div className="fixed top-5 right-5 z-50 w-[320px]">
        {showAlert && (
          <Alert
            severity="success"
            onClose={() => setShowAlert(false)}
            className="shadow-lg rounded-lg"
          >
            Saved successfully!
          </Alert>
        )}
      </div>
      
    <div className="p-6">
      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
        {result.map(item => (
          <div
            key={item.id}
            className="bg-white rounded-xl shadow hover:shadow-lg transition p-4"
          >
            {/* MEDIA */}
            {item.type === 'video' ? (
              <video
                src={item.src}
                controls
                className="rounded-lg w-full h-56 object-cover"
              />
            ) : (
              <img
                src={item.src}
                alt={item.title}
                className="w-full h-120 rounded-lg object-cover"
              />

            )}

            {/* TITLE */}
            <h4 className="mt-3 font-semibold text-gray-800 truncate">
              {item.title}
            </h4>
            <div className="flex ">
               <button
              onClick={() => handleSave(item)}
              className="p-3 cursor-pointer text-[20px]"
            >
              <FaRegBookmark />

            </button>  <a
                  href={item.src}
                  target="_blank"
                  rel="noopener noreferrer"
                className="p-3 text-2xl cursor-pointer"
                >
                 <MdOutlineFileDownload />

                </a>
            </div>
 

          </div>
        ))}
      </div>
    </div>
    
    </>
  )
}

export default Result
