import './App.css'
import MainPage from './components/MainPage'
import { Routes, Route, Navigate } from 'react-router-dom'
// import PokemonPage from './pages/PokemonPage'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<MainPage />} />

        <Route path='*' element={<Navigate to='/' />} />
      </Routes>
    </>
  )
}

export default App
