
import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import { Routes, Route } from 'react-router-dom'
import Landing from './pages/landing'
import Login from './pages/Login'
import Register from './pages/Register'
import Dashboard from './pages/Dashboard'
function App() {
  

  return (
    <>
   <Header/>
   <Routes>
    {/* http://localhost:5173/ */}
      <Route path='/' element={<Landing/>}/>

    {/* http://localhost:5173/login */}
      <Route path='/login' element={<Login/>}/>
  
    { /* http://localhost:5173/register */}
      <Route path='/register' element={<Register/>}/>
    
    { /* http://localhost:5173/dashboard */}
      <Route path='/dashboard' element={<Dashboard/>}/>
    
   </Routes>
   <Footer/>

    </>
  )
}

export default App
