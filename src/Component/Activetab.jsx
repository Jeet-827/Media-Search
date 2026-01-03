import React from 'react'
import { setActivetab } from '../redux/DataSlice'
import { useSelector, useDispatch } from 'react-redux'

const Activetab = () => {
  const activetab = useSelector((state) => state.search.activetab)
  const dispatch = useDispatch()

  const Tabs = ['photo', 'video']

  return (
    <div>
      {Tabs.map((elem) => (
        <button
          key={elem}
          onClick={() => dispatch(setActivetab(elem))}
          className={`${
            activetab === elem
              ? 'bg-blue-600 text-blue-50'
              : 'bg-blue-900 text-white'
          } mt-10 ml-3 mr-3 px-7 py-2`}
        >
          {elem.toUpperCase()}
        </button>
      ))}
    </div>
  )
}

export default Activetab
