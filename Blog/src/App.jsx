import { useEffect, useState } from 'react'
import {useDispatch} from 'react-redux'
import './App.css'
import authService from './appwrite/auth'
import { login,logout } from './store/authSlice'

export default function App() {
  const [loading,setLoading] = useState(true) ;
  const dispatch = useDispatch() ;
  
  useEffect(()=>{
    authService.getCurrentUser
    .then((userData)=>{
      if(userData){
        login()
      }else{
        logout()
      }
    })
    .finally()
  },[])

  return (
    <h1 className="text-3xl font-bold">
      Hello world!
    </h1>
  )
}