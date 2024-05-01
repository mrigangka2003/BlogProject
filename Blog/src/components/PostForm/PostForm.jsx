import {useCallback} from React
import {useForm} from 'react-hook-form'
import {Button, Input,Select ,RTE} from '../index' ;
import appwriteService from '../../appwrite/config'
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

export const PostForm = ({post}) => {

  const {register,handleSubmit,watch,setValue,control, getValues} = useForm({
    defaultValues:{
      title:post ?.title || '',
      slug:post?.slug || '' ,
      content:post?.content || '' ,
      status : post?.slatus || 'active'
    }
  })

  const navigate = useNavigate() ;
  const userData = useSelector(state =>state.userData) ;

  
  return (
    <div>PostForm</div>
  )
}
