import { useEffect, useState } from 'react'
import {useDispatch} from 'react-redux'
import './App.css'
import authService from './appwrite/auth'
import { login,logout } from './store/authSlice'

export default function App() {
  const [loading,setLoading] = useState(true) ;
  const dispatch = useDispatch() ;
  
  useEffect(()=>{
    authService.getCurrentUser()
    .then((userData)=>{
      if(userData){
        dispatch(login({userData}))
      }else{
        dispatch(logout())
      }
    })
    .finally(()=>setLoading(false)) 
  },[])
  
  return !loading ?(
    <div className='min-h-screen flex flex-wrap content-between bg-gray-500 '>
      <div className='w-full block'>
        test
        <main>
          {/* <Outlet/> */}
        </main>
      </div>
    </div>
  ) : (null)
}