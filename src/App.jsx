import { Routes, Route } from 'react-router-dom'
import SearchBar from './Component/SearchBar'
import Activetab from './Component/Activetab'
import Result from './Component/Result'
import Saved from './Component/Saved'

const App = () => {
  return (
    <>
      <SearchBar />
      <Activetab />

      <Routes>
        <Route path="/" element={<Result />} />
        <Route path="/saved" element={<Saved />} />
      </Routes>
    </>
  )
}

export default App
