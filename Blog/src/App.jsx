import { useState,useEffect } from 'react'
import './App.css'
import {useDispatch} from 'react-redux'
import {login, logout} from "./store/authSlice"
import authService from './appwrite/auth'
import { Header } from './components/index'
// import {Outlet} from 'react-router-dom' 

function App() {

  const [loading ,setLoading] = useState(true) ;
  const dispatch = useDispatch() ;

  useEffect(() => {
    authService.getCurrentUser()
    .then((userData) => {
      if (userData) {
        dispatch(login({userData}))
      } else {
        dispatch(logout())
      }
    })
    .finally(() => setLoading(false)) ;
  }, [])

  return !loading ? (
    <div className= 'min-h-[100dvh] flex flex-col justify-between bg-slate-950 text-white'>
      <Header/>
      <main>
      {/* <Outlet/> */}
      sexy
      </main>
      {/* <Footer/> */}
    </div>
  ) :(
    <div>
      <h1>Dara re ,load hoitase chdr bal</h1>
    </div>
  )

}

export default App
