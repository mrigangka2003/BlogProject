import {useDispatch} from 'react-redux'
import authService from '../../appwrite/config'
import {logout} from '../../store/authSlice'

const LogoutBtn = () => {

  const dispatch = useDispatch() ;
  const logoutHandler = ()=>{
    authService.logout()
    .then(()=>{
      dispatch(logout) 
    })
    .catch((error)=>{
      console.log("logout failed :: error from :: LOGOUTBTN.JSX :: 12",error)
    })
  }

  return (
    <button className='inline-bock px-6 py-2 duration-200 hover:bg-blue-100 rounded-full'
    onClick={logoutHandler}>Logout</button>
  )
}

export default LogoutBtn