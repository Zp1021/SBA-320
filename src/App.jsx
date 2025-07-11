import './App.css'
import MainPage from './components/MainPage'
import { Routes, Route, Navigate } from 'react-router-dom'
import CharacterPage from './pages/CharacterPage'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/character/:id' element={<CharacterPage/>}/>
        <Route path='*' element={<Navigate to='/' />} />
      </Routes>
    </>
  )
}

export default App
