import { useState } from 'react'
import './App.css'
import ProductCard from './components/productCard'
import UserData from './components/UserData'
import Testing from './components/testing'
import LoginPage from './pages/loginPage'
import HomePage from './pages/homePage'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AdminHomePage from './pages/adminHomePage'



function App() {
  const [count, setCount] = useState(0)



  return (
    <div className=''>
     <BrowserRouter>
      <Routes path="/*">          
        <Route path="/*" element={<HomePage/>}/>   
        <Route path="/login" element={<LoginPage/>}/>

        <Route path='/signup' element={<UserData/>}/>

        <Route path="/admin/*" element={<AdminHomePage/>}/>
        
      </Routes>

     </BrowserRouter>
    </div>
  )
}

export default App
