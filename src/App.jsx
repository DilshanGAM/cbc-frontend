import { useState } from 'react'
import './App.css'
import ProductCard from './components/productCard'
import UserData from './components/UserData'
import LoginPage from './pages/loginPage'
import HomePage from './pages/homePage'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AdminHomePage from './pages/adminHomePage'
import { Toaster } from 'react-hot-toast'



function App() {
  const [count, setCount] = useState(0)



  return (
    <div className=''>
     <BrowserRouter>
      <Toaster position='top-right'/>
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
